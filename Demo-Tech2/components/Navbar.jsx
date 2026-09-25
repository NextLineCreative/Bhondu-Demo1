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
    <header className="relative z-30 bg-ivory-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Icon name="sprig" className="h-6 w-6 text-clay-600" />
          <div className="leading-none">
            <div className="display text-xl tracking-widest text-ink-800">CLAY POT</div>
            <div className="mt-0.5 text-[9px] uppercase tracking-widest-2 text-clay-600">Handcrafted Ceramics</div>
          </div>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-[13px] tracking-wider text-ink-800 transition hover:text-rust-500 ${active ? 'underline underline-offset-8' : ''}`}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-5 text-ink-800">
          <button aria-label="Search" className="transition hover:text-rust-500"><Icon name="search" /></button>
          <button aria-label="Account" className="transition hover:text-rust-500"><Icon name="user" /></button>
          <button aria-label="Cart" className="relative transition hover:text-rust-500">
            <Icon name="bag" />
            <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-rust-500 text-[9px] text-ivory-50">1</span>
          </button>
          <button aria-label="Menu" className="md:hidden"><Icon name="menu" /></button>
        </div>
      </div>
    </header>
  )
}
