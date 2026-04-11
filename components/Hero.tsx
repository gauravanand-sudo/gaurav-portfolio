export default function Hero() {
  return (
    <section
      className="fade-in"
      style={{
        height: 'calc(100vh - 56px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center', padding: '0 24px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 600, color: '#ededed', lineHeight: 1.1 }}>
          Gaurav Anand
        </h1>
        <p
          style={{
            fontSize: '14px',
            color: '#8bf0ff',
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            marginTop: '10px',
            letterSpacing: '0.05em',
          }}
        >
          C++ Systems Engineer · 6.5 years · Noida, India
        </p>
        <p
          style={{
            fontSize: '16px',
            color: '#c8d2f0',
            maxWidth: '520px',
            margin: '24px auto 0',
            lineHeight: 1.7,
          }}
        >
          Systems-focused engineer specializing in modern C++, multithreading, and
          event-driven architecture. Background in EDA, distributed systems, and
          performance-critical infrastructure.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '36px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="hero-btn" style={btnStyle}>
            Projects
          </a>
          <a href="#experience" className="hero-btn" style={btnStyle}>
            Experience
          </a>
          <a
            href="https://github.com/gauravanand-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            style={btnStyle}
          >
            GitHub ↗
          </a>
          <a
            href="mailto:gaurav.anand54@gmail.com"
            className="hero-btn"
            style={btnStyle}
          >
            Contact
          </a>
        </div>
      </div>
      <style>{`
        .hero-btn:hover { border-color: #67e8f9 !important; color: #67e8f9 !important; background: rgba(103, 232, 249, 0.08) !important; }
      `}</style>
    </section>
  )
}

const btnStyle: React.CSSProperties = {
  border: '1px solid #3a4977',
  padding: '8px 18px',
  fontSize: '14px',
  color: '#f7f9ff',
  textDecoration: 'none',
  borderRadius: '6px',
  background: '#151d39',
  cursor: 'pointer',
  transition: 'border-color 150ms, color 150ms, background 150ms',
}
