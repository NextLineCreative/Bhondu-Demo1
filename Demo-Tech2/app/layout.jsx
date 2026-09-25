import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Clay Pot — Handcrafted Ceramics',
  description: 'Handcrafted clay pieces for a more meaningful home. Rooted in nature, shaped by hands, made to last.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream-100 text-ink-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
