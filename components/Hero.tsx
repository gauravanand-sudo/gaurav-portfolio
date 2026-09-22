export default function Hero() {
  const steps = [
    ['01', 'Discover', 'Problem, users, constraints'],
    ['02', 'Design', 'Product, architecture, data'],
    ['03', 'Build', 'Software, AI, integrations'],
    ['04', 'Operate', 'Cloud, observability, iteration'],
  ]

  return (
    <section className="hero-section">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="site-shell hero-layout">
        <div className="hero-copy-wrap">
          <div className="hero-kicker"><span /> AI-NATIVE SOFTWARE ENGINEERING</div>
          <h1>We build software that moves businesses forward.</h1>
          <p>
            AI products, cloud platforms, automation, data systems and custom software — designed, engineered and shipped from idea to production.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:gaurav.anand54@gmail.com?subject=Project%20inquiry%20-%20gauravanand.tech">Start a project <span>↗</span></a>
            <a className="button button-secondary" href="#work">See our work</a>
          </div>
          <div className="hero-subline">
            <span>For startups</span><span>Product teams</span><span>Modernizing businesses</span>
          </div>
        </div>

        <div className="hero-system" aria-label="Delivery model">
          <div className="system-topline">
            <span>DELIVERY SYSTEM</span>
            <span className="system-live"><i /> ONLINE</span>
          </div>
          <div className="system-core">
            <div className="system-orbit orbit-a" />
            <div className="system-orbit orbit-b" />
            <div className="system-node">AI</div>
            <span className="orbit-label orbit-label-a">PRODUCT</span>
            <span className="orbit-label orbit-label-b">CLOUD</span>
            <span className="orbit-label orbit-label-c">DATA</span>
            <span className="orbit-label orbit-label-d">SYSTEMS</span>
          </div>
          <div className="system-steps">
            {steps.map(([n, title, detail]) => (
              <div key={n} className="system-step">
                <span>{n}</span>
                <div><strong>{title}</strong><small>{detail}</small></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
