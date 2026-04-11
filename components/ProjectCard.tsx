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

const statusColor: Record<string, string> = {
  Active:     '#6ee7b7',
  Exploring:  '#94a3b8',
  Archived:   '#555',
}

export default function ProjectCard({
  title, description, tags, github, href, liveDemo, status,
}: ProjectCardProps) {
  const color = status ? (statusColor[status] ?? '#888') : '#888'

  return (
    <div className="pcard">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#ececec', letterSpacing: '-0.01em' }}>
          {title}
        </h3>
        {status && (
          <span style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '10px',
            color: color,
            border: `1px solid ${color}30`,
            background: `${color}0d`,
            padding: '3px 8px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            marginTop: '2px',
          }}>
            {status}
          </span>
        )}
      </div>

      <p style={{
        fontSize: '13px',
        color: '#8a8a8a',
        marginTop: '10px',
        lineHeight: 1.75,
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '18px' }}>
        {tags.map((tag) => (
          <span key={tag} style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '10px',
            color: '#7a7a7a',
            background: '#0e0e0e',
            border: '1px solid #212121',
            padding: '3px 8px',
            borderRadius: '4px',
          }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '22px', paddingTop: '18px', borderTop: '1px solid #181818' }}>
        <a href={github} target="_blank" rel="noopener noreferrer" className="pcard-link">
          GitHub ↗
        </a>
        {liveDemo && (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="pcard-link pcard-cta">
            Try Now ↗
          </a>
        )}
        {href && (
          <Link href={href} className="pcard-link">
            Read More →
          </Link>
        )}
      </div>

      <style>{`
        .pcard {
          border: 1px solid #1a1a1a;
          background: #0c0c0c;
          padding: 24px;
          border-radius: 10px;
          transition: border-color 200ms ease, background 200ms ease;
          position: relative;
          overflow: hidden;
        }
        .pcard::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(110,231,183,0), transparent);
          transition: background 200ms ease;
        }
        .pcard:hover {
          border-color: #2e2e2e;
          background: #0e0e0e;
        }
        .pcard:hover::before {
          background: linear-gradient(90deg, transparent, rgba(110,231,183,0.25), transparent);
        }
        .pcard-link {
          font-size: 12px;
          color: #606060;
          text-decoration: none;
          transition: color 150ms ease;
          letter-spacing: 0.01em;
        }
        .pcard-link:hover { color: #c0c0c0; }
        .pcard-cta { color: #6ee7b7 !important; }
        .pcard-cta:hover { color: #a7f3d0 !important; }
      `}</style>
    </div>
  )
}
