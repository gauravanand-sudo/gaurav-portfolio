import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'

/* ─── Data ──────────────────────────────────────────────────────── */

const experience: {
  company: string
  role: string
  period: string
  note?: string
  bullets: string[]
}[] = [
  {
    company: 'Cadence Design Systems',
    role: 'Software Engineer II',
    period: 'Jun 2022 – Aug 2024',
    bullets: [
      "Contributed to the event-driven propagation subsystem of Xcelium's multicore engine by refactoring synchronization from coarse-grained locking to fine-grained strategies and introducing atomic fast paths for hot variables, reducing contention and improving throughput under parallel workloads (validated through performance benchmarks).",
      'Replaced custom synchronization barriers with C++20 primitives and optimized contention-sensitive regions, improving scalability and reducing synchronization overhead in multicore simulation workloads.',
      'Led cross-platform migration of the Xcelium simulation codebase (11M+ LOC) from Linux/GCC (C++11) to macOS/Clang (C++17), resolving platform differences across threading models, system calls, memory mapping, and toolchain compatibility.',
      'Debugged intermittent concurrency defects using Undo time-travel debugging and mentored junior engineers on concurrency-aware development practices.',
    ],
  },
  {
    company: 'Airtel Africa Digital Labs',
    role: 'Senior Software Engineer',
    note: 'Payroll: Intellismith',
    period: 'Apr 2025 – Apr 2026',
    bullets: [
      'Partnered with product managers to understand business requirements and deliver end-to-end solutions, including API development, deployment, and production releases.',
      'Developed a supervised learning model using historical transaction, latency, retry, and error logs millions of records to identify patterns associated with delayed or failed operations, enabling earlier detection of potential transaction failure.',
    ],
  },
  {
    company: 'Interra Systems',
    role: 'C++ Developer',
    period: 'Dec 2021 – May 2022',
    bullets: [
      'Developed a compiler for a memory description language using Flex and Bison, generating an LALR-based parser for configuration validation and input processing.',
      'Implemented AST construction, semantic validation, and structured error handling for the compiler front-end, improving robustness and correctness of configuration parsing.',
    ],
  },
  {
    company: 'Texas Instruments',
    role: 'Software Engineer',
    period: 'Jan 2019 – Nov 2021',
    bullets: [
      'Supported Design for Testability (DFT) flows for automotive radar SoCs.',
      'Worked on serial interfacing protocols (SPI/UART) for radar systems, contributing to communication and data exchange between hardware components.',
    ],
  },
]

const skills = [
  {
    label: 'Languages & Software Engineering',
    items: ['C++', 'Object-Oriented Design (OOD)', 'Design Patterns', 'SOLID Principles', 'Data Structures & Algorithms', 'Code Review', 'Unit Testing', 'Docker', 'Git', 'Scrum', 'REST API Integration', 'Microservices'],
  },
  {
    label: 'Systems & Concurrency',
    items: ['Multithreading', 'Thread Safety', 'Synchronization', 'Atomic Operations', 'Locking Strategies', 'Race Condition Analysis', 'Memory Management'],
  },
  {
    label: 'Performance & Architecture',
    items: ['Performance Optimization', 'Event-Driven Architecture', 'Scalability', 'Tail Latency Analysis (p95/p99)', 'Critical Path Analysis'],
  },
  {
    label: 'EDA & Hardware Exposure',
    items: ['Xcelium', 'Design for Testability (DFT)', 'Hardware Description Languages (HDL)', 'Testbenches', 'Tcl', 'Parsing & Compiler Concepts'],
  },
  {
    label: 'Debugging & Toolchain',
    items: ['Linux', 'Clang/GCC', 'GDB', 'Undo Time-Travel Debugging', 'Valgrind', 'Sanitizers', 'Cross-Platform Migration'],
  },
  {
    label: 'AI/ML (Exposure)',
    items: ['RAG', 'LLMs', 'Hugging Face Transformers', 'Graph Neural Network', 'Reinforcement Learning', 'Python', 'PyTorch (basics)'],
    dim: true,
  },
]

const projects: { title: string; description: string; tags: string[]; github?: string; href?: string; liveDemo?: string; status?: string }[] = [
  {
    title: 'Celeris',
    description:
      'C++20 multicore event-driven simulation engine with pluggable synchronization strategies (coarse-grained, fine-grained, atomic). Includes a browser UI with live benchmarks and Verilog hot-path analysis.',
    tags: ['C++20', 'Multithreading', 'Simulation', 'FastAPI', 'Python'],
    github: 'https://github.com/gauravanand-sudo/celeris',
    href: '/projects/celeris',
    liveDemo: 'https://celeris.gauravanand.tech',
    status: 'Active',
  },
  {
    title: 'MDL Compiler',
    description:
      'Compiler front-end for a memory description language using Flex and Bison — LALR parser, AST construction, semantic validation, and structured error handling. Browser walkthrough of each compiler stage.',
    tags: ['C', 'Flex', 'Bison', 'Compiler Design', 'Python'],
    github: 'https://github.com/gauravanand-sudo/compiler-project',
    href: '/projects/compiler',
    liveDemo: 'https://compiler-project.gauravanand.tech',
    status: 'Active',
  },
  {
    title: 'SpecPilot RAG',
    description:
      'Grounded assistant for technical manuals and engineering runbooks. Designed around Hugging Face embeddings, a PyTorch reranker, hybrid retrieval, and citation-backed LLM answers for long-form technical questions.',
    tags: ['PyTorch', 'RAG', 'LLM', 'Hugging Face', 'FAISS'],
    liveDemo: '/projects/specpilot-rag',
    status: 'Concept',
  },
  {
    title: 'Design Patterns Visual',
    description:
      '10 Gang of Four patterns — Observer, Strategy, Command, Visitor, Factory, Builder, Singleton, Decorator, Adapter, Facade — each with an animated structure diagram, C++ implementation, and real-world usage in EDA tools, compilers, and systems software.',
    tags: ['C++', 'Next.js', 'FastAPI', 'Design Patterns', 'SVG'],
    github: 'https://github.com/gauravanand-sudo/design-patterns-visual',
    status: 'Active',
  },
  {
    title: 'NeuroPowerRL',
    description:
      'Learning-based framework for proactively optimizing circuit power before expensive simulation, modeling circuits as graphs and capturing switching behavior over time through a hybrid GNN + temporal architecture. RL-driven closed-loop optimization for node-level gating and activity reduction.',
    tags: ['Python', 'PyTorch', 'GNN', 'Reinforcement Learning', 'EDA'],
    github: 'https://github.com/gauravanand-sudo',
    status: 'Exploring',
  },
]

