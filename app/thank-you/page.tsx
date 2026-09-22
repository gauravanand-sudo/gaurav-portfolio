import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Project Brief Received',
  robots: { index: false, follow: true },
}

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="company-page">
        <section className="company-hero thank-you-hero">
          <div className="site-shell thank-you-card">
            <span className="thank-you-check">✓</span>
            <p className="company-kicker">BRIEF RECEIVED</p>
            <h1>Thanks. The next step is clarity.</h1>
            <p>Your project details were submitted successfully. Target response time is within 1 business day.</p>

            <div className="thank-you-next">
              <div><strong>1</strong><span>We review the outcome, constraints and fit.</span></div>
              <div><strong>2</strong><span>We reply with questions or a recommended scope path.</span></div>
              <div><strong>3</strong><span>If useful, we move to milestones, commercial terms and kickoff.</span></div>
            </div>

            <div className="company-hero-actions">
              <Link className="button button-primary" href="/">Back to ga.tech</Link>
              <a className="button button-secondary" href="https://wa.me/919289656293?text=Hi%20ga.tech%2C%20I%20just%20submitted%20a%20project%20brief." target="_blank" rel="noopener noreferrer">Follow up on WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
