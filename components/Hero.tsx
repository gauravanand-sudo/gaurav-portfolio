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
        background: 'radial-gradient(circle, rgba(155,196,177,0.1) 0%, transparent 72%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', padding: '0 32px', position: 'relative' }}>

        <p style={{
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: '11px',
          color: 'var(--accent)',
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
          color: 'var(--text-hi)',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
        }}>
          Gaurav Anand
        </h1>

        <p style={{
          fontSize: '15px',
          color: 'var(--text-lo)',
          maxWidth: '440px',
          margin: '24px auto 0',
          lineHeight: 1.85,
        }}>
          I work in systems C++ across concurrency, simulation infrastructure,
          and compilers. This site is a focused collection of projects and
          engineering work that reflect how I like to build: from internals outward.
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
          border: 1px solid var(--border);
          padding: 9px 20px;
          font-size: 13px;
          color: var(--text-mid);
          text-decoration: none;
          border-radius: 6px;
          background: rgba(32, 42, 39, 0.7);
          cursor: pointer;
          transition: border-color 150ms ease, color 150ms ease, background 150ms ease;
        }
        .hero-btn:hover {
          border-color: var(--accent-border);
          color: var(--text-hi);
          background: rgba(155,196,177,0.08);
        }
      `}</style>
    </section>
  )
}
