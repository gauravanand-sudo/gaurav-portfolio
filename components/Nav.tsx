import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      height: '56px',
      background: 'rgba(8,8,8,0.88)',
      borderBottom: '1px solid #1a1a1a',
      backdropFilter: 'blur(12px)',
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
      }}>
        <Link href="/" style={{
          fontFamily: 'monospace',
          fontSize: '14px',
          color: '#6ee7b7',
          textDecoration: 'none',
          fontWeight: 700,
          letterSpacing: '0.05em',
        }}>
          GA
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {[
            { label: 'Projects', href: '/#projects' },
            { label: 'Experience', href: '/#experience' },
            { label: 'GitHub', href: 'https://github.com/gauravanand-sudo', external: true },
            { label: 'Contact', href: 'mailto:gaurav.anand54@gmail.com' },
          ].map((link) => (
            link.external ? (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className="nav-link" style={{ fontSize: '13px', color: '#5a5a5a', textDecoration: 'none' }}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href}
                className="nav-link" style={{ fontSize: '13px', color: '#5a5a5a', textDecoration: 'none' }}>
                {link.label}
              </Link>
            )
          ))}
        </div>
      </div>
      <style>{`.nav-link:hover { color: #6ee7b7 !important; }`}</style>
    </nav>
  )
}
