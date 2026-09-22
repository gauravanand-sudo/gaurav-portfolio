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
    provider: { '@type': 'Organization', name: 'ga.tech', url: 'https://gauravanand.tech' },
    areaServed: 'Worldwide',
  }

  return (
    <>
      <Nav />
      <main id="main-content" className="company-page">
        <section className="company-hero service-detail-hero">
          <div className="site-shell">
            <Link href="/services" className="company-back-link">← All services</Link>
            <p className="company-kicker">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p>{service.summary}</p>
            <div className="company-hero-actions">
              <Link className="button button-primary button-lg" href={`/contact?request=${encodeURIComponent(service.title)}`}>Request scope →</Link>
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
              <p className="company-kicker">EXPECTED OUTCOME</p>
              <ul className="company-check-list">{service.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="company-section company-soft-section">
          <div className="site-shell service-scope-grid">
            <div>
              <p className="company-kicker">WHAT CHANGES SCOPE</p>
              <h2>The same category can be a small sprint or a larger product engagement.</h2>
            </div>
            <ul className="scope-factor-list">
              {service.scopeFactors.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="company-section">
          <div className="site-shell">
            <div className="company-section-heading">
              <p className="company-kicker">DELIVERY FLOW</p>
              <h2>How this engagement usually moves.</h2>
            </div>
            <div className="delivery-flow-grid">
              {[
                ['01','Discover','Clarify users, desired result, dependencies and constraints.'],
                ['02','Scope','Agree deliverables, assumptions, milestones and ownership.'],
                ['03','Validate','Prototype or de-risk the highest-uncertainty part first.'],
                ['04','Build & QA','Deliver in visible checkpoints and test against the agreed scope.'],
                ['05','Launch','Deploy, hand over and define support if needed.'],
              ].map(([num,title,copy]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="company-section company-soft-section">
          <div className="site-shell company-split">
            <div><p className="company-kicker">NEXT STEP</p><h2>Send the outcome, constraints and timeline.</h2></div>
            <div>
              <p>You do not need a specification document. Share what should be different after this work is complete and any constraints we must respect.</p>
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
