import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { caseStudies } from '@/lib/sales'
import { insights } from '@/lib/insights'

type IconName = 'phone'|'bot'|'spark'|'game'|'chart'|'cloud'|'deck'|'store'|'arrow'|'check'|'code'|'pen'

function Icon({name}:{name:IconName}){
  const common={viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round' as const,strokeLinejoin:'round' as const}
  const paths:Record<IconName,React.ReactNode>={
    phone:<><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4M11 19h2"/></>,
    bot:<><rect x="4" y="7" width="16" height="12" rx="4"/><path d="M12 3v4M9 12h.01M15 12h.01M8 16h8"/></>,
    spark:<><path d="m12 2 1.7 4.3L18 8l-4.3 1.7L12 14l-1.7-4.3L6 8l4.3-1.7L12 2Z"/><path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z"/></>,
    game:<><path d="M7 9h10a4 4 0 0 1 3.8 5.2l-1 3A2.6 2.6 0 0 1 15.4 18l-1.2-1.4H9.8L8.6 18a2.6 2.6 0 0 1-4.4-.8l-1-3A4 4 0 0 1 7 9Z"/><path d="M7 13h4M9 11v4M16 12h.01M18 14h.01"/></>,
    chart:<><path d="M4 19V9M10 19V4M16 19v-7M22 19H2"/></>,
    cloud:<><path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.1 8.8 4.5 4.5 0 0 0 7 18Z"/></>,
    deck:<><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 8h5M7 12h10M9 22h6M12 18v4"/></>,
    store:<><path d="M4 10h16l-1-5H5l-1 5Z"/><path d="M5 10v9h14v-9M9 19v-5h6v5"/></>,
    arrow:<><path d="M5 12h14M13 6l6 6-6 6"/></>,
    check:<path d="m5 12 4 4L19 6"/>,
    code:<><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
    pen:<><path d="m4 20 4.5-1 9.8-9.8a2.3 2.3 0 0 0-3.3-3.3L5.2 15.7 4 20Z"/><path d="m13.6 7.3 3.1 3.1"/></>,
  }
  return <svg aria-hidden="true" {...common}>{paths[name]}</svg>
}

function HeroCollage(){
  return <div className="studio-collage" aria-label="Examples of digital products, automation and creative work">
    <div className="studio-orbit orbit-one"/>
    <div className="studio-orbit orbit-two"/>

    <div className="product-window">
      <div className="product-window-top"><i/><i/><i/><span>analytics.ga.tech</span></div>
      <div className="product-dashboard">
        <div className="product-side">
          <img src="/brand/ga-tech-logo.webp" alt=""/>
          <span className="active">Overview</span><span>Orders</span><span>Customers</span><span>Reports</span>
        </div>
        <div className="product-main">
          <div className="product-main-head"><div><small>THIS WEEK</small><h3>Move faster.</h3></div><div className="product-chip">LIVE</div></div>
          <div className="product-stats"><div><small>Orders</small><b>342</b></div><div><small>Repeat</small><b>41%</b></div><div><small>Avg. time</small><b>18m</b></div></div>
          <div className="product-chart">{[38,54,48,72,64,84,93].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div>
        </div>
      </div>
    </div>

    <div className="product-phone">
      <div className="phone-pill"/>
      <span className="phone-label">Dinner?</span>
      <h3>Fresh picks<br/>near you.</h3>
      <div className="food-orb food-one"><span>01</span></div>
      <div className="food-orb food-two"><span>02</span></div>
      <div className="phone-nav"><i/><i/><i/></div>
    </div>

    <div className="float-ui float-ai"><div className="float-icon"><Icon name="bot"/></div><div><strong>AI Assistant</strong><span>Search · reason · act</span></div></div>
    <div className="float-ui float-game"><div className="float-icon"><Icon name="game"/></div><div><strong>Interactive</strong><span>Playful digital ideas</span></div></div>
    <div className="float-ui float-cloud"><div className="float-icon"><Icon name="cloud"/></div><div><strong>Cloud ready</strong><span>Deploy · scale · improve</span></div></div>

    <div className="creative-poster">
      <span>MAKE</span><span>IT</span><span>FEEL</span><span>NEW.</span>
    </div>

    <div className="deck-card"><div className="deck-dot">P</div><div><strong>Pitch deck</strong><span>Explain it beautifully.</span></div></div>
  </div>
}

function Visual({type}:{type:string}){
  if(type==='product') return <div className="bento-art art-product"><div className="art-browser"><i/><i/><i/><div className="art-browser-body"><span/><span/><span/></div></div><div className="art-phone"><i/><i/><i/></div></div>
  if(type==='ai') return <div className="bento-art art-ai"><div className="ai-core"><Icon name="bot"/></div><span className="ai-bubble a">RAG</span><span className="ai-bubble b">API</span><span className="ai-bubble c">✓</span></div>
  if(type==='creative') return <div className="bento-art art-creative"><div className="mini-poster p1">BOLD<br/>IDEAS</div><div className="mini-poster p2">MAKE<br/>NOISE</div><div className="mini-poster p3">01</div></div>
  if(type==='data') return <div className="bento-art art-data"><div className="data-board"><div className="data-bars">{[42,68,52,84,76].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div><div className="data-line"/><div className="data-pill">+18.4%</div></div></div>
  if(type==='games') return <div className="bento-art art-games"><div className="game-sky"/><div className="game-pad"><Icon name="game"/></div><i className="game-star">✦</i><i className="game-dot"/></div>
  return <div className="bento-art art-cloud"><div className="cloud-node"><Icon name="cloud"/></div><div className="server s1"><i/><i/><i/></div><div className="server s2"><i/><i/></div><div className="server s3"><i/><i/></div></div>
}

const capabilities=[
  {type:'product',eyebrow:'BUILD',title:'Apps & websites',copy:'MVPs, SaaS, marketplaces, customer portals and high-converting web experiences.',span:'wide'},
  {type:'ai',eyebrow:'AUTOMATE',title:'AI & workflows',copy:'Knowledge assistants, document intelligence, integrations and repeatable automations.',span:'normal'},
  {type:'creative',eyebrow:'CREATE',title:'Design & launch creative',copy:'Campaign systems, posters, decks, social assets, content and visual storytelling.',span:'normal'},
  {type:'data',eyebrow:'UNDERSTAND',title:'Dashboards & data',copy:'KPI views, business reporting, research workflows and decision-ready information.',span:'normal'},
  {type:'games',eyebrow:'PLAY',title:'Games & interactive',copy:'2D experiences, prototypes, quizzes and playful product moments.',span:'normal'},
  {type:'cloud',eyebrow:'SCALE',title:'Backend & cloud',copy:'APIs, integrations, deployment, performance and the infrastructure behind the product.',span:'wide'},
]

const popular=[
  ['Food delivery app','phone'],['E-commerce store','store'],['AI chatbot','bot'],['Booking flow','spark'],
  ['Pitch deck','deck'],['Dashboard','chart'],['2D game','game'],['Cloud deployment','cloud']
] as [string,IconName][]

const proof=caseStudies.filter(c=>c.kind==='Founder experience').slice(0,3)
const featuredInsights=[
  insights.find(x=>x.slug==='how-much-does-an-mvp-cost-what-changes-the-scope'),
  insights.find(x=>x.slug==='ai-chatbot-for-company-documents-rag-checklist'),
  insights.find(x=>x.slug==='startup-website-brief-what-to-include'),
].filter(Boolean) as typeof insights

export default function Home(){
  const structuredData={'@context':'https://schema.org','@type':'ProfessionalService',name:'ga.tech',url:'https://gauravanand.tech',logo:'https://gauravanand.tech/brand/ga-tech-logo.webp',areaServed:'Worldwide',description:'Founder-led digital product studio for apps, AI, automation, creative and cloud work.'}
  return <><Nav/><main id="main-content" className="studio-home">

    <section className="studio-hero">
      <div className="site-shell studio-hero-grid">
        <div className="studio-hero-copy">
          <p className="studio-kicker">DIGITAL PRODUCT STUDIO · REMOTE / WORLDWIDE</p>
          <h1>Need something digital?<br/><em>Let’s make it real.</em></h1>
          <p className="studio-lead">Apps, websites, AI tools, automation, dashboards, games, creative and cloud systems—designed as one connected experience.</p>
          <div className="studio-actions">
            <Link data-track="hero_request_scope" href="/contact" className="studio-button primary">Start a project <Icon name="arrow"/></Link>
            <Link data-track="hero_book_discovery" href="/case-studies" className="studio-button ghost">See what’s possible</Link>
          </div>
          <div className="studio-proofline">
            <span><Icon name="check"/>Founder-led</span>
            <span><Icon name="check"/>7+ years engineering</span>
            <span><Icon name="check"/>From idea to launch</span>
          </div>
        </div>
        <HeroCollage/>
      </div>
    </section>

    <section className="studio-capabilities">
      <div className="site-shell">
        <div className="studio-section-head">
          <div><p className="studio-kicker">WHAT WE MAKE</p><h2>One studio. A lot of range.</h2></div>
          <p>Bring the goal. We’ll shape the right mix of product, automation, design and infrastructure around it.</p>
        </div>
        <div className="bento-grid">
          {capabilities.map(c=><Link key={c.title} href="/services" className={`bento-card ${c.span}`}>
            <Visual type={c.type}/>
            <div className="bento-copy"><span>{c.eyebrow}</span><h3>{c.title}</h3><p>{c.copy}</p><strong>Explore <Icon name="arrow"/></strong></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="studio-popular">
      <div className="site-shell">
        <div className="studio-section-head compact">
          <div><p className="studio-kicker">POPULAR REQUESTS</p><h2>Things people ask us to make.</h2></div>
          <Link href="/services">View all services →</Link>
        </div>
        <div className="popular-grid">
          {popular.map(([label,icon])=><Link key={label} data-track="popular_request" data-track-label={label} href={`/contact?request=${encodeURIComponent(label)}`}><i><Icon name={icon}/></i><span>{label}</span><strong>↗</strong></Link>)}
        </div>
      </div>
    </section>

    <section className="studio-proof">
      <div className="site-shell">
        <div className="studio-section-head">
          <div><p className="studio-kicker">SELECTED PROOF</p><h2>Deep technical work, translated into useful outcomes.</h2></div>
          <p>These examples come from the founder’s prior engineering experience—not invented ga.tech client claims.</p>
        </div>
        <div className="proof-story-grid">
          {proof.map((c,index)=><Link href="/case-studies" className={`proof-story story-${index+1}`} key={c.slug}>
            <div className="proof-story-art">
              {index===0?<><div className="proof-search"><span>Ask your knowledge base</span><i/></div><div className="proof-orb"><Icon name="bot"/></div></>:null}
              {index===1?<><div className="proof-code"><span>&lt;/&gt;</span><i/><i/><i/></div><div className="proof-platform">Linux → macOS</div></>:null}
              {index===2?<><div className="proof-speed"><span>01</span><span>02</span><span>03</span><b>↗</b></div></>:null}
            </div>
            <div className="proof-story-copy"><span>FOUNDER EXPERIENCE</span><h3>{c.title}</h3><p>{c.outcome}</p><strong>Read the story →</strong></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="studio-process">
      <div className="site-shell studio-process-grid">
        <div className="studio-process-intro"><p className="studio-kicker">SIMPLE BY DESIGN</p><h2>From idea to launch in three clear moves.</h2><p>No theatre. No 40-slide discovery deck before anything happens.</p></div>
        <div className="process-line">
          <article><span>01</span><div className="process-icon"><Icon name="spark"/></div><h3>Shape it</h3><p>Clarify the user, problem, scope and what a useful first version actually needs.</p></article>
          <article><span>02</span><div className="process-icon"><Icon name="code"/></div><h3>Make it</h3><p>Design, build and show working milestones instead of hiding behind status updates.</p></article>
          <article><span>03</span><div className="process-icon"><Icon name="cloud"/></div><h3>Launch it</h3><p>Deploy, hand over, measure what matters and keep improving if the work continues.</p></article>
        </div>
      </div>
    </section>

    <section className="studio-insights">
      <div className="site-shell">
        <div className="studio-section-head compact">
          <div><p className="studio-kicker">IDEAS & GUIDES</p><h2>Useful before you buy. Useful while you build.</h2></div>
          <Link href="/insights">All insights →</Link>
        </div>
        <div className="editorial-grid">
          {featuredInsights.map((article,index)=><Link href={`/insights/${article.slug}`} className="editorial-card" key={article.slug}>
            <div className={`editorial-art editorial-${index+1}`}>
              {index===0?<><div className="cost-shape c1"/><div className="cost-shape c2"/><span>₹</span></>:null}
              {index===1?<><div className="editorial-bot"><Icon name="bot"/></div><div className="editorial-doc">PDF</div></>:null}
              {index===2?<><div className="editorial-window"><i/><i/><i/><b>BRIEF</b></div></>:null}
            </div>
            <div className="editorial-copy"><span>{article.category}</span><h3>{article.title}</h3><p>{article.description}</p><strong>{article.readTime} · Read →</strong></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="studio-final">
      <div className="site-shell studio-final-card">
        <div className="final-copy"><p className="studio-kicker">HAVE AN IDEA?</p><h2>Make the next version real.</h2><p>Send the rough idea, the problem, or even just a reference you like. We’ll help shape the next step.</p><div className="studio-actions"><Link data-track="final_request_scope" href="/contact" className="studio-button primary">Start a project <Icon name="arrow"/></Link><Link href="/book" className="studio-button light">Talk it through</Link></div></div>
        <div className="final-art"><div className="final-screen"><img src="/brand/ga-tech-logo.webp" alt=""/><span>idea</span><i>→</i><strong>launch</strong></div><div className="final-orb one"/><div className="final-orb two"/></div>
      </div>
    </section>

  </main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></>
}
