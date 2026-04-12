export default function Hero() {
  return (
    <section
      className="fade-in"
      style={{
        padding: '96px 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* radial glow */}
      <div style={{
        position: 'absolute',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(155,196,177,0.07) 0%, transparent 70%)',
        top: '0', left: '50%',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 28px', position: 'relative' }}>

        <p style={{
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: '11px',
          color: 'var(--accent)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: '18px',
          opacity: 0.9,
        }}>
          C++ Systems Engineer · 6.5+ Years of Experience · Immediate Joiner
        </p>

        <h1 style={{
          fontSize: 'clamp(40px, 5.5vw, 62px)',
          fontWeight: 600,
          color: 'var(--text-hi)',
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          marginBottom: '20px',
        }}>
          Gaurav Anand
        </h1>

        <p style={{
          fontSize: '13px',
          color: 'var(--text-dim)',
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          letterSpacing: '0.02em',
          marginBottom: '36px',
        }}>
          Noida, India&nbsp;&nbsp;·&nbsp;&nbsp;+91-9289656293&nbsp;&nbsp;·&nbsp;&nbsp;gaurav.anand54@gmail.com
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { label: 'Experience',  href: '#experience' },
            { label: 'Projects',    href: '#projects' },
            { label: 'Skills',      href: '#skills' },
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
          padding: 8px 18px;
          font-size: 12.5px;
          color: var(--text-mid);
          text-decoration: none;
          border-radius: 6px;
          background: var(--surface);
          cursor: pointer;
          transition: border-color 150ms ease, color 150ms ease, background 150ms ease;
          display: inline-block;
        }
        .hero-btn:hover {
          border-color: var(--accent-border);
          color: var(--text-hi);
          background: var(--surface-soft);
        }
      `}</style>
    </section>
  )
}
