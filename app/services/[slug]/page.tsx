import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { companyServices, getCompanyService } from '@/lib/company-services'

export function generateStaticParams() {
  return companyServices.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getCompanyService(params.slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getCompanyService(params.slug)
  if (!service) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    provider: {
      '@type': 'Organization',
      name: 'ga.tech',
      url: 'https://gauravanand.tech',
    },
    areaServed: 'Worldwide',
  }

  return (
    <>
      <Nav />
      <main className="company-page">
        <section className="company-hero service-detail-hero">
          <div className="site-shell">
            <Link href="/services" className="company-back-link">← All services</Link>
            <p className="company-kicker">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p>{service.summary}</p>
            <div className="company-hero-actions">
              <Link className="button button-primary button-lg" href={`/contact?request=${encodeURIComponent(service.title)}`}>Get scope & estimate →</Link>
              <Link className="button button-secondary button-lg" href="/about">How ga.tech works</Link>
            </div>
          </div>
        </section>

        <section className="company-section">
          <div className="site-shell service-detail-grid">
            <div className="service-detail-block">
              <p className="company-kicker">GOOD FIT FOR</p>
              <ul className="company-check-list">{service.idealFor.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="service-detail-block">
              <p className="company-kicker">TYPICAL DELIVERABLES</p>
              <ul className="company-check-list">{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="service-detail-block">
              <p className="company-kicker">EXAMPLES</p>
              <ul className="company-check-list">{service.examples.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="service-detail-block">
              <p className="company-kicker">WHAT YOU SHOULD LEAVE WITH</p>
              <ul className="company-check-list">{service.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="company-section company-soft-section">
          <div className="site-shell company-split">
            <div>
              <p className="company-kicker">NEXT STEP</p>
              <h2>Send the brief. Get a practical response.</h2>
            </div>
            <div>
              <p>You don’t need a specification document. Share the problem, desired outcome, budget range and timeline. We’ll use that to scope the next step.</p>
              <Link className="button button-primary" href={`/contact?request=${encodeURIComponent(service.title)}`}>Start this project →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  )
}
