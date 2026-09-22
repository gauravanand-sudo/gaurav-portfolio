import Link from 'next/link'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'

const services = [
  {
    code: '01',
    title: 'AI Assistants & Agents',
    description: 'Custom copilots, support agents, research workflows and task-oriented AI systems using OpenAI/ChatGPT and modern model stacks.',
    items: ['ChatGPT / OpenAI API', 'tool-calling agents', 'customer & internal copilots', 'guardrails & evaluation'],
  },
  {
    code: '02',
    title: 'RAG & Knowledge Systems',
    description: 'Turn PDFs, SOPs, wikis, product docs and private knowledge into grounded search and question-answering experiences.',
    items: ['document ingestion', 'hybrid retrieval', 'reranking', 'citations & permissions'],
  },
  {
    code: '03',
    title: 'Automation & Integrations',
    description: 'Connect repetitive business workflows across APIs, spreadsheets, CRMs, email, databases and internal tools.',
    items: ['workflow automation', 'API integrations', 'report generation', 'content & ops pipelines'],
  },
  {
    code: '04',
    title: 'Cloud & DevOps',
    description: 'Practical infrastructure for shipping and operating products reliably, from a first deployment to scalable production systems.',
    items: ['AWS / GCP / Azure', 'Docker & CI/CD', 'serverless & APIs', 'observability & cost control'],
  },
  {
    code: '05',
    title: 'Web, SaaS & MVPs',
    description: 'Modern customer-facing products, dashboards, portals and internal tools built quickly without sacrificing a path to scale.',
    items: ['Next.js applications', 'SaaS foundations', 'admin dashboards', 'payments & auth integrations'],
  },
  {
    code: '06',
    title: 'Data & Applied ML',
    description: 'Data pipelines and models that support decisions, prediction, classification, ranking and operational intelligence.',
    items: ['analytics pipelines', 'ML prototypes', 'NLP workflows', 'monitoring & evaluation'],
  },
  {
    code: '07',
    title: 'Systems & Performance',
    description: 'Deep engineering for software where throughput, concurrency, latency and reliability are business-critical.',
    items: ['modern C++', 'multithreading', 'profiling & optimization', 'cross-platform migration'],
  },
  {
    code: '08',
    title: 'Modernization & Technical Consulting',
    description: 'Architecture reviews, prototypes and focused engineering help for teams navigating AI adoption, legacy systems or technical uncertainty.',
    items: ['architecture audits', 'AI opportunity mapping', 'legacy modernization', 'prototype sprints'],
  },
]

const capabilityGroups = [
  {
    title: 'AI for work',
    items: ['knowledge copilots', 'document extraction', 'research agents', 'support automation', 'lead qualification', 'meeting & report workflows', 'content operations', 'semantic search'],
  },
  {
    title: 'Products & platforms',
    items: ['SaaS products', 'marketplaces', 'internal tools', 'dashboards', 'customer portals', 'REST APIs', 'microservices', 'real-time systems'],
  },
  {
    title: 'Cloud & operations',
    items: ['cloud deployment', 'Docker', 'CI/CD', 'monitoring', 'serverless', 'database design', 'cost optimization', 'reliability improvements'],
  },
  {
    title: 'Deep engineering',
    items: ['C++ systems', 'concurrency', 'compilers', 'performance profiling', 'architecture', 'debugging', 'toolchain migration', 'technical due diligence'],
  },
]

