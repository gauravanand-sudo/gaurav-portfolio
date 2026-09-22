import Link from 'next/link'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

const services = [
  { n: '01', title: 'AI products & agents', copy: 'Customer-facing AI features, internal copilots, agentic workflows and grounded knowledge systems built around real business tasks.', tags: ['Agents', 'RAG', 'OpenAI', 'Evaluation'] },
  { n: '02', title: 'Product engineering', copy: 'Web apps, SaaS products, dashboards, portals and APIs — from first usable release to a production-ready platform.', tags: ['Next.js', 'APIs', 'SaaS', 'UX'] },
  { n: '03', title: 'Automation & integrations', copy: 'Replace repetitive workflows with connected systems that move data, trigger actions and keep teams focused on higher-value work.', tags: ['Workflows', 'APIs', 'Internal tools', 'Ops'] },
  { n: '04', title: 'Cloud & platform', copy: 'Cloud architecture, deployments, CI/CD, observability and modernization designed for the scale and complexity you actually have.', tags: ['AWS', 'GCP', 'Azure', 'DevOps'] },
  { n: '05', title: 'Data & applied ML', copy: 'Pipelines, prediction, classification, retrieval and decision-support systems that turn operational data into useful software.', tags: ['Python', 'PyTorch', 'Analytics', 'ML'] },
  { n: '06', title: 'Systems & performance', copy: 'Deep engineering for software where concurrency, throughput, latency, reliability or cross-platform behavior really matter.', tags: ['C++', 'Concurrency', 'Profiling', 'Architecture'] },
]

const work = [
  {
    label: 'AI KNOWLEDGE SYSTEM',
    title: 'SpecPilot RAG',
    description: 'Technical-document intelligence with retrieval, reranking and citation-backed answers. A reference architecture for private knowledge assistants and support copilots.',
    tech: ['RAG', 'PyTorch', 'Hugging Face', 'FastAPI'],
    href: '/projects/specpilot-rag',
    github: 'https://github.com/gauravanand-sudo/specpilot-rag',
    accent: '01',
  },
  {
    label: 'HIGH-PERFORMANCE SYSTEMS',
    title: 'Celeris',
    description: 'A C++20 multicore event-driven simulation engine exploring synchronization strategies, performance bottlenecks and production-minded concurrency design.',
    tech: ['C++20', 'Multithreading', 'Performance', 'FastAPI'],
    href: '/projects/celeris',
    github: 'https://github.com/gauravanand-sudo/celeris',
    accent: '02',
  },
  {
    label: 'LANGUAGE TOOLING',
    title: 'MDL Compiler',
    description: 'Compiler front-end with lexical analysis, LALR parsing, AST construction, semantic validation and an interactive browser-based walkthrough.',
    tech: ['C', 'Flex', 'Bison', 'Compiler design'],
    href: '/projects/compiler',
    github: 'https://github.com/gauravanand-sudo/compiler-project',
    accent: '03',
  },
]

const principles = [
  ['01', 'Business problem first', 'Technology choices follow the outcome, constraints and users — not the other way around.'],
  ['02', 'Prototype the risky part', 'Validate model quality, integration complexity, performance or UX before scaling the build.'],
  ['03', 'AI-accelerated, human-led', 'Use AI aggressively for leverage while keeping architecture, review and accountability firmly human.'],
  ['04', 'Production is the finish line', 'Cloud, testing, observability, security and maintainability are part of the product, not afterthoughts.'],
]

const insights = [
  ['AI Engineering', 'RAG vs AI agents: choosing the right architecture for business knowledge', '/insights/rag-vs-ai-agents-for-business-knowledge'],
  ['Cloud', 'A practical cloud cost checklist before your startup scales', '/insights/cloud-cost-checklist-before-you-scale'],
  ['Systems', 'Why performance engineering still matters in an AI-first software stack', '/insights/performance-engineering-in-an-ai-first-stack'],
]

