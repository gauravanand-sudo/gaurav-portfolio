import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Start a Project',
  description: 'Send a project brief to ga.tech for apps, AI, design, content, automation, backend, cloud or custom digital work.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage({ searchParams }: { searchParams?: { request?: string } }) {
  const requested = searchParams?.request || ''

  return (
    <>
      <Nav />
      <main className="company-page">
        <section className="company-hero contact-hero">
          <div className="site-shell contact-hero-grid">
            <div>
              <p className="company-kicker">START A PROJECT</p>
              <h1>Tell us what you need. A rough idea is enough.</h1>
              <p>Share the outcome, timeline and budget range. You’ll get a clearer next step instead of a generic sales reply.</p>
              <div className="contact-trust-list">
                <span>✓ No polished specification required</span>
                <span>✓ Scope and milestones before work starts</span>
                <span>✓ Fixed-scope or milestone-based engagements</span>
                <span>✓ Source files/code handover can be included</span>
              </div>
            </div>
            <aside className="contact-direct-card">
              <p className="company-kicker">PREFER DIRECT CONTACT?</p>
              <h2>Use email or WhatsApp.</h2>
              <a href="mailto:gaurav.anand54@gmail.com">gaurav.anand54@gmail.com</a>
              <a href="https://wa.me/919289656293?text=Hi%20ga.tech%2C%20I%20have%20a%20project%20I%27d%20like%20to%20discuss." target="_blank" rel="noopener noreferrer">WhatsApp →</a>
              <small>Remote · Worldwide</small>
            </aside>
          </div>
        </section>

        <section className="company-section contact-form-section">
          <div className="site-shell contact-form-layout">
            <div className="contact-form-copy">
              <p className="company-kicker">PROJECT BRIEF</p>
              <h2>Give us enough context to respond usefully.</h2>
              <p>Fields marked * are required. Attach a reference image, PDF or brief if it makes the request easier to understand.</p>
            </div>

            <form
              className="lead-form"
              action="https://formsubmit.co/gaurav.anand54@gmail.com"
              method="POST"
              encType="multipart/form-data"
            >
              <input type="hidden" name="_subject" value="New ga.tech project brief" />
              <input type="hidden" name="_next" value="https://gauravanand.tech/thank-you" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thanks for contacting ga.tech. Your project brief has been received. We’ll review it and reply with the clearest next step." />
              <input type="text" name="_honey" className="lead-honey" tabIndex={-1} autoComplete="off" />

              <div className="lead-form-grid two-col">
                <label>
                  <span>Name *</span>
                  <input type="text" name="name" required placeholder="Your name" />
                </label>
                <label>
                  <span>Email *</span>
                  <input type="email" name="email" required placeholder="you@company.com" />
                </label>
              </div>

              <div className="lead-form-grid two-col">
                <label>
                  <span>Company / brand</span>
                  <input type="text" name="company" placeholder="Company or brand name" />
                </label>
                <label>
                  <span>Phone / WhatsApp</span>
                  <input type="tel" name="phone" placeholder="+91..." />
                </label>
              </div>

              <label>
                <span>What do you need? *</span>
                <input type="text" name="request" required defaultValue={requested} placeholder="Example: food delivery app, AI chatbot, pitch deck, automation..." />
              </label>

              <div className="lead-form-grid three-col">
                <label>
                  <span>Category *</span>
                  <select name="category" required defaultValue="">
                    <option value="" disabled>Select</option>
                    <option>Apps / websites / MVP</option>
                    <option>AI / automation</option>
                    <option>Design / graphics</option>
                    <option>Content / marketing</option>
                    <option>Game / interactive</option>
                    <option>Data / dashboard / research</option>
                    <option>Backend / API / cloud</option>
                    <option>Presentation / documents</option>
                    <option>Custom / not listed</option>
                  </select>
                </label>
                <label>
                  <span>Budget range *</span>
                  <select name="budget" required defaultValue="">
                    <option value="" disabled>Select</option>
                    <option>₹25k or less</option>
                    <option>₹25k – ₹1L</option>
                    <option>₹1L – ₹5L</option>
                    <option>₹5L+</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label>
                  <span>Timeline *</span>
                  <select name="timeline" required defaultValue="">
                    <option value="" disabled>Select</option>
                    <option>ASAP / urgent</option>
                    <option>2–4 weeks</option>
                    <option>1–3 months</option>
                    <option>3+ months</option>
                    <option>Flexible / exploring</option>
                  </select>
                </label>
              </div>

              <label>
                <span>Project brief *</span>
                <textarea name="message" required rows={7} placeholder="What problem are you solving? Who will use it? What should the finished result do? What already exists?" />
              </label>

              <div className="lead-form-grid two-col">
                <label>
                  <span>Existing website / reference link</span>
                  <input type="url" name="reference_url" placeholder="https://..." />
                </label>
                <label>
                  <span>Attachment</span>
                  <input type="file" name="attachment" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" />
                </label>
              </div>

              <label className="consent-row">
                <input type="checkbox" required name="privacy_consent" value="yes" />
                <span>I agree that ga.tech may use this information to evaluate and respond to my request. See the <Link href="/privacy">Privacy Policy</Link>.</span>
              </label>

              <button type="submit" className="button button-primary lead-submit">Send project brief →</button>
              <p className="lead-form-note">The first form submission may require a one-time email activation before future leads are delivered automatically.</p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
