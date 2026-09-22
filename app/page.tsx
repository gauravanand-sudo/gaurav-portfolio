import Link from 'next/link'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

const services = [
  {
    title: 'AI automation & agents',
    pitch: 'Automate repetitive work and give teams AI tools that can search, reason and act across your systems.',
    outcomes: ['AI agents & copilots', 'workflow automation', 'document processing', 'support & operations tools'],
  },
  {
    title: 'RAG & knowledge systems',
    pitch: 'Turn private PDFs, wikis, SOPs and product documentation into fast, citation-backed search and Q&A.',
    outcomes: ['private knowledge assistants', 'semantic search', 'retrieval & reranking', 'permissions & evaluation'],
  },
  {
    title: 'Custom software & integrations',
    pitch: 'Build the product, portal, dashboard, API or internal tool your business needs — and connect it to the systems you already use.',
    outcomes: ['SaaS & MVPs', 'web applications', 'REST APIs', 'third-party integrations'],
  },
  {
    title: 'Cloud, backend & performance',
    pitch: 'Make software reliable, deployable and fast — from cloud infrastructure and backend services to performance-critical C++ systems.',
    outcomes: ['cloud deployment', 'Docker & CI/CD', 'microservices', 'performance optimization'],
  },
]

const work = [
  {
    tag: 'AI / RAG',
    title: 'SpecPilot RAG',
    description: 'A grounded technical-document assistant using retrieval, reranking and citation-backed answers — the same core pattern used for internal knowledge and support systems.',
    href: '/projects/specpilot-rag',
  },
  {
    tag: 'C++ / PERFORMANCE',
    title: 'Celeris',
    description: 'A C++20 multicore simulation engine built around synchronization, concurrency and benchmark-driven optimization.',
    href: '/projects/celeris',
  },
  {
    tag: 'COMPILERS / TOOLING',
    title: 'MDL Compiler',
    description: 'A complete compiler front-end with tokenization, LALR parsing, AST construction and semantic validation.',
    href: '/projects/compiler',
  },
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
    description: 'AI and software engineering services for automation, custom applications, cloud systems and performance-critical software.',
    serviceType: ['AI automation', 'AI software development', 'Custom software development', 'Cloud engineering', 'Backend engineering'],
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />

        <section id="services" className="sales-section">
          <div className="site-shell">
            <div className="sales-heading">
              <div>
                <p className="section-eyebrow">SERVICES</p>
                <h2>Tell us what is slowing the business down. We’ll build the software to fix it.</h2>
              </div>
              <p>Start with a focused build or a complete product. Every engagement is scoped around a concrete outcome and a deployable result.</p>
            </div>

            <div className="sales-services">
              {services.map((service, index) => (
                <article className="sales-service-card" key={service.title}>
                  <span className="sales-num">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.pitch}</p>
                  <ul>{service.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>

            <div className="inline-cta">
              <div>
                <strong>Have a specific problem already?</strong>
                <span>Send the goal, current setup and deadline. We’ll reply with the clearest next step.</span>
              </div>
              <a className="button button-primary" href="mailto:gaurav.anand54@gmail.com?subject=Project%20brief%20-%20gauravanand.tech">Send project brief →</a>
            </div>
          </div>
        </section>

        <section id="work" className="sales-section proof-section">
          <div className="site-shell">
            <div className="sales-heading compact-heading">
              <div>
                <p className="section-eyebrow">ENGINEERING PROOF</p>
                <h2>Built across AI, backend systems and low-level engineering.</h2>
              </div>
              <Link href="/portfolio" className="simple-link">View technical portfolio →</Link>
            </div>

            <div className="proof-cards">
              {work.map((project) => (
                <Link href={project.href} className="proof-card" key={project.title}>
                  <span>{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <strong>See project →</strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="sales-section process-section">
          <div className="site-shell process-sales-grid">
            <div className="process-copy">
              <p className="section-eyebrow">HOW IT WORKS</p>
              <h2>Small process. Clear deliverables.</h2>
              <p>No long discovery theatre. Start with the problem, validate the risky part, then ship.</p>
              <a className="simple-link" href="mailto:gaurav.anand54@gmail.com?subject=Project%20estimate%20-%20gauravanand.tech">Ask for an estimate →</a>
            </div>
            <div className="process-steps">
              <article><span>1</span><div><h3>Share the problem</h3><p>What needs to change, who uses it, what systems are involved, and what success looks like.</p></div></article>
              <article><span>2</span><div><h3>Get a practical build plan</h3><p>Scope, architecture, milestones and the fastest way to de-risk the hard part.</p></div></article>
              <article><span>3</span><div><h3>Build, deploy, iterate</h3><p>Working software with testing, deployment and the engineering needed to keep it maintainable.</p></div></article>
            </div>
          </div>
        </section>

        <section className="sales-section insight-strip">
          <div className="site-shell">
            <div className="mini-head">
              <div><p className="section-eyebrow">INSIGHTS</p><h2>Useful technical notes.</h2></div>
              <Link href="/insights" className="simple-link">All insights →</Link>
            </div>
            <div className="mini-insights">
              {insights.map(([title, href]) => <Link key={href} href={href}>{title}<span>→</span></Link>)}
            </div>
          </div>
        </section>

        <section className="sales-final">
          <div className="site-shell">
            <p className="section-eyebrow">READY TO BUILD?</p>
            <h2>Turn the problem into working software.</h2>
            <p>AI automation, internal tools, SaaS, APIs, cloud systems or performance engineering — send a short brief and start with a concrete plan.</p>
            <div className="hero-actions">
              <a className="button button-light" href="mailto:gaurav.anand54@gmail.com?subject=Project%20estimate%20-%20gauravanand.tech">Get a project estimate →</a>
              <a className="button button-dark-outline" href="/portfolio">View portfolio</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  )
}
