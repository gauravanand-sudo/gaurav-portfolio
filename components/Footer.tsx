import Link from 'next/link'

export default function Footer(){
  const publicSalesEmail=process.env.PUBLIC_SALES_EMAIL
  return <footer className="site-footer studio-footer">
    <div className="site-shell studio-footer-main">
      <div className="studio-footer-brand">
        <Link href="/" className="footer-logo-row" aria-label="ga.tech home"><img className="footer-logo-image" src="/brand/ga-tech-logo.webp" alt="ga.tech"/></Link>
        <p>Digital products, AI, creative and cloud—made to feel like one thing.</p>
        {publicSalesEmail?<a href={`mailto:${publicSalesEmail}`}>{publicSalesEmail}</a>:null}
      </div>
      <div className="studio-footer-links">
        <div><strong>Explore</strong><Link href="/services">Services</Link><Link href="/case-studies">Work</Link><Link href="/insights">Insights</Link><Link href="/portfolio">Founder</Link></div>
        <div><strong>Start</strong><Link href="/contact">Start a project</Link><Link href="/book">Talk it through</Link><Link href="/resources">Free resources</Link><Link href="/working-with-us">Working with us</Link></div>
      </div>
      <div className="studio-footer-cta">
        <p>Have something in mind?</p>
        <h3>Let’s make it real.</h3>
        <Link data-track="footer_request_scope" href="/contact">Start a project →</Link>
      </div>
    </div>
    <div className="site-shell studio-footer-bottom"><span>© 2026 ga.tech</span><span>Presented at gauravanand.tech</span><span><Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link></span></div>
  </footer>
}