const projects = [
  {
    title: 'SpecPilot RAG',
    description: 'A grounded technical knowledge assistant with retrieval, reranking and citation-backed answers — representative of private-document AI systems for teams.',
    tags: ['RAG', 'PyTorch', 'LLM', 'Hugging Face', 'FastAPI'],
    github: 'https://github.com/gauravanand-sudo/specpilot-rag',
    href: '/projects/specpilot-rag',
    status: 'AI System',
  },
  {
    title: 'Celeris',
    description: 'A C++20 multicore simulation engine with pluggable synchronization strategies, live benchmarks and performance-focused architecture.',
    tags: ['C++20', 'Multithreading', 'Performance', 'FastAPI'],
    github: 'https://github.com/gauravanand-sudo/celeris',
    href: '/projects/celeris',
    liveDemo: 'https://celeris.gauravanand.tech',
    status: 'Systems',
  },
  {
    title: 'MDL Compiler',
    description: 'Compiler front-end with lexical analysis, parsing, AST construction, semantic validation and an interactive browser walkthrough.',
    tags: ['C', 'Flex', 'Bison', 'Compiler Design', 'Python'],
    github: 'https://github.com/gauravanand-sudo/compiler-project',
    href: '/projects/compiler',
    liveDemo: 'https://compiler-project.gauravanand.tech',
    status: 'Compiler',
  },
  {
    title: 'Design Patterns Visual',
    description: 'An interactive engineering learning product explaining classic software design patterns with animated diagrams and C++ implementations.',
    tags: ['C++', 'Next.js', 'FastAPI', 'Architecture'],
    github: 'https://github.com/gauravanand-sudo/design-patterns-visual',
    liveDemo: 'https://design-patterns-visual.vercel.app',
    status: 'Product',
  },
]

const experience = [
  ['Airtel Africa Digital Labs', 'Senior Software Engineer', '2025–2026', 'End-to-end API delivery and applied ML over large transaction datasets to identify signals associated with delayed or failed operations.'],
  ['Cadence Design Systems', 'Software Engineer II', '2022–2024', 'Multicore simulation, concurrency optimization, C++ modernization and cross-platform migration across a large production codebase.'],
  ['Interra Systems', 'C++ Developer', '2021–2022', 'Compiler front-end development with Flex/Bison, AST construction, semantic validation and structured diagnostics.'],
  ['Texas Instruments', 'Software Engineer', '2019–2021', 'Automotive radar engineering exposure spanning DFT flows and hardware/software interfacing.'],
]

const engagements = [
  ['Prototype Sprint', 'Validate an AI or software idea quickly with a working prototype, architecture direction and next-step plan.'],
  ['Project Build', 'A defined product, automation, integration or platform delivered end to end with direct technical ownership.'],
  ['Engineering Partner', 'Ongoing product engineering, modernization, AI adoption or performance work embedded with your team.'],
]

