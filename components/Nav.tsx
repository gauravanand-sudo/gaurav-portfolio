'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Founder', href: '/portfolio' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  const isCurrent = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="site-shell nav-inner nav-inner-v2">
        <Link href="/" className="brand-lockup" aria-label="ga.tech home">
          <img className="brand-logo-image" src="/brand/ga-tech-logo.webp" alt="ga.tech" />
        </Link>

        <div className="nav-links nav-links-v2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link"
              aria-current={isCurrent(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <Link className="nav-cta" href="/contact">Start a project <span aria-hidden="true">→</span></Link>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="mobile-navigation is-open">
          <div className="site-shell mobile-navigation-inner">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="mobile-nav-link"
                aria-current={isCurrent(link.href) ? 'page' : undefined}
              >
                {link.label}<span aria-hidden="true">→</span>
              </Link>
            ))}
            <Link href="/contact" className="button button-primary mobile-project-cta">Request scope →</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
