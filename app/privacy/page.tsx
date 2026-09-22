import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for ga.tech.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="site-shell legal-shell">
          <p className="company-kicker">LEGAL</p>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: 23 September 2026</p>

          <section><h2>What we collect</h2><p>When you contact ga.tech or submit a project brief, we may collect your name, email address, phone number, company name, project details, budget/timeline selections, links and files you choose to provide.</p></section>
          <section><h2>How we use it</h2><p>We use submitted information to evaluate your request, communicate with you, prepare scope or estimates, prevent abuse, and—if an engagement begins—deliver and support the agreed work.</p></section>
          <section><h2>Form processing</h2><p>The project brief form is processed using a third-party form delivery provider and sent to ga.tech by email. Do not submit passwords, financial credentials, government IDs or other highly sensitive information through the website form.</p></section>
          <section><h2>Files and retention</h2><p>We keep project correspondence only as long as reasonably necessary for evaluation, delivery, support, record-keeping or legal obligations. Third-party infrastructure providers may retain data according to their own policies.</p></section>
          <section><h2>Sharing</h2><p>We do not sell personal information. Information may be shared with infrastructure or service providers only when needed to operate the website, process a request or deliver agreed work.</p></section>
          <section><h2>Your choices</h2><p>You may ask us to correct or delete information you submitted, subject to legitimate record-keeping or legal requirements. Contact us at gaurav.anand54@gmail.com.</p></section>
          <section><h2>Changes</h2><p>This policy may be updated as ga.tech adds tools, integrations or formal business operations. The latest version will appear on this page.</p></section>
        </div>
      </main>
      <Footer />
    </>
  )
}
