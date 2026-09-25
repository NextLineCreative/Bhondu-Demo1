import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Luxe Nails — Premium Nail Studio',
  description: 'Premium nail extensions, artistic designs, and a luxurious self-care experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream-100 text-wine-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
