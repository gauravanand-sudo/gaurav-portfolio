import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = { title:'Refer a Project', robots:{index:false,follow:true} }
export default function ReferPage(){ return <><Nav/><main className="company-page"><section className="company-hero"><div className="site-shell"><p className="company-kicker">REFERRALS</p><h1>Know a team that needs product, AI or launch help?</h1><p>Use this form to introduce the opportunity. Please only share contact details you are authorized to share.</p></div></section><section className="company-section"><div className="site-shell contact-form-layout"><div className="contact-form-copy"><h2>Make the introduction easy.</h2><p>Add “Referral:” at the start of the project field and explain who the opportunity is for.</p></div><LeadForm defaultRequest="Referral: " /></div></section></main><Footer/></> }
