import Link from 'next/link'
import { Icon } from './Icons'

export default function Footer() {
  return (
    <footer className="relative isolate mt-24 overflow-hidden text-cream-100">
      {/* Asymmetric SVG background — stretches to fill the footer area.
          Top edge is a multi-peak wave, right and bottom edges are curved,
          left edge stays flat so content aligns to the page. */}
      <svg
        viewBox="0 0 1440 780"
        preserveAspectRatio="none"
        className="absolute inset-0 -z-10 h-full w-full text-wine-700"
        aria-hidden
      >
        {/* Main organic silhouette */}
        <path
          fill="currentColor"
          d="
            M0,90
            C160,20 300,140 540,80
            C740,32 900,130 1120,72
            C1260,36 1360,110 1440,58
            L1440,640
            C1360,690 1260,660 1140,700
            C960,760 780,720 600,750
            C420,780 240,740 120,760
            L0,770
            Z
          "
        />
        {/* Darker asymmetric overlay adds a layered organic feel */}
        <path
          fill="#4A1414"
          opacity="0.55"
          d="
            M0,180
            C220,120 360,210 580,180
            C800,150 940,220 1180,190
            C1300,175 1380,210 1440,190
            L1440,720
            C1300,760 1140,720 940,740
            C740,760 540,720 340,750
            C200,770 80,740 0,760
            Z
          "
        />
        {/* Small floating blob accents */}
        <ellipse cx="180" cy="340" rx="140" ry="120" fill="#3A0F0F" opacity="0.4" />
        <ellipse cx="1280" cy="420" rx="120" ry="150" fill="#3A0F0F" opacity="0.35" />
        <circle cx="880" cy="260" r="6" fill="#C9A15D" opacity="0.7" />
        <circle cx="320" cy="500" r="4" fill="#C9A15D" opacity="0.6" />
        <circle cx="1100" cy="580" r="5" fill="#C9A15D" opacity="0.5" />
      </svg>

      <div className="relative pt-28 pb-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 lg:px-10">
          {/* Brand block */}
          <div className="md:col-span-4">
            <div className="relative inline-block">
              <span
                aria-hidden
                className="absolute -left-4 -top-4 -z-10 h-24 w-40 bg-wine-800/50"
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

          {/* Explore — offset */}
          <div className="md:col-span-2 md:mt-10">
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

          {/* Hours */}
          <div className="md:col-span-3 md:mt-10">
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

        {/* Bottom bar */}
        <div className="relative mx-auto mt-16 max-w-7xl px-6 lg:px-10">
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
