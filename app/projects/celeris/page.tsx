import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const benchmarkRows = [
  {
    experiment: 'Coarse → Fine-grained locking',
    result: '2.15× throughput gain',
  },
  {
    experiment: 'Fine mutex → Atomic fast path',
    result: '1.73× additional gain',
  },
  {
    experiment: 'Combined improvement',
    result: '3.72× total',
  },
  {
    experiment: 'Per-thread sharding (vs mutex)',
    result: '3000× on write-heavy paths',
  },
]

const keyConcepts = [
  'Time-wheel O(1) event scheduling with per-bucket SpinLocks',
  'Ping-pong delta queue for zero-copy double-buffered propagation',
  'Runtime-swappable strategy variants for coarse, fine-grained, and atomic paths',
  'C++20 std::barrier replacing a hand-rolled barrier with race-prone generation handling',
  'Per-thread sharding with alignas(64) to reduce false sharing',
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
      <main className="project-page shell">
        <Link href="/#projects" className="back-link">
          ← Projects
        </Link>

        <section className="project-hero">
          <div className="project-hero-main">
            <div className="project-card-top">
              <h1 className="project-page-title">Celeris</h1>
              <span className="status-pill">Active</span>
            </div>
            <p className="project-lead">
              An open-source multicore event-driven simulation engine in C++20 built to study synchronization
              tradeoffs, benchmark scaling strategies, and surface hot paths from Verilog input.
            </p>
            <div className="tag-list">
              {tags.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
            <div className="hero-actions">
              <a
                href="https://github.com/gauravanand-sudo/celeris"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View GitHub ↗
              </a>
              <a
                href="https://celeris-vxjb.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Open Live Demo ↗
              </a>
            </div>
          </div>

          <aside className="project-summary-card">
            <p className="hero-panel-label">Why it matters</p>
            <ul className="hero-panel-list">
              <li>Compares coarse locks, finer locks, and atomic fast paths.</li>
              <li>Shows how cache-line sharding changes write-heavy behavior.</li>
              <li>Connects lower-level systems ideas to a usable browser demo.</li>
            </ul>
          </aside>
        </section>

        <section className="detail-section">
          <h2 className="detail-heading">Project Snapshot</h2>
          <div className="snapshot-grid">
            <div className="focus-card">
              <p className="focus-title">Problem</p>
              <p className="focus-text">Understand how synchronization decisions affect throughput in event-driven simulation workloads.</p>
            </div>
            <div className="focus-card">
              <p className="focus-title">Approach</p>
              <p className="focus-text">Model hardware scheduling behavior, benchmark multiple strategies, and expose results through a web UI.</p>
            </div>
            <div className="focus-card">
              <p className="focus-title">Outcome</p>
              <p className="focus-text">Clear performance comparisons, a shareable demo, and a strong showcase of systems thinking.</p>
            </div>
          </div>
        </section>

        <section className="detail-section">
          <h2 className="detail-heading">Overview</h2>
          <p className="detail-copy">
            Celeris models the architecture of hardware simulation schedulers including time-wheel event scheduling,
            delta-cycle propagation, and parallel region execution. It was built to make low-level synchronization
            tradeoffs easier to observe, measure, and explain.
          </p>
        </section>

        <section className="detail-section">
          <h2 className="detail-heading">Benchmark Results</h2>
          <div className="table-card">
            <table className="benchmark-table">
              <thead>
                <tr>
                  <th>Experiment</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkRows.map((row, idx) => (
                  <tr key={row.experiment} className={idx % 2 === 0 ? 'table-row-even' : 'table-row-odd'}>
                    <td>{row.experiment}</td>
                    <td className="benchmark-result">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="detail-section">
          <h2 className="detail-heading">Try It</h2>
          <p className="detail-copy">
            Paste a Verilog module into the live demo to explore hot paths and simulation behavior directly in the browser.
          </p>
          <iframe src="https://celeris.gauravanand.tech" className="demo-frame" title="Celeris Live Demo" />
          <p className="demo-note">The demo runs on a free-tier server, so the first load may take around 30 seconds.</p>
        </section>

        <section className="detail-section">
          <h2 className="detail-heading">Architecture</h2>
          <pre className="architecture-block">{architectureDiagram}</pre>
        </section>

        <section className="detail-section">
          <h2 className="detail-heading">Key Concepts</h2>
          <ul className="hero-panel-list detail-list">
            {keyConcepts.map((concept) => (
              <li key={concept}>{concept}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2 className="detail-heading">Source</h2>
          <p className="detail-copy">
            Full source, benchmarks, and the ZERO_TO_ARCHITECT guide are available on GitHub.
          </p>
          <a
            href="https://github.com/gauravanand-sudo/celeris"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View Repository ↗
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
