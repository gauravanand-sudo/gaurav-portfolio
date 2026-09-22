import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

type IconName =
  | 'phone' | 'bot' | 'game' | 'palette' | 'megaphone' | 'chart' | 'cloud' | 'slides'
  | 'bulb' | 'burger' | 'bag' | 'calendar' | 'image' | 'document' | 'rocket' | 'chat'
  | 'laptop' | 'shield' | 'bolt' | 'heart' | 'check' | 'search' | 'code' | 'wand'

function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const paths: Record<IconName, React.ReactNode> = {
    phone: <><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4M11 19h2"/></>,
    bot: <><rect x="4" y="7" width="16" height="12" rx="4"/><path d="M12 3v4M9 12h.01M15 12h.01M8 16h8"/></>,
    game: <><path d="M7 9h10a4 4 0 0 1 3.8 5.2l-1 3A2.6 2.6 0 0 1 15.4 18l-1.2-1.4H9.8L8.6 18a2.6 2.6 0 0 1-4.4-.8l-1-3A4 4 0 0 1 7 9Z"/><path d="M7 13h4M9 11v4M16 12h.01M18 14h.01"/></>,
    palette: <><path d="M12 3a9 9 0 1 0 0 18h1.5a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4h2a7 7 0 0 0-2-10Z"/><path d="M7 9h.01M9 6h.01M15 6h.01M17 10h.01"/></>,
    megaphone: <><path d="M3 11v2a2 2 0 0 0 2 2h2l4 4V5L7 9H5a2 2 0 0 0-2 2Z"/><path d="M11 7c4 0 7-2 9-4v18c-2-2-5-4-9-4M6 15l1 5"/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
    cloud: <><path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.1 8.8 4.5 4.5 0 0 0 7 18Z"/></>,
    slides: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 8h5M7 12h10M9 22h6M12 18v4"/></>,
    bulb: <><path d="M9 18h6M10 22h4M8.5 14.5A6 6 0 1 1 15.5 14.5c-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5Z"/></>,
    burger: <><path d="M4 10h16M5 10a7 5 0 0 1 14 0M4 14h16M6 18h12a2 2 0 0 0 2-2H4a2 2 0 0 0 2 2Z"/></>,
    bag: <><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h2M14 14h2M8 18h2"/></>,
    image: <><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5L5 20"/></>,
    document: <><path d="M6 2h8l4 4v16H6V2Z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></>,
    rocket: <><path d="M14 5c3-3 6-3 6-3s0 3-3 6l-6 6-4 1 1-4 6-6Z"/><path d="m9 15-3 3M5 13l-2 2M11 19l-2 2"/></>,
    chat: <><path d="M4 5h16v11H8l-4 4V5Z"/></>,
    laptop: <><rect x="4" y="4" width="16" height="12" rx="2"/><path d="M2 20h20M9 20l1-4h4l1 4"/></>,
    shield: <><path d="M12 3 5 6v5c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/>,
    heart: <path d="M20.8 5.8a5 5 0 0 0-7.1 0L12 7.5l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.1a5 5 0 0 0 0-7.1Z"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
    wand: <><path d="m4 20 10-10M14 4l1-2 1 2 2 1-2 1-1 2-1-2-2-1 2-1ZM18 12l.7-1.5.8 1.5 1.5.8-1.5.7-.8 1.5-.7-1.5-1.5-.7 1.5-.8Z"/></>,
  }
  return <svg className={className} aria-hidden="true" {...common}>{paths[name]}</svg>
}