const insights = [
  {
    slug: 'rag-vs-ai-agents-for-business-knowledge',
    tag: 'AI Engineering',
    title: 'RAG vs AI agents: choosing the right architecture for business knowledge',
    summary: 'A practical way to decide when retrieval is enough, when agentic workflows help, and where teams overcomplicate the system.',
  },
  {
    slug: 'cloud-cost-checklist-before-you-scale',
    tag: 'Cloud',
    title: 'A practical cloud cost checklist before your startup scales',
    summary: 'The infrastructure decisions that quietly become expensive later — and the lightweight controls worth adding early.',
  },
  {
    slug: 'performance-engineering-in-an-ai-first-stack',
    tag: 'Systems',
    title: 'Why performance engineering still matters in an AI-first software stack',
    summary: 'AI adds new latency and cost layers. Systems thinking is increasingly useful, not less, when every request touches models and distributed services.',
  },
]

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-intro">
      <p className="section-eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </div>
  )
}

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GauravAnand.Tech',
    url: 'https://gauravanand.tech',
    email: 'gaurav.anand54@gmail.com',
    founder: { '@type': 'Person', name: 'Gaurav Anand' },
    areaServed: 'Worldwide',
    description: 'Founder-led AI, cloud and software engineering studio.',
    knowsAbout: ['Artificial Intelligence', 'Cloud Computing', 'Software Engineering', 'C++', 'DevOps', 'Machine Learning'],
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />

        <section className="value-strip">
          <div className="site-shell value-strip-inner">
            <span>Strategy → prototype → production</span>
            <span>AI where it creates leverage</span>
            <span>Cloud built for the stage you are at</span>
            <span>Engineering depth when the hard parts appear</span>
          </div>
        </section>

        <section id="services" className="page-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Services"
              title="One technical partner across AI, cloud and software."
              copy="The goal is not to sell a narrow stack. It is to understand the business problem, choose the smallest useful architecture, ship it, measure it and evolve it as the company grows."
            />

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span className="service-code">{service.code}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section section-tint">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Capability map"
              title="If software can remove friction, automate work or create a product, it is worth exploring."
              copy="ChatGPT and modern AI models expand what a small technical team can build, but durable solutions still need product judgment, APIs, data, infrastructure, security, testing and reliable software underneath."
            />

            <div className="capability-grid">
              {capabilityGroups.map((group) => (
                <div className="capability-column" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="chip-cloud">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="vision-card">
              <p className="section-eyebrow">The long view</p>
              <h3>Build a technology company, not a one-off freelance profile.</h3>
              <p>
                GauravAnand.Tech is being built as a founder-led engineering studio today and a broader software and services company over time — combining AI-native product development with cloud, systems, data and consulting capability. The brand is intentionally broader than a single technology so it can grow with the market and with client needs.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="page-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Selected work"
              title="Proof that goes deeper than a landing page."
              copy="These projects demonstrate the engineering range behind the service offering: AI retrieval systems, concurrent C++, compilers and interactive software products."
            />
            <div className="projects-grid">
              {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
            </div>
          </div>
        </section>

        <section className="page-section section-tint">
          <div className="site-shell process-layout">
            <div>
              <p className="section-eyebrow">How projects run</p>
              <h2 className="process-title">Move quickly without building a mess.</h2>
              <p className="process-copy">Every engagement should reduce uncertainty early, expose risk before it becomes expensive, and leave behind software that another engineer can understand.</p>
            </div>
            <ol className="process-list">
              <li><span>01</span><div><strong>Frame the outcome</strong><p>Define the user, workflow, constraints, data and measurable result before choosing tools.</p></div></li>
              <li><span>02</span><div><strong>Prototype the hard part</strong><p>Test the highest-risk assumption first — model quality, integration, latency, architecture or UX.</p></div></li>
              <li><span>03</span><div><strong>Ship production software</strong><p>Build the application, APIs, cloud setup, observability and deployment path around the validated core.</p></div></li>
              <li><span>04</span><div><strong>Measure and evolve</strong><p>Improve quality, cost and reliability using real usage instead of speculative complexity.</p></div></li>
            </ol>
          </div>
        </section>

        <section id="about" className="page-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Founder"
              title="Built on production engineering experience."
              copy="I am Gaurav Anand, a software engineer with 6.5+ years across systems software, telecom platforms, compilers, EDA and applied ML. I am also pursuing an M.Tech in Artificial Intelligence at IIT Patna."
            />

            <div className="experience-list">
              {experience.map(([company, role, period, detail]) => (
                <article className="experience-row" key={company}>
                  <div><strong>{company}</strong><span>{role}</span></div>
                  <p>{detail}</p>
                  <time>{period}</time>
                </article>
              ))}
            </div>

            <div className="founder-note">
              <strong>Why this mix matters:</strong>
              <p>
                AI makes it possible to build faster and tackle workflows that were previously too expensive to automate. Systems engineering provides the discipline to make those solutions reliable, observable, cost-aware and maintainable. The studio is designed around both.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section section-tint">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Ways to work together"
              title="Start with the engagement size that matches the uncertainty."
            />
            <div className="engagement-grid">
              {engagements.map(([title, description], index) => (
                <article className="engagement-card" key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="page-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Insights & tech briefs"
              title="Useful writing on AI, cloud and software engineering."
              copy="This is the publishing layer of the site: practical explainers, architecture notes and selected technology updates designed to be useful first and discoverable second."
            />
            <div className="insights-grid">
              {insights.map((article) => (
                <Link className="insight-card" href={`/insights/${article.slug}`} key={article.slug}>
                  <span>{article.tag}</span>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <strong>Read article →</strong>
                </Link>
              ))}
            </div>
            <div className="section-link-row">
              <Link href="/insights" className="text-link">Browse all insights & tech briefs →</Link>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="site-shell contact-card">
            <div>
              <p className="section-eyebrow">Have something to build?</p>
              <h2>Bring the messy idea. We can turn it into a technical plan.</h2>
              <p>
                AI workflow, cloud migration, internal tool, SaaS product, automation, API platform, C++ performance problem or something unusual — send the context and the outcome you want.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:gaurav.anand54@gmail.com?subject=Project%20inquiry%20-%20gauravanand.tech">Start a conversation →</a>
              <a className="text-link" href="https://github.com/gauravanand-sudo" target="_blank" rel="noopener noreferrer">Explore GitHub ↗</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  )
}
