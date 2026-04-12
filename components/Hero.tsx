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
        width: '700px', height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(110,231,183,0.035) 0%, transparent 65%)',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', padding: '0 32px', position: 'relative' }}>

        <p style={{
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: '11px',
          color: '#6ee7b7',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '22px',
          opacity: 0.85,
        }}>
          Systems Engineer · C++ · 6.5 years
        </p>

        <h1 style={{
          fontSize: 'clamp(38px, 6vw, 60px)',
          fontWeight: 600,
          color: '#f4f4f4',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
        }}>
          Gaurav Anand
        </h1>

        <p style={{
          fontSize: '15px',
          color: '#7a7a7a',
          maxWidth: '420px',
          margin: '22px auto 0',
          lineHeight: 1.85,
        }}>
          I work in systems C++ — concurrency, simulation, compilers.
          I use AI tools to learn and build faster. This site is a collection
          of things I&apos;ve built or explored, not a claim to know everything.
        </p>

        <div style={{
          display: 'flex', gap: '10px',
          marginTop: '36px', justifyContent: 'center', flexWrap: 'wrap',
        }}>
          {[
            { label: 'Experience',  href: '#experience' },
            { label: 'Projects',    href: '#projects' },
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
          border: 1px solid #222;
          padding: 9px 20px;
          font-size: 13px;
          color: '#a0a0a0';
          text-decoration: none;
          border-radius: 6px;
          background: #0c0c0c;
          cursor: pointer;
          color: #a0a0a0;
          transition: border-color 150ms ease, color 150ms ease, background 150ms ease;
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
