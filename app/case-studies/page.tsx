import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { caseStudies } from '@/lib/sales'

export const metadata: Metadata = { title:'Case Studies & Proof', description:'Founder-experience case studies and clearly labeled illustrative engagement scenarios from ga.tech.', alternates:{canonical:'/case-studies'} }

export default function CaseStudiesPage(){
 const real=caseStudies.filter(x=>x.kind==='Founder experience'); const samples=caseStudies.filter(x=>x.kind==='Illustrative scenario')
 return <><Nav/><main className="company-page"><section className="company-hero"><div className="site-shell"><p className="company-kicker">PROOF</p><h1>Evidence first. Sample scenarios are labeled as samples.</h1><p>ga.tech is early in its public client history, so this page separates real founder experience from illustrative examples instead of inventing clients or testimonials.</p></div></section>
 <section className="company-section"><div className="site-shell"><div className="company-section-heading"><p className="company-kicker">FOUNDER EXPERIENCE</p><h2>Real delivery experience behind ga.tech.</h2></div><div className="case-study-grid">{real.map(c=><article key={c.slug} className="case-study-card"><span>{c.kind}</span><h3>{c.title}</h3><h4>Challenge</h4><p>{c.challenge}</p><h4>Approach</h4><p>{c.approach}</p><h4>Outcome</h4><p>{c.outcome}</p><small>{c.proofNote}</small></article>)}</div></div></section>
 <section className="company-section company-soft-section"><div className="site-shell"><div className="company-section-heading"><p className="company-kicker">ILLUSTRATIVE SCENARIOS</p><h2>What a typical engagement could look like.</h2></div><div className="case-study-grid">{samples.map(c=><article key={c.slug} className="case-study-card sample"><span>{c.kind}</span><h3>{c.title}</h3><p>{c.challenge}</p><p><strong>Approach:</strong> {c.approach}</p><p><strong>Potential outcome:</strong> {c.outcome}</p><small>{c.proofNote}</small></article>)}</div></div></section></main><Footer/></>
}
