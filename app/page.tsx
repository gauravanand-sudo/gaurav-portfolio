import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'

const projects = [
  {
    title: 'Celeris',
    description:
      'Built to understand how multicore simulation engines work internally. C++20, multithreading benchmarks, and a browser UI where you can paste Verilog and see hot-path analysis.',
    tags: ['C++20', 'Multithreading', 'Simulation', 'FastAPI', 'Python'],
    github: 'https://github.com/gauravanand-sudo/celeris',
    href: '/projects/celeris',
    liveDemo: 'https://celeris.gauravanand.tech',
    status: 'Active',
  },
  {
    title: 'NeuroPowerRL',
    description:
      'Exploring whether GNNs and RL can reduce pre-simulation power estimation cost. Circuits as graphs, temporal switching behavior, RL-driven node-level gating — still early research.',
    tags: ['Python', 'PyTorch', 'GNN', 'Reinforcement Learning', 'EDA'],
    github: 'https://github.com/gauravanand-sudo',
    status: 'Exploring',
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
      'Developed a supervised learning model using historical transaction, latency, retry, and error logs to identify patterns associated with delayed or failed operations, enabling earlier detection of potential transaction failure.',
    ],
  },
  {
    company: 'Cadence Design Systems',
    role: 'Software Engineer II',
    period: 'Jun 2022 – Aug 2024',
    bullets: [
      "Contributed to the event-driven propagation subsystem of Xcelium's multicore engine — refactoring synchronization from coarse-grained locking to fine-grained strategies and introducing atomic fast paths for hot variables.",
      'Led cross-platform migration of the Xcelium simulation codebase (11M+ LOC) from Linux/GCC C++11 to macOS/Clang C++17, resolving platform differences across threading models, system calls, memory mapping, and toolchain compatibility.',
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
      'Worked on SPI/UART serial interfacing protocols for radar systems.',
    ],
  },
]

const skills: { label: string; items: string[]; dim?: boolean }[] = [
  {
    label: 'Strong',
    items: ['C++17/20', 'Multithreading', 'Atomics & Locking', 'Memory Management', 'GDB / Valgrind / TSan', 'Linux', 'Git'],
  },
  {
    label: 'Worked with',
    items: ['Event-Driven Architecture', 'Flex / Bison', 'Cross-Platform C++', 'Clang / GCC', 'Docker', 'REST APIs', 'Tcl'],
  },
  {
    label: 'Learning (AI-assisted)',
    items: ['GNN', 'Reinforcement Learning', 'PyTorch', 'RAG', 'LLMs', 'FastAPI'],
    dim: true,
  },
]

const SL: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '10px',
  color: '#4a4a4a',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  marginBottom: '32px',
}

const W: React.CSSProperties = { maxWidth: '860px', margin: '0 auto', padding: '0 24px' }

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* Projects */}
      <section id="projects" style={{ padding: '96px 0' }}>
        <div style={W}>
          <p style={SL}>Projects</p>
          <p style={{ fontSize: '14px', color: '#6e6e6e', maxWidth: '560px', lineHeight: 1.8, marginBottom: '40px' }}>
            Side projects built to understand things from the inside. I use AI tools to learn and move faster —
            that&apos;s part of how these got built.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '16px' }}>
            {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section style={{ padding: '80px 0', borderTop: '1px solid #1a1a1a' }}>
        <div style={W}>
          <p style={SL}>How I work</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1px', border: '1px solid #1a1a1a', borderRadius: '10px', overflow: 'hidden' }}>
            {[
              { title: 'AI-assisted learning', body: "I use Claude, Copilot, and other tools to understand concepts I don't know, explore unfamiliar codebases, and ship faster. Not hiding it." },
              { title: 'Depth over breadth', body: "I'd rather understand one thing well than skim ten. Celeris exists because I wanted to know what multicore simulation actually means internally." },
              { title: 'Learning by building', body: 'If I want to understand something — synchronization, compilers, ML — I build a project around it. Even if it takes longer.' },
              { title: 'Honest about limits', body: "C++ and concurrency I know well. AI/ML is something I'm actively learning. I won't overstate either." },
            ].map((c, i) => (
              <div key={i} style={{ background: '#0e0e0e', padding: '24px', borderRight: i % 2 === 0 ? '1px solid #1a1a1a' : 'none' }}>
                <p style={{ fontSize: '13px', color: '#6ee7b7', fontWeight: 500, marginBottom: '10px' }}>{c.title}</p>
                <p style={{ fontSize: '13px', color: '#7a7a7a', lineHeight: 1.75 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: '96px 0', borderTop: '1px solid #1a1a1a' }}>
        <div style={W}>
          <p style={SL}>Experience</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {experience.map((job, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: '32px',
                  padding: '32px 0',
                  borderBottom: i < experience.length - 1 ? '1px solid #161616' : 'none',
                }}
              >
                <div style={{ paddingTop: '2px' }}>
                  <p style={{ fontSize: '13px', color: '#e0e0e0', fontWeight: 500, lineHeight: 1.4 }}>{job.company}</p>
                  <p style={{ fontSize: '11px', color: '#4a4a4a', marginTop: '6px', fontFamily: 'monospace' }}>{job.period}</p>
                  {job.note && <p style={{ fontSize: '11px', color: '#3a3a3a', marginTop: '4px', fontStyle: 'italic' }}>{job.note}</p>}
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: '#6ee7b7', fontFamily: 'monospace', marginBottom: '14px', letterSpacing: '0.02em' }}>
                    {job.role}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {job.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: '13px', color: '#a0a0a0', lineHeight: 1.75, paddingLeft: '14px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#2e2e2e', top: '1px' }}>›</span>
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

      {/* Skills */}
      <section style={{ padding: '80px 0', borderTop: '1px solid #1a1a1a' }}>
        <div style={W}>
          <p style={SL}>Skills</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {skills.map((group) => (
              <div key={group.label} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '16px', alignItems: 'start' }}>
                <p style={{ fontSize: '11px', color: group.dim ? '#3a5a3a' : '#4a4a4a', fontFamily: 'monospace', paddingTop: '3px' }}>
                  {group.label}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: '12px',
                        color: group.dim ? '#4a7a4a' : '#c0c0c0',
                        background: group.dim ? '#0a120a' : '#111',
                        border: `1px solid ${group.dim ? '#1e301e' : '#242424'}`,
                        borderRadius: '4px',
                        padding: '3px 9px',
                        fontFamily: 'monospace',
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

      {/* Education */}
      <section style={{ padding: '80px 0', borderTop: '1px solid #1a1a1a' }}>
        <div style={W}>
          <p style={SL}>Education</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { school: 'IIT Patna', degree: 'M.Tech in Artificial Intelligence (Hybrid)', period: '2025 – 2027' },
              { school: 'Thapar Institute of Engineering & Technology', degree: 'B.E. in Electronics Engineering · CGPA 8.05', period: '2015 – 2019' },
            ].map((edu) => (
              <div key={edu.school} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <p style={{ fontSize: '14px', color: '#e0e0e0', fontWeight: 500 }}>{edu.school}</p>
                  <p style={{ fontSize: '13px', color: '#5a5a5a', marginTop: '4px' }}>{edu.degree}</p>
                </div>
                <p style={{ fontSize: '12px', color: '#3a3a3a', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
