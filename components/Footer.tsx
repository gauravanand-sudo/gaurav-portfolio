export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #1a1a1a',
        padding: '32px 0',
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
        }}
      >
        <span style={{ fontSize: '13px', color: '#444444' }}>
          &copy; 2025 Gaurav Anand
        </span>
        <a
          href="mailto:gaurav_2503mth128@iitp.ac.in"
          style={{
            fontSize: '13px',
            color: '#444444',
            textDecoration: 'none',
          }}
        >
          gaurav_2503mth128@iitp.ac.in
        </a>
      </div>
    </footer>
  )
}
