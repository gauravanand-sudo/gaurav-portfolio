import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { companyServices } from '@/lib/company-services'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Apps, websites, AI automation, design, content, backend and cloud services from ga.tech.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="company-page">
        <section className="company-hero compact-company-hero">
          <div className="site-shell">
            <p className="company-kicker">SERVICES</p>
            <h1>Four ways to turn a business need into finished digital work.</h1>
            <p>Choose the closest fit. If your request crosses categories, send one brief and we’ll scope it as one engagement.</p>
            <div className="company-hero-actions">
              <Link className="button button-primary button-lg" href="/contact">Get scope & estimate →</Link>
              <Link className="button button-secondary button-lg" href="/about">How we work</Link>
            </div>
          </div>
        </section>

        <section className="company-section">
          <div className="site-shell service-pillar-grid">
            {companyServices.map((service, index) => (
              <article className="service-pillar-card" key={service.slug}>
                <span className="pillar-number">0{index + 1}</span>
                <p className="company-kicker">{service.eyebrow}</p>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <div className="pillar-examples">
                  {service.examples.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
                </div>
                <Link href={`/services/${service.slug}`} className="company-text-link">Explore this service →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="company-section company-soft-section">
          <div className="site-shell company-split">
            <div>
              <p className="company-kicker">NOT SURE WHERE IT FITS?</p>
              <h2>Describe the outcome, not the technology.</h2>
            </div>
            <div>
              <p>“I need a delivery app”, “our team wastes hours on reports”, “we need 20 launch creatives”, or “this backend keeps failing” is enough to start.</p>
              <Link className="button button-primary" href="/contact">Tell us what you need →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
