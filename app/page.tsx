import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'

/* ─── Data ──────────────────────────────────────────────────────── */

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

const skills: { label: string; items: string[]; accent?: boolean }[] = [
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
    accent: true,
  },
]

const howIWork = [
  {
    title: 'AI-assisted learning',
    body: "I use Claude, Copilot, and other tools to understand concepts I don't know, explore unfamiliar codebases, and ship faster. Not hiding it.",
  },
  {
    title: 'Depth over breadth',
    body: "I'd rather understand one thing well than skim ten. Celeris exists because I wanted to know what multicore simulation actually means internally.",
  },
  {
    title: 'Learning by building',
    body: 'If I want to understand something — synchronization, compilers, ML — I build a project around it. Even if it takes longer.',
  },
  {
    title: 'Honest about limits',
    body: "C++ and concurrency I know well. AI/ML is something I'm actively learning. I won't overstate either.",
  },
]

/* ─── Helpers ────────────────────────────────────────────────────── */

const W = { maxWidth: '860px', margin: '0 auto', padding: '0 32px' }

function SectionLabel({ children }: { children: string }) {
  return (
    <p style={{
      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
      fontSize: '10px',
      color: '#606060',
      letterSpacing: '0.18em',
      textTransform: 'uppercase' as const,
      marginBottom: '32px',
    }}>
      {children}
    </p>
  )
}

const divider = { borderTop: '1px solid #1c1c1c' }

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* ── Experience ─── first — EM scans this immediately */}
      <section id="experience" style={{ padding: '88px 0' }}>
        <div style={W}>
          <SectionLabel>Experience</SectionLabel>

          <div style={{ position: 'relative' }}>
            {/* vertical timeline rule */}
            <div style={{
              position: 'absolute', left: 0, top: '8px', bottom: '8px', width: '1px',
              background: 'linear-gradient(to bottom, #2a2a2a, #181818 85%, transparent)',
            }} />

            {experience.map((job, i) => (
              <div key={i} style={{
                paddingLeft: '28px',
                paddingBottom: i < experience.length - 1 ? '48px' : 0,
                position: 'relative',
              }}>
                {/* dot — accent on most recent */}
                <div style={{
                  position: 'absolute', left: '-4px', top: '7px',
                  width: '9px', height: '9px', borderRadius: '50%',
                  background: i === 0 ? '#6ee7b7' : '#242424',
                  border: i === 0 ? 'none' : '1px solid #383838',
                }} />

                {/* company + payroll note */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap', marginBottom: '3px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#ebebeb', letterSpacing: '-0.01em' }}>
                    {job.company}
                  </p>
                  {job.note && (
                    <span style={{ fontSize: '11px', color: '#484848', fontStyle: 'italic' }}>
                      {job.note}
                    </span>
                  )}
                </div>

                {/* role + period */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: '11px', color: '#6ee7b7', letterSpacing: '0.02em',
                  }}>
                    {job.role}
                  </span>
                  <span style={{
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: '11px', color: '#606060',
                  }}>
                    {job.period}
                  </span>
                </div>

                {/* bullets */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{
                      fontSize: '13.5px', color: '#a8a8a8', lineHeight: 1.8,
                      paddingLeft: '16px', position: 'relative',
                    }}>
                      <span style={{ position: 'absolute', left: 0, top: '2px', color: '#484848' }}>›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" style={{ padding: '80px 0', ...divider }}>
        <div style={W}>
          <SectionLabel>Projects</SectionLabel>
          <p style={{ fontSize: '13.5px', color: '#707070', maxWidth: '500px', lineHeight: 1.85, marginBottom: '36px' }}>
            Side projects built to understand things from the inside. I use AI tools to learn and
            move faster — that&apos;s part of how these got built.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '14px' }}>
            {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section style={{ padding: '80px 0', ...divider }}>
        <div style={W}>
          <SectionLabel>Skills</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {skills.map((group) => (
              <div key={group.label} style={{
                display: 'grid', gridTemplateColumns: '150px 1fr', gap: '16px', alignItems: 'start',
              }}>
                <p style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '11px',
                  color: group.accent ? '#2e5e3e' : '#505050',
                  paddingTop: '4px',
                }}>
                  {group.label}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {group.items.map((item) => (
                    <span key={item} style={{
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      fontSize: '11px',
                      color: group.accent ? '#3a6e4a' : '#909090',
                      background: group.accent ? '#081408' : '#0f0f0f',
                      border: `1px solid ${group.accent ? '#1a3520' : '#222'}`,
                      borderRadius: '4px',
                      padding: '4px 10px',
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

      {/* ── Education ── */}
      <section style={{ padding: '72px 0', ...divider }}>
        <div style={W}>
          <SectionLabel>Education</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { school: 'IIT Patna', degree: 'M.Tech in Artificial Intelligence (Hybrid)', period: '2025 – 2027' },
              { school: 'Thapar Institute of Engineering & Technology', degree: 'B.E. in Electronics Engineering · CGPA 8.05', period: '2015 – 2019' },
            ].map((edu, i, arr) => (
              <div key={edu.school} style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px',
                padding: '24px 0',
                borderBottom: i < arr.length - 1 ? '1px solid #1c1c1c' : 'none',
              }}>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#e0e0e0', letterSpacing: '-0.01em' }}>
                    {edu.school}
                  </p>
                  <p style={{ fontSize: '13px', color: '#707070', marginTop: '5px' }}>{edu.degree}</p>
                </div>
                <p style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '11px', color: '#585858', whiteSpace: 'nowrap', marginTop: '4px',
                }}>
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How I work ── last, personality context */}
      <section style={{ padding: '72px 0', ...divider }}>
        <div style={W}>
          <SectionLabel>How I work</SectionLabel>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
            gap: '1px', background: '#1a1a1a',
            border: '1px solid #1a1a1a', borderRadius: '10px', overflow: 'hidden',
          }}>
            {howIWork.map((c) => (
              <div key={c.title} style={{ background: '#0a0a0a', padding: '24px 22px' }}>
                <p style={{
                  fontSize: '12px', color: '#6ee7b7', fontWeight: 500,
                  marginBottom: '10px', letterSpacing: '0.01em',
                }}>
                  {c.title}
                </p>
                <p style={{ fontSize: '12.5px', color: '#707070', lineHeight: 1.8 }}>
                  {c.body}
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
