import Link from 'next/link'

export default function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        height: '56px',
        background: '#0a0a0a',
        borderBottom: '1px solid #1a1a1a',
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
            color: '#ededed',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          GA
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link href="/#projects" style={{ fontSize: '14px', color: '#666666', textDecoration: 'none' }} className="nav-link">
            Projects
          </Link>
          <Link href="/#experience" style={{ fontSize: '14px', color: '#666666', textDecoration: 'none' }} className="nav-link">
            Experience
          </Link>
          <a
            href="https://github.com/gauravanand-sudo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '14px', color: '#666666', textDecoration: 'none' }}
            className="nav-link"
          >
            GitHub
          </a>
          <a
            href="mailto:gaurav.anand54@gmail.com"
            style={{ fontSize: '14px', color: '#666666', textDecoration: 'none' }}
            className="nav-link"
          >
            Contact
          </a>
        </div>
      </div>
      <style>{`
        .nav-link:hover { color: #ededed !important; }
      `}</style>
    </nav>
  )
}