const stack = ['OpenAI', 'Python', 'PyTorch', 'Next.js', 'TypeScript', 'FastAPI', 'C++', 'PostgreSQL', 'Docker', 'AWS', 'GCP', 'Azure', 'CI/CD', 'REST APIs']

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GauravAnand.Tech',
    url: 'https://gauravanand.tech',
    areaServed: 'Worldwide',
    description: 'AI-native software engineering studio for products, platforms and automation.',
    serviceType: ['AI software development', 'Custom software development', 'Cloud engineering', 'Automation', 'Product engineering'],
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />

        <section className="service-ribbon">
          <div className="site-shell ribbon-inner">
            <span>AI PRODUCTS</span><i />
            <span>CUSTOM SOFTWARE</span><i />
            <span>CLOUD PLATFORMS</span><i />
            <span>AUTOMATION</span><i />
            <span>DATA SYSTEMS</span><i />
            <span>PERFORMANCE ENGINEERING</span>
          </div>
        </section>

        <section id="services" className="page-section">
          <div className="site-shell">
            <div className="split-heading">
              <p className="section-eyebrow">WHAT WE BUILD</p>
              <div>
                <h2>Technology services built around outcomes, not buzzwords.</h2>
                <p>From a first AI workflow to a full software platform, we combine product thinking with hands-on engineering so one team can move from idea to production.</p>
              </div>
            </div>

            <div className="services-grid-v2">
              {services.map((service) => (
                <article className="service-card-v2" key={service.title}>
                  <div className="service-card-head"><span>{service.n}</span><i>↗</i></div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="page-section work-section">
          <div className="site-shell">
            <div className="split-heading compact">
              <p className="section-eyebrow">SELECTED ENGINEERING</p>
              <div><h2>Real builds. Different layers of the stack.</h2></div>
            </div>

            <div className="work-list">
              {work.map((project) => (
                <article className="work-row" key={project.title}>
                  <div className="work-index">{project.accent}</div>
                  <div className="work-main">
                    <span className="work-label">{project.label}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="work-tags">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <div className="work-actions">
                    <Link href={project.href}>Case study <span>↗</span></Link>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section dark-panel-section">
          <div className="site-shell panel-grid">
            <div className="panel-copy">
              <p className="section-eyebrow">HOW WE THINK</p>
              <h2>Modern delivery without the agency theatre.</h2>
              <p>Clear scope, direct engineering ownership and fast feedback loops. Use AI to accelerate the work, but keep the product grounded in sound architecture and measurable outcomes.</p>
              <a className="text-link" href="mailto:gaurav.anand54@gmail.com?subject=Project%20inquiry%20-%20gauravanand.tech">Discuss a project →</a>
            </div>
            <div className="principles-list">
              {principles.map(([n, title, copy]) => (
                <div className="principle-row" key={n}>
                  <span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="site-shell stack-section">
            <div className="stack-copy">
              <p className="section-eyebrow">TECHNOLOGY</p>
              <h2>Use the stack that fits the problem.</h2>
              <p>AI models are one part of modern software. Durable products still need APIs, data, infrastructure, observability and strong engineering underneath.</p>
            </div>
            <div className="stack-cloud">{stack.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </section>

        <section className="page-section engagement-section">
          <div className="site-shell">
            <div className="split-heading compact">
              <p className="section-eyebrow">ENGAGEMENTS</p>
              <div><h2>Start where the uncertainty is.</h2></div>
            </div>
            <div className="engagements-v2">
              <article><span>01</span><h3>Discovery sprint</h3><p>Define the opportunity, test the hardest assumption and leave with a practical architecture and build plan.</p></article>
              <article><span>02</span><h3>End-to-end build</h3><p>Design and ship a product, platform, workflow or integration with clear technical ownership from prototype through deployment.</p></article>
              <article><span>03</span><h3>Modernize & scale</h3><p>Improve an existing system through AI adoption, cloud modernization, performance work, automation or architecture changes.</p></article>
            </div>
          </div>
        </section>

        <section id="insights" className="page-section insights-section-v2">
          <div className="site-shell">
            <div className="insights-head">
              <div><p className="section-eyebrow">INSIGHTS</p><h2>Notes for people building with technology.</h2></div>
              <Link href="/insights" className="text-link">View all insights →</Link>
            </div>
            <div className="insights-list-v2">
              {insights.map(([tag, title, href]) => (
                <Link href={href} key={href} className="insight-row-v2">
                  <span>{tag}</span><h3>{title}</h3><i>↗</i>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="site-shell final-cta">
            <p className="section-eyebrow">START SOMETHING USEFUL</p>
            <h2>Have a software problem worth solving?</h2>
            <p>Bring the idea, bottleneck or messy workflow. We’ll turn it into a practical technical direction.</p>
            <a className="button button-light" href="mailto:gaurav.anand54@gmail.com?subject=Project%20inquiry%20-%20gauravanand.tech">Start a project <span>↗</span></a>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  )
}
