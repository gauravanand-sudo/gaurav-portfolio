export default function Hero() {
  return (
    <section
      className="fade-in"
      style={{ minHeight: 'calc(100vh - 56px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ textAlign: 'center', padding: '0 24px' }}>
        <h1 style={{ fontSize: '52px', fontWeight: 600, color: '#f0f0f0', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Gaurav Anand
        </h1>
        <p style={{
          fontSize: '13px',
          color: '#6ee7b7',
          fontFamily: 'monospace',
          marginTop: '14px',
          letterSpacing: '0.08em',
        }}>
          C++ · Systems Engineering · 6.5 years
        </p>
        <p style={{
          fontSize: '15px',
          color: '#6e6e6e',
          maxWidth: '480px',
          margin: '20px auto 0',
          lineHeight: 1.8,
        }}>
          I work in systems C++ — concurrency, simulation, compilers. I use AI tools
          to learn and build faster. This site is a collection of things I&apos;ve built
          or explored, not a claim to know everything.
        </p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '36px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Projects', href: '#projects' },
            { label: 'Experience', href: '#experience' },
            { label: 'GitHub ↗', href: 'https://github.com/gauravanand-sudo', external: true },
            { label: 'Contact', href: 'mailto:gaurav.anand54@gmail.com' },
          ].map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.external ? '_blank' : undefined}
              rel={btn.external ? 'noopener noreferrer' : undefined}
              className="hero-btn"
              style={{
                border: '1px solid #252525',
                padding: '8px 18px',
                fontSize: '13px',
                color: '#b0b0b0',
                textDecoration: 'none',
                borderRadius: '6px',
                background: '#0e0e0e',
                cursor: 'pointer',
              }}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
      <style>{`
        .hero-btn:hover {
          border-color: #6ee7b7 !important;
          color: #6ee7b7 !important;
        }
      `}</style>
    </section>
  )
}
