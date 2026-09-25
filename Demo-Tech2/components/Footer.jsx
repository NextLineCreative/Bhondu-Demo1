import Link from 'next/link'
import { Icon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-moss-800 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Icon name="sprig" className="h-6 w-6 text-cream-100" />
              <div>
                <div className="display text-xl tracking-widest">CLAY POT</div>
                <div className="mt-0.5 text-[9px] uppercase tracking-widest-2 text-cream-100/60">Handcrafted Ceramics</div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/70">
              Thoughtfully crafted objects for a more beautiful, slower everyday life.
            </p>
            <div className="mt-6 flex gap-3">
              {['ins', 'pin-social', 'fb', 'tk'].map((s) => (
                <a key={s} href="#" aria-label={s} className="grid h-9 w-9 place-items-center rounded-full border border-cream-100/20 text-cream-100 transition hover:border-cream-100 hover:bg-cream-100 hover:text-moss-800">
                  <Icon name={s} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-widest-2 text-cream-100/60">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ['/', 'Home'],
                ['/shop', 'Shop'],
                ['/about', 'About Us'],
                ['/journal', 'Journal'],
                ['/contact', 'Contact'],
              ].map(([h, l]) => (
                <li key={h}><Link href={h} className="hover:text-cream-50">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-widest-2 text-cream-100/60">Customer Care</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {['FAQs', 'Shipping & Delivery', 'Returns & Exchanges', 'Care Guide', 'Track Order'].map((l) => (
                <li key={l}><a href="#" className="hover:text-cream-50">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-widest-2 text-cream-100/60">Join Our Journal</h4>
            <p className="mt-4 text-sm text-cream-100/70">Get updates on new pieces, studio stories and more.</p>
            <form className="mt-5 flex items-center gap-0 border-b border-cream-100/40 pb-2">
              <input type="email" placeholder="Enter your email" className="w-full bg-transparent text-sm placeholder:text-cream-100/50 focus:outline-none" />
              <button type="button" className="grid h-8 w-8 place-items-center bg-rust-500 text-cream-50 hover:bg-rust-600">
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream-100/10 pt-6 text-xs text-cream-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Clay Pot. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream-50">Privacy Policy</a>
            <a href="#" className="hover:text-cream-50">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
