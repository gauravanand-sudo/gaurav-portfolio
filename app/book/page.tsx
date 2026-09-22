import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = { title:'Book Discovery', description:'Request a 20-minute discovery conversation with ga.tech.', alternates:{canonical:'/book'} }

export default function BookPage(){
 return <><Nav/><main className="company-page"><section className="company-hero"><div className="site-shell"><p className="company-kicker">20-MINUTE DISCOVERY</p><h1>Not sure what to build yet? Start with the decision.</h1><p>Use discovery when you know the business problem but want help choosing the right product, automation or delivery path.</p></div></section><section className="company-section"><div className="site-shell contact-form-layout"><div className="contact-form-copy"><p className="company-kicker">GOOD FOR</p><h2>A short fit-and-direction conversation.</h2><p>This is not a free consulting workshop. It is a focused discussion to understand the problem, fit and likely next step.</p></div><LeadForm mode="discovery"/></div></section></main><Footer/></>
}
