import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { solutions } from '@/lib/sales'

export const metadata: Metadata = { title:'Solutions', description:'ga.tech solutions for startup founders, operations teams and marketing/launch teams.', alternates:{canonical:'/solutions'} }

export default function SolutionsPage(){
  return <><Nav/><main className="company-page"><section className="company-hero"><div className="site-shell"><p className="company-kicker">SOLUTIONS</p><h1>Different buyers have different reasons to call.</h1><p>Choose the situation closest to yours. Each path connects the business problem to a practical delivery model.</p></div></section><section className="company-section"><div className="site-shell solution-grid">{solutions.map((s,i)=><article className="solution-card" key={s.slug}><span className="solution-index">0{i+1}</span><p className="company-kicker">{s.eyebrow}</p><h3>{s.title}</h3><p>{s.pain}</p><Link href={`/solutions/${s.slug}`}>Explore this path →</Link></article>)}</div></section></main><Footer/></>
}
