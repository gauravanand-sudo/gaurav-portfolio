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
    <div
      className="project-card"
      style={{
        border: '1px solid #1f1f1f',
        background: '#111111',
        padding: '24px',
        borderRadius: '8px',
        transition: 'border-color 150ms',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h3
          style={{
            fontSize: '16px',
            fontWeight: 500,
            color: '#ededed',
          }}
        >
          {title}
        </h3>
        {status && (
          <span
            style={{
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: '11px',
              color: '#d9d9d9',
              border: '1px solid #3a3a3a',
              background: '#171717',
              padding: '2px 8px',
              borderRadius: '4px',
            }}
          >
            {status}
          </span>
        )}
      </div>
      <p
        style={{
          fontSize: '14px',
          color: '#cfcfcf',
          marginTop: '8px',
          lineHeight: 1.6,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {description}
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          marginTop: '16px',
        }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: '11px',
              color: '#bdbdbd',
              background: '#151515',
              border: '1px solid #2b2b2b',
              padding: '2px 8px',
              borderRadius: '4px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginTop: '20px',
        }}
      >
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
            style={{
              fontSize: '13px',
              color: '#cfcfcf',
              textDecoration: 'none',
            }}
        >
          GitHub ↗
        </a>
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
            style={{
              fontSize: '13px',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Try Now ↗
          </a>
        )}
        {href && (
          <Link
            href={href}
            className="card-link"
            style={{
              fontSize: '13px',
              color: '#cfcfcf',
              textDecoration: 'none',
            }}
          >
            Read More →
          </Link>
        )}
      </div>
      <style>{`
        .project-card:hover {
          border-color: #3a3a3a !important;
        }
        .card-link:hover {
          color: #ffffff !important;
        }
      `}</style>
    </div>
  )
}
