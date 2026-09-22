import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gaurav Anand — Portfolio & Resume',
  description: 'Portfolio and resume of Gaurav Anand — software engineer focused on systems, C++, AI, cloud and performance engineering.',
  alternates: { canonical: '/portfolio' },
}

const experience = [
  {
    company: 'Airtel Africa Digital Labs',
    role: 'Senior Software Engineer',
    note: 'Payroll: Intellismith',
    period: 'Apr 2025 – Apr 2026',
    bullets: [
      'Partnered with product managers to understand business requirements and deliver end-to-end solutions, including API development, deployment, and production releases.',
      'Developed a supervised learning model using historical transaction, latency, retry, and error logs across millions of records to identify patterns associated with delayed or failed operations.',
    ],
  },
  {
    company: 'Cadence Design Systems',
    role: 'Software Engineer II',
    period: 'Jun 2022 – Aug 2024',
    bullets: [
      "Contributed to the event-driven propagation subsystem of Xcelium's multicore engine by refactoring synchronization from coarse-grained locking to fine-grained strategies and introducing atomic fast paths for hot variables.",
      'Replaced custom synchronization barriers with C++20 primitives and optimized contention-sensitive regions to improve multicore scalability.',
      'Led cross-platform migration of an 11M+ LOC simulation codebase from Linux/GCC (C++11) to macOS/Clang (C++17), resolving threading, system-call, memory-mapping, and toolchain differences.',
      'Debugged intermittent concurrency defects using Undo time-travel debugging and mentored junior engineers on concurrency-aware development practices.',
    ],
  },
  {
    company: 'Interra Systems',
    role: 'C++ Developer',
    period: 'Dec 2021 – May 2022',
    bullets: [
      'Developed a compiler for a memory description language using Flex and Bison, generating an LALR-based parser for configuration validation and input processing.',
      'Implemented AST construction, semantic validation, and structured error handling for the compiler front-end.',
    ],
  },
  {
    company: 'Texas Instruments',
    role: 'Software Engineer',
    period: 'Jan 2019 – Nov 2021',
    bullets: [
      'Supported Design for Testability (DFT) flows for automotive radar SoCs.',
      'Worked on serial interfacing protocols including SPI and UART for radar systems.',
    ],
  },
]

const skills = [
  ['Languages & engineering', ['C++', 'Python', 'TypeScript', 'Object-Oriented Design', 'Design Patterns', 'SOLID', 'Data Structures & Algorithms', 'REST APIs', 'Microservices']],
  ['Systems & concurrency', ['Multithreading', 'Thread Safety', 'Synchronization', 'Atomic Operations', 'Locking Strategies', 'Race Analysis', 'Memory Management']],
  ['Performance', ['Profiling', 'Scalability', 'Tail Latency', 'Critical Path Analysis', 'Event-Driven Architecture', 'Performance Optimization']],
  ['AI / ML', ['RAG', 'LLMs', 'OpenAI APIs', 'Hugging Face', 'PyTorch', 'Graph Neural Networks', 'Reinforcement Learning']],
  ['Cloud & tooling', ['Docker', 'Git', 'CI/CD', 'Linux', 'AWS', 'GCP', 'Azure', 'FastAPI', 'Next.js']],
  ['Debugging & toolchain', ['GDB', 'Undo Time-Travel Debugging', 'Valgrind', 'Sanitizers', 'Clang/GCC', 'Cross-Platform Migration']],
] as const

const projects = [
  ['SpecPilot RAG', 'Grounded assistant for technical manuals and engineering runbooks using retrieval, PyTorch reranking and citation-backed generation.', '/projects/specpilot-rag'],
  ['Celeris', 'C++20 multicore event-driven simulation engine with pluggable synchronization strategies and browser-based performance exploration.', '/projects/celeris'],
  ['MDL Compiler', 'Compiler front-end using Flex and Bison with LALR parsing, AST construction, semantic validation and structured diagnostics.', '/projects/compiler'],
  ['Design Patterns Visual', 'Interactive explanations of classic software design patterns with animated diagrams and C++ implementations.', 'https://design-patterns-visual.vercel.app'],
]

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main className="portfolio-page">
        <section className="portfolio-hero">
          <div className="site-shell portfolio-hero-grid">
            <div>
              <p className="section-eyebrow">PORTFOLIO / RESUME</p>
              <h1>Gaurav Anand</h1>
              <p className="lead">
                Software engineer with 6.5+ years across systems software, EDA, telecom platforms, compilers and applied ML, with a focus on modern C++, concurrency, performance engineering and AI-enabled software.
              </p>
            </div>
            <div className="portfolio-contact">
              <span>Noida, India</span>
              <a href="mailto:gaurav.anand54@gmail.com">gaurav.anand54@gmail.com</a>
              <a href="tel:+919289656293">+91 92896 56293</a>
              <a href="https://github.com/gauravanand-sudo" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href="/" >Company site →</a>
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="site-shell resume-grid">
            <div className="resume-label">Profile</div>
            <p className="resume-summary">
              Systems-focused engineer experienced in performance-oriented software, multicore concurrency, compilers, API delivery and applied machine learning. Comfortable moving between low-level debugging and product-facing software, with current work extending into AI, RAG, automation and cloud-native application development.
            </p>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="site-shell resume-grid">
            <div className="resume-label">Experience</div>
            <div className="resume-list">
              {experience.map((job) => (
                <article className="resume-row" key={job.company}>
                  <div>
                    <h3>{job.company}</h3>
                    <p className="role">{job.role}{job.note ? ` · ${job.note}` : ''}</p>
                  </div>
                  <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  <time>{job.period}</time>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="site-shell resume-grid">
            <div className="resume-label">Selected projects</div>
            <div className="portfolio-projects">
              {projects.map(([title, copy, href]) => (
                <article className="portfolio-project" key={title}>
                  <span className="section-eyebrow">PROJECT</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  {href.startsWith('http') ? (
                    <a href={href} target="_blank" rel="noopener noreferrer">Open project ↗</a>
                  ) : (
                    <Link href={href}>View case study →</Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="site-shell resume-grid">
            <div className="resume-label">Skills</div>
            <div className="skills-groups">
              {skills.map(([label, items]) => (
                <div className="skill-group" key={label}>
                  <h3>{label}</h3>
                  <div className="skill-chips">{items.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="site-shell resume-grid">
            <div className="resume-label">Education</div>
            <div className="education-list">
              <div className="education-row">
                <div><h3>IIT Patna</h3><p>M.Tech in Artificial Intelligence (Hybrid)</p></div>
                <time>2025 – 2027</time>
              </div>
              <div className="education-row">
                <div><h3>Thapar Institute of Engineering & Technology</h3><p>B.E. in Electronics Engineering · CGPA 8.05</p></div>
                <time>2015 – 2019</time>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
