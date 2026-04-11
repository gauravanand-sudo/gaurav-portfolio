import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gaurav Anand | Systems Engineer',
  description:
    'Portfolio of Gaurav Anand, a systems engineer focused on modern C++, concurrency, performance engineering, and developer tooling.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
