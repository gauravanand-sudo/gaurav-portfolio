import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gaurav Anand | Portfolio',
  description: 'Portfolio of Gaurav Anand featuring systems projects, engineering work, and C++ infrastructure experience.',
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
