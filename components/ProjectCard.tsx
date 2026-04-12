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
  Active:     'var(--accent)',
  Exploring:  '#a6b6c1',
  Archived:   '#7f8a84',
}

export default function ProjectCard({
  title, description, tags, github, href, liveDemo, status,
}: ProjectCardProps) {
  const color = status ? (statusColor[status] ?? '#888') : '#888'

  return (
    <div className="pcard">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-hi)', letterSpacing: '-0.01em' }}>
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
        color: 'var(--text-lo)',
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
            color: 'var(--text-lo)',
            background: 'rgba(38, 50, 46, 0.65)',
            border: '1px solid var(--border)',
            padding: '3px 8px',
            borderRadius: '4px',
          }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '22px', paddingTop: '18px', borderTop: '1px solid var(--border)' }}>
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
          border: 1px solid var(--border);
          background: linear-gradient(180deg, rgba(29, 39, 36, 0.92), rgba(24, 32, 29, 0.96));
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
          background: linear-gradient(90deg, transparent, rgba(182,215,198,0), transparent);
          transition: background 200ms ease;
        }
        .pcard:hover {
          border-color: var(--border-mid);
          background: linear-gradient(180deg, rgba(33, 44, 40, 0.95), rgba(27, 36, 33, 0.98));
        }
        .pcard:hover::before {
          background: linear-gradient(90deg, transparent, rgba(182,215,198,0.28), transparent);
        }
        .pcard-link {
          font-size: 12px;
          color: var(--text-lo);
          text-decoration: none;
          transition: color 150ms ease;
          letter-spacing: 0.01em;
        }
        .pcard-link:hover { color: var(--text-hi); }
        .pcard-cta { color: var(--accent-strong) !important; }
        .pcard-cta:hover { color: var(--text-hi) !important; }
      `}</style>
    </div>
  )
}
