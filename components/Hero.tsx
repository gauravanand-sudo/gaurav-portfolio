export default function Hero() {
  return (
    <section className="hero-section fade-in">
      <div className="shell hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Modern C++ • Concurrency • Performance Engineering</p>
          <h1 className="hero-title">
            Building fast, reliable systems that stay readable under pressure.
          </h1>
          <p className="hero-subtitle">
            I&apos;m Gaurav Anand, a systems engineer with 6.5+ years of experience
            across simulation infrastructure, compiler front-ends, distributed
            services, and performance-critical tooling.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#experience" className="btn btn-secondary">
              See Experience
            </a>
            <a
              href="https://github.com/gauravanand-sudo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub ↗
            </a>
          </div>
          <div className="hero-metrics">
            <div className="metric-card">
              <span className="metric-value">6.5+</span>
              <span className="metric-label">Years building production software</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">11M+</span>
              <span className="metric-label">LOC platform migration contribution</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">C++20</span>
              <span className="metric-label">Focus on systems and concurrency</span>
            </div>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="hero-panel-label">Currently focused on</p>
          <ul className="hero-panel-list">
            <li>Multicore simulation engines and synchronization strategy design</li>
            <li>Performance analysis for latency-sensitive systems</li>
            <li>Applied ML for EDA and engineering productivity</li>
          </ul>
          <div className="hero-panel-contact">
            <span>Noida, India</span>
            <a href="mailto:gaurav.anand54@gmail.com">gaurav.anand54@gmail.com</a>
          </div>
        </aside>
      </div>
    </section>
  )
}
