import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './site-base.css'
import './site-sections.css'
import './site-content.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://gauravanand.tech'),
  title: {
    default: 'GauravAnand.Tech — Digital Studio for Apps, AI, Games, Design & More',
    template: '%s | GauravAnand.Tech',
  },
  description: 'Digital services for apps, websites, AI automation, games, graphics, posters, content, dashboards, presentations, cloud systems and custom digital work.',
  keywords: [
    'app development', 'website development', 'AI automation', 'AI chatbot', 'game development',
    'graphic design', 'poster design', 'social media design', 'presentation design', 'SEO content',
    'dashboard development', 'cloud deployment', 'API development', 'custom digital services'
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/brand/ga-tech-mark.svg', type: 'image/svg+xml' }],
    shortcut: '/brand/ga-tech-mark.svg',
    apple: '/brand/ga-tech-mark.svg',
  },
  openGraph: {
    title: 'GauravAnand.Tech — Digital Studio',
    description: 'Apps, AI, games, websites, graphics, content, cloud and custom digital work.',
    url: 'https://gauravanand.tech',
    siteName: 'GauravAnand.Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GauravAnand.Tech — Digital Studio',
    description: 'Apps, AI, games, websites, graphics, content, cloud and custom digital work.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={inter.variable}><body>{children}</body></html>
}
