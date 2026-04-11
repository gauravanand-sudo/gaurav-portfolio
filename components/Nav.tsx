import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="shell nav-shell">
        <Link href="/" className="brand-mark">
          Gaurav Anand
        </Link>
        <div className="nav-links">
          <Link href="/#projects" className="nav-link">
            Projects
          </Link>
          <Link href="/#experience" className="nav-link">
            Experience
          </Link>
          <Link href="/#skills" className="nav-link">
            Skills
          </Link>
          <a
            href="https://github.com/gauravanand-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            GitHub
          </a>
          <a href="mailto:gaurav.anand54@gmail.com" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
