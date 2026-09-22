import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About',
  description: 'About ga.tech, a founder-led digital studio for building, automating, creating and launching digital work.',
  alternates: { canonical: '/about' },
}

const principles = [
  ['Concrete before clever', 'Start with the business outcome, user and constraint. Technology follows the job.'],
  ['Smallest useful version', 'Validate the risky part first instead of spending weeks polishing an assumption.'],
  ['Clear ownership', 'Scope, milestones, feedback points and handover expectations should be explicit before work starts.'],
  ['No fake scale', 'The company does not use invented client logos, testimonials or delivery metrics. Proof should be real.'],
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="company-page">
        <section className="company-hero">
          <div className="site-shell">
            <p className="company-kicker">ABOUT GA.TECH</p>
            <h1>A founder-led digital studio built to turn ambiguous requests into finished work.</h1>
            <p>ga.tech combines software, AI, automation, design and content under one operating model: understand the result, scope the work, build it, hand it over clearly.</p>
            <div className="company-hero-actions">
              <Link className="button button-primary button-lg" href="/contact">Start a project →</Link>
              <Link className="button button-secondary button-lg" href="/portfolio">Founder portfolio</Link>
            </div>
          </div>
        </section>

        <section className="company-section">
          <div className="site-shell company-split">
            <div>
              <p className="company-kicker">WHY THE COMPANY EXISTS</p>
              <h2>Most digital work crosses categories.</h2>
            </div>
            <div>
              <p>A landing page may need design, copy, analytics and deployment. An AI assistant may need data ingestion, backend APIs, UI and cloud infrastructure. A launch may need a product, pitch deck, posters and content at the same time.</p>
              <p>ga.tech is structured around the outcome rather than forcing every request into one narrow service label.</p>
            </div>
          </div>
        </section>

        <section className="company-section company-soft-section">
          <div className="site-shell">
            <div className="company-section-heading">
              <p className="company-kicker">OPERATING PRINCIPLES</p>
              <h2>How work should feel.</h2>
            </div>
            <div className="principle-grid">
              {principles.map(([title, copy], index) => (
                <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="company-section">
          <div className="site-shell company-split">
            <div>
              <p className="company-kicker">COMPANY STAGE</p>
              <h2>Founder-led today. Built to become a broader digital company.</h2>
            </div>
            <div>
              <p>The site separates the company offering from the founder’s personal résumé. If you want the individual engineering background behind ga.tech, it lives on the Portfolio page.</p>
              <Link className="company-text-link" href="/portfolio">View founder portfolio →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
