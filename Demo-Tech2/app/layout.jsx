import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ScrollProgress } from '@/components/Motion'

export const metadata = {
  title: 'Clay Pot — Handcrafted Ceramics',
  description: 'Handcrafted clay pieces for a more meaningful home. Shaped by hands, made to last.',
}

export const viewport = {
  themeColor: '#F7EEDF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Vercel guideline: preconnect to critical origins to cut DNS/TLS latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-screen bg-ivory-100 text-ink-800">
        {/* Skip link — first focusable element for keyboard users */}
        <a
          href="#main"
          className="sr-only-2 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:elev-3 focus:outline focus:outline-2 focus:outline-offset-2"
          style={{ color: 'var(--terracotta)' }}
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
