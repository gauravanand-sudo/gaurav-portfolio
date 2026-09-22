import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gauravanand.tech'),
  title: {
    default: 'GauravAnand.Tech — AI, Cloud & Software Solutions',
    template: '%s | GauravAnand.Tech',
  },
  description:
    'Founder-led AI, cloud and software engineering studio building AI agents, RAG systems, automation, SaaS products, APIs, cloud platforms, data solutions and performance-critical software.',
  keywords: [
    'AI development services',
    'AI automation',
    'AI agents',
    'RAG development',
    'ChatGPT integration',
    'OpenAI API development',
    'cloud consulting',
    'software development',
    'MVP development',
    'SaaS development',
    'DevOps consulting',
    'C++ performance engineering',
    'freelance software engineer India',
    'AI consultant India',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'GauravAnand.Tech — AI, Cloud & Software Solutions',
    description:
      'AI agents, automation, cloud platforms, SaaS products and high-performance software — designed and built end to end.',
    url: 'https://gauravanand.tech',
    siteName: 'GauravAnand.Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GauravAnand.Tech — AI, Cloud & Software Solutions',
    description: 'Founder-led AI, cloud and software engineering studio.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
