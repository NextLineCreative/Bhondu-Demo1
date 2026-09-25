import Link from 'next/link'
import { Icon } from './Icons'

export default function Footer() {
  return (
    <footer className="relative isolate mt-24 text-cream-100">
      {/* Curved top edge — asymmetric SVG wave */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute -top-px left-0 h-24 w-full text-wine-700"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,64 C220,10 380,110 620,70 C820,38 980,108 1180,80 C1300,62 1380,90 1440,50 L1440,120 L0,120 Z"
        />
      </svg>

      <div className="relative bg-wine-700 pt-20 pb-10">
        {/* Asymmetric blob decorations */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 bg-wine-800/60 blur-sm"
          style={{ borderRadius: '58% 42% 66% 34% / 48% 62% 38% 52%' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-8 top-32 h-56 w-56 bg-gold-500/10"
          style={{ borderRadius: '42% 58% 30% 70% / 60% 38% 62% 40%' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-8 h-48 w-48 bg-wine-800/50"
          style={{ borderRadius: '70% 30% 50% 50% / 40% 60% 40% 60%' }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 lg:px-10">
          {/* Brand block — spans wider, asymmetric card behind */}
          <div className="md:col-span-4">
            <div className="relative inline-block">
              <span
                aria-hidden
                className="absolute -left-4 -top-4 -z-10 h-24 w-40 bg-wine-800/60"
                style={{ borderRadius: '68% 32% 58% 42% / 48% 62% 38% 52%' }}
              />
              <div className="text-3xl font-semibold tracking-widest-2">LUXE</div>
              <div className="script -mt-1 text-4xl text-gold-400">Nails</div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-200/80">
              A premium nail studio dedicated to artistry, care, and confidence. Real people. Real beauty.
            </p>
            <div className="mt-6 flex gap-2">
              {['instagram', 'pinterest', 'tiktok', 'facebook'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream-100/10 text-cream-100 transition hover:bg-gold-400 hover:text-wine-700"
                >
                  <Icon name={s} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore — offset down to break grid */}
          <div className="md:col-span-2 md:mt-6">
            <h4 className="text-xs uppercase tracking-widest-2 text-gold-400">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ['/', 'Home'],
                ['/services', 'Services'],
                ['/gallery', 'Gallery'],
                ['/about', 'About'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-gold-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest-2 text-gold-400">Visit Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream-200/80">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-gold-400"><Icon name="pin" className="h-4 w-4" /></span>
                <span>123 Beauty Lane<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-400"><Icon name="phone" className="h-4 w-4" /></span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-400"><Icon name="mail" className="h-4 w-4" /></span>
                <span>hello@luxenails.com</span>
              </li>
            </ul>
          </div>

          {/* Hours — offset down */}
          <div className="md:col-span-3 md:mt-6">
            <h4 className="text-xs uppercase tracking-widest-2 text-gold-400">Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream-200/80">
              <li className="flex justify-between"><span>Mon – Fri</span><span>10:00 – 20:00</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>09:00 – 19:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>10:00 – 17:00</span></li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-xs font-medium tracking-widest-2 text-wine-800 transition hover:bg-cream-100"
            >
              BOOK NOW <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar with organic pill */}
        <div className="relative mx-auto mt-14 max-w-7xl px-6 lg:px-10">
          <div className="h-px w-full bg-cream-100/10" />
          <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-cream-200/60 sm:flex-row">
            <p>© {new Date().getFullYear()} Luxe Nails · All rights reserved</p>
            <p className="script text-lg text-gold-400">Crafted with care</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-cream-100">Privacy</Link>
              <span className="opacity-30">·</span>
              <Link href="#" className="hover:text-cream-100">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
