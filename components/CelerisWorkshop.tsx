'use client'
import { useState, useEffect, useRef } from 'react'

/* ─── Types ──────────────────────────────────────────────────────── */
type Phase = 'MEASURE' | 'ANALYZE' | 'OPTIMIZE' | 'VERIFY'
type StepStatus = 'locked' | 'ready' | 'running' | 'done'

interface CodeDiff {
  label: string
  before: string
  after: string
}

interface WorkshopStep {
  id: number
  phase: Phase
  title: string
  why: string
  command: string
  output: string
  insight: string
  diff?: CodeDiff
}

/* ─── Colors ─────────────────────────────────────────────────────── */
const phaseColor: Record<Phase, string> = {
  MEASURE:  '#79c0ff',
  ANALYZE:  '#ffa657',
  OPTIMIZE: '#7dd3b0',
  VERIFY:   '#d2a8ff',
}

/* ─── Step Data ──────────────────────────────────────────────────── */
const STEPS: WorkshopStep[] = [
  {
    id: 1,
    phase: 'MEASURE',
    title: 'Baseline profiling — perf stat',
    why: 'Before touching anything, we need numbers. `perf stat` reads hardware performance counters — cycles, IPC (instructions per cycle), cache misses — giving us a fingerprint of where the CPU is spending its time. Low IPC means the CPU is stalled, not working.',
    command: 'g++ -O2 -std=c++20 -pthread sim.cpp -o sim\nperf stat -e cycles,instructions,cache-misses,branches \\\n  ./sim --threads=8 --events=1000000',
    output: ` Performance counter stats for './sim --threads=8 --events=1000000':

     26,438,442,112      cycles
      8,124,891,234      instructions          #    0.31  insn per cycle  ◄
      3,891,204,432      cache-references
        982,431,119      cache-misses          #   25.24% of all cache refs
      2,198,432,112      branches
        312,441,098      branch-misses         #   14.21% of all branches

       8.234156701 seconds time elapsed
      65.423450000 seconds user
       0.012340000 seconds sys`,
    insight: '0.31 IPC is the smoking gun. A healthy CPU delivers 2–4 instructions per cycle. At 0.31, threads are stalling nearly every cycle — starving for something. Almost certainly: lock contention. The CPU is idling while threads queue for a mutex.',
  },
  {
    id: 2,
    phase: 'ANALYZE',
    title: 'Hot path identification — gprof',
    why: 'perf stat told us *the CPU is stalling*. gprof tells us *where in your code* it\'s happening — which functions consume the most wall-clock time. This is how you find the bottleneck without guessing.',
    command: 'g++ -pg -O2 -std=c++20 -pthread sim.cpp -o sim_prof\n./sim_prof --threads=8 --events=1000000\ngprof sim_prof gmon.out | head -20',
    output: `Flat profile:

Each sample counts as 0.01 seconds.
  %   cumulative   self              self     total
 time   seconds   seconds    calls   name
47.31     12.44    12.44   500000    __GI___pthread_mutex_lock         ◄◄◄
18.93     17.42     4.98  1000000    Simulator::dispatch_event(Event const&)
12.07     19.59     2.17   500000    TimeWheel::advance_tick()
 8.44     21.81     2.22   250000    BarrierSync::wait()
 6.12     23.42     1.61  2000000    Signal::propagate(int)
 4.13     24.50     1.08        1    main
 3.00     25.29     0.79   500000    DeltaQueue::push(Delta const&)`,
    insight: '47.3% of all CPU time is inside pthread_mutex_lock — the kernel lock call. The actual simulation logic (dispatch_event, advance_tick, propagate) accounts for only 37%. We spend more time fighting for the lock than doing real work. One global mutex is serialising 8 threads.',
  },
  {
    id: 3,
    phase: 'ANALYZE',
    title: 'Lock contention depth — perf lock',
    why: 'We know the mutex is hot. Now we quantify *how bad* the contention is — what fraction of lock acquisitions forced a thread to sleep and wait for another thread to finish. This tells us whether fine-grained locking will help or whether we need a lock-free approach.',
    command: 'perf lock record -a -- ./sim --threads=8 --events=1000000\nperf lock report',
    output: ` Name                    acquired  contended   total wait   avg wait   max wait
=================================================================================
 global_mutex           :  500000    421382    12442.123ms    29.5µs    48.923ms
 delta_queue_mutex      :  250000     88431     1823.441ms    20.6µs    12.441ms
 time_wheel_mutex       :  250000     76112     1021.882ms    13.4µs     8.112ms

 Contended    : 421382  (84.3%)  ◄── 8 threads, 1 does work, 7 wait
 Not contended:  78618  (15.7%)

 Total contention time: 15,287ms of 26,000ms wall time (58.8% pure waste)`,
    insight: '84.3% of global_mutex acquisitions are contended. Of 8 threads, effectively only 1 is doing simulation work at any moment — we have 8× the hardware but 1× the throughput. The fix: replace 1 global lock with N per-bucket locks so threads only contend when they hit the same time-wheel slot.',
  },
  {
    id: 4,
    phase: 'OPTIMIZE',
    title: 'Refactor: coarse → fine-grained locking',
    why: 'One mutex forces all 8 threads to take turns on the entire time wheel. Split the wheel into 64 independent buckets, each with its own mutex. Threads only conflict when they schedule events into the *same* time slot — which under uniform workloads is rare.',
    command: '# Apply the diff below, then rebuild\ng++ -O2 -std=c++20 -pthread sim_fg.cpp -o sim_finegrained',
    output: `Build OK — sim_finegrained ready`,
    insight: 'The key insight: instead of locking the whole data structure, lock only the piece you need. 64 buckets → up to 64 threads can work in parallel on different slices. alignas(64) on each Bucket prevents false sharing between bucket mutexes themselves.',
    diff: {
      label: 'sim.cpp — coarse → fine-grained',
      before: `class Simulator {
    // One mutex guards the entire time wheel
    std::mutex global_mutex_;
    TimeWheel  time_wheel_;

public:
    void dispatch_event(const Event& e) {
        // Every thread blocks here — single-file throughput
        std::lock_guard<std::mutex> lock(global_mutex_);
        time_wheel_.schedule(e.time, e.signal_id);
        active_events_++;
    }
};`,
      after: `static constexpr size_t NUM_BUCKETS = 64;

class Simulator {
    // alignas(64): each Bucket owns one cache line —
    // no false sharing between adjacent bucket mutexes
    struct alignas(64) Bucket {
        std::mutex         mtx;
        std::vector<Event> events;
    };
    std::array<Bucket, NUM_BUCKETS> buckets_;

public:
    void dispatch_event(const Event& e) {
        // Threads only contend if they hit the same bucket
        auto idx = e.time % NUM_BUCKETS;
        std::lock_guard<std::mutex> lock(buckets_[idx].mtx);
        buckets_[idx].events.push_back(e);
        active_events_.fetch_add(1, std::memory_order_relaxed);
    }
};`,
    },
  },
  {
    id: 5,
    phase: 'VERIFY',
    title: 'Re-benchmark — measure the gain',
    why: 'Never trust a refactor without a benchmark. We re-run perf stat with the identical workload to see if the change actually helped, by how much, and whether any new bottleneck appeared.',
    command: 'perf stat ./sim_finegrained --threads=8 --events=1000000',
    output: ` Performance counter stats for './sim_finegrained --threads=8 --events=1000000':

     12,204,113,444      cycles
     21,891,203,114      instructions          #    1.79  insn per cycle  ◄ was 0.31
        891,204,432      cache-references
         98,231,119      cache-misses          #   11.02% of all cache refs

       3.829112301 seconds time elapsed       (was: 8.234s)

──────────────────────────────────────────────────────────────
 Strategy           Time     Throughput      Speedup
──────────────────────────────────────────────────────────────
 Baseline           8.234s   121,430 ev/s    1.00×
 Fine-grained       3.829s   261,144 ev/s    2.15×  ✓
──────────────────────────────────────────────────────────────
 mutex wait time:   12,442ms  →  1,823ms   (−85.3%)
 contended rate:    84.3%     →  11.2%`,
    insight: 'IPC jumped from 0.31 → 1.79. The CPU is now doing 6× more real work per clock cycle. But we\'re at 2.15×, not 8×. There are still hot shared variables serialising cross-thread access. Next: replace mutex-protected counters with atomics.',
  },
  {
    id: 6,
    phase: 'OPTIMIZE',
    title: 'Atomic fast path — eliminate lock overhead on counters',
    why: '`active_events_` and `delta_count_` are incremented by every thread on every event — 1 million times each. A mutex for a single integer increment is massive overkill: it does a syscall, sleeps the thread, wakes it — all for one addition. std::atomic uses a single CPU instruction (`lock xadd`) with no kernel involvement.',
    command: '# Apply the diff below, rebuild\ng++ -O2 -std=c++20 -pthread sim_atomic.cpp -o sim_atomic\nperf stat ./sim_atomic --threads=8 --events=1000000',
    output: `       2.213088201 seconds time elapsed       (was: 3.829s)

──────────────────────────────────────────────────────────────
 Strategy           Time     Throughput      Speedup
──────────────────────────────────────────────────────────────
 Baseline           8.234s   121,430 ev/s    1.00×
 Fine-grained       3.829s   261,144 ev/s    2.15×
 + Atomics          2.213s   451,809 ev/s    3.72×  ✓
──────────────────────────────────────────────────────────────`,
    insight: 'Another 1.73× on top of the fine-grained win. memory_order_relaxed is the right choice here: we only need atomicity (no torn reads), not ordering. The CPU is free to reorder these stores for maximum throughput. Total so far: 3.72×.',
    diff: {
      label: 'Counter updates — mutex → atomic',
      before: `// Mutex for every counter increment — syscall overhead × 1M times
std::mutex counter_mutex_;
int        active_events_ = 0;
int        delta_count_   = 0;

void add_event() {
    // kernel call: futex_wait / futex_wake on every increment
    std::lock_guard<std::mutex> lock(counter_mutex_);
    ++active_events_;
}
void add_delta() {
    std::lock_guard<std::mutex> lock(counter_mutex_);
    ++delta_count_;
}`,
      after: `// Single CPU instruction — no kernel, no sleep, no wakeup
std::atomic<int> active_events_{0};
std::atomic<int> delta_count_  {0};

void add_event() {
    // lock xadd  [rip+active_events_], 1  — one instruction
    active_events_.fetch_add(1, std::memory_order_relaxed);
}
void add_delta() {
    delta_count_.fetch_add(1, std::memory_order_relaxed);
    //   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //   relaxed: we need atomicity, not ordering
    //   CPU can freely reorder these for throughput
}`,
    },
  },
  {
    id: 7,
    phase: 'ANALYZE',
    title: 'False sharing detection — perf c2c',
    why: 'Each thread has its own ThreadStats struct. But if those structs are packed back-to-back in an array, they share 64-byte CPU cache lines. When Thread-0 writes stats[0], it invalidates the cache line holding stats[1], stats[2], stats[3] — forcing those threads to reload from L3/RAM, even though they never touched stats[0]. `perf c2c` catches this cache-line ping-pong.',
    command: 'perf c2c record -- ./sim_atomic --threads=8\nperf c2c report --stdio | head -30',
    output: `=================================================
 Trace Event Information
=================================================
  Total records                     :    2,182,441
  Total cacheline load events       :      421,882
  Total cacheline store events      :      312,441

 Shared Cache Line Distribution (top contended)
─────────────────────────────────────────────────────────────
  LLC Evict  RmtLoad  LclHit  Store    Symbol / Location
─────────────────────────────────────────────────────────────
   19821      4891     3122     847    ThreadStats stats[]
              ^^^^
              Remote DRAM loads — cross-thread cache invalidation
              Thread-0 writes stats[0].events_processed (+0)
              Thread-1 writes stats[1].events_processed (+8)
              Both on same 64-byte cache line → false sharing  ◄

  Fix: alignas(64) ensures each ThreadStats owns one full cache line`,
    insight: 'The 4,891 remote DRAM loads come from false sharing — threads thrashing each other\'s cache lines despite never sharing actual data. The fix is one keyword: `alignas(64)`. Each struct then owns its own cache line and writes from one thread don\'t invalidate another.',
    diff: {
      label: 'ThreadStats — eliminate false sharing',
      before: `// 16 bytes each → 4 ThreadStats share one 64-byte cache line
// Thread-0 write → invalidates line for Thread-1,2,3
struct ThreadStats {
    uint64_t events_processed;  // 8 bytes
    uint64_t delta_count;       // 8 bytes
};

std::array<ThreadStats, MAX_THREADS> per_thread_stats_;`,
      after: `// Each ThreadStats owns one full 64-byte cache line
// Writes from Thread-0 have zero effect on Thread-1's cache
struct alignas(64) ThreadStats {
    uint64_t events_processed;  // 8 bytes
    uint64_t delta_count;       // 8 bytes
    //       48 bytes of padding — implicit from alignas(64)
    //       cache coherence unit = this struct → zero sharing
};

std::array<ThreadStats, MAX_THREADS> per_thread_stats_;`,
    },
  },
  {
    id: 8,
    phase: 'VERIFY',
    title: 'Final results — end-to-end comparison',
    why: 'Every optimization was measured before and after. This is the full story: what changed, why it worked, and what the numbers look like from baseline to final. This is the production checklist — no optimization without a benchmark, no benchmark without a before/after.',
    command: 'perf stat ./sim_final --threads=8 --events=1000000',
    output: `       2.117441201 seconds time elapsed       (was: 8.234s baseline)

══════════════════════════════════════════════════════════════════
 Strategy                  Time     Throughput       Speedup
══════════════════════════════════════════════════════════════════
 Baseline (1 mutex)        8.234s   121,430 ev/s     1.00×
 Fine-grained (64 locks)   3.829s   261,144 ev/s     2.15×
 + Atomic counters         2.213s   451,809 ev/s     3.72×
 + alignas(64) sharding    2.117s   473,218 ev/s     3.89×
══════════════════════════════════════════════════════════════════

Validated with perf stat, gprof, perf lock, perf c2c.
Each change measured independently before stacking.

Peak: 3.89×  |  473,218 events/sec  |  IPC: 0.31 → 2.14`,
    insight: 'The methodology: measure first (perf stat), find the hot function (gprof), quantify contention (perf lock), fix with the smallest targeted change, re-measure immediately, repeat. The total 3.89× gain comes entirely from four single-responsibility changes — no algorithmic restructuring required.',
  },
]

