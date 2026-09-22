import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = { title:'Book Discovery', description:'Request a 20-minute discovery conversation with ga.tech.', alternates:{canonical:'/book'} }

export default function BookPage(){
 const bookingUrl=process.env.BOOKING_URL
 return <><Nav/><main id="main-content" className="company-page"><section className="company-hero"><div className="site-shell"><p className="company-kicker">20-MINUTE DISCOVERY</p><h1>Not sure what to build yet? Start with the decision.</h1><p>Use discovery when you know the business problem but want help choosing the right product, automation or delivery path.</p>{bookingUrl?<div className="company-hero-actions"><a data-track="calendar_opened" className="button button-primary button-lg" href={bookingUrl} target="_blank" rel="noopener noreferrer">Open live calendar →</a></div>:null}</div></section><section className="company-section"><div className="site-shell contact-form-layout"><div className="contact-form-copy"><p className="company-kicker">{bookingUrl?'PREFER A REQUEST INSTEAD?':'REQUEST A SLOT'}</p><h2>{bookingUrl?'Send context before we speak.':'A short fit-and-direction conversation.'}</h2><p>{bookingUrl?'If you would rather send the problem first, use the form and suggest a date/time.':'This is not a free consulting workshop. It is a focused discussion to understand the problem, fit and likely next step. Add a preferred date/time and we will confirm availability.'}</p></div><LeadForm mode="discovery"/></div></section></main><Footer/></>
}
