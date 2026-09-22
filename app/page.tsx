import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { companyServices } from '@/lib/company-services'

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
}

function ProductSystemVisual() {
  return (
    <div className="maturity-visual" aria-label="Illustration of a connected digital product system">
      <div className="maturity-window">
        <div className="maturity-window-top"><i/><i/><i/><span>ga.tech workspace</span></div>
        <div className="maturity-window-body">
          <aside>
            <img src="/brand/ga-tech-logo.webp" alt="" />
            <span className="active">Overview</span>
            <span>Products</span>
            <span>Automations</span>
            <span>Content</span>
          </aside>
          <div className="maturity-dashboard">
            <div className="maturity-dashboard-head">
              <div><small>DIGITAL DELIVERY</small><h3>One system. Four outcomes.</h3></div>
              <span className="demo-badge">SAMPLE UI</span>
            </div>
            <div className="maturity-module-grid">
              {[
                ['Build','Apps & web','01'],
                ['Automate','AI & workflows','02'],
                ['Create','Design & content','03'],
                ['Scale','Backend & cloud','04'],
              ].map(([title,copy,num]) => (
                <div className="maturity-module" key={title}>
                  <span>{num}</span><strong>{title}</strong><small>{copy}</small>
                </div>
              ))}
            </div>
            <div className="maturity-chart">
              <div><small>From idea</small><b>Scope</b></div>
              <span>→</span><div><small>To delivery</small><b>Launch</b></div>
              <span>→</span><div><small>After launch</small><b>Improve</b></div>
            </div>
          </div>
        </div>
      </div>
      <div className="maturity-float maturity-float-ai"><strong>AI workflow</strong><span>Connected · evaluated</span></div>
      <div className="maturity-float maturity-float-launch"><strong>Launch ready</strong><span>Design · build · deploy</span></div>
      <div className="maturity-float maturity-float-support"><strong>Support</strong><span>Improve after launch</span></div>
    </div>
  )
}

const starterOffers = [
  {
    label: 'LAUNCH',
    title: 'Business Website Launch',
    copy: 'A credible, responsive company or campaign site with a clear enquiry path and deployment.',
    goodFor: 'New businesses, campaigns, product launches',
    request: 'Business Website Launch',
  },
  {
    label: 'MVP',
    title: 'App / MVP Build',
    copy: 'Validate one important customer journey with a usable product before expanding the feature set.',
    goodFor: 'Founders, internal tools, SaaS validation',
    request: 'App or MVP Build',
  },
  {
    label: 'AUTOMATE',
    title: 'AI / Workflow Sprint',
    copy: 'Map one painful recurring workflow, prototype the risky part and turn it into a repeatable system.',
    goodFor: 'Operations, support, document-heavy teams',
    request: 'AI or Workflow Sprint',
  },
  {
    label: 'CREATE',
    title: 'Launch Creative System',
    copy: 'A coordinated set of visual and written assets for a launch, campaign or sales motion.',
    goodFor: 'Startups, creators, campaigns, events',
    request: 'Launch Creative System',
  },
]

const founderProof = [
  {
    title: 'Knowledge assistant',
    copy: 'Built a RAG-based internal tool over payment APIs, partner documentation and reconciliation rules for natural-language lookup.',
  },
  {
    title: 'Performance engineering',
    copy: 'Worked on synchronization and multicore simulation performance in a large production systems codebase.',
  },
  {
    title: 'Platform migration',
    copy: 'Led cross-platform migration work across an 11M+ LOC simulator codebase from Linux/GCC to macOS/Clang.',
  },
]