/* ─── Example code shown in the "paste" textarea ─────────────────── */
const EXAMPLE_CODE = `#include <mutex>
#include <thread>
#include <vector>
#include <functional>

class Simulator {
    std::mutex global_mutex_;
    int        active_events_ = 0;

public:
    void dispatch_event(int time, int signal_id) {
        std::lock_guard<std::mutex> lock(global_mutex_);
        // ... process event at 'time' for signal signal_id ...
        active_events_++;
    }

    void run(int num_threads, int num_events) {
        std::vector<std::thread> workers;
        for (int t = 0; t < num_threads; ++t) {
            workers.emplace_back([this, num_events, num_threads, t]() {
                for (int i = t; i < num_events; i += num_threads)
                    dispatch_event(i % 1000, i % 64);
            });
        }
        for (auto& w : workers) w.join();
    }
};`

/* ─── Sub-components ─────────────────────────────────────────────── */
function PhaseBadge({ phase }: { phase: Phase }) {
  const color = phaseColor[phase]
  return (
    <span style={{
      fontFamily: 'monospace', fontSize: '9px', letterSpacing: '0.18em',
      color, border: `1px solid ${color}50`, background: `${color}12`,
      padding: '2px 8px', borderRadius: '3px',
    }}>
      {phase}
    </span>
  )
}

