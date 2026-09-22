import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-main">
        <div>
          <Link href="/" className="footer-brand">GAURAVANAND.TECH</Link>
          <p className="footer-copy">Apps, AI, games, design, content, cloud and custom digital work.</p>
        </div>
        <div className="footer-links">
          <Link href="/#services">Services</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/portfolio">Portfolio / Resume</Link>
        </div>
        <div className="footer-cta">
          <span>Need something made?</span>
          <a href="mailto:gaurav.anand54@gmail.com?subject=New%20work%20request%20-%20gauravanand.tech">Send a request →</a>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>© 2026 GauravAnand.Tech</span>
        <span>Remote · Worldwide</span>
      </div>
    </footer>
  )
}
