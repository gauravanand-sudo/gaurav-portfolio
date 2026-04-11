import Link from 'next/link'

const links = [
  { label: 'Projects',    href: '/#projects' },
  { label: 'Experience',  href: '/#experience' },
  { label: 'GitHub',      href: 'https://github.com/gauravanand-sudo', external: true },
  { label: 'Contact',     href: 'mailto:gaurav.anand54@gmail.com' },
]

export default function Nav() {
  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        height: '56px',
        background: 'rgba(6,6,6,0.85)',
        borderBottom: '1px solid #161616',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}>
          <Link href="/" style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '13px',
            color: '#6ee7b7',
            textDecoration: 'none',
            fontWeight: 700,
            letterSpacing: '0.12em',
          }}>
            GA
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {links.map((l) =>
              l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="nav-link">
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href} className="nav-link">
                  {l.label}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>

      <style>{`
        .nav-link {
          font-size: 13px;
          color: #606060;
          text-decoration: none;
          transition: color 150ms ease;
          letter-spacing: 0.01em;
        }
        .nav-link:hover { color: #d0d0d0; }
      `}</style>
    </>
  )
}
