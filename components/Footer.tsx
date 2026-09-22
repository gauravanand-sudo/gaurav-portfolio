import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell visual-footer">
        <div>
          <Link href="/" className="footer-logo-row" aria-label="ga.tech home">
            <img className="footer-logo-image" src="/brand/ga-tech-logo.svg" alt="ga.tech" />
          </Link>
        </div>
        <div className="footer-nav">
          <Link href="/#services">Services</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/portfolio">Portfolio</Link>
          <a href="mailto:gaurav.anand54@gmail.com?subject=Hello%20-%20gauravanand.tech">Contact</a>
        </div>
        <div className="footer-message">Let’s build a brighter digital tomorrow. <span>♥</span></div>
      </div>
      <div className="site-shell footer-bottom">
        <span>© 2026 GauravAnand.Tech. All rights reserved.</span>
        <span>Remote · Worldwide</span>
      </div>
    </footer>
  )
}
