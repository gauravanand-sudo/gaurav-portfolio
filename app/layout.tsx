import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './site-base.css'
import './site-sections.css'
import './site-content.css'
import './company.css'
import './maturity.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://gauravanand.tech'),
  title: {
    default: 'ga.tech — Digital Product & AI Studio',
    template: '%s | ga.tech',
  },
  description: 'Founder-led digital product, AI automation, creative and cloud delivery for startups and growing businesses.',
  keywords: [
    'digital product studio', 'MVP development', 'website development', 'AI automation',
    'RAG chatbot development', 'workflow automation', 'backend development', 'cloud engineering',
    'pitch deck design', 'launch creative'
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/brand/ga-tech-logo.webp', type: 'image/webp' }],
    shortcut: '/brand/ga-tech-logo.webp',
    apple: '/brand/ga-tech-logo.webp',
  },
  openGraph: {
    title: 'ga.tech — Build, Automate & Launch',
    description: 'Founder-led digital product, AI automation, creative and cloud delivery for startups and growing businesses.',
    url: 'https://gauravanand.tech',
    siteName: 'ga.tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ga.tech — Build, Automate & Launch',
    description: 'Founder-led digital product, AI automation, creative and cloud delivery for startups and growing businesses.',
  },
  robots: { index: true, follow: true },
}

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ga.tech',
  url: 'https://gauravanand.tech',
  logo: 'https://gauravanand.tech/brand/ga-tech-logo.webp',
  description: 'Founder-led digital product studio for startups and growing businesses.',
  areaServed: 'Worldwide',
  founder: {
    '@type': 'Person',
    name: 'Gaurav Anand',
    jobTitle: 'R&D Staff Software Engineer',
    url: 'https://gauravanand.tech/portfolio',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'gaurav.anand54@gmail.com',
    availableLanguage: ['English'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      </body>
    </html>
  )
}
