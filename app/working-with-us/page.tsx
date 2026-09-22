import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { commercialFaqs, carePlans } from '@/lib/sales'

export const metadata: Metadata = { title:'Working With ga.tech', description:'Commercial model, procurement, IP, support and risk controls for working with ga.tech.', alternates:{canonical:'/working-with-us'} }

export default function WorkingWithUs(){
 return <><Nav/><main className="company-page"><section className="company-hero"><div className="site-shell"><p className="company-kicker">WORKING WITH US</p><h1>Reduce delivery risk before the first invoice.</h1><p>Scope, ownership, acceptance, confidentiality and change handling should be explicit—not discovered halfway through a project.</p><div className="company-hero-actions"><Link className="button button-primary button-lg" href="/contact">Request scope →</Link><Link className="button button-secondary button-lg" href="/book">Book discovery</Link></div></div></section>
 <section className="company-section"><div className="site-shell risk-grid">{['Written scope before build','Milestone demos on larger projects','No silent scope changes','Acceptance criteria defined upfront','Source/code handover defined in writing','Stop/go decision between major phases'].map((x,i)=><article key={x}><span>0{i+1}</span><strong>{x}</strong></article>)}</div></section>
 <section className="company-section company-soft-section"><div className="site-shell"><div className="company-section-heading"><p className="company-kicker">ONGOING SUPPORT</p><h2>Recurring care after launch.</h2></div><div className="care-grid">{carePlans.map(p=><article key={p.title}><h3>{p.title}</h3><p>{p.fit}</p><ul>{p.includes.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div></div></section>
 <section className="company-section"><div className="site-shell faq-v2-grid"><div><p className="company-kicker">COMMERCIAL FAQ</p><h2>Questions procurement and buyers usually ask.</h2></div><div className="faq-v2-list">{commercialFaqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section></main><Footer/></>
}