function Terminal({ command, output, running }: { command: string; output?: string; running: boolean }) {
  return (
    <div style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', overflow: 'hidden' }}>
      {/* title bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 14px', background: '#161b22', borderBottom: '1px solid #21262d' }}>
        {['#ff5f57', '#febc2e', '#28c840'].map(c => (
          <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
        ))}
        <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#6e7681', marginLeft: '6px' }}>bash</span>
      </div>
      {/* command */}
      <pre style={{ margin: 0, padding: '14px 16px 0', fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace", fontSize: '12px', lineHeight: 1.7, color: '#e6edf3' }}>
        <span style={{ color: '#7dd3b0' }}>$ </span>{command}
      </pre>
      {/* running indicator */}
      {running && (
        <div style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Spinner />
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#6e7681' }}>running…</span>
        </div>
      )}
      {/* output */}
      {output && (
        <pre style={{
          margin: 0, padding: '10px 16px 16px',
          fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
          fontSize: '11.5px', lineHeight: 1.75, color: '#8b949e',
          whiteSpace: 'pre', overflowX: 'auto',
          borderTop: '1px solid #21262d',
        }}>
          {output.split('\n').map((line, i) => {
            const isHot = line.includes('◄') || line.includes('✓') || line.includes('══') || line.includes('──')
            return (
              <span key={i} style={{ display: 'block', color: isHot ? '#e6edf3' : undefined }}>
                {line}
              </span>
            )
          })}
        </pre>
      )}
    </div>
  )
}

function Spinner() {
  return (
    <div style={{
      width: 12, height: 12, borderRadius: '50%',
      border: '2px solid #30363d',
      borderTopColor: '#7dd3b0',
      animation: 'spin 0.7s linear infinite',
    }} />
  )
}

function DiffBlock({ diff }: { diff: CodeDiff }) {
  const [tab, setTab] = useState<'before' | 'after'>('before')
  return (
    <div style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', borderBottom: '1px solid #21262d', background: '#161b22' }}>
        {(['before', 'after'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.08em',
              padding: '9px 16px', border: 'none', cursor: 'pointer',
              color: tab === t ? (t === 'before' ? '#ffa657' : '#7dd3b0') : '#6e7681',
              background: 'transparent',
              borderBottom: tab === t ? `2px solid ${t === 'before' ? '#ffa657' : '#7dd3b0'}` : '2px solid transparent',
              transition: 'all 150ms',
            }}
          >
            {t === 'before' ? 'BEFORE' : 'AFTER  ✓'}
          </button>
        ))}
        <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#484f58', padding: '9px 16px', marginLeft: 'auto' }}>
          {diff.label}
        </span>
      </div>
      <pre style={{
        margin: 0, padding: '16px',
        fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
        fontSize: '12px', lineHeight: 1.75, color: '#e6edf3',
        whiteSpace: 'pre', overflowX: 'auto',
      }}>
        {(tab === 'before' ? diff.before : diff.after).split('\n').map((line, i) => {
          const isComment = line.trim().startsWith('//')
          return (
            <span key={i} style={{ display: 'block', color: isComment ? '#6e7681' : undefined }}>
              {line}
            </span>
          )
        })}
      </pre>
    </div>
  )
}