const faqs = [
  ['Do I need a detailed specification?', 'No. A problem, desired result, examples and constraints are enough to start. Scoping turns that into clear deliverables.'],
  ['How is pricing decided?', 'Scope, uncertainty, integrations, revision needs and delivery requirements drive pricing. The project brief captures enough context to propose a realistic path.'],
  ['Can you work with an existing team or codebase?', 'Yes. Work can start from an existing product, repository, workflow, cloud setup, design system or content library when access and constraints are clear.'],
  ['Who actually does the work?', 'ga.tech is founder-led. Specialist collaborators can be added when a scope needs them, while delivery ownership stays clear.'],
  ['Is post-launch support available?', 'Yes. Maintenance, product iteration, cloud support, content production and ongoing improvements can be scoped separately.'],
]

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ga.tech',
    url: 'https://gauravanand.tech',
    logo: 'https://gauravanand.tech/brand/ga-tech-logo.webp',
    areaServed: 'Worldwide',
    description: 'Founder-led digital product studio for startups and growing businesses.',
    serviceType: ['Digital product development', 'AI automation', 'Design and content', 'Backend and cloud engineering'],
  }

  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="maturity-hero">
          <div className="site-shell maturity-hero-grid">
            <div className="maturity-hero-copy">
              <p className="company-kicker">FOUNDER-LED DIGITAL PRODUCT STUDIO</p>
              <h1>Build, automate and launch <em>without juggling multiple vendors.</em></h1>
              <p className="maturity-lead">
                Senior-engineering-led apps, websites, AI automation, creative and cloud delivery for startups and growing businesses—from scope to launch.
              </p>
              <div className="maturity-actions">
                <Link href="/contact" className="button button-primary button-lg">Request scope <ArrowIcon /></Link>
                <Link href="/services" className="button button-secondary button-lg">Explore services</Link>
              </div>
              <div className="maturity-trust-row">
                <span><strong>Founder-led</strong><small>Direct delivery ownership</small></span>
                <span><strong>7+ years</strong><small>Systems, cloud & applied AI</small></span>
                <span><strong>Remote</strong><small>Work with clients worldwide</small></span>
              </div>
              <p className="maturity-personality">Got something unusual? We can probably build that too.</p>
            </div>
            <ProductSystemVisual />
          </div>
        </section>

        <section className="founder-proof-strip">
          <div className="site-shell founder-proof-strip-inner">
            <div>
              <p className="company-kicker">WHY TRUST THE DELIVERY</p>
              <strong>Founder background: R&D Staff Software Engineer with experience across systems, cloud and applied AI.</strong>
            </div>
            <p>Prior engineering experience includes Synopsys, Cadence and Texas Instruments. These are founder credentials, not ga.tech client endorsements.</p>
            <Link href="/portfolio">View founder background →</Link>
          </div>
        </section>

        <section className="maturity-section">
          <div className="site-shell">
            <div className="maturity-section-head">
              <div><p className="company-kicker">WHAT GA.TECH DOES</p><h2>Four outcomes. One delivery partner.</h2></div>
              <p>Start with the business result. The technology, design and implementation choices follow from that.</p>
            </div>
            <div className="solution-grid">
              {companyServices.map((service, index) => (
                <article className="solution-card" key={service.slug}>
                  <span className="solution-index">0{index + 1}</span>
                  <p className="company-kicker">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <div className="solution-tags">
                    {service.idealFor.slice(0,3).map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <Link href={`/services/${service.slug}`}>Explore {service.shortTitle.toLowerCase()} →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="maturity-section maturity-soft">
          <div className="site-shell">
            <div className="maturity-section-head">
              <div><p className="company-kicker">STARTING POINTS</p><h2>Buy an outcome, not a technology list.</h2></div>
              <p>These are common engagement shapes. Final scope depends on your users, dependencies, quality bar and launch needs.</p>
            </div>
            <div className="starter-offer-grid">
              {starterOffers.map((offer) => (
                <article className="starter-offer-card" key={offer.title}>
                  <span>{offer.label}</span>
                  <h3>{offer.title}</h3>
                  <p>{offer.copy}</p>
                  <small><b>Good for:</b> {offer.goodFor}</small>
                  <Link href={`/contact?request=${encodeURIComponent(offer.request)}`}>Scope this →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="maturity-section">
          <div className="site-shell proof-section-grid">
            <div className="proof-intro">
              <p className="company-kicker">FOUNDER EXPERIENCE</p>
              <h2>Technical depth behind the company.</h2>
              <p>Until ga.tech has a larger public client portfolio, the site should be explicit about what is founder experience versus company client work.</p>
              <Link href="/portfolio" className="company-text-link">See full engineering background →</Link>
            </div>
            <div className="proof-card-grid">
              {founderProof.map((item) => (
                <article key={item.title}><span>FOUNDER EXPERIENCE</span><h3>{item.title}</h3><p>{item.copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="maturity-section maturity-dark">
          <div className="site-shell">
            <div className="maturity-section-head dark-head">
              <div><p className="company-kicker">HOW WORK MOVES</p><h2>Clear checkpoints before code becomes commitment.</h2></div>
              <p>Good delivery is less about “starting fast” and more about removing ambiguity early.</p>
            </div>
            <div className="maturity-process">
              {[
                ['01','Discover','Goal, users, constraints and what success means.'],
                ['02','Scope','Deliverables, assumptions, milestones and commercial terms.'],
                ['03','Design / prototype','Validate the risky flow before building too much.'],
                ['04','Build & QA','Milestone demos, feedback and acceptance against the scope.'],
                ['05','Launch & handover','Deploy, document, hand over and plan support if needed.'],
              ].map(([num,title,copy]) => (
                <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="maturity-section">
          <div className="site-shell">
            <div className="maturity-section-head">
              <div><p className="company-kicker">ENGAGEMENT MODELS</p><h2>Work in the shape the problem needs.</h2></div>
              <p>No forced long contracts for small work, and no pretending a complex product is a one-week fixed package.</p>
            </div>
            <div className="engagement-grid">
              <article><span>FOCUSED</span><h3>Fixed-scope sprint</h3><p>Best for a defined website, deck, automation, design system, landing page or technical task.</p><strong>Clear deliverable · defined revision/acceptance points</strong></article>
              <article><span>MILESTONE</span><h3>Product project</h3><p>Best for MVPs, applications and larger workflows where the work should move through visible checkpoints.</p><strong>Scope → milestone demos → launch</strong></article>
              <article><span>ONGOING</span><h3>Support & iteration</h3><p>Best for maintenance, feature improvement, content production, cloud support and recurring creative work.</p><strong>Monthly or milestone-based follow-on support</strong></article>
            </div>
          </div>
        </section>

        <section className="maturity-section maturity-soft">
          <div className="site-shell faq-v2-grid">
            <div>
              <p className="company-kicker">FAQ</p>
              <h2>Reduce uncertainty before the first call.</h2>
              <p>For a specific answer, send the actual problem and constraints. A polished specification is not required.</p>
              <Link href="/contact" className="company-text-link">Ask about your project →</Link>
            </div>
            <div className="faq-v2-list">
              {faqs.map(([question,answer]) => (
                <details key={question}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="maturity-cta">
          <div className="site-shell maturity-cta-inner">
            <div>
              <p className="company-kicker">READY WHEN THE PROBLEM IS</p>
              <h2>Send the outcome, constraints and timeline. We’ll turn it into a practical next step.</h2>
            </div>
            <div>
              <p><strong>Target response:</strong> within 1 business day.</p>
              <p>No obligation. No polished brief required.</p>
              <div className="maturity-actions">
                <Link href="/contact" className="button button-primary button-lg">Request scope <ArrowIcon /></Link>
                <Link href="/about" className="button button-secondary button-lg">How ga.tech works</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  )
}
