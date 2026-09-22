import type { MetadataRoute } from 'next'
import { insights } from '@/lib/insights'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gauravanand.tech'
  return [
    { url: base, lastModified: new Date('2026-09-22'), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/portfolio`, lastModified: new Date('2026-09-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/insights`, lastModified: new Date('2026-09-22'), changeFrequency: 'weekly', priority: 0.9 },
    ...insights.map((article) => ({
      url: `${base}/insights/${article.slug}`,
      lastModified: new Date(article.published),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ]
}