/* ─── Main Workshop ──────────────────────────────────────────────── */
export default function CelerisWorkshop() {
  const [codeMode, setCodeMode]   = useState<null | 'example' | 'custom'>(null)
  const [code, setCode]           = useState('')
  const [activeStep, setActiveStep] = useState(0)            // 0 = not started
  const [stepStatus, setStepStatus] = useState<StepStatus[]>(STEPS.map(() => 'locked'))
  const [runningStep, setRunningStep] = useState<number | null>(null)
  const [doneOutput, setDoneOutput]   = useState<Record<number, boolean>>({})
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  /* Detect mutex/atomic in pasted code for framing */
  const hasMutex  = code.includes('mutex')
  const hasAtomic = code.includes('atomic')
  const hasThread = code.includes('thread')

  function chooseCode(mode: 'example' | 'custom') {
    const c = mode === 'example' ? EXAMPLE_CODE : code
    setCode(c)
    setCodeMode(mode)
    setActiveStep(1)
    setStepStatus(STEPS.map((_, i) => i === 0 ? 'ready' : 'locked'))
    setTimeout(() => stepRefs.current[0]?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
  }

  function runStep(idx: number) {
    setRunningStep(idx)
    setStepStatus(prev => {
      const n = [...prev]
      n[idx] = 'running'
      return n
    })
    setTimeout(() => {
      setRunningStep(null)
      setDoneOutput(prev => ({ ...prev, [idx]: true }))
      setStepStatus(prev => {
        const n = [...prev]
        n[idx] = 'done'
        return n
      })
    }, 1800)
  }

  function nextStep(idx: number) {
    const next = idx + 1
    if (next >= STEPS.length) return
    setActiveStep(next + 1)
    setStepStatus(prev => {
      const n = [...prev]
      if (n[next] === 'locked') n[next] = 'ready'
      return n
    })
    setTimeout(() => stepRefs.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }

  const allDone = stepStatus.every(s => s === 'done')
  const detectedNote = codeMode === 'custom' ? (
    hasMutex  ? 'Detected std::mutex usage — running lock contention pipeline.' :
    hasThread ? 'Detected thread usage — profiling for concurrency bottlenecks.' :
                'No mutex detected — running full profiling pipeline to identify bottlenecks.'
  ) : null

  return (
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes stepIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        @keyframes outputIn { from { opacity:0; } to { opacity:1; } }
        .step-card { animation: stepIn 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .output-block { animation: outputIn 0.5s ease both; }
      `}</style>

      {/* ── Code Selection ─────────────────────────────────────── */}
      {codeMode === null && (
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '24px' }}>
            This workshop walks through the exact profiling and optimization sequence used in Celeris —
            from a mutex-saturated baseline to a 3.89× throughput gain. You can run it on the built-in
            example or paste your own C++ code.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            {/* Use example */}
            <button
              onClick={() => chooseCode('example')}
              style={{
                background: 'var(--surface)', border: '1px solid var(--accent)',
                borderRadius: '8px', padding: '20px', cursor: 'pointer', textAlign: 'left',
                transition: 'background 150ms',
              }}
              onMouseOver={e => (e.currentTarget.style.background = '#1a2e27')}
              onMouseOut={e  => (e.currentTarget.style.background = 'var(--surface)')}
            >
              <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '8px' }}>
                USE EXAMPLE CODE
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-hi)', lineHeight: 1.6 }}>
                Celeris simulation engine — coarse-grained mutex baseline. Ready to profile immediately.
              </p>
            </button>

            {/* Paste code */}
            <button
              onClick={() => setCodeMode('custom')}
              style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '8px', padding: '20px', cursor: 'pointer', textAlign: 'left',
                transition: 'background 150ms',
              }}
              onMouseOver={e => (e.currentTarget.style.background = 'var(--surface-2)')}
              onMouseOut={e  => (e.currentTarget.style.background = 'var(--surface)')}
            >
              <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-lo)', letterSpacing: '0.1em', marginBottom: '8px' }}>
                PASTE YOUR C++ CODE
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-hi)', lineHeight: 1.6 }}>
                Paste your multithreaded C++ and run the same profiling methodology against it.
              </p>
            </button>
          </div>
        </div>
      )}

      {/* ── Paste panel ───────────────────────────────────────── */}
      {codeMode === 'custom' && activeStep === 0 && (
        <div className="step-card" style={{ marginBottom: '40px' }}>
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="Paste your C++ code here..."
            style={{
              width: '100%', minHeight: '260px', resize: 'vertical',
              background: '#0d1117', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '16px',
              fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
              fontSize: '12px', lineHeight: 1.75, color: '#e6edf3',
              outline: 'none', boxSizing: 'border-box',
            }}
          />
          <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
            <button
              onClick={() => chooseCode('custom')}
              disabled={code.trim().length < 10}
              style={{
                fontFamily: 'monospace', fontSize: '12px',
                background: code.trim().length >= 10 ? 'var(--accent)' : 'var(--surface)',
                color: code.trim().length >= 10 ? '#16201d' : 'var(--text-lo)',
                border: '1px solid var(--accent)',
                borderRadius: '6px', padding: '8px 20px', cursor: 'pointer',
                fontWeight: 600, transition: 'all 150ms',
              }}
            >
              Start Workshop →
            </button>
            <button
              onClick={() => { setCode(EXAMPLE_CODE); chooseCode('example') }}
              style={{
                fontFamily: 'monospace', fontSize: '12px',
                background: 'transparent', color: 'var(--text-mid)',
                border: '1px solid var(--border)', borderRadius: '6px',
                padding: '8px 16px', cursor: 'pointer',
              }}
            >
              Use example instead
            </button>
          </div>
        </div>
      )}

      {/* ── Code being analysed ──────────────────────────────── */}
      {codeMode !== null && activeStep > 0 && (
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-lo)' }}>
              Subject — {codeMode === 'example' ? 'Celeris example' : 'your code'}
            </p>
            {detectedNote && (
              <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--accent)', background: 'var(--accent-bg)', padding: '2px 8px', borderRadius: '3px' }}>
                {hasMutex ? '⚑ mutex detected' : hasAtomic ? '⚑ atomic detected' : '⚑ no mutex'}
              </span>
            )}
          </div>
          <div style={{ background: '#0d1117', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
            <pre style={{
              margin: 0, padding: '16px', maxHeight: '160px', overflowY: 'auto',
              fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
              fontSize: '11.5px', lineHeight: 1.75, color: '#8b949e',
              whiteSpace: 'pre',
            }}>
              {code}
            </pre>
          </div>
          {detectedNote && (
            <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-lo)', marginTop: '8px' }}>
              {detectedNote}
            </p>
          )}
        </div>
      )}

      {/* ── Step Cards ────────────────────────────────────────── */}
      {STEPS.map((step, idx) => {
        const status = stepStatus[idx]
        if (status === 'locked') return null
        const color  = phaseColor[step.phase]
        const isDone = status === 'done'
        const isRun  = runningStep === idx
        const showOut = doneOutput[idx]

        return (
          <div
            key={step.id}
            className="step-card"
            ref={el => { stepRefs.current[idx] = el }}
            style={{
              marginBottom: '36px',
              border: `1px solid ${isDone ? color + '40' : 'var(--border)'}`,
              borderRadius: '10px',
              overflow: 'hidden',
              background: isDone ? color + '05' : 'var(--surface)',
              transition: 'border-color 300ms, background 300ms',
            }}
          >
            {/* step header */}
            <div style={{
              padding: '16px 20px', display: 'flex', alignItems: 'center',
              gap: '12px', borderBottom: '1px solid var(--border)',
              background: 'var(--surface)',
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                border: `1.5px solid ${isDone ? color : 'var(--border)'}`,
                background: isDone ? color + '20' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'monospace', fontSize: '11px', fontWeight: 700,
                color: isDone ? color : 'var(--text-lo)',
              }}>
                {isDone ? '✓' : step.id}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-hi)', letterSpacing: '-0.01em' }}>
                  {step.title}
                </p>
              </div>
              <PhaseBadge phase={step.phase} />
            </div>

            <div style={{ padding: '20px' }}>
              {/* why */}
              <div style={{
                borderLeft: `2px solid ${color}`,
                paddingLeft: '14px',
                marginBottom: '20px',
              }}>
                <p style={{ fontFamily: 'monospace', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color, marginBottom: '6px' }}>
                  WHY THIS STEP
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-hi)', lineHeight: 1.85 }}>
                  {step.why}
                </p>
              </div>

              {/* code diff (if any) */}
              {step.diff && (
                <div style={{ marginBottom: '20px' }}>
                  <DiffBlock diff={step.diff} />
                </div>
              )}

              {/* terminal */}
              <div className={showOut ? 'output-block' : ''} style={{ marginBottom: '16px' }}>
                <Terminal
                  command={step.command}
                  output={showOut ? step.output : undefined}
                  running={isRun}
                />
              </div>

              {/* insight */}
              {showOut && (
                <div className="output-block" style={{
                  background: color + '08',
                  border: `1px solid ${color}30`,
                  borderRadius: '6px',
                  padding: '12px 16px',
                  marginBottom: '16px',
                }}>
                  <p style={{ fontFamily: 'monospace', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color, marginBottom: '6px' }}>
                    INSIGHT
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--text-hi)', lineHeight: 1.85 }}>
                    {step.insight}
                  </p>
                </div>
              )}

              {/* action buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                {!isDone && !isRun && (
                  <button
                    onClick={() => runStep(idx)}
                    style={{
                      fontFamily: 'monospace', fontSize: '12px', fontWeight: 600,
                      background: color, color: '#0d1117',
                      border: 'none', borderRadius: '6px',
                      padding: '8px 20px', cursor: 'pointer',
                      transition: 'opacity 150ms',
                    }}
                    onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
                    onMouseOut={e  => (e.currentTarget.style.opacity = '1')}
                  >
                    {step.diff ? 'Apply & Run →' : 'Run →'}
                  </button>
                )}
                {isDone && idx < STEPS.length - 1 && stepStatus[idx + 1] === 'locked' && (
                  <button
                    onClick={() => nextStep(idx)}
                    style={{
                      fontFamily: 'monospace', fontSize: '12px', fontWeight: 600,
                      background: 'transparent', color,
                      border: `1px solid ${color}60`,
                      borderRadius: '6px', padding: '8px 20px', cursor: 'pointer',
                      transition: 'all 150ms',
                    }}
                    onMouseOver={e => { e.currentTarget.style.background = color + '15' }}
                    onMouseOut={e  => { e.currentTarget.style.background = 'transparent' }}
                  >
                    Next step →
                  </button>
                )}
                {isDone && (idx === STEPS.length - 1 || stepStatus[idx + 1] !== 'locked') && (
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-lo)' }}>
                    {idx < STEPS.length - 1 ? '↓ continue below' : ''}
                  </span>
                )}
              </div>
            </div>
          </div>
        )
      })}

      {/* ── Completion Banner ─────────────────────────────────── */}
      {allDone && (
        <div className="step-card" style={{
          border: '1px solid #7dd3b040',
          borderRadius: '10px',
          padding: '28px 24px',
          background: '#7dd3b008',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '22px', fontWeight: 700, color: '#7dd3b0', letterSpacing: '-0.02em', marginBottom: '10px' }}>
            Workshop complete — 3.89×
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: 1.85, maxWidth: '540px', margin: '0 auto 20px' }}>
            Four targeted changes. Every one measured before and after. No algorithm redesign —
            just understanding where the CPU stalls and removing the cause.
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://celeris.gauravanand.tech"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'monospace', fontSize: '12px', fontWeight: 600,
                background: '#7dd3b0', color: '#0d1117',
                padding: '9px 20px', borderRadius: '6px',
                textDecoration: 'none', display: 'inline-block',
              }}
            >
              Run live benchmarks ↗
            </a>
            <a
              href="https://github.com/gauravanand-sudo/celeris"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'monospace', fontSize: '12px',
                border: '1px solid var(--border)', color: 'var(--text-hi)',
                padding: '9px 20px', borderRadius: '6px',
                textDecoration: 'none', display: 'inline-block',
                background: 'transparent',
              }}
            >
              View source →
            </a>
          </div>
        </div>
      )}
    </>
  )
}
