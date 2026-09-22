import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-main">
        <div>
          <Link href="/" className="footer-brand">GAURAVANAND.TECH</Link>
          <p className="footer-copy">AI-native software engineering for products, platforms and automation.</p>
        </div>
        <div className="footer-links">
          <Link href="/#services">Services</Link>
          <Link href="/#work">Work</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div className="footer-cta">
          <span>Have a product or problem to build around?</span>
          <a href="mailto:gaurav.anand54@gmail.com?subject=Project%20inquiry%20-%20gauravanand.tech">Start a conversation →</a>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>© 2026 GauravAnand.Tech</span>
        <span>Remote · Worldwide</span>
      </div>
    </footer>
  )
}
