import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-main">
        <div>
          <Link href="/" className="footer-brand">GAURAVANAND.TECH</Link>
          <p className="footer-copy">AI, software, cloud and automation — built around a concrete business outcome.</p>
        </div>
        <div className="footer-links">
          <Link href="/#services">Services</Link>
          <Link href="/#work">Work</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div className="footer-cta">
          <span>Know what you need built?</span>
          <a href="mailto:gaurav.anand54@gmail.com?subject=Project%20estimate%20-%20gauravanand.tech">Get a project estimate →</a>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>© 2026 GauravAnand.Tech</span>
        <span>Remote · Worldwide</span>
      </div>
    </footer>
  )
}
