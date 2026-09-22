import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Website terms for ga.tech.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="site-shell legal-shell">
          <p className="company-kicker">LEGAL</p>
          <h1>Terms of Use</h1>
          <p className="legal-updated">Last updated: 23 September 2026</p>

          <section><h2>Website use</h2><p>This website describes ga.tech services and provides a way to submit project enquiries. Website content is informational and may change as the company, services and capabilities evolve.</p></section>
          <section><h2>Enquiries are not contracts</h2><p>Submitting a form, requesting an estimate or exchanging preliminary messages does not create a client relationship or obligation to perform work. Paid work begins only after scope, commercial terms and responsibilities are agreed in writing.</p></section>
          <section><h2>Estimates and timelines</h2><p>Website examples are illustrative. Final pricing, milestones and timelines depend on requirements, dependencies, revisions, third-party services and technical uncertainty.</p></section>
          <section><h2>Intellectual property</h2><p>Ownership and licensing of project code, designs, source files, content and third-party assets should be defined in the relevant proposal, statement of work or contract. Existing ga.tech materials remain the property of their respective owners unless agreed otherwise.</p></section>
          <section><h2>Third-party services</h2><p>Projects may depend on hosting, APIs, software, payment providers, AI models or other third-party services. Their availability, pricing and terms are outside ga.tech’s control.</p></section>
          <section><h2>Acceptable enquiries</h2><p>Do not use the website to request unlawful, deceptive, abusive or rights-infringing work, or to transmit malware, credentials or confidential data you are not authorized to share.</p></section>
          <section><h2>Contact</h2><p>Questions about these website terms can be sent through the contact page.</p></section>
        </div>
      </main>
      <Footer />
    </>
  )
}
