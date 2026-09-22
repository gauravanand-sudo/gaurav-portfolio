export default function Hero() {
  const proof = [
    ['6.5+ years', 'production engineering'],
    ['AI + Cloud', 'from prototype to deployment'],
    ['Systems depth', 'C++, concurrency, performance'],
    ['Founder-led', 'direct technical ownership'],
  ]

  return (
    <section className="hero-section fade-in">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="site-shell hero-shell">
        <div className="eyebrow-row">
          <span className="status-dot" />
          <span>GauravAnand.Tech · AI & Software Studio</span>
        </div>

        <h1 className="hero-title">
          AI, cloud & software systems<br />
          <span>built for ambitious teams.</span>
        </h1>

        <p className="hero-copy">
          A founder-led technology studio helping startups, businesses and engineering teams turn ideas into working software — from AI agents and knowledge systems to cloud platforms, SaaS products, automation, APIs and performance-critical systems.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="mailto:gaurav.anand54@gmail.com?subject=Project%20inquiry%20-%20gauravanand.tech">
            Start a project <span aria-hidden="true">→</span>
          </a>
          <a className="button button-secondary" href="#services">
            Explore capabilities
          </a>
          <a className="button button-ghost" href="#work">
            See engineering work
          </a>
        </div>

        <p className="hero-note">
          Available for focused builds, consulting, freelance engagements, startup partnerships and ongoing product engineering.
        </p>

        <div className="proof-grid">
          {proof.map(([value, label]) => (
            <div className="proof-item" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
