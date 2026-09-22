import Link from 'next/link'

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Insights', href: '/insights' },
  { label: 'Portfolio', href: '/portfolio' },
]

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="site-shell nav-inner">
        <Link href="/" className="brand-lockup" aria-label="GauravAnand.Tech home">
          <span className="brand-mark">GA</span>
          <span className="brand-name">GAURAVANAND.TECH</span>
        </Link>

        <div className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <a className="nav-cta" href="mailto:gaurav.anand54@gmail.com?subject=Project%20inquiry%20-%20gauravanand.tech">
            Start a project
          </a>
        </div>
      </div>
    </nav>
  )
}
