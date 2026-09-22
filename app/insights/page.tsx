import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { insights } from '@/lib/insights'

export const metadata: Metadata = {
  title: 'AI, Cloud & Software Insights',
  description: 'Practical articles and technology briefs on AI engineering, cloud architecture, automation, software systems and performance.',
  alternates: { canonical: '/insights' },
}

export default function InsightsPage() {
  return (
    <>
      <Nav />
      <main className="content-page">
        <div className="site-shell">
          <header className="content-hero">
            <p className="section-eyebrow">Insights & tech briefs</p>
            <h1>Engineering notes for an AI-native software world.</h1>
            <p>
              Practical writing on AI systems, cloud architecture, software engineering, automation and the technology shifts that matter to builders and businesses.
            </p>
          </header>

          <div className="article-index">
            {insights.map((article) => (
              <Link href={`/insights/${article.slug}`} className="article-index-card" key={article.slug}>
                <div className="article-meta"><span>{article.category}</span><time>{article.published}</time></div>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <strong>{article.readTime} · Read →</strong>
              </Link>
            ))}
          </div>

          <section className="editorial-note">
            <p className="section-eyebrow">Editorial direction</p>
            <h2>Useful first. Search-friendly second.</h2>
            <p>
              Future coverage will include AI model and tooling updates, cloud platform changes, developer tooling, cybersecurity, systems engineering and practical implementation guides. The focus is on explaining what changed, why it matters and how to use it — not republishing headlines.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
