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
]

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <section id="projects" style={{ padding: '96px 0' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px' }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: '11px',
              color: '#444444',
              letterSpacing: '0.1em',
              marginBottom: '32px',
              textTransform: 'uppercase',
            }}
          >
            Projects
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '16px',
            }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
