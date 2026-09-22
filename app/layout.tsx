import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './site-base.css'
import './site-sections.css'
import './site-content.css'
import './company.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://gauravanand.tech'),
  title: {
    default: 'ga.tech — Digital Studio for Apps, AI, Games, Design & More',
    template: '%s | ga.tech',
  },
  description: 'Digital services for apps, websites, AI automation, games, graphics, posters, content, dashboards, presentations, cloud systems and custom digital work.',
  keywords: [
    'app development', 'website development', 'AI automation', 'AI chatbot', 'game development',
    'graphic design', 'poster design', 'social media design', 'presentation design', 'SEO content',
    'dashboard development', 'cloud deployment', 'API development', 'custom digital services'
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/brand/ga-tech-logo.webp', type: 'image/webp' }],
    shortcut: '/brand/ga-tech-logo.webp',
    apple: '/brand/ga-tech-logo.webp',
  },
  openGraph: {
    title: 'ga.tech — Digital Studio',
    description: 'Apps, AI, games, websites, graphics, content, cloud and custom digital work.',
    url: 'https://gauravanand.tech',
    siteName: 'ga.tech',
    type: 'website',
    images: [{ url: '/brand/ga-tech-logo.webp', width: 360, height: 302, alt: 'ga.tech logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ga.tech — Digital Studio',
    description: 'Apps, AI, games, websites, graphics, content, cloud and custom digital work.',
    images: ['/brand/ga-tech-logo.webp'],
  },
  robots: { index: true, follow: true },
}

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ga.tech',
  url: 'https://gauravanand.tech',
  logo: 'https://gauravanand.tech/brand/ga-tech-logo.webp',
  email: 'gaurav.anand54@gmail.com',
  description: 'Digital studio for apps, AI, automation, design, content, cloud and custom digital work.',
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
