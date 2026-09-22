import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SubscribeForm from '@/components/SubscribeForm'
import { getInsight, insights } from '@/lib/insights'

export function generateStaticParams(){return insights.map(a=>({slug:a.slug}))}
export function generateMetadata({params}:{params:{slug:string}}):Metadata{const a=getInsight(params.slug);if(!a)return{};return{title:a.title,description:a.description,alternates:{canonical:`/insights/${a.slug}`},openGraph:{type:'article',title:a.title,description:a.description,publishedTime:a.published,url:`https://gauravanand.tech/insights/${a.slug}`}}}

function ctaFor(category:string,slug:string){
 if(slug.includes('mvp'))return{title:'Planning an MVP?',copy:'Send the primary user journey, rough budget and launch target. We’ll help turn that into a sensible first release.',href:'/contact?request=MVP%20planning'}
 if(slug.includes('chatbot')||category==='AI')return{title:'Considering an AI workflow?',copy:'Share the documents, systems and accuracy expectations. We’ll help determine whether RAG, automation or a simpler workflow fits.',href:'/contact?request=AI%20workflow'}
 if(slug.includes('website'))return{title:'Planning a company website?',copy:'Use the free brief template or send the audience, desired action and launch date for a scoped recommendation.',href:'/contact?request=Business%20website'}
 return{title:'Need this turned into delivery?',copy:'Share the business outcome and constraints. ga.tech can help translate architecture into a practical scope.',href:'/contact'}
}

export default function InsightArticle({params}:{params:{slug:string}}){
 const article=getInsight(params.slug);if(!article)notFound();const cta=ctaFor(article.category,article.slug)
 const structuredData={'@context':'https://schema.org','@type':'BlogPosting',headline:article.title,description:article.description,datePublished:article.published,dateModified:article.published,author:{'@type':'Person',name:'Gaurav Anand',url:'https://gauravanand.tech/portfolio'},publisher:{'@type':'Organization',name:'ga.tech',url:'https://gauravanand.tech'},mainEntityOfPage:`https://gauravanand.tech/insights/${article.slug}`}
 return <><Nav/><main id="main-content" className="article-page"><article className="article-shell"><Link className="back-link" href="/insights">← All insights</Link><header className="article-header"><div className="article-meta"><span>{article.category}</span><time>{article.published}</time><span>{article.readTime}</span></div><h1>{article.title}</h1><p>{article.description}</p></header><div className="article-body">{article.sections.map(s=><section key={s.heading}><h2>{s.heading}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}{s.bullets?<ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>:null}</section>)}</div><aside className="article-cta contextual-article-cta"><p className="section-eyebrow">NEXT STEP</p><h2>{cta.title}</h2><p>{cta.copy}</p><div className="maturity-actions"><Link data-track="insight_contextual_cta" data-track-label={article.slug} className="button button-primary" href={cta.href}>Request scope →</Link><Link className="button button-secondary" href="/book">Book discovery</Link></div></aside><aside className="article-nurture"><div><p className="section-eyebrow">NOT READY YET?</p><h2>Get Build Notes.</h2><p>Occasional practical notes for people planning product, AI and delivery work.</p></div><SubscribeForm source={`insight:${article.slug}`}/></aside></article></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></>
}
