import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gaurav Anand — R&D Staff Software Engineer',
  description: 'Portfolio and resume of Gaurav Anand — R&D Staff Software Engineer with 7+ years across C++ systems, AI/ML, backend infrastructure, semiconductor/ASIC and cloud.',
  alternates: { canonical: '/portfolio' },
}

const experience = [
  {
    company: 'Synopsys',
    role: 'R&D Staff Software Engineer',
    period: '2026 – Present',
    bullets: [] as string[],
  },
  {
    company: 'Intellismith',
    role: 'Software Engineer (Grade: Deputy Manager)',
    period: 'Apr 2025 – Apr 2026',
    bullets: [
      'Partnered with product managers to understand domain business requirements and deliver end-to-end solutions, including low-latency API development, Kubernetes deployment, and production releases.',
      'Built an internal RAG-based tool using LangChain + sentence-transformers to index payment APIs, partner bank docs, IA docs, and reconciliation rules into a FAISS vector store; enabled engineers to quickly look up transaction flows, error codes, and settlement logic via natural language instead of manually searching PDFs.',
    ],
  },
  {
    company: 'Cadence Design Systems',
    role: 'Software CM Engineer II',
    period: 'Jun 2022 – Dec 2024',
    bullets: [
      "Contributed to synchronization improvements in Xcelium's multicore simulation engine, reducing contention in event-propagation paths by replacing coarse-grained locks with finer-grained/atomic-based approaches, removing custom barriers, and introducing lock-free queues — lowering synchronization overhead in parallel workloads.",
      'Led cross-platform migration of the Xcelium simulator codebase (11M+ LOC) from Linux/GCC (C++11) to macOS/Clang (C++17), resolving platform differences across threading models, system calls, memory mapping, and toolchain compatibility.',
      'Debugged intermittent defects using Undo time-travel debugging, reducing customer incidents.',
    ],
  },
  {
    company: 'Interra Systems',
    role: 'C++ Developer',
    period: 'Dec 2021 – May 2022',
    bullets: [
      'Developed a compiler for a memory description language using Flex and Bison, generating an LALR-based parser for configuration validation and input processing. Implemented AST construction and semantic validation.',
    ],
  },
  {
    company: 'Texas Instruments',
    role: 'Software Engineer',
    period: 'Jan 2019 – Nov 2021',
    bullets: [
      'Worked on DFT for TI mmWave automotive radar SoCs.',
      'Worked on mmWave SDK peripheral drivers/interfaces such as SPI and UART, supporting device communication, configuration, and low-level debugging.',
    ],
  },
]

const skills = [
  ['Languages, systems & UI', ['C++ (11/17/20)', 'Python', 'Qt', 'OOP', 'Design Patterns', 'DSA', 'Memory Management', 'Cache Awareness']],
  ['Concurrency & performance', ['Multithreading', 'Synchronization', 'Mutexes', 'Condition Variables', 'Atomics', 'Memory Model', 'Locking Strategies', 'Race Condition Analysis', 'Lock-free Queues', 'Performance Optimization', 'p95/p99 Latency']],
  ['Backend, distributed & cloud', ['System Design', 'REST APIs', 'Microservices', 'TCP/gRPC (basics)', 'API Gateway', 'Kafka', 'Kubernetes', 'GCP', 'PostgreSQL', 'Docker', 'Scalable Systems', 'Event-Driven Architecture']],
  ['ASIC, embedded & verification', ['Verilog', 'RTL', 'ASIC', 'DFT', 'Digital Design', 'Verification', 'Simulation', 'mmWave', 'TI Microcontrollers', 'SPI', 'UART']],
  ['AI/ML & accelerated compute', ['AI', 'ML', 'Computer Vision', 'RAG', 'LLMs', 'Transformers', 'PyTorch', 'Hugging Face', 'LangChain', 'sentence-transformers', 'FAISS', 'KV Caching', 'GPU', 'TPU', 'CUDA Programming', 'CUDA Kernels']],
  ['Observability, debugging & toolchain', ['Prometheus', 'Grafana', 'Linux', 'Shell', 'Perf', 'GTest/CUnit', 'Clang/GCC', 'GDB/Undo', 'Make/CMake', 'Valgrind', 'Sanitizers', 'Cross-Platform Migration', 'Git']],
  ['Engineering delivery', ['Requirements Scoping', 'End-to-End Delivery', 'API Integration', 'Code Review', 'Testing', 'Production Deployment', 'Troubleshooting', 'Performance Tuning']],
  ['Mathematics', ['Calculus', 'Linear Algebra', 'Probability & Statistics']],
] as const

const projects = [
  ['SpecPilot RAG', 'Grounded assistant for technical manuals and engineering runbooks using retrieval, reranking and citation-backed generation.', '/projects/specpilot-rag'],
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
              <p className="portfolio-role">R&D Staff Software Engineer · C++ Systems · AI/ML</p>
              <p className="lead">
                7+ years of engineering experience across systems software, semiconductor/ASIC, backend infrastructure, and AI/ML. Hands-on in performance-critical C++ systems, concurrency, simulation, DFT/mmWave platforms, scalable backend services, and applied AI.
              </p>
            </div>
            <div className="portfolio-contact">
              <a href="mailto:gaurav.anand54@gmail.com">gaurav.anand54@gmail.com</a>
              <a href="tel:+919289656293">+91 92896 56293</a>
              <a href="https://github.com/gauravanand-sudo" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <Link href="/">Software services site →</Link>
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="site-shell resume-grid">
            <div className="resume-label">Profile</div>
            <p className="resume-summary">
              Experienced in end-to-end engineering delivery from requirements and debugging through deployment and production support, spanning performance-critical C++, scalable backend services, applied AI and semiconductor/ASIC platforms.
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
                    <p className="role">{job.role}</p>
                  </div>
                  <div>
                    {job.bullets.length ? <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : <p className="current-role-note">Current role</p>}
                  </div>
                  <time>{job.period}</time>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="site-shell resume-grid">
            <div className="resume-label">Core skills</div>
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
            <div className="resume-label">Projects</div>
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
            <div className="resume-label">Education</div>
            <div className="education-list">
              <div className="education-row">
                <div><h3>IIT Patna</h3><p>M.Tech in Artificial Intelligence</p></div>
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
