import Link from 'next/link'
import { Icon } from '@/components/Icons'

const IMG = {
  heroHand: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
  salon: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80',
  storefront: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  polish: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=1200&q=80',
}

const infoCards = [
  { icon: 'phone', title: 'Call Us', lines: ['+1 (555) 123-4567'] },
  { icon: 'mail', title: 'Email Us', lines: ['hello@luxenails.com'] },
  { icon: 'pin', title: 'Visit Us', lines: ['123 Beauty Lane,', 'New York, NY 10001'] },
]

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow">Get in Touch</p>
            <h1 className="mt-3 font-serif text-6xl leading-[0.95] text-wine-800 lg:text-7xl">
              We'd Love<br/>
              to Hear From <span className="script text-wine-600 text-7xl">You</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-wine-800/80">
              Have a question, want to book an appointment, or simply want to say hello? We're here for you.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {infoCards.map((c) => (
                <div key={c.title}>
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-wine-700 text-cream-100">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-wine-800">{c.title}</p>
                  {c.lines.map((l, i) => (
                    <p key={i} className="text-xs text-wine-800/70">{l}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card-shape overflow-hidden bg-wine-700 shadow-xl">
              <img src={IMG.heroHand} alt="Elegant nails" className="h-[440px] w-full object-cover" />
            </div>
            <p className="script absolute right-6 top-8 text-3xl text-cream-100">Beautiful<br/>Nails<br/>Brings You<br/>Closer</p>
            <div className="absolute bottom-6 right-6 text-right text-[10px] tracking-widest-2 text-cream-100">
              REAL PEOPLE<br/>REAL CONVERSATIONS<br/>REAL BEAUTY
            </div>
          </div>
        </div>
      </section>

      {/* SALON + FORM */}
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative">
            <div className="card-shape overflow-hidden shadow-lg">
              <img src={IMG.salon} alt="Visit our salon" className="h-[440px] w-full object-cover" />
            </div>
            <p className="script absolute left-6 top-8 text-3xl text-cream-100">Visit<br/>Our Salon</p>
            <p className="absolute bottom-6 left-6 text-[10px] tracking-widest-2 text-cream-100">
              A LUXURIOUS SPACE<br/>CREATED FOR YOUR<br/>BEAUTY JOURNEY
            </p>
          </div>

          <div>
            <p className="eyebrow">Send Us a Message</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight text-wine-800">
              Let's<br/>
              <span className="script text-wine-600 text-6xl">Connect</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-wine-800/70">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="mt-6 space-y-4">
              {[
                { icon: 'user', ph: 'Full Name', type: 'text' },
                { icon: 'mail', ph: 'Email Address', type: 'email' },
                { icon: 'phone', ph: 'Phone Number', type: 'tel' },
              ].map((f) => (
                <div key={f.ph} className="flex items-center gap-3 rounded-full bg-cream-50 px-5 py-3">
                  <Icon name={f.icon} className="h-4 w-4 text-wine-700/70" />
                  <input type={f.type} placeholder={f.ph} className="w-full bg-transparent text-sm text-wine-800 placeholder:text-wine-800/50 focus:outline-none" />
                </div>
              ))}
              <div className="flex items-center gap-3 rounded-full bg-cream-50 px-5 py-3">
                <Icon name="help" className="h-4 w-4 text-wine-700/70" />
                <select className="w-full bg-transparent text-sm text-wine-800/70 focus:outline-none">
                  <option>How can we help you?</option>
                  <option>Book an appointment</option>
                  <option>Ask about services</option>
                  <option>Other</option>
                </select>
                <Icon name="chevron" className="h-4 w-4 text-wine-700/70" />
              </div>
              <div className="flex items-start gap-3 rounded-3xl bg-cream-50 px-5 py-3">
                <Icon name="chat" className="mt-1 h-4 w-4 text-wine-700/70" />
                <textarea rows={4} placeholder="Your Message (Optional)" className="w-full bg-transparent text-sm text-wine-800 placeholder:text-wine-800/50 focus:outline-none" />
              </div>
              <button type="button" className="flex w-full items-center justify-center gap-2 rounded-full bg-wine-700 py-3.5 text-sm font-medium text-cream-100 hover:bg-wine-800">
                Send Message <Icon name="arrow" className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FIND US */}
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-6 md:grid-cols-3 lg:px-10">
          <div className="card-shape relative h-56 overflow-hidden bg-cream-50">
            <svg viewBox="0 0 300 200" className="h-full w-full">
              <rect width="300" height="200" fill="#F5EDE0" />
              {[40, 80, 120, 160, 200, 240].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="#E7D8C1" strokeWidth="1" />)}
              {[40, 80, 120, 160].map((y) => <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#E7D8C1" strokeWidth="1" />)}
              <rect x="80" y="80" width="30" height="40" fill="#EFE4D3" />
              <rect x="180" y="60" width="40" height="30" fill="#EFE4D3" />
              <circle cx="150" cy="100" r="8" fill="#5C1A1A" />
              <path d="M150 92 L150 78" stroke="#5C1A1A" strokeWidth="3" strokeLinecap="round" />
              <circle cx="150" cy="76" r="6" fill="#5C1A1A" />
              <circle cx="150" cy="76" r="2" fill="#F5EDE0" />
            </svg>
          </div>
          <div>
            <p className="eyebrow">Our Location</p>
            <h3 className="mt-2 font-serif text-3xl text-wine-800">Find Us Here</h3>
            <div className="mt-4 flex items-start gap-3">
              <div className="mt-1 grid h-8 w-8 place-items-center rounded-full bg-cream-200 text-wine-700">
                <Icon name="pin" className="h-4 w-4" />
              </div>
              <p className="text-sm text-wine-800/80">123 Beauty Lane,<br/>New York, NY 10001<br/>United States</p>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-wine-700 px-5 py-2.5 text-sm text-wine-700">
              Get Directions <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
          <div className="card-shape relative h-56 overflow-hidden">
            <img src={IMG.storefront} alt="Luxe Nails storefront" className="h-full w-full object-cover" />
            <div className="absolute inset-0 grid place-items-center bg-wine-800/30 text-cream-100">
              <div className="text-center">
                <div className="text-xl font-semibold tracking-widest-2">LUXE</div>
                <div className="script -mt-1 text-2xl">Nails</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOURS / BOOK / FOLLOW */}
      <section className="py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3 lg:px-10">
          <div className="rounded-3xl bg-cream-50 p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-wine-700 text-cream-100">
                <Icon name="clock" className="h-5 w-5" />
              </span>
              <h4 className="font-serif text-xl text-wine-800">Business Hours</h4>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-wine-800/80">
              <li className="flex justify-between"><span>Monday – Friday</span><span>10:00 AM – 8:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>9:00 AM – 7:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>10:00 AM – 5:00 PM</span></li>
            </ul>
          </div>

          <div className="rounded-3xl bg-cream-50 p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-wine-700 text-cream-100">
                <Icon name="calendar" className="h-5 w-5" />
              </span>
              <h4 className="font-serif text-xl text-wine-800">Book an Appointment</h4>
            </div>
            <p className="mt-3 text-sm text-wine-800/70">Skip the wait and secure your preferred time with our experts.</p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-wine-700 px-5 py-2 text-sm text-wine-700">
              Book Now <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-3xl bg-cream-50 p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-wine-700 text-cream-100">
                <Icon name="chat" className="h-5 w-5" />
              </span>
              <h4 className="font-serif text-xl text-wine-800">Follow Us</h4>
            </div>
            <p className="mt-3 text-sm text-wine-800/70">Stay connected for the latest designs, offers, and nail inspiration.</p>
            <div className="mt-4 flex gap-3">
              {['instagram', 'pinterest', 'tiktok', 'facebook'].map((s) => (
                <span key={s} className="grid h-9 w-9 place-items-center rounded-full bg-wine-700 text-cream-100">
                  <Icon name={s} className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="relative overflow-hidden bg-wine-700 py-16 text-cream-100">
        <img src={IMG.polish} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-widest-2 text-gold-400">Still Have Questions?</p>
            <h2 className="mt-2 font-serif text-4xl">
              We're Here to <span className="script text-gold-400 text-5xl">Help</span>
            </h2>
            <p className="mt-2 text-sm text-cream-200/80">Check out our FAQ or reach out directly — we'd love to assist you.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-cream-100 px-6 py-3 text-sm font-medium text-wine-800">
            View FAQ <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
