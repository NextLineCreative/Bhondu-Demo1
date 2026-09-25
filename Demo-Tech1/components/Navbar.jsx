'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="leading-none">
          <div className="text-2xl font-semibold tracking-widest-2 text-wine-700">LUXE</div>
          <div className="script -mt-1 text-2xl text-wine-600">Nails</div>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm text-wine-800 transition hover:text-wine-600 ${active ? 'underline underline-offset-8 decoration-wine-600' : ''}`}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            <span>📅</span> Book Appointment <span>→</span>
          </Link>
          <button aria-label="Menu" className="grid h-10 w-10 place-items-center rounded-full border border-wine-700/40 text-wine-700 md:hidden">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
