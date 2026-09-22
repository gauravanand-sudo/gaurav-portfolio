import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const serviceGroups = [
  {
    icon: 'APP',
    title: 'Apps & websites',
    summary: 'Customer apps, marketplaces, portals and websites built around a real workflow.',
    examples: [
      'Zomato / Swiggy-style food delivery',
      'Amazon / Flipkart-style e-commerce',
      'Uber / Ola-style booking & tracking',
      'Urban Company-style service marketplace',
      'SaaS dashboards & admin panels',
      'Business websites & landing pages',
    ],
  },
  {
    icon: 'AI',
    title: 'AI & automation',
    summary: 'AI tools that answer, create, classify, search, summarize and automate repetitive work.',
    examples: [
      'ChatGPT-style support assistant',
      'PDF / company knowledge chatbot',
      'Lead qualification & CRM automation',
      'Email, report & document automation',
      'AI content & research workflows',
      'Custom agents connected to APIs',
    ],
  },
  {
    icon: 'GAME',
    title: 'Games & interactive',
    summary: 'Playable experiences, prototypes and interactive demos for web, mobile or internal use.',
    examples: [
      '2D casual & arcade games',
      'Quiz, puzzle & educational games',
      'Endless runner / tap games',
      'Multiplayer prototype concepts',
      'Interactive product demos',
      'Simulation & training experiences',
    ],
  },
  {
    icon: 'DESIGN',
    title: 'Graphics & creative',
    summary: 'Visual assets for brands, creators, products, campaigns and events.',
    examples: [
      'Posters & event creatives',
      'Instagram / LinkedIn social posts',
      'YouTube thumbnails & banners',
      'Logos & lightweight brand kits',
      'Ad creatives & campaign graphics',
      'Infographics, menus & brochures',
    ],
  },
  {
    icon: 'CONTENT',
    title: 'Content & marketing',
    summary: 'Useful, search-friendly and campaign-ready content across channels.',
    examples: [
      'SEO articles & tech news briefs',
      'Landing-page & website copy',
      'Product descriptions & catalog copy',
      'Social captions & content calendars',
      'Video scripts & newsletter drafts',
      'Ad copy, hooks & campaign ideas',
    ],
  },
  {
    icon: 'DATA',
    title: 'Data, dashboards & research',
    summary: 'Turn messy information into usable dashboards, reports and decisions.',
    examples: [
      'Excel / Sheets automation',
      'Business KPI dashboards',
      'Data cleaning & transformation',
      'Market / competitor research',
      'Reporting & recurring summaries',
      'Forecasting / ML prototypes',
    ],
  },
  {
    icon: 'CLOUD',
    title: 'Backend, APIs & cloud',
    summary: 'The infrastructure behind apps, automations and digital products.',
    examples: [
      'REST APIs & integrations',
      'Payments, auth & notifications',
      'Docker & cloud deployment',
      'CI/CD & release automation',
      'Databases & backend services',
      'Monitoring & performance fixes',
    ],
  },
  {
    icon: 'DOC',
    title: 'Documents & presentations',
    summary: 'Professional business material that is ready to send, present or publish.',
    examples: [
      'Pitch decks & sales presentations',
      'Proposals & company profiles',
      'Resumes & portfolio documents',
      'PDF reports & executive summaries',
      'SOPs, manuals & documentation',
      'Case studies & one-pagers',
    ],
  },
  {
    icon: 'CUSTOM',
    title: 'Custom digital work',
    summary: 'If it can be designed, automated, coded, organized or produced digitally, ask.',
    examples: [
      'MVPs & proof-of-concepts',
      'Calculators, forms & mini-tools',
      'QR menus & microsites',
      'Bots & workflow helpers',
      'Internal productivity tools',
      'Unusual one-off digital builds',
    ],
  },
]

const popularRequests = [
  'Food delivery app',
  'E-commerce store',
  'Booking app',
  'AI chatbot',
  'Company website',
  'Admin dashboard',
  'Poster design',
  'Social media creatives',
  'Pitch deck',
  'YouTube thumbnail',
  '2D mobile game',
  'Quiz game',
  'SEO articles',
  'Tech news content',
  'Excel automation',
  'Business reports',
  'API integration',
  'Cloud deployment',
  'PDF chatbot',
  'Lead automation',
  'Resume / portfolio',
  'Landing page',
  'Product catalog',
  'Custom prototype',
]

