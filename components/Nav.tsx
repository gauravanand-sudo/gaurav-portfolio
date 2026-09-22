import Link from 'next/link'

function SearchIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
}

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Insights', href: '/insights' },
  { label: 'Portfolio', href: '/portfolio' },
]

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="site-shell nav-inner">
        <Link href="/" className="brand-lockup" aria-label="GauravAnand.Tech home">
          <span className="brand-mark"><i/><i/></span>
          <span className="brand-copy"><strong>GauravAnand.<em>Tech</em></strong><small>IDEAS · DIGITAL · REALITY</small></span>
        </Link>
        <div className="nav-links" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.label} href={link.href} className="nav-link">{link.label}</Link>)}
        </div>
        <div className="nav-actions">
          <Link className="nav-search" href="/insights" aria-label="Browse insights"><SearchIcon /></Link>
          <a className="nav-cta" href="mailto:gaurav.anand54@gmail.com?subject=Start%20a%20Project%20-%20gauravanand.tech">Start a Project <span>→</span></a>
        </div>
      </div>
    </nav>
  )
}
