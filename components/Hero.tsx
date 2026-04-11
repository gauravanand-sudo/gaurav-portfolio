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
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 600,
            color: '#ededed',
            lineHeight: 1.1,
          }}
        >
          Gaurav Anand
        </h1>
        <p
          style={{
            fontSize: '16px',
            color: '#666666',
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            marginTop: '8px',
          }}
        >
          Systems C++ Engineer
        </p>
        <p
          style={{
            fontSize: '16px',
            color: '#999999',
            maxWidth: '480px',
            marginTop: '24px',
            lineHeight: 1.6,
            margin: '24px auto 0',
          }}
        >
          I build high-performance systems software — simulation engines,
          compilers, and low-latency infrastructure.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '32px',
            justifyContent: 'center',
          }}
        >
          <a
            href="#projects"
            className="hero-btn"
            style={{
              border: '1px solid #333',
              padding: '8px 16px',
              fontSize: '14px',
              color: '#ededed',
              textDecoration: 'none',
              borderRadius: '6px',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            View Projects
          </a>
          <a
            href="https://github.com/gauravanand-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            style={{
              border: '1px solid #333',
              padding: '8px 16px',
              fontSize: '14px',
              color: '#ededed',
              textDecoration: 'none',
              borderRadius: '6px',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <style>{`
        .hero-btn:hover {
          border-color: #666 !important;
        }
      `}</style>
    </section>
  )
}
