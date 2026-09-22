import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getInsight, insights } from '@/lib/insights'

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getInsight(params.slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      publishedTime: article.published,
      url: `https://gauravanand.tech/insights/${article.slug}`,
    },
  }
}

export default function InsightArticle({ params }: { params: { slug: string } }) {
  const article = getInsight(params.slug)
  if (!article) notFound()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.published,
    author: { '@type': 'Person', name: 'Gaurav Anand', url: 'https://gauravanand.tech' },
    publisher: { '@type': 'Organization', name: 'GauravAnand.Tech', url: 'https://gauravanand.tech' },
    mainEntityOfPage: `https://gauravanand.tech/insights/${article.slug}`,
  }

  return (
    <>
      <Nav />
      <main className="article-page">
        <article className="article-shell">
          <Link className="back-link" href="/insights">← All insights</Link>
          <header className="article-header">
            <div className="article-meta"><span>{article.category}</span><time>{article.published}</time><span>{article.readTime}</span></div>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </header>

          <div className="article-body">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? (
                  <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                ) : null}
              </section>
            ))}
          </div>

          <aside className="article-cta">
            <p className="section-eyebrow">Need this built?</p>
            <h2>Turn the architecture into a working product.</h2>
            <p>I help teams prototype and ship AI, cloud and software systems end to end.</p>
            <a className="button button-primary" href="mailto:gaurav.anand54@gmail.com?subject=Project%20inquiry%20from%20an%20insight">Discuss a project →</a>
          </aside>
        </article>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  )
}
