'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from './Icons'

const links = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="relative z-30" style={{ background: 'var(--ivory)', height: 85 }}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" width="22" height="22" style={{ color: 'var(--terracotta)' }} fill="currentColor" aria-hidden>
            <path d="M12 3c-3 2-5 5-5 9 0 4 2 8 5 9 3-1 5-5 5-9 0-4-2-7-5-9zm-3 9c0-3 1-5 3-7 2 2 3 4 3 7 0 4-1 7-3 8-2-1-3-4-3-8z" />
          </svg>
          <div className="leading-none">
            <div className="font-serif text-[19px] font-semibold tracking-[0.22em]" style={{ color: 'var(--text-dark)' }}>CLAY POT</div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.32em]" style={{ color: 'var(--text-muted)' }}>Handcrafted Ceramics</div>
          </div>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href} className="relative">
                <Link
                  href={l.href}
                  className="text-[13px] font-medium tracking-[0.05em] transition"
                  style={{
                    color: 'var(--text-dark)',
                    fontFamily: 'Instrument Sans, sans-serif',
                  }}
                >
                  {l.label}
                </Link>
                {active && (
                  <span
                    className="absolute -bottom-2 left-0 right-0 mx-auto block h-px w-6"
                    style={{ background: 'var(--terracotta)' }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-6" style={{ color: 'var(--text-dark)' }}>
          <button aria-label="Search" className="transition hover:opacity-70"><Icon name="search" /></button>
          <button aria-label="Account" className="transition hover:opacity-70"><Icon name="user" /></button>
          <button aria-label="Cart" className="relative transition hover:opacity-70">
            <Icon name="bag" />
            <span
              className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full text-[9px]"
              style={{ background: 'var(--terracotta)', color: 'var(--cream)' }}
            >1</span>
          </button>
          <button aria-label="Menu" className="md:hidden"><Icon name="menu" /></button>
        </div>
      </div>
    </header>
  )
}