/* ─── Layout ─────────────────────────────────────────────────────── */

const W = { maxWidth: '900px', margin: '0 auto', padding: '0 28px' }

function SectionLabel({ children }: { children: string }) {
  return (
    <p style={{
      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
      fontSize: '11px',
      fontWeight: 600,
      color: 'var(--accent)',
      letterSpacing: '0.2em',
      textTransform: 'uppercase' as const,
      marginBottom: '40px',
    }}>
      {children}
    </p>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* ── Summary ────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ ...W, padding: '44px 28px' }}>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-hi)',
            lineHeight: 2,
            maxWidth: '820px',
            borderLeft: '2px solid var(--accent-border)',
            paddingLeft: '22px',
          }}>
            Systems-focused Software Engineer with 6.5+ years of experience in EDA, distributed systems, and performance-oriented development,
            specializing in modern C++, multithreading, and design patterns, with a strong track record of independently solving complex problems
            and quickly adapting to new technologies, including exposure to AI-driven workflows.
          </p>
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────── */}
      <section id="experience" style={{ padding: '88px 0', borderTop: '1px solid var(--border)' }}>
        <div style={W}>
          <SectionLabel>Professional Experience</SectionLabel>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {experience.map((job, i) => (
              <div key={i} style={{
                paddingBottom: i < experience.length - 1 ? '52px' : 0,
                marginBottom: i < experience.length - 1 ? '52px' : 0,
                borderBottom: i < experience.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                {/* header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-hi)', letterSpacing: '-0.02em' }}>
                      {job.company}
                    </span>
                    {job.note && (
                      <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                        {job.note}
                      </span>
                    )}
                  </div>
                  <span style={{
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: '12px',
                    color: 'var(--text-mid)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}>
                    {job.period}
                  </span>
                </div>

                {/* role */}
                <p style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '12px',
                  color: 'var(--accent)',
                  letterSpacing: '0.04em',
                  marginBottom: '20px',
                }}>
                  {job.role}
                </p>

                {/* bullets */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{
                      fontSize: '14px',
                      color: 'var(--text-hi)',
                      lineHeight: 1.85,
                      paddingLeft: '18px',
                      position: 'relative',
                    }}>
                      <span style={{ position: 'absolute', left: 0, top: '2px', color: 'var(--accent)' }}>•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────── */}
      <section id="projects" style={{ padding: '88px 0', borderTop: '1px solid var(--border)' }}>
        <div style={W}>
          <SectionLabel>Projects</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
            {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────── */}
      <section id="skills" style={{ padding: '88px 0', borderTop: '1px solid var(--border)' }}>
        <div style={W}>
          <SectionLabel>Core Skills</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {skills.map((group) => (
              <div key={group.label} style={{
                display: 'grid',
                gridTemplateColumns: '230px 1fr',
                gap: '20px',
                alignItems: 'start',
              }}>
                <p style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '11px',
                  fontWeight: 600,
                  color: group.dim ? 'var(--text-dim)' : 'var(--text-mid)',
                  lineHeight: 1.6,
                  paddingTop: '6px',
                }}>
                  {group.label}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                  {group.items.map((item) => (
                    <span key={item} style={{
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      fontSize: '12px',
                      color: group.dim ? 'var(--text-dim)' : 'var(--text-hi)',
                      background: 'var(--surface)',
                      border: '1px solid var(--border-mid)',
                      borderRadius: '4px',
                      padding: '5px 12px',
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ─────────────────────────────────────── */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div style={W}>
          <SectionLabel>Education</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                school: 'IIT Patna',
                degree: 'M.Tech in Artificial Intelligence (Hybrid)',
                period: '2025 – 2027',
              },
              {
                school: 'Thapar Institute of Engineering & Technology',
                degree: 'B.E. in Electronics Engineering · CGPA: 8.05',
                period: '2015 – 2019',
              },
            ].map((edu, i, arr) => (
              <div key={edu.school} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '12px',
                padding: '24px 0',
                borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <div>
                  <p style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-hi)', letterSpacing: '-0.01em' }}>
                    {edu.school}
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--text-mid)', marginTop: '5px' }}>
                    {edu.degree}
                  </p>
                </div>
                <p style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '12px',
                  color: 'var(--text-mid)',
                  whiteSpace: 'nowrap',
                  marginTop: '4px',
                }}>
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
