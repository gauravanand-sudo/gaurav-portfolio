import Link from 'next/link'

export default function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        height: '56px',
        background: 'rgba(11, 16, 32, 0.88)',
        borderBottom: '1px solid #263154',
        backdropFilter: 'blur(10px)',
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: '896px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontSize: '14px',
            color: '#f7f9ff',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          GA
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link href="/#projects" style={{ fontSize: '14px', color: '#c8d2f0', textDecoration: 'none' }} className="nav-link">
            Projects
          </Link>
          <Link href="/#experience" style={{ fontSize: '14px', color: '#c8d2f0', textDecoration: 'none' }} className="nav-link">
            Experience
          </Link>
          <a
            href="https://github.com/gauravanand-sudo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '14px', color: '#c8d2f0', textDecoration: 'none' }}
            className="nav-link"
          >
            GitHub
          </a>
          <a
            href="mailto:gaurav.anand54@gmail.com"
            style={{ fontSize: '14px', color: '#c8d2f0', textDecoration: 'none' }}
            className="nav-link"
          >
            Contact
          </a>
        </div>
      </div>
      <style>{`
        .nav-link:hover { color: #67e8f9 !important; }
      `}</style>
    </nav>
  )
}
