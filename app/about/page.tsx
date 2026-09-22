import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About ga.tech',
  description: 'ga.tech is a founder-led digital product studio for startups and growing businesses.',
  alternates: { canonical: '/about' },
}

const principles = [
  ['Outcome before technology', 'Start with the business result, user and constraint. Choose technology because it fits the job.'],
  ['De-risk early', 'Prototype the uncertain part before spending weeks polishing assumptions.'],
  ['Visible ownership', 'Scope, milestones, acceptance points and handover expectations should be explicit.'],
  ['Proof over claims', 'Do not invent client logos, delivery metrics or testimonials. Build trust with real evidence.'],
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="company-page">
        <section className="company-hero">
          <div className="site-shell">
            <p className="company-kicker">ABOUT GA.TECH</p>
            <h1>Founder-led digital delivery across product, AI, creative and cloud.</h1>
            <p>ga.tech helps startups and growing businesses move from an ambiguous digital need to a scoped, usable outcome—without coordinating several disconnected vendors.</p>
            <div className="company-hero-actions">
              <Link className="button button-primary button-lg" href="/contact">Request scope →</Link>
              <Link className="button button-secondary button-lg" href="/portfolio">Founder background</Link>
            </div>
          </div>
        </section>

        <section className="company-section">
          <div className="site-shell company-split">
            <div><p className="company-kicker">WHY THIS MODEL</p><h2>Most digital problems cross disciplines.</h2></div>
            <div>
              <p>A product launch may need UX, frontend, backend, content, analytics and deployment. An AI workflow may need data preparation, integrations, evaluation, UI and cloud infrastructure.</p>
              <p>ga.tech is organized around the outcome rather than forcing the buyer to manage several vendors for one connected result.</p>
            </div>
          </div>
        </section>

        <section className="company-section founder-story-section">
          <div className="site-shell founder-story-grid">
            <div>
              <p className="company-kicker">FOUNDER</p>
              <h2>Senior engineering depth stays close to delivery.</h2>
              <p>ga.tech is led by Gaurav Anand, an R&D Staff Software Engineer with 7+ years across systems software, backend/cloud infrastructure and applied AI.</p>
              <p>Prior engineering experience includes Synopsys, Cadence, Interra Systems and Texas Instruments. Those companies are part of the founder’s work history, not ga.tech clients or endorsements.</p>
              <Link className="company-text-link" href="/portfolio">View full résumé →</Link>
            </div>
            <div className="founder-proof-list">
              <article><span>SYSTEMS</span><strong>Performance-critical C++ and concurrency</strong><p>Work across multicore simulation, synchronization and systems debugging.</p></article>
              <article><span>AI</span><strong>Applied RAG and knowledge workflows</strong><p>Built internal retrieval workflows over payment and operational documentation.</p></article>
              <article><span>PLATFORM</span><strong>Backend, cloud and large-codebase delivery</strong><p>Experience spanning APIs, Kubernetes, platform migration and production releases.</p></article>
            </div>
          </div>
        </section>

        <section className="company-section company-soft-section">
          <div className="site-shell">
            <div className="company-section-heading"><p className="company-kicker">OPERATING PRINCIPLES</p><h2>How work should feel.</h2></div>
            <div className="principle-grid">
              {principles.map(([title, copy], index) => (
                <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="company-section">
          <div className="site-shell company-split">
            <div><p className="company-kicker">WHAT CLIENTS CAN EXPECT</p><h2>Clarity before commitment.</h2></div>
            <div>
              <p>Every engagement should make ownership, deliverables, assumptions, milestones and handover expectations clear before meaningful work begins.</p>
              <p>Target response for new project enquiries: within 1 business day.</p>
              <Link className="button button-primary" href="/contact">Start a project brief →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
