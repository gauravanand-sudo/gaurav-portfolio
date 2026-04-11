import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'

const projects = [
  {
    title: 'Celeris',
    description:
      'Open-source multicore event-driven simulation engine in C++20 with benchmarked synchronization strategies, hot-path analysis, and an interactive Verilog demo.',
    tags: ['C++20', 'Multithreading', 'Simulation', 'FastAPI', 'Python'],
    github: 'https://github.com/gauravanand-sudo/celeris',
    href: '/projects/celeris',
    liveDemo: 'https://celeris-vxjb.onrender.com',
    status: 'Active',
  },
  {
    title: 'NeuroPowerRL',
    description:
      'Research-driven framework for proactive circuit power optimization using graph neural networks, temporal modeling, and reinforcement learning.',
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
      "Contributed synchronization optimizations to Xcelium's multicore simulation engine by identifying hot paths, modernizing locking strategies, and replacing custom barriers with C++20 primitives.",
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

const education = [
  { school: 'IIT Patna', degree: 'M.Tech in Artificial Intelligence (Hybrid)', period: '2025 – 2027' },
  { school: 'Thapar Institute of Engineering & Technology', degree: 'B.E. in Electronics Engineering · CGPA 8.05', period: '2015 – 2019' },
]

const sectionLabel: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  fontSize: '11px',
  color: '#8e4325',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  marginBottom: '20px',
}

const section: React.CSSProperties = {
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 24px',
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <section className="section-band">
        <div style={section}>
          <div className="intro-strip">
            <div>
              <p style={sectionLabel}>What I Do</p>
              <h2 className="section-heading">Systems engineering with measurable performance outcomes.</h2>
            </div>
            <p className="section-copy">
              My work sits at the intersection of concurrency, infrastructure, and developer tooling, with a
              strong focus on making complex systems faster, safer, and easier to reason about.
            </p>
          </div>
          <div className="focus-grid">
            <div className="focus-card">
              <p className="focus-title">Concurrency Design</p>
              <p className="focus-text">Modern C++, lock strategies, synchronization primitives, and multicore execution paths.</p>
            </div>
            <div className="focus-card">
              <p className="focus-title">Performance Engineering</p>
              <p className="focus-text">Profiling, cache-aware optimization, latency reduction, and critical-path analysis.</p>
            </div>
            <div className="focus-card">
              <p className="focus-title">Applied Research</p>
              <p className="focus-text">EDA workflows, simulation tooling, and ML-assisted optimization for engineering systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-band section-divider">
        <div style={section}>
          <p style={sectionLabel}>Projects</p>
          <div className="section-header">
            <h2 className="section-heading">Selected work that shows how I think and build.</h2>
            <p className="section-copy">
              A mix of production engineering and research-oriented exploration, with emphasis on systems depth
              and clarity of execution.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-band section-divider">
        <div style={section}>
          <p style={sectionLabel}>Experience</p>
          <div className="section-header">
            <h2 className="section-heading">Experience across product engineering, infrastructure, and EDA systems.</h2>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <div key={`${job.company}-${job.period}`} className="timeline-item">
                <div className="timeline-meta">
                  <p className="timeline-company">{job.company}</p>
                  <p className="timeline-period">{job.period}</p>
                  {job.note && <p className="timeline-note">{job.note}</p>}
                </div>
                <div>
                  <p className="timeline-role">{job.role}</p>
                  <ul className="timeline-list">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="timeline-bullet">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-band section-divider">
        <div style={section}>
          <p style={sectionLabel}>Skills</p>
          <div className="section-header">
            <h2 className="section-heading">Tools and domains I use to ship and improve systems.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.label} className="skill-group">
                <p className="skill-group-title">{group.label}</p>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item} className="tag-chip skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-divider">
        <div style={section}>
          <p style={sectionLabel}>Education</p>
          <div className="timeline">
            {education.map((edu) => (
              <div key={edu.school} className="timeline-item">
                <div className="timeline-meta">
                  <p className="timeline-company">{edu.school}</p>
                  <p className="timeline-period">{edu.period}</p>
                </div>
                <div>
                  <p className="timeline-role">Academic Background</p>
                  <p className="detail-copy">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-divider">
        <div style={section}>
          <div className="cta-panel">
            <div>
              <p style={sectionLabel}>Let&apos;s Connect</p>
              <h2 className="section-heading">Open to thoughtful systems, infrastructure, and platform work.</h2>
              <p className="section-copy">
                If you&apos;re building performance-sensitive products or tooling-heavy platforms, I&apos;d be glad to talk.
              </p>
            </div>
            <div className="hero-actions">
              <a href="mailto:gaurav.anand54@gmail.com" className="btn btn-primary">
                Email Gaurav
              </a>
              <a
                href="https://github.com/gauravanand-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                GitHub Profile ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