const services = [
  {
    key: 'apps',
    icon: 'phone' as IconName,
    title: 'Apps & Websites',
    summary: 'Mobile apps, marketplaces, SaaS products and websites.',
    examples: ['Food delivery like Zomato / Swiggy', 'E-commerce like Amazon / Flipkart', 'Booking flows like Uber / Ola'],
    tags: ['Apps', 'SaaS', 'Websites'],
  },
  {
    key: 'ai',
    icon: 'bot' as IconName,
    title: 'AI & Automation',
    summary: 'AI assistants and workflows that save time and repetitive work.',
    examples: ['Customer support chatbot', 'PDF / knowledge assistant', 'CRM & document automation'],
    tags: ['AI Chatbot', 'RAG', 'Automation'],
  },
  {
    key: 'games',
    icon: 'game' as IconName,
    title: 'Games & Interactive',
    summary: 'Playable ideas, prototypes and interactive digital experiences.',
    examples: ['2D casual / arcade games', 'Quiz & educational games', 'Interactive product demos'],
    tags: ['2D Games', 'Interactive', 'Prototype'],
  },
  {
    key: 'creative',
    icon: 'palette' as IconName,
    title: 'Graphics & Creative',
    summary: 'Visual assets for brands, creators, products and events.',
    examples: ['Posters & event creatives', 'Social media & thumbnails', 'Brochures & brand visuals'],
    tags: ['Posters', 'Social', 'Branding'],
  },
  {
    key: 'content',
    icon: 'megaphone' as IconName,
    title: 'Content & Marketing',
    summary: 'Search-friendly and campaign-ready writing for digital channels.',
    examples: ['SEO articles & tech briefs', 'Website & landing-page copy', 'Scripts & product descriptions'],
    tags: ['SEO', 'Copy', 'Content'],
  },
  {
    key: 'data',
    icon: 'chart' as IconName,
    title: 'Data & Business',
    summary: 'Dashboards, reports and automation for business information.',
    examples: ['KPI & analytics dashboards', 'Excel / Sheets automation', 'Research & recurring reports'],
    tags: ['Dashboards', 'Excel', 'Reports'],
  },
  {
    key: 'cloud',
    icon: 'cloud' as IconName,
    title: 'Backend & Cloud',
    summary: 'APIs and infrastructure that power digital products reliably.',
    examples: ['Payments, auth & notifications', 'Cloud deployment & CI/CD', 'Databases & integrations'],
    tags: ['APIs', 'Cloud', 'CI/CD'],
  },
  {
    key: 'docs',
    icon: 'slides' as IconName,
    title: 'Documents & Presentations',
    summary: 'Professional business material ready to present or publish.',
    examples: ['Pitch decks & proposals', 'Company profiles & reports', 'Resumes & documentation'],
    tags: ['Pitch Decks', 'Reports', 'Docs'],
  },
  {
    key: 'custom',
    icon: 'bulb' as IconName,
    title: 'Custom Digital Work',
    summary: 'If it can be designed, coded or automated, bring the idea.',
    examples: ['MVPs & microsites', 'Calculators, forms & mini-tools', 'Bots & one-off digital builds'],
    tags: ['MVPs', 'Tools', 'Bots'],
  },
]

const popularRequests: { label: string; icon: IconName; tint: string }[] = [
  { label: 'Food Delivery App', icon: 'burger', tint: 'orange' },
  { label: 'E-commerce Store', icon: 'bag', tint: 'pink' },
  { label: 'Booking App', icon: 'calendar', tint: 'blue' },
  { label: 'AI Chatbot', icon: 'bot', tint: 'violet' },
  { label: 'Poster Design', icon: 'image', tint: 'purple' },
  { label: 'Pitch Deck', icon: 'slides', tint: 'red' },
  { label: '2D Game', icon: 'game', tint: 'navy' },
  { label: 'Dashboard', icon: 'chart', tint: 'blue' },
  { label: 'Landing Page', icon: 'laptop', tint: 'cyan' },
  { label: 'Cloud Deployment', icon: 'cloud', tint: 'sky' },
  { label: 'Resume / Portfolio', icon: 'document', tint: 'indigo' },
  { label: 'Social Creative', icon: 'palette', tint: 'pink' },
  { label: 'PDF Chatbot', icon: 'document', tint: 'red' },
  { label: 'Excel Automation', icon: 'chart', tint: 'green' },
]

