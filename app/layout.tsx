import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://gauravanand.tech'),
  title: {
    default: 'GauravAnand.Tech — AI & Software Engineering',
    template: '%s | GauravAnand.Tech',
  },
  description: 'AI-native software engineering studio for AI products, cloud platforms, automation, data systems, SaaS and custom software.',
  keywords: [
    'AI software development', 'AI agents', 'RAG development', 'custom software development',
    'cloud engineering', 'SaaS development', 'workflow automation', 'software consulting',
    'OpenAI development', 'product engineering', 'DevOps', 'C++ performance engineering'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'GauravAnand.Tech — AI & Software Engineering',
    description: 'AI-native software engineering for products, platforms and automation.',
    url: 'https://gauravanand.tech',
    siteName: 'GauravAnand.Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GauravAnand.Tech — AI & Software Engineering',
    description: 'AI-native software engineering for products, platforms and automation.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={inter.variable}><body>{children}</body></html>
}
