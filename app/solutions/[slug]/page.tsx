import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { solutions } from '@/lib/sales'

export function generateStaticParams(){ return solutions.map(s=>({slug:s.slug})) }
export function generateMetadata({params}:{params:{slug:string}}):Metadata{ const s=solutions.find(x=>x.slug===params.slug); if(!s)return{}; return{title:s.title,description:s.outcome,alternates:{canonical:`/solutions/${s.slug}`}} }

export default function SolutionPage({params}:{params:{slug:string}}){
 const s=solutions.find(x=>x.slug===params.slug); if(!s)notFound()
 return <><Nav/><main className="company-page"><section className="company-hero"><div className="site-shell"><Link href="/solutions" className="company-back-link">← All solutions</Link><p className="company-kicker">{s.eyebrow}</p><h1>{s.title}</h1><p>{s.pain}</p><div className="company-hero-actions"><Link className="button button-primary button-lg" href={`/contact?request=${encodeURIComponent(s.cta)}`}>Request scope →</Link><Link className="button button-secondary button-lg" href="/book">Book discovery</Link></div></div></section>
 <section className="company-section"><div className="site-shell company-split"><div><p className="company-kicker">OUTCOME</p><h2>What should be different after the work?</h2></div><div><p>{s.outcome}</p></div></div></section>
 <section className="company-section company-soft-section"><div className="site-shell service-detail-grid"><div className="service-detail-block"><p className="company-kicker">GOOD FIT FOR</p><ul className="company-check-list">{s.fit.map(x=><li key={x}>{x}</li>)}</ul></div><div className="service-detail-block"><p className="company-kicker">COMMON STARTING POINTS</p><ul className="company-check-list">{s.examples.map(x=><li key={x}>{x}</li>)}</ul></div></div></section>
 </main><Footer/></>
}
