export default function Hero() {
  return (
    <section
      className="fade-in"
      style={{
        minHeight: 'calc(100vh - 56px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* subtle radial glow */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(110,231,183,0.04) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', padding: '0 24px', position: 'relative' }}>
        <p style={{
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: '11px',
          color: '#6ee7b7',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '24px',
          opacity: 0.8,
        }}>
          Systems Engineer · C++ · 6.5 years
        </p>

        <h1 style={{
          fontSize: 'clamp(40px, 7vw, 64px)',
          fontWeight: 600,
          color: '#f2f2f2',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
        }}>
          Gaurav Anand
        </h1>

        <p style={{
          fontSize: '15px',
          color: '#6a6a6a',
          maxWidth: '440px',
          margin: '24px auto 0',
          lineHeight: 1.85,
          fontWeight: 400,
        }}>
          I work in systems C++ — concurrency, simulation, compilers.
          I use AI tools to learn and build faster. This site is a collection
          of things I&apos;ve built or explored, not a claim to know everything.
        </p>

        <div style={{
          display: 'flex',
          gap: '10px',
          marginTop: '40px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {[
            { label: 'Projects',    href: '#projects' },
            { label: 'Experience',  href: '#experience' },
            { label: 'GitHub ↗',   href: 'https://github.com/gauravanand-sudo', external: true },
            { label: 'Contact',     href: 'mailto:gaurav.anand54@gmail.com' },
          ].map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.external ? '_blank' : undefined}
              rel={btn.external ? 'noopener noreferrer' : undefined}
              className="hero-btn"
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .hero-btn {
          border: 1px solid #1e1e1e;
          padding: 9px 20px;
          font-size: 13px;
          color: #909090;
          text-decoration: none;
          border-radius: 6px;
          background: #0c0c0c;
          cursor: pointer;
          transition: border-color 150ms ease, color 150ms ease, background 150ms ease;
          letter-spacing: 0.01em;
        }
        .hero-btn:hover {
          border-color: #6ee7b7;
          color: #6ee7b7;
          background: rgba(110,231,183,0.04);
        }
      `}</style>
    </section>
  )
}