const insights = [
  {
    tag: 'AI & AUTOMATION',
    title: 'RAG vs AI agents: choosing the right architecture',
    copy: 'A practical guide to choosing retrieval, agents, or a simpler workflow.',
    href: '/insights/rag-vs-ai-agents-for-business-knowledge',
    visual: 'ai',
    time: '7 min read',
  },
  {
    tag: 'CLOUD',
    title: 'A practical cloud cost checklist before you scale',
    copy: 'Simple controls that prevent expensive infrastructure surprises later.',
    href: '/insights/cloud-cost-checklist-before-you-scale',
    visual: 'tools',
    time: '6 min read',
  },
  {
    tag: 'SYSTEMS',
    title: 'Why performance engineering still matters in AI',
    copy: 'Model calls are only one part of the latency and cost of a real product.',
    href: '/insights/performance-engineering-in-an-ai-first-stack',
    visual: 'growth',
    time: '6 min read',
  },
]

function HeroVisual() {
  return (
    <div className="hero-product-scene" aria-label="Examples of digital products and creative work">
      <div className="float-card ai-float"><Icon name="bot" /><span><b>AI Assistant</b><small>Ask anything…</small></span></div>
      <div className="float-card game-float"><Icon name="game" /><span><b>Play. Create.</b><small>Interactive ideas</small></span></div>
      <div className="float-card cloud-float"><Icon name="cloud" /><span><b>Cloud systems</b><small>Deploy · Scale · Grow</small></span></div>
      <div className="poster-float"><span>BOLD</span><span>IDEAS</span><span>BRIGHTER</span><span>BRANDS</span></div>

      <div className="hero-phone">
        <div className="phone-notch" />
        <strong>Good food,<br/>near you.</strong>
        <div className="food-photo food-a">🥗</div>
        <div className="food-photo food-b">🍕</div>
        <div className="phone-tabs"><i/><i/><i/></div>
      </div>

      <div className="hero-laptop">
        <div className="laptop-screen">
          <aside>
            <div className="mini-logo"><img src="/brand/ga-tech-mark.svg" alt="" /></div>
            <span className="active">Overview</span><span>Analytics</span><span>Projects</span><span>Clients</span><span>Settings</span>
          </aside>
          <div className="dashboard-body">
            <div className="dash-top"><div><small>SAMPLE PRODUCT UI</small><h3>Grow smarter.</h3></div><div className="score-ring">DEMO</div></div>
            <div className="metric-row"><div><small>Apps</small><b>Build</b></div><div><small>AI</small><b>Automate</b></div><div><small>Cloud</small><b>Scale</b></div></div>
            <div className="chart-card"><div className="chart-title">Illustrative dashboard</div><div className="bar-chart">{[36,52,44,70,61,83,92].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div></div>
          </div>
        </div>
        <div className="laptop-base" />
      </div>

      <div className="deck-float"><div className="deck-icon">P</div><div><b>Presentation</b><small>Pitch · Explain · Win</small></div></div>
      <div className="idea-note"><Icon name="wand" /><span>Ideas → impact</span></div>
    </div>
  )
}

function ServiceVisual({ type, icon }: { type: string; icon: IconName }) {
  if (type === 'apps') {
    return <div className="service-visual visual-apps"><div className="mini-phone p1"><span>🍔</span><i/><i/></div><div className="mini-phone p2"><span>🛍️</span><i/><i/></div><div className="mini-browser"><div/><div/><div/></div></div>
  }
  if (type === 'ai') {
    return <div className="service-visual visual-ai"><span className="chat-dot left">AI</span><div className="robot-illustration"><Icon name="bot" /></div><span className="chat-dot right">✓</span><div className="ai-card-line"/><div className="ai-card-line short"/></div>
  }
  if (type === 'games') {
    return <div className="service-visual visual-games"><div className="game-hills"><i/><i/><i/></div><div className="controller"><Icon name="game" /></div><span className="game-star">★</span><span className="game-coin">●</span></div>
  }
  if (type === 'creative') {
    return <div className="service-visual visual-creative"><div className="design-chip">Ps</div><div className="design-chip ai">Ai</div><div className="poster-card"><b>GOOD<br/>IDEAS</b><small>BETTER<br/>BRANDS</small></div><div className="poster-card second">CREATE</div></div>
  }
  if (type === 'content') {
    return <div className="service-visual visual-content"><div className="content-doc"><i/><i/><i/></div><div className="content-doc back"><i/><i/></div><div className="megaphone"><Icon name="megaphone" /></div></div>
  }
  if (type === 'data') {
    return <div className="service-visual visual-data"><div className="data-screen"><strong>Revenue</strong><b>$24.5k</b><div>{[45,60,38,78,88].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div></div><div className="data-mini"><Icon name="chart" /></div></div>
  }
  if (type === 'cloud') {
    return <div className="service-visual visual-cloud"><div className="cloud-shape"><Icon name="cloud" /></div><div className="server-stack"><i/><i/><i/></div><div className="server-stack second"><i/><i/></div></div>
  }
  if (type === 'docs') {
    return <div className="service-visual visual-docs"><div className="slide-card one"><b>Pitch deck</b><i/><i/></div><div className="slide-card two"><Icon name="document" /></div><div className="slide-card three"><Icon name="slides" /></div></div>
  }
  return <div className="service-visual visual-custom"><div className="bulb-glow"><Icon name="bulb" /></div><span className="custom-tile t1"><Icon name="code" /></span><span className="custom-tile t2"><Icon name="wand" /></span><span className="custom-tile t3"><Icon name="laptop" /></span></div>
}

function InsightVisual({ type }: { type: string }) {
  if (type === 'ai') return <div className="insight-thumb thumb-ai"><div className="robot-illustration"><Icon name="bot" /></div><div className="thumb-chat">AI</div><div className="thumb-leaf">✦</div></div>
  if (type === 'tools') return <div className="insight-thumb thumb-tools"><div className="tools-laptop"><Icon name="laptop" /></div><span><Icon name="cloud" /></span><span><Icon name="chart" /></span><span><Icon name="wand" /></span></div>
  return <div className="insight-thumb thumb-growth"><div className="mountain m1"/><div className="mountain m2"/><div className="flag">⚑</div><div className="sun"/></div>
}

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ga.tech',
    url: 'https://gauravanand.tech',
    logo: 'https://gauravanand.tech/brand/ga-tech-mark.svg',
    email: 'gaurav.anand54@gmail.com',
    areaServed: 'Worldwide',
    description: 'A digital studio for apps, websites, AI, automation, games, design, content, presentations, data and cloud work.',
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'gaurav.anand54@gmail.com', availableLanguage: ['English'] },
    serviceType: ['App development','Website development','AI automation','Game development','Graphic design','Content creation','Data dashboards','Cloud engineering','Presentation design'],
  }

  return (
    <>
      <Nav />
      <main>
        <section className="visual-hero">
          <div className="site-shell visual-hero-grid">
            <div className="hero-copy-block">
              <div className="hero-pill">A DIGITAL SERVICES STUDIO</div>
              <h1>Need something digital?<br/>We can probably <em>build it.</em></h1>
              <p className="hero-lead">Apps, websites, AI tools, automation, games, posters, dashboards, presentations, content, cloud systems and custom digital work — from idea to launch.</p>
              <div className="hero-actions">
                <a className="button button-primary button-lg" href="/contact">Start a Project →</a>
                <Link className="button button-secondary button-lg" href="/services">View Services</Link>
              </div>
              <div className="hero-trust">
                <span><Icon name="bolt" />Fast turnaround</span>
                <span><Icon name="shield" />Reliable & professional</span>
                <span><Icon name="heart" />Long-term support</span>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section id="services" className="visual-section services-showcase">
          <div className="site-shell">
            <div className="visual-section-head">
              <div><h2>Our Services</h2><p>Everything you need to bring an idea to life, digitally.</p></div>
              <Link href="/services" className="head-link">Explore all services →</Link>
            </div>
            <div className="visual-service-grid">
              {services.map((service) => (
                <article className="visual-service-card" key={service.key}>
                  <ServiceVisual type={service.key} icon={service.icon} />
                  <div className="visual-card-body">
                    <div className="card-title-row"><h3>{service.title}</h3><span>→</span></div>
                    <p>{service.summary}</p>
                    <ul>{service.examples.map((item)=><li key={item}>{item}</li>)}</ul>
                    <div className="tag-row">{service.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
              <article className="visual-service-card service-cta-card">
                <div className="cta-plane"><Icon name="rocket" /></div>
                <h3>Have a unique idea in mind?</h3>
                <p>Tell us what you want to make. If it’s digital, we can probably help.</p>
                <Link href="/contact?request=Custom%20digital%20work" className="button button-primary">Start a Project →</Link>
              </article>
            </div>
            <p className="brand-example-note">Brand references describe familiar product patterns only; there is no affiliation or endorsement.</p>
          </div>
        </section>

        <section className="visual-section popular-section">
          <div className="site-shell">
            <div className="visual-section-head compact">
              <div><h2>Popular Requests</h2><p>Some of the most common things you can ask us to make.</p></div>
              <Link href="/contact" className="head-link">Request anything →</Link>
            </div>
            <div className="request-icon-grid">
              {popularRequests.map((item)=>(
                <Link key={item.label} href={`/contact?request=${encodeURIComponent(item.label)}`} className="request-icon-card">
                  <div className={`request-icon ${item.tint}`}><Icon name={item.icon} /></div>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-conversion-section">
          <div className="site-shell">
            <div className="home-conversion-head">
              <div>
                <p className="company-kicker">STARTER OFFERS</p>
                <h2>Buy an outcome, not a list of technologies.</h2>
              </div>
              <p>These are starting shapes, not rigid packages. The final scope is based on your brief, dependencies and quality bar.</p>
            </div>
            <div className="offer-grid">
              <article className="offer-card">
                <span>01 · LAUNCH</span>
                <h3>Business Website Launch</h3>
                <p>For a new company, product, service or campaign that needs a credible web presence and lead flow.</p>
                <ul><li>Responsive pages</li><li>Contact / enquiry flow</li><li>Basic SEO structure</li><li>Deployment & handover</li></ul>
                <Link href="/contact?request=Business%20Website%20Launch">Scope this →</Link>
              </article>
              <article className="offer-card">
                <span>02 · MVP</span>
                <h3>App / MVP Build</h3>
                <p>For validating a product idea around one clear user journey before investing in a much larger build.</p>
                <ul><li>Core user flow</li><li>Auth / data / API as needed</li><li>Usable frontend</li><li>Deployment-ready build</li></ul>
                <Link href="/contact?request=App%20or%20MVP%20Build">Scope this →</Link>
              </article>
              <article className="offer-card">
                <span>03 · AUTOMATE</span>
                <h3>AI / Workflow Sprint</h3>
                <p>For one painful recurring workflow that could be automated, searched or accelerated with software and AI.</p>
                <ul><li>Workflow mapping</li><li>Prototype the risky part</li><li>Integrations / RAG if useful</li><li>Evaluation & handover</li></ul>
                <Link href="/contact?request=AI%20or%20Workflow%20Sprint">Scope this →</Link>
              </article>
              <article className="offer-card">
                <span>04 · CREATE</span>
                <h3>Launch Creative Pack</h3>
                <p>For brands that need a coordinated set of visual and written assets rather than one isolated design.</p>
                <ul><li>Visual direction</li><li>Campaign / social assets</li><li>Deck or launch collateral</li><li>Editable exports where agreed</li></ul>
                <Link href="/contact?request=Launch%20Creative%20Pack">Scope this →</Link>
              </article>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="site-shell trust-strip-grid">
            <div className="trust-point"><strong>Clear scope first</strong><span>Deliverables and assumptions written down before work starts.</span></div>
            <div className="trust-point"><strong>Milestone delivery</strong><span>Break larger work into visible checkpoints instead of one final reveal.</span></div>
            <div className="trust-point"><strong>Direct communication</strong><span>Fewer layers between the problem, feedback and execution.</span></div>
            <div className="trust-point"><strong>Handover included</strong><span>Source code/files and practical documentation can be part of the scope.</span></div>
            <div className="trust-point"><strong>NDA-friendly</strong><span>Confidential projects can be discussed under appropriate written terms.</span></div>
            <div className="trust-point"><strong>Post-launch support</strong><span>Ongoing fixes, improvements or operating support can be scoped separately.</span></div>
          </div>
        </section>

        <section className="visual-section process-visual-section">
          <div className="site-shell">
            <div className="visual-section-head compact"><div><h2>A Simple 3-Step Process</h2><p>From idea to launch, without the hassle.</p></div></div>
            <div className="process-visual-grid">
              <article><div className="step-badge one">1</div><div><h3>Discuss Your Idea</h3><p>Tell us what you need, your goal and your deadline. We’ll suggest the practical path.</p></div><div className="process-art chat-art"><Icon name="chat" /><span>•••</span></div></article>
              <article><div className="step-badge two">2</div><div><h3>Design & Build</h3><p>We create, iterate and keep you in the loop with clear milestones and updates.</p></div><div className="process-art build-art"><Icon name="laptop" /><Icon name="wand" /></div></article>
              <article><div className="step-badge three">3</div><div><h3>Launch & Improve</h3><p>We deliver the finished work, help you launch, and refine what needs improving.</p></div><div className="process-art rocket-art"><Icon name="rocket" /></div></article>
            </div>
          </div>
        </section>

        <section className="visual-section insights-visual-section">
          <div className="site-shell">
            <div className="visual-section-head compact">
              <div><h2>Insights & Ideas</h2><p>Practical guides and technology notes to help you build better.</p></div>
              <Link href="/insights" className="head-link">View all articles →</Link>
            </div>
            <div className="insight-visual-grid">
              {insights.map((article)=>(
                <Link href={article.href} key={article.href} className="insight-visual-card">
                  <InsightVisual type={article.visual} />
                  <div className="insight-copy"><span>{article.tag}</span><h3>{article.title}</h3><p>{article.copy}</p><strong>{article.time} →</strong></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="site-shell faq-grid">
            <div className="faq-intro">
              <p className="company-kicker">FAQ</p>
              <h2>Questions buyers usually ask before starting.</h2>
              <p>Need something more specific? Put it in the project brief and we’ll answer it against your actual scope.</p>
              <Link href="/contact" className="company-text-link">Ask about your project →</Link>
            </div>
            <div className="faq-list">
              <article className="faq-item"><h3>Do I need a detailed specification?</h3><p>No. A problem, desired result, examples and constraints are enough to start scoping.</p></article>
              <article className="faq-item"><h3>How is pricing decided?</h3><p>Pricing depends on scope, uncertainty, integrations, revision needs and delivery timeline. The brief captures a budget range so the proposed approach stays realistic.</p></article>
              <article className="faq-item"><h3>Can ga.tech handle small one-off work?</h3><p>Yes. A poster, landing page, automation, deck or focused technical task can be scoped independently.</p></article>
              <article className="faq-item"><h3>What happens to source code and files?</h3><p>Handover and ownership expectations are defined in the proposal or statement of work. Standard engagements can include source files/code and practical documentation.</p></article>
              <article className="faq-item"><h3>Can you work with an existing team or product?</h3><p>Yes. Work can start from an existing codebase, workflow, cloud setup, design system or content library when access and constraints are clear.</p></article>
              <article className="faq-item"><h3>Is ongoing support available?</h3><p>Yes. Maintenance, content production, cloud/technical support and iterative improvements can be scoped after launch.</p></article>
            </div>
          </div>
        </section>

        <section className="visual-cta-wrap">
          <div className="site-shell visual-cta-banner">
            <div className="cta-copy">
              <p className="section-eyebrow">LET’S BUILD TOGETHER</p>
              <h2>Ready to bring <em>your idea</em> to life?</h2>
              <p>From simple designs to complete digital products, get one clear place to build, launch and improve.</p>
              <div className="hero-actions">
                <a className="button button-primary button-lg" href="/contact">Start a Project →</a>
                <Link className="button button-secondary button-lg" href="/about">How we work</Link>
              </div>
            </div>
            <div className="cta-benefits">
              {['Custom solutions','Clear communication','Practical delivery','Long-term support'].map(item=><span key={item}><i><Icon name="check"/></i>{item}</span>)}
            </div>
            <div className="cta-illustration">
              <div className="cta-laptop"><div className="cta-logo"><img src="/brand/ga-tech-mark.svg" alt="" /></div></div>
              <div className="cta-plant"><i/><i/><i/></div>
              <div className="cta-float-card"><Icon name="bulb" /><b>Build</b><span>Create</span><span>Grow</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  )
}
