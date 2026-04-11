import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const benchmarkRows = [
  {
    experiment: 'Coarse → Fine-grained locking',
    result: '2.15×  throughput gain',
  },
  {
    experiment: 'Fine mutex → Atomic fast path',
    result: '1.73×  additional gain',
  },
  {
    experiment: 'Combined improvement',
    result: '3.72×  total',
  },
  {
    experiment: 'Per-thread sharding (vs mutex)',
    result: '3000×  on write-heavy paths',
  },
]

const keyConcepts = [
  'Time-wheel O(1) event scheduling with per-bucket SpinLocks',
  'Ping-pong delta queue — zero-copy double buffer for delta propagation',
  'Strategy pattern: CoarseGrained / FineGrained / Atomic, runtime swappable',
  'C++20 std::barrier replacing hand-rolled barrier with generation-counter race',
  'Per-thread sharding with alignas(64) to eliminate false sharing',
]

const architectureDiagram = `RTL Input (Verilog)
      ↓
  [Parser]  →  Signals, Processes, Sensitivity Lists
      ↓
  [Simulator]  →  500 delta cycles, activation tracking
      ↓
  [Analyzer]  →  Hot path ranking, optimization suggestions
      ↓
  [Web UI]  →  Heat bars, critical path, suggestions`

export default function CelerisPage() {
  const tags = ['C++20', 'Multithreading', 'Simulation', 'FastAPI']

  return (
    <>
      <Nav />
      <main style={{ maxWidth: '896px', margin: '0 auto', padding: '64px 24px' }}>
        {/* Back link */}
        <Link
          href="/#projects"
          className="back-link"
          style={{
            fontSize: '14px',
            color: '#c8d2f0',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '40px',
          }}
        >
          ← Projects
        </Link>

        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 600,
              color: '#f7f9ff',
            }}
          >
            Celeris
          </h1>
          <span
            style={{
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: '11px',
              color: '#6ee7b7',
              border: '1px solid #2f6f5b',
              background: 'rgba(110, 231, 183, 0.08)',
              padding: '2px 8px',
              borderRadius: '4px',
              marginTop: '8px',
            }}
          >
            Active
          </span>
        </div>
        <p
          style={{
            fontSize: '16px',
            color: '#c8d2f0',
            marginBottom: '20px',
            lineHeight: 1.6,
          }}
        >
          Open-source multicore event-driven simulation engine in C++20
        </p>

        {/* Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '20px',
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontSize: '11px',
                color: '#8bf0ff',
                background: '#111831',
                border: '1px solid #2d3b67',
                padding: '2px 8px',
                borderRadius: '4px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          style={{ display: 'flex', gap: '16px', marginBottom: '64px' }}
        >
          <a
            href="https://github.com/gauravanand-sudo/celeris"
            target="_blank"
            rel="noopener noreferrer"
            className="detail-link"
            style={{
              border: '1px solid #3a4977',
              background: '#151d39',
              padding: '8px 16px',
              fontSize: '14px',
              color: '#f7f9ff',
              textDecoration: 'none',
              borderRadius: '6px',
            }}
          >
            GitHub ↗
          </a>
          <a
            href="https://celeris.gauravanand.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="detail-link"
            style={{
              border: '1px solid #3a4977',
              background: '#151d39',
              padding: '8px 16px',
              fontSize: '14px',
              color: '#f7f9ff',
              textDecoration: 'none',
              borderRadius: '6px',
            }}
          >
            Live Demo ↗
          </a>
        </div>

        {/* Overview */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#f7f9ff',
              marginBottom: '16px',
            }}
          >
            Overview
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: '#c8d2f0',
              lineHeight: 1.8,
              maxWidth: '640px',
            }}
          >
            Celeris models the architecture of hardware simulation schedulers —
            time-wheel event scheduling, delta-cycle propagation, and parallel
            region execution. Built to understand and benchmark synchronization
            strategies at the systems level.
          </p>
        </section>

        {/* Benchmark Results */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#ededed',
              marginBottom: '20px',
            }}
          >
            Benchmark Results
          </h2>
          <table
            style={{
              borderCollapse: 'collapse',
              width: '100%',
              fontSize: '13px',
            }}
          >
            <thead>
              <tr
                style={{
                  background: '#151d39',
                }}
              >
                <th
                  style={{
                    padding: '10px 16px',
                    textAlign: 'left',
                    color: '#8bf0ff',
                    fontWeight: 500,
                  }}
                >
                  Experiment
                </th>
                <th
                  style={{
                    padding: '10px 16px',
                    textAlign: 'right',
                    color: '#8bf0ff',
                    fontWeight: 500,
                  }}
                >
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {benchmarkRows.map((row, idx) => (
                <tr
                  key={row.experiment}
                  style={{
                    background: idx % 2 === 0 ? '#0f1730' : '#131c38',
                  }}
                >
                  <td
                    style={{
                      padding: '10px 16px',
                      color: '#c8d2f0',
                    }}
                  >
                    {row.experiment}
                  </td>
                  <td
                    style={{
                      padding: '10px 16px',
                      textAlign: 'right',
                      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                      color: '#6ee7b7',
                    }}
                  >
                    {row.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Live Demo */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#f7f9ff',
              marginBottom: '8px',
            }}
          >
            Try It
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: '#c8d2f0',
              marginBottom: '20px',
            }}
          >
            Paste any Verilog module below and run the simulation.
          </p>
          <iframe
            src="https://celeris.gauravanand.tech"
            className="w-full rounded-lg border border-[#1a1a1a]"
            style={{ height: '700px', width: '100%', borderRadius: '8px', border: '1px solid #263154' }}
            title="Celeris Live Demo"
          />
          <p
            style={{
              fontSize: '12px',
              color: '#94a3c7',
              marginTop: '12px',
            }}
          >
            Demo runs on a free-tier server — first load may take 30s to wake up.
          </p>
        </section>

        {/* Architecture */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#f7f9ff',
              marginBottom: '16px',
            }}
          >
            Architecture
          </h2>
          <pre
            style={{
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: '12px',
              background: '#151d39',
              border: '1px solid #263154',
              padding: '20px',
              borderRadius: '6px',
              overflowX: 'auto',
              color: '#c8d2f0',
              lineHeight: 1.7,
            }}
          >
            {architectureDiagram}
          </pre>
        </section>

        {/* Key Concepts */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#f7f9ff',
              marginBottom: '16px',
            }}
          >
            Key Concepts
          </h2>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            {keyConcepts.map((concept) => (
              <li
                key={concept}
                style={{
                  fontSize: '14px',
                  color: '#c8d2f0',
                  lineHeight: 2,
                  paddingLeft: '16px',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: '#67e8f9',
                  }}
                >
                  —
                </span>
                {concept}
              </li>
            ))}
          </ul>
        </section>

        {/* Source */}
        <section style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#f7f9ff',
              marginBottom: '12px',
            }}
          >
            Source
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: '#c8d2f0',
              marginBottom: '20px',
              lineHeight: 1.6,
            }}
          >
            Full source, benchmarks, and ZERO_TO_ARCHITECT.md guide available on GitHub.
          </p>
          <a
            href="https://github.com/gauravanand-sudo/celeris"
            target="_blank"
            rel="noopener noreferrer"
            className="detail-link"
            style={{
              border: '1px solid #3a4977',
              background: '#151d39',
              padding: '8px 16px',
              fontSize: '14px',
              color: '#f7f9ff',
              textDecoration: 'none',
              borderRadius: '6px',
              display: 'inline-block',
            }}
          >
            View on GitHub ↗
          </a>
        </section>
      </main>
      <Footer />
      <style>{`
        .back-link:hover {
          color: #67e8f9 !important;
        }
        .detail-link:hover {
          border-color: #67e8f9 !important;
          color: #67e8f9 !important;
        }
      `}</style>
    </>
  )
}
