import type { MetadataRoute } from 'next'
import { insights } from '@/lib/insights'
import { companyServices } from '@/lib/company-services'
import { solutions } from '@/lib/sales'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gauravanand.tech'
  const lastModified = new Date('2026-09-23')

  return [
    { url: base, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/solutions`, lastModified, changeFrequency: 'monthly', priority: 0.95 },
    ...solutions.map((solution) => ({ url: `${base}/solutions/${solution.slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.9 })),
    { url: `${base}/case-studies`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/working-with-us`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/book`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/resources`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    ...companyServices.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    { url: `${base}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/portfolio`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    ...insights.map((article) => ({
      url: `${base}/insights/${article.slug}`,
      lastModified: new Date(article.published),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
