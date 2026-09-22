import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { insights } from '@/lib/insights'

export const metadata: Metadata = {
  title: 'Buyer Guides & Engineering Insights',
  description: 'Practical buyer guides and engineering notes on MVPs, AI automation, cloud architecture and software delivery.',
  alternates: { canonical: '/insights' },
}

export default function InsightsPage() {
  const buyerGuides = insights.filter((article) => article.category === 'Buyer Guide')
  const engineering = insights.filter((article) => article.category !== 'Buyer Guide')

  return (
    <>
      <Nav />
      <main id="main-content" className="content-page">
        <div className="site-shell">
          <header className="content-hero">
            <p className="section-eyebrow">Guides & insights</p>
            <h1>Useful before you buy. Useful while you build.</h1>
            <p>Buyer guides explain scope, architecture and delivery decisions in plain language. Engineering notes go deeper on AI, cloud and systems work.</p>
          </header>

          <section className="insight-group">
            <div className="insight-group-head"><p className="section-eyebrow">Buyer guides</p><h2>Questions worth answering before a proposal.</h2></div>
            <div className="article-index">
              {buyerGuides.map((article) => (
                <Link href={`/insights/${article.slug}`} className="article-index-card" key={article.slug}>
                  <div className="article-meta"><span>{article.category}</span><time>{article.published}</time></div>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <strong>{article.readTime} · Read →</strong>
                </Link>
              ))}
            </div>
          </section>

          <section className="insight-group">
            <div className="insight-group-head"><p className="section-eyebrow">Engineering notes</p><h2>Architecture and systems thinking behind the work.</h2></div>
            <div className="article-index">
              {engineering.map((article) => (
                <Link href={`/insights/${article.slug}`} className="article-index-card" key={article.slug}>
                  <div className="article-meta"><span>{article.category}</span><time>{article.published}</time></div>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <strong>{article.readTime} · Read →</strong>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
