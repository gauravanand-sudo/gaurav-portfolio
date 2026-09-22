import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata={title:'Start a Project',description:'Request scope from ga.tech for product, AI automation, creative or cloud work.',alternates:{canonical:'/contact'}}

export default function ContactPage({searchParams}:{searchParams?:{request?:string}}){
 const requested=searchParams?.request||''
 const publicSalesEmail=process.env.PUBLIC_SALES_EMAIL
 return <><Nav/><main id="main-content" className="company-page"><section className="company-hero contact-hero"><div className="site-shell contact-hero-grid"><div><p className="company-kicker">REQUEST SCOPE</p><h1>Tell us the outcome. A rough brief is enough.</h1><p>This path is best when you broadly know what you want built. If the right solution is still unclear, use discovery instead.</p><div className="contact-trust-list"><span>✓ Progressive 3-step brief</span><span>✓ Budget and timing captured upfront</span><span>✓ Source attribution and lead qualification built in</span><span>✓ Target response within 1 business day</span></div></div><aside className="contact-direct-card"><p className="company-kicker">NOT SURE YET?</p><h2>Book a 20-minute discovery conversation.</h2><p>Use discovery to decide the right path before asking for a full scope.</p><Link href="/book">Book discovery →</Link>{publicSalesEmail?<a href={`mailto:${publicSalesEmail}`}>{publicSalesEmail}</a>:null}<a href="https://wa.me/919289656293?text=Hi%20ga.tech%2C%20I%20have%20a%20project%20I%27d%20like%20to%20discuss." target="_blank" rel="noopener noreferrer" data-track="whatsapp_click">Start on WhatsApp →</a><small>Remote · Worldwide</small></aside></div></section><section className="company-section contact-form-section"><div className="site-shell contact-form-layout"><div className="contact-form-copy"><p className="company-kicker">PROJECT BRIEF</p><h2>Three short steps.</h2><p>Problem first, then budget/timing, then contact details. That reduces form friction while keeping qualification useful.</p><div className="what-happens-next"><strong>What happens next</strong><ol><li>Lead is scored and source-attributed.</li><li>We review fit, constraints and likely delivery path.</li><li>You get questions, a suggested scope path or a clear “not a fit.”</li></ol></div></div><LeadForm defaultRequest={requested}/></div></section></main><Footer/></>
}
