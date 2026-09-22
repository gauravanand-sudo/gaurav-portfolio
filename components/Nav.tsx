import Link from 'next/link'

function SearchIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
}

const links = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Portfolio', href: '/portfolio' },
]

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="site-shell nav-inner">
        <Link href="/" className="brand-lockup" aria-label="ga.tech home">
          <img className="brand-logo-image" src="/brand/ga-tech-logo.svg" alt="ga.tech" />
        </Link>
        <div className="nav-links" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.label} href={link.href} className="nav-link">{link.label}</Link>)}
        </div>
        <div className="nav-actions">
          <Link className="nav-search" href="/insights" aria-label="Browse insights"><SearchIcon /></Link>
          <Link className="nav-cta" href="/contact">Start a Project <span>→</span></Link>
        </div>
      </div>
    </nav>
  )
}
