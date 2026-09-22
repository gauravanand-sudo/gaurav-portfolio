import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Start a Project',
  description: 'Send a project brief to ga.tech for product, AI automation, creative or cloud work.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage({ searchParams }: { searchParams?: { request?: string } }) {
  const requested = searchParams?.request || ''

  return (
    <>
      <Nav />
      <main id="main-content" className="company-page">
        <section className="company-hero contact-hero">
          <div className="site-shell contact-hero-grid">
            <div>
              <p className="company-kicker">START A PROJECT</p>
              <h1>Tell us the outcome. A rough brief is enough.</h1>
              <p>Share what should be different after the work is complete, any hard constraints and the rough timeline. We’ll use that to propose the clearest next step.</p>
              <div className="contact-trust-list">
                <span>✓ No polished specification required</span>
                <span>✓ Clear scope before meaningful work starts</span>
                <span>✓ Fixed-scope, milestone or ongoing support models</span>
                <span>✓ Target response: within 1 business day</span>
              </div>
            </div>

            <aside className="contact-direct-card">
              <p className="company-kicker">WANT TO TALK IT THROUGH?</p>
              <h2>Use WhatsApp for a quick first conversation.</h2>
              <p>Useful when the problem is clear but the right solution is not.</p>
              <a href="https://wa.me/919289656293?text=Hi%20ga.tech%2C%20I%20have%20a%20project%20I%27d%20like%20to%20discuss." target="_blank" rel="noopener noreferrer">Start on WhatsApp →</a>
              <a href="mailto:gaurav.anand54@gmail.com">Email ga.tech →</a>
              <small>Remote · Worldwide</small>
            </aside>
          </div>
        </section>

        <section className="company-section contact-form-section">
          <div className="site-shell contact-form-layout">
            <div className="contact-form-copy">
              <p className="company-kicker">PROJECT BRIEF</p>
              <h2>Give us enough context to respond usefully.</h2>
              <p>Required fields are intentionally limited. Extra details can be added if they help.</p>

              <div className="what-happens-next">
                <strong>What happens next</strong>
                <ol>
                  <li>We review the request and constraints.</li>
                  <li>We reply with questions, a suggested scope path or a clear “not a fit.”</li>
                  <li>If useful, we move to scope, milestones and commercial terms.</li>
                </ol>
              </div>
            </div>

            <form className="lead-form" action="https://formsubmit.co/gaurav.anand54@gmail.com" method="POST" encType="multipart/form-data">
              <input type="hidden" name="_subject" value="New ga.tech project brief" />
              <input type="hidden" name="_next" value="https://gauravanand.tech/thank-you" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thanks for contacting ga.tech. Your project brief has been received. We’ll review it and reply with the clearest next step." />
              <input type="text" name="_honey" className="lead-honey" tabIndex={-1} autoComplete="off" />

              <fieldset className="lead-fieldset">
                <legend>1. Contact</legend>
                <div className="lead-form-grid two-col">
                  <label><span>Name *</span><input type="text" name="name" required autoComplete="name" placeholder="Your name" /></label>
                  <label><span>Email *</span><input type="email" name="email" required autoComplete="email" placeholder="you@company.com" /></label>
                </div>
                <div className="lead-form-grid two-col">
                  <label><span>Company / brand</span><input type="text" name="company" autoComplete="organization" placeholder="Optional" /></label>
                  <label><span>Phone / WhatsApp</span><input type="tel" name="phone" autoComplete="tel" placeholder="Optional" /></label>
                </div>
              </fieldset>

              <fieldset className="lead-fieldset">
                <legend>2. Project</legend>
                <label><span>What do you need? *</span><input type="text" name="request" required defaultValue={requested} placeholder="Example: MVP, AI workflow, website, pitch deck..." /></label>
                <div className="lead-form-grid two-col">
                  <label>
                    <span>Budget range *</span>
                    <select name="budget" required defaultValue="">
                      <option value="" disabled>Select a range</option>
                      <option>Under ₹50k / equivalent</option>
                      <option>₹50k – ₹2L / equivalent</option>
                      <option>₹2L – ₹8L / equivalent</option>
                      <option>₹8L+ / equivalent</option>
                      <option>Exploring / need guidance</option>
                    </select>
                  </label>
                  <label>
                    <span>Timeline *</span>
                    <select name="timeline" required defaultValue="">
                      <option value="" disabled>Select</option>
                      <option>Urgent / ASAP</option>
                      <option>2–4 weeks</option>
                      <option>1–3 months</option>
                      <option>3+ months</option>
                      <option>Flexible / exploring</option>
                    </select>
                  </label>
                </div>
                <label><span>Project context *</span><textarea name="message" required rows={6} placeholder="What problem are you solving? Who will use it? What should the finished result do? What already exists?" /></label>
              </fieldset>

              <details className="optional-details">
                <summary>Add optional references <span aria-hidden="true">+</span></summary>
                <div className="lead-form-grid two-col">
                  <label><span>Existing website / reference link</span><input type="url" name="reference_url" placeholder="https://..." /></label>
                  <label><span>Attachment</span><input type="file" name="attachment" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" /></label>
                </div>
              </details>

              <label className="consent-row">
                <input type="checkbox" required name="privacy_consent" value="yes" />
                <span>I agree that ga.tech may use this information to evaluate and respond to my request. See the <Link href="/privacy">Privacy Policy</Link>.</span>
              </label>

              <button type="submit" className="button button-primary lead-submit">Send project brief →</button>
              <p className="form-expectation">No obligation. If the request is not a fit, we will say so clearly.</p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
