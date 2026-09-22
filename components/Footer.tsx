import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <p className="footer-brand">GauravAnand.Tech</p>
          <p className="footer-copy">
            AI, cloud and software engineering for companies that need useful technology shipped — not just slides.
          </p>
        </div>

        <div className="footer-links">
          <Link href="/#services">Services</Link>
          <Link href="/#work">Work</Link>
          <Link href="/insights">Insights</Link>
          <a href="https://github.com/gauravanand-sudo" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>

        <div className="footer-contact">
          <span>India · Remote worldwide</span>
          <a href="mailto:gaurav.anand54@gmail.com">gaurav.anand54@gmail.com</a>
          <span>© 2026 Gaurav Anand</span>
        </div>
      </div>
    </footer>
  )
}