const insights = [
  ['RAG vs AI agents: choosing the right architecture for business knowledge', '/insights/rag-vs-ai-agents-for-business-knowledge'],
  ['A practical cloud cost checklist before your startup scales', '/insights/cloud-cost-checklist-before-you-scale'],
  ['Why performance engineering still matters in an AI-first software stack', '/insights/performance-engineering-in-an-ai-first-stack'],
]

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GauravAnand.Tech',
    url: 'https://gauravanand.tech',
    areaServed: 'Worldwide',
    description: 'A broad digital studio for apps, websites, AI, automation, games, graphics, content, presentations, data and cloud work.',
    serviceType: [
      'App development',
      'Website development',
      'AI automation',
      'Game development',
      'Graphic design',
      'Content creation',
      'Data dashboards',
      'Cloud engineering',
      'Presentation design',
    ],
  }

  return (
    <>
      <Nav />
      <main>
        <section className="studio-hero">
          <div className="site-shell studio-hero-grid">
            <div>
              <p className="hero-kicker">DIGITAL STUDIO · BUILD / DESIGN / AUTOMATE / CREATE</p>
              <h1>Need something digital? We can probably build it.</h1>
              <p className="hero-lead">
                Apps, websites, AI tools, automations, games, posters, dashboards, presentations, content, cloud systems and custom digital work — one place to get ideas turned into finished output.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="mailto:gaurav.anand54@gmail.com?subject=Project%20request%20-%20gauravanand.tech">Tell us what you need →</a>
                <a className="button button-secondary" href="#services">Browse services</a>
              </div>
            </div>
            <div className="hero-service-board">
              <span>APPS</span><span>AI</span><span>GAMES</span><span>WEBSITES</span>
              <span>POSTERS</span><span>AUTOMATION</span><span>CONTENT</span><span>DATA</span>
              <span>CLOUD</span><span>DECKS</span><span>GRAPHICS</span><span>MORE</span>
            </div>
          </div>
          <div className="studio-marquee">
            <div className="site-shell marquee-row">
              <span>Food delivery apps</span><i /> <span>E-commerce</span><i /> <span>AI assistants</span><i />
              <span>Games</span><i /> <span>Posters</span><i /> <span>Dashboards</span><i />
              <span>Websites</span><i /> <span>Presentations</span><i /> <span>Automation</span>
            </div>
          </div>
        </section>

        <section id="services" className="studio-section">
          <div className="site-shell">
            <div className="studio-heading">
              <div>
                <p className="section-eyebrow">WHAT YOU CAN ORDER</p>
                <h2>Concrete services, not vague “digital transformation”.</h2>
              </div>
              <p>Choose a category or simply describe the result you want. We can scope a one-off task, a prototype, or a complete build.</p>
            </div>

            <div className="service-matrix">
              {serviceGroups.map((group) => (
                <article className="service-tile" key={group.title}>
                  <div className="service-tile-top"><span>{group.icon}</span><i>↗</i></div>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                  <ul>{group.examples.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>

            <p className="brand-example-note">Brand names above describe familiar product patterns only; there is no affiliation or endorsement.</p>
          </div>
        </section>

        <section className="studio-section requests-section">
          <div className="site-shell">
            <div className="studio-heading compact-heading">
              <div>
                <p className="section-eyebrow">POPULAR REQUESTS</p>
                <h2>Start with the thing you want made.</h2>
              </div>
              <a className="button button-primary small-button" href="mailto:gaurav.anand54@gmail.com?subject=Custom%20work%20request%20-%20gauravanand.tech">Request something else →</a>
            </div>
            <div className="request-cloud">
              {popularRequests.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="studio-section studio-process">
          <div className="site-shell process-compact">
            <div>
              <p className="section-eyebrow">HOW IT WORKS</p>
              <h2>Send the task. Get a clear plan. Get the work.</h2>
            </div>
            <div className="compact-steps">
              <article><span>01</span><div><h3>Describe it</h3><p>Send the idea, example links, deadline and what “done” should look like.</p></div></article>
              <article><span>02</span><div><h3>Scope it</h3><p>We turn it into deliverables, milestones and the simplest practical execution plan.</p></div></article>
              <article><span>03</span><div><h3>Build it</h3><p>You get the finished files, product, design or deployed system — with revisions where agreed.</p></div></article>
            </div>
          </div>
        </section>

        <section className="studio-section insights-compact">
          <div className="site-shell">
            <div className="mini-head">
              <div><p className="section-eyebrow">INSIGHTS</p><h2>Ideas, guides & tech briefs.</h2></div>
              <Link href="/insights" className="simple-link">See all →</Link>
            </div>
            <div className="mini-insights">
              {insights.map(([title, href]) => <Link key={href} href={href}>{title}<span>→</span></Link>)}
            </div>
          </div>
        </section>

        <section className="studio-final">
          <div className="site-shell final-grid">
            <div>
              <p className="section-eyebrow">ANY DIGITAL TASK</p>
              <h2>What do you need done?</h2>
              <p>Send one sentence or a full brief. App, game, poster, automation, website, dashboard, presentation, content, AI tool — or something not listed.</p>
            </div>
            <div className="final-actions">
              <a className="button button-light" href="mailto:gaurav.anand54@gmail.com?subject=New%20work%20request%20-%20gauravanand.tech">Start a request →</a>
              <Link className="button button-dark-outline" href="/portfolio">View resume</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  )
}
