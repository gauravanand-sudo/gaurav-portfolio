export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #141414',
      padding: '36px 0',
      marginTop: '40px',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: '12px',
          color: '#3a3a3a',
          letterSpacing: '0.05em',
        }}>
          © 2025 Gaurav Anand
        </span>
        <a
          href="mailto:gaurav.anand54@gmail.com"
          className="footer-email"
        >
          gaurav.anand54@gmail.com
        </a>
      </div>
      <style>{`
        .footer-email {
          font-size: 13px;
          color: #505050;
          text-decoration: none;
          transition: color 150ms ease;
        }
        .footer-email:hover { color: #a0a0a0; }
      `}</style>
    </footer>
  )
}
