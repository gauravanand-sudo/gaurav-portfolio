import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SubscribeForm from '@/components/SubscribeForm'

export const metadata: Metadata = { title:'Free Resources', description:'Practical templates and buyer checklists from ga.tech.', alternates:{canonical:'/resources'} }

export default function ResourcesPage(){
 return <><Nav/><main className="company-page"><section className="company-hero"><div className="site-shell"><p className="company-kicker">FREE RESOURCES</p><h1>Useful before you hire anyone.</h1><p>Simple tools to make project conversations clearer and reduce expensive ambiguity.</p></div></section>
 <section className="company-section"><div className="site-shell resource-grid"><article><span>FREE TEMPLATE</span><h2>Project brief template</h2><p>A one-page checklist for audience, outcome, scope, proof, constraints, timeline and ownership.</p><a className="button button-primary" href="/resources/project-brief-template.md" download>Download template →</a></article><article><span>BUYER GUIDE</span><h2>MVP scope checklist</h2><p>Use the MVP cost guide to separate the primary user journey from the wish list before asking for estimates.</p><Link className="button button-secondary" href="/insights/how-much-does-an-mvp-cost-what-changes-the-scope">Read guide →</Link></article></div></section>
 <section className="company-section company-soft-section"><div className="site-shell nurture-grid"><div><p className="company-kicker">BUILD NOTES</p><h2>Get practical product, AI and delivery notes.</h2><p>No daily spam. Use this as a lightweight nurture path if you are interested but not ready to start a project.</p></div><SubscribeForm source="resources"/></div></section></main><Footer/></>
}
