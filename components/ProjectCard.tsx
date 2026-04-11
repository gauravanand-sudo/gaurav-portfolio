import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  github: string
  href?: string
  liveDemo?: string
  status?: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  github,
  href,
  liveDemo,
  status,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <h3 className="project-title">{title}</h3>
        {status && <span className="status-pill">{status}</span>}
      </div>

      <p className="project-description">{description}</p>

      <div className="tag-list">
        {tags.map((tag) => (
          <span key={tag} className="tag-chip">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer" className="card-link">
          GitHub ↗
        </a>
        {liveDemo && (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="card-link">
            Live Demo ↗
          </a>
        )}
        {href && (
          <Link href={href} className="card-link">
            Read More →
          </Link>
        )}
      </div>
    </article>
  )
}
