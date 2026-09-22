import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell company-footer-grid">
        <div>
          <Link href="/" className="footer-logo-row" aria-label="ga.tech home">
            <img className="footer-logo-image" src="/brand/ga-tech-logo.webp" alt="ga.tech" />
          </Link>
          <p className="company-footer-copy">Build · Automate · Create · Launch</p>
        </div>
        <div className="company-footer-links">
          <strong>Company</strong>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/insights">Insights</Link>
        </div>
        <div className="company-footer-links">
          <strong>Services</strong>
          <Link href="/services/build-digital-products">Build products</Link>
          <Link href="/services/ai-automation">AI & automation</Link>
          <Link href="/services/creative-content">Creative & content</Link>
          <Link href="/services/backend-cloud-scale">Backend & cloud</Link>
        </div>
        <div className="company-footer-cta">
          <strong>Have a project?</strong>
          <p>Send the outcome, budget range and timeline.</p>
          <Link href="/contact">Start a brief →</Link>
        </div>
      </div>
      <div className="site-shell company-footer-bottom">
        <span>© 2026 ga.tech. All rights reserved.</span>
        <span className="legal-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></span>
        <span>Remote · Worldwide</span>
      </div>
    </footer>
  )
}
