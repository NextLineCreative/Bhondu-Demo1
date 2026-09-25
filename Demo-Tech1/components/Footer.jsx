import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-wine-700 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-2xl font-semibold tracking-widest-2">LUXE</div>
            <div className="script -mt-1 text-3xl text-gold-400">Nails</div>
            <p className="mt-4 text-sm leading-relaxed text-cream-200/80">
              A premium nail studio dedicated to artistry, care, and confidence.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest-2 text-gold-400">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gold-400">Home</Link></li>
              <li><Link href="/services" className="hover:text-gold-400">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-gold-400">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-gold-400">About</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest-2 text-gold-400">Visit</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream-200/80">
              <li>123 Beauty Lane</li>
              <li>New York, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@luxenails.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest-2 text-gold-400">Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream-200/80">
              <li>Mon – Fri · 10 AM – 8 PM</li>
              <li>Saturday · 9 AM – 7 PM</li>
              <li>Sunday · 10 AM – 5 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream-100/10 pt-6 text-xs text-cream-200/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Luxe Nails. All rights reserved.</p>
          <p>Crafted with care · Real people · Real beauty</p>
        </div>
      </div>
    </footer>
  )
}
