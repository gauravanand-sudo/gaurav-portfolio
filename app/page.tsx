import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'

const projects = [
  {
    title: 'Celeris',
    description:
      'Open-source multicore event-driven simulation engine in C++20. Benchmarks lock granularity, atomic fast paths, and cache-line sharding. Paste Verilog RTL and get instant hot-path analysis.',
    tags: ['C++20', 'Multithreading', 'Simulation', 'FastAPI', 'Python'],
    github: 'https://github.com/gauravanand-sudo/celeris',
    href: '/projects/celeris',
    status: 'Active',
  },
  {
    title: 'NeuroPowerRL',
    description:
      'Learning-based framework for proactively optimizing circuit power before expensive simulation. Models circuits as graphs using a hybrid GNN + temporal architecture with RL-driven closed-loop optimization.',
    tags: ['Python', 'PyTorch', 'GNN', 'Reinforcement Learning', 'EDA'],
    github: 'https://github.com/gauravanand-sudo',
    status: 'Research',
  },
]

const experience = [
  {
    company: 'Airtel Africa Digital Labs',
    role: 'Senior Software Engineer',
    period: 'Apr 2025 – Apr 2026',
    note: 'Payroll: Intellismith',
    bullets: [
      'Partnered with product managers to deliver end-to-end solutions including API development, deployment, and production releases.',
      'Developed a supervised learning model on millions of transaction, latency, retry, and error log records to detect potential transaction failures earlier.',
    ],
  },
  {
    company: 'Cadence Design Systems',
    role: 'Software Engineer II',
    period: 'Jun 2022 – Aug 2024',
    bullets: [
      "Contributed synchronization optimizations to Xcelium's multicore simulation engine — identified hot paths, modernized locking strategies, and replaced custom barriers with C++20 primitives.",
      'Led cross-platform migration of the simulation codebase (11M+ LOC) from Linux/GCC (C++11) to macOS/Clang (C++17), resolving threading models, system calls, and memory mapping differences.',
      'Debugged intermittent concurrency defects using Undo time-travel debugging and mentored junior engineers on concurrency-aware development.',
    ],
  },
  {
    company: 'Interra Systems',
    role: 'C++ Developer',
    period: 'Dec 2021 – May 2022',
    bullets: [
      'Developed a compiler for a memory description language using Flex and Bison, generating an LALR-based parser for configuration validation.',
      'Implemented AST construction, semantic validation, and structured error handling for the compiler front-end.',
    ],
  },
  {
    company: 'Texas Instruments',
    role: 'Software Engineer',
    period: 'Jan 2019 – Nov 2021',
    bullets: [
      'Supported Design for Testability (DFT) flows for automotive radar SoCs.',
      'Worked on SPI/UART serial interfacing protocols for radar systems.',
    ],
  },
]

const skills = [
  {
    label: 'Languages',
    items: ['C++17/20', 'Python', 'Tcl'],
  },
  {
    label: 'Concurrency',
    items: ['Multithreading', 'Atomics', 'Mutexes', 'Lock-free', 'std::barrier', 'std::jthread'],
  },
  {
    label: 'Performance',
    items: ['Profiling', 'Cache Optimization', 'False Sharing', 'Critical Path', 'p95/p99 Latency'],
  },
  {
    label: 'Systems',
    items: ['Event-Driven Architecture', 'Memory Management', 'Cross-Platform', 'GDB', 'Valgrind', 'TSan'],
  },
  {
    label: 'EDA',
    items: ['Simulation Engines', 'DFT', 'HDL', 'Compiler Front-ends', 'Flex/Bison'],
  },
  {
    label: 'AI / ML',
    items: ['GNN', 'Reinforcement Learning', 'PyTorch', 'RAG', 'LLMs', 'Hugging Face'],
  },
]

const sectionLabel: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  fontSize: '11px',
  color: '#444444',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  marginBottom: '32px',
}

const section: React.CSSProperties = {
  maxWidth: '896px',
  margin: '0 auto',
  padding: '0 24px',
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* ── Projects ── */}
      <section id="projects" style={{ padding: '80px 0' }}>
        <div style={section}>
          <p style={sectionLabel}>Projects</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" style={{ padding: '80px 0', borderTop: '1px solid #1a1a1a' }}>
        <div style={section}>
          <p style={sectionLabel}>Experience</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {experience.map((job, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 3fr',
                  gap: '24px',
                  padding: '28px 0',
                  borderBottom: i < experience.length - 1 ? '1px solid #111' : 'none',
                }}
              >
                {/* Left col */}
                <div>
                  <p style={{ fontSize: '13px', color: '#ededed', fontWeight: 500 }}>{job.company}</p>
                  <p style={{ fontSize: '12px', color: '#555', marginTop: '4px' }}>{job.period}</p>
                  {job.note && (
                    <p style={{ fontSize: '11px', color: '#444', marginTop: '4px', fontStyle: 'italic' }}>{job.note}</p>
                  )}
                </div>
                {/* Right col */}
                <div>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#888',
                      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                      marginBottom: '12px',
                    }}
                  >
                    {job.role}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {job.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: '13px', color: '#666', lineHeight: 1.6, paddingLeft: '16px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#333' }}>—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" style={{ padding: '80px 0', borderTop: '1px solid #1a1a1a' }}>
        <div style={section}>
          <p style={sectionLabel}>Skills</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
            {skills.map((group) => (
              <div key={group.label}>
                <p
                  style={{
                    fontSize: '11px',
                    color: '#555',
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  {group.label}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: '12px',
                        color: '#777',
                        background: '#111',
                        border: '1px solid #1e1e1e',
                        borderRadius: '4px',
                        padding: '2px 8px',
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section style={{ padding: '80px 0', borderTop: '1px solid #1a1a1a' }}>
        <div style={section}>
          <p style={sectionLabel}>Education</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { school: 'IIT Patna', degree: 'M.Tech in Artificial Intelligence (Hybrid)', period: '2025 – 2027' },
              { school: 'Thapar Institute of Engineering & Technology', degree: 'B.E. in Electronics Engineering · CGPA 8.05', period: '2015 – 2019' },
            ].map((edu) => (
              <div key={edu.school} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <p style={{ fontSize: '14px', color: '#ededed', fontWeight: 500 }}>{edu.school}</p>
                  <p style={{ fontSize: '13px', color: '#555', marginTop: '4px' }}>{edu.degree}</p>
                </div>
                <p style={{ fontSize: '12px', color: '#444', fontFamily: "'JetBrains Mono', monospace", whiteSpace: 'nowrap' }}>{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
