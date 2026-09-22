import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { companyServices } from '@/lib/company-services'

export const metadata: Metadata = {
  title: 'Digital Product, AI & Creative Services',
  description: 'Founder-led product, AI automation, creative and cloud delivery for startups and growing businesses.',
  alternates: { canonical: '/services' },
}

const requestGroups: [string, string[]][] = [
  ['Products', ['Business website', 'Landing page', 'SaaS MVP', 'Customer portal', 'Booking flow', 'Marketplace']],
  ['Automation', ['AI chatbot', 'RAG knowledge assistant', 'Document workflow', 'CRM automation', 'Recurring reports', 'Research workflow']],
  ['Creative', ['Launch creative', 'Pitch deck', 'Social media pack', 'Poster system', 'SEO content', 'Landing-page copy']],
  ['Technical', ['API/backend', 'Cloud deployment', 'Authentication', 'Payments integration', 'Database service', 'Performance tuning']],
]

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="company-page">
        <section className="company-hero compact-company-hero">
          <div className="site-shell">
            <p className="company-kicker">SERVICES</p>
            <h1>Start with the outcome. We’ll assemble the right delivery path.</h1>
            <p>ga.tech combines product engineering, AI automation, creative delivery and cloud execution so growing teams do not need to coordinate several vendors for one launch.</p>
            <div className="company-hero-actions">
              <Link className="button button-primary button-lg" href="/contact">Request scope →</Link>
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
                  {service.idealFor.slice(0,4).map((item) => <span key={item}>{item}</span>)}
                </div>
                <Link href={`/services/${service.slug}`} className="company-text-link">Explore this service →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="company-section company-soft-section">
          <div className="site-shell">
            <div className="company-section-heading">
              <p className="company-kicker">COMMON REQUESTS</p>
              <h2>Not sure which service label fits? That is normal.</h2>
              <p className="section-support-copy">Describe the result you want. These examples show the kinds of work that can sit inside the four service pillars.</p>
            </div>
            <div className="request-group-grid">
              {requestGroups.map(([group, items]) => (
                <article key={group}>
                  <h3>{group}</h3>
                  <div>{items.map((item) => <Link href={`/contact?request=${encodeURIComponent(item)}`} key={item}>{item}<span>→</span></Link>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="company-section">
          <div className="site-shell">
            <div className="company-section-heading">
              <p className="company-kicker">ENGAGEMENT MODELS</p>
              <h2>Different problems need different commercial shapes.</h2>
            </div>
            <div className="engagement-grid">
              <article><span>FOCUSED</span><h3>Fixed-scope sprint</h3><p>For a clearly defined website, deck, automation, design system, landing page or technical task.</p><strong>One defined outcome · written acceptance points</strong></article>
              <article><span>MILESTONE</span><h3>Product project</h3><p>For MVPs, applications and larger workflows that should move through visible delivery checkpoints.</p><strong>Scope → milestone demos → QA → launch</strong></article>
              <article><span>ONGOING</span><h3>Support & iteration</h3><p>For maintenance, feature work, content production, cloud support and recurring creative needs.</p><strong>Monthly or milestone-based follow-on support</strong></article>
            </div>
          </div>
        </section>

        <section className="company-section company-soft-section">
          <div className="site-shell company-split">
            <div><p className="company-kicker">NEXT STEP</p><h2>Send the problem, not a polished specification.</h2></div>
            <div>
              <p>Include the outcome you want, who will use it, any hard constraints, a rough budget range and your preferred timeline. That is enough to start a useful scope conversation.</p>
              <Link className="button button-primary" href="/contact">Start a project brief →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
