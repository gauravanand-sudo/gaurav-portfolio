import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CelerisWorkshop from '@/components/CelerisWorkshop'

const keyConcepts = [
  'Time-wheel O(1) event scheduling with per-bucket SpinLocks',
  'Ping-pong delta queue — zero-copy double buffer for delta propagation',
  'Strategy pattern: CoarseGrained / FineGrained / Atomic, runtime swappable',
  'C++20 std::barrier replacing hand-rolled barrier with generation-counter race',
  'Per-thread sharding with alignas(64) to eliminate false sharing',
]

export default function CelerisPage() {
  const tags = ['C++20', 'Multithreading', 'Simulation', 'FastAPI']

  return (
    <>
      <Nav />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px 100px' }}>

        {/* Back */}
        <Link
          href="/#projects"
          style={{ fontSize: '13px', color: 'var(--text-lo)', textDecoration: 'none', fontFamily: 'monospace', display: 'inline-block', marginBottom: '40px' }}
        >
          ← Projects
        </Link>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 700, color: 'var(--text-hi)', letterSpacing: '-0.03em' }}>
            Celeris
          </h1>
          <span style={{
            fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.15em',
            color: 'var(--accent)', border: '1px solid var(--accent-border)',
            background: 'var(--accent-bg)', padding: '3px 10px', borderRadius: '4px', marginTop: '8px',
          }}>
            Active
          </span>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)', marginBottom: '20px', lineHeight: 1.7 }}>
          C++20 multicore event-driven simulation engine — open-source, benchmarked, and deployed.
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-mid)',
              background: 'var(--surface)', border: '1px solid var(--border)',
              padding: '3px 10px', borderRadius: '4px',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '72px' }}>
          <a href="https://celeris.gauravanand.tech" target="_blank" rel="noopener noreferrer" style={{
            border: '1px solid var(--accent)', background: 'var(--accent)',
            padding: '8px 18px', fontSize: '13px', color: '#16201d',
            textDecoration: 'none', borderRadius: '6px', fontWeight: 600,
            fontFamily: 'monospace',
          }}>
            Live Demo ↗
          </a>
          <a href="https://github.com/gauravanand-sudo/celeris" target="_blank" rel="noopener noreferrer" style={{
            border: '1px solid var(--border)', background: 'var(--surface)',
            padding: '8px 18px', fontSize: '13px', color: 'var(--text-hi)',
            textDecoration: 'none', borderRadius: '6px', fontFamily: 'monospace',
          }}>
            GitHub ↗
          </a>
        </div>

        {/* ── Performance Workshop ─────────────────────────────── */}
        <div style={{ marginBottom: '80px' }}>
          <p style={{
            fontFamily: 'monospace', fontSize: '11px', fontWeight: 600,
            color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            Performance Workshop
          </p>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-hi)', letterSpacing: '-0.02em', marginBottom: '8px' }}>
            From 1× to 3.89× — step by step
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '36px', maxWidth: '640px' }}>
            The same profiling and optimization sequence used during development:
            perf stat → gprof → perf lock → fine-grained refactor → atomic fast path → false sharing.
            Paste your own C++ or use the built-in example.
          </p>
          <CelerisWorkshop />
        </div>

        {/* ── Key Concepts ─────────────────────────────────────── */}
        <section style={{ marginBottom: '64px', borderTop: '1px solid var(--border)', paddingTop: '56px' }}>
          <p style={{
            fontFamily: 'monospace', fontSize: '11px', fontWeight: 600,
            color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '24px',
          }}>
            Key Concepts
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {keyConcepts.map((c) => (
              <li key={c} style={{ fontSize: '14px', color: 'var(--text-hi)', lineHeight: 1.85, paddingLeft: '18px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>—</span>
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Source ───────────────────────────────────────────── */}
        <section>
          <p style={{
            fontFamily: 'monospace', fontSize: '11px', fontWeight: 600,
            color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px',
          }}>
            Source
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '20px' }}>
            Full source, benchmarks, and ZERO_TO_ARCHITECT.md guide on GitHub.
          </p>
          <a href="https://github.com/gauravanand-sudo/celeris" target="_blank" rel="noopener noreferrer" style={{
            border: '1px solid var(--border)', background: 'var(--surface)',
            padding: '8px 18px', fontSize: '13px', color: 'var(--text-hi)',
            textDecoration: 'none', borderRadius: '6px', fontFamily: 'monospace',
            display: 'inline-block',
          }}>
            View on GitHub ↗
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
