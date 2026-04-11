export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #263154', padding: '32px 0', marginTop: '48px' }}>
      <div
        style={{
          maxWidth: '896px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span style={{ fontSize: '13px', color: '#94a3c7' }}>&copy; 2025 Gaurav Anand</span>
        <a
          href="mailto:gaurav.anand54@gmail.com"
          style={{ fontSize: '13px', color: '#c8d2f0', textDecoration: 'none' }}
        >
          gaurav.anand54@gmail.com
        </a>
      </div>
    </footer>
  )
}
