import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata={title:'Terms of Use',description:'Website terms for ga.tech.',alternates:{canonical:'/terms'}}

export default function TermsPage(){return <><Nav/><main id="main-content" className="legal-page"><div className="site-shell legal-shell"><p className="company-kicker">LEGAL</p><h1>Terms of Use</h1><p className="legal-updated">Last updated: 23 September 2026</p>
<section><h2>Website use</h2><p>This website describes ga.tech services, buyer guidance, sample scenarios and ways to submit enquiries. Website content is informational and may change as services and business operations evolve.</p></section>
<section><h2>Enquiries are not contracts</h2><p>Submitting a project brief, discovery request, referral or newsletter signup does not create a client relationship or obligation to perform work. Paid work begins only after scope, commercial terms and responsibilities are agreed in writing.</p></section>
<section><h2>Planning ranges and timelines</h2><p>Published budget and timeline ranges are directional planning guidance, not binding quotes or delivery commitments. Final pricing and schedules depend on requirements, dependencies, revisions, third-party services, technical uncertainty and agreed acceptance criteria.</p></section>
<section><h2>Proof and illustrative scenarios</h2><p>Founder-experience case studies are identified as founder experience. Illustrative scenarios are explicitly labeled and are not client claims, testimonials or evidence that a particular result was achieved for a ga.tech customer.</p></section>
<section><h2>Intellectual property</h2><p>Ownership and licensing of project code, designs, source files, content and third-party assets are defined in the relevant proposal, statement of work or contract. Existing ga.tech materials remain the property of their respective owners unless agreed otherwise.</p></section>
<section><h2>Third-party services</h2><p>Projects may depend on hosting, APIs, software, payment providers, AI models or other third-party services. Their availability, pricing and terms are outside ga.tech’s control.</p></section>
<section><h2>Acceptable enquiries</h2><p>Do not use the website to request unlawful, deceptive, abusive or rights-infringing work, or to transmit malware, credentials or confidential information you are not authorized to share.</p></section>
<section><h2>Contact</h2><p>Questions about these website terms can be sent through the contact page.</p></section>
</div></main><Footer/></>}
