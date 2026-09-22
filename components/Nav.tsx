'use client'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { usePathname } from 'next/navigation'

const links=[{label:'Services',href:'/services'},{label:'Solutions',href:'/solutions'},{label:'Proof',href:'/case-studies'},{label:'Insights',href:'/insights'},{label:'Founder',href:'/portfolio'}]

export default function Nav(){
 const pathname=usePathname();const[open,setOpen]=useState(false)
 useEffect(()=>setOpen(false),[pathname])
 useEffect(()=>{if(!open)return;const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[open])
 const current=(href:string)=>pathname===href||pathname.startsWith(`${href}/`)
 return <nav className="site-nav" aria-label="Primary navigation"><div className="site-shell nav-inner nav-inner-v2"><Link href="/" className="brand-lockup" aria-label="ga.tech home"><img className="brand-logo-image" src="/brand/ga-tech-logo.webp" alt="ga.tech"/></Link><div className="nav-links nav-links-v2">{links.map(l=><Link key={l.href} href={l.href} className="nav-link" aria-current={current(l.href)?'page':undefined}>{l.label}</Link>)}</div><div className="nav-actions"><Link data-track="nav_start_project" className="nav-cta" href="/contact">Start a project <span>→</span></Link><button className="mobile-menu-button" type="button" aria-label={open?'Close navigation menu':'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(v=>!v)}><span/><span/><span/></button></div></div>{open&&<div id="mobile-navigation" className="mobile-navigation is-open"><div className="site-shell mobile-navigation-inner">{links.map(l=><Link key={l.href} href={l.href} className="mobile-nav-link" aria-current={current(l.href)?'page':undefined}>{l.label}<span>→</span></Link>)}<Link href="/contact" className="button button-primary mobile-project-cta">Request scope →</Link><Link href="/book" className="button button-secondary mobile-project-cta">Book discovery</Link></div></div>}</nav>
}
