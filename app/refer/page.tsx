import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = { title:'Refer a Project', robots:{index:false,follow:true} }

export default function ReferPage(){
 return <><Nav/><main id="main-content" className="company-page"><section className="company-hero"><div className="site-shell"><p className="company-kicker">REFERRALS</p><h1>Know a team that needs product, AI or launch help?</h1><p>Use this path to introduce an opportunity. Only share contact details you are authorized to share. Referral opportunities are routed separately from ordinary inbound leads.</p></div></section><section className="company-section"><div className="site-shell contact-form-layout"><div className="contact-form-copy"><h2>Make the introduction easy.</h2><p>Explain who the opportunity is for, what they need, and whether you want ga.tech to contact them directly or reply to you first.</p><p className="section-support-copy">There is no public referral-fee promise. If a formal referral program is introduced later, its terms will be published separately.</p></div><LeadForm mode="referral" defaultRequest="Referral: " /></div></section></main><Footer/></>
}
