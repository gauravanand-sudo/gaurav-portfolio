import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  github?: string
  href?: string
  liveDemo?: string
  status?: string
}

export default function ProjectCard({ title, description, tags, github, href, liveDemo, status }: ProjectCardProps) {
  return (
    <article className="pcard">
      <div className="pcard-head">
        <h3>{title}</h3>
        {status ? <span className="pcard-status">{status}</span> : null}
      </div>

      <p className="pcard-description">{description}</p>

      <div className="pcard-tags">
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>

      <div className="pcard-links">
        {href ? <Link href={href} className="pcard-link pcard-cta">Case study →</Link> : null}
        {liveDemo ? <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="pcard-link">Live ↗</a> : null}
        {github ? <a href={github} target="_blank" rel="noopener noreferrer" className="pcard-link">GitHub ↗</a> : null}
      </div>

      <style>{`
        .pcard {
          border: 1px solid var(--border);
          background: linear-gradient(180deg, rgba(24, 36, 31, .83), rgba(15, 23, 21, .92));
          padding: 25px;
          border-radius: 16px;
          transition: border-color 180ms ease, transform 180ms ease;
          min-height: 305px;
          display: flex;
          flex-direction: column;
        }
        .pcard:hover { border-color: var(--border-mid); transform: translateY(-2px); }
        .pcard-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 14px; }
        .pcard-head h3 { font-size: 19px; font-weight: 700; color: var(--text-hi); letter-spacing: -.02em; }
        .pcard-status {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: .1em;
          color: var(--accent);
          border: 1px solid var(--accent-border);
          background: rgba(20, 52, 39, .58);
          padding: 4px 7px;
          border-radius: 999px;
          white-space: nowrap;
        }
        .pcard-description { font-size: 13px; color: var(--text-lo); margin-top: 13px; line-height: 1.8; }
        .pcard-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 20px; }
        .pcard-tags span {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 10px;
          color: var(--text-mid);
          background: rgba(11,17,16,.55);
          border: 1px solid var(--border);
          padding: 4px 8px;
          border-radius: 999px;
        }
        .pcard-links { display: flex; flex-wrap: wrap; align-items: center; gap: 18px; margin-top: auto; padding-top: 24px; }
        .pcard-link { font-size: 12px; color: var(--text-lo); text-decoration: none; font-weight: 650; }
        .pcard-link:hover { color: var(--text-hi); }
        .pcard-cta { color: var(--accent-strong); }
      `}</style>
    </article>
  )
}
