import Link from 'next/link'
import { Icon } from '@/components/Icons'

const IMG = {
  heroHand: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
  classic: 'https://images.unsplash.com/photo-1610992015762-45dca7a2b3c9?auto=format&fit=crop&w=800&q=80',
  gel: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
  acrylic: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80',
  custom: 'https://images.unsplash.com/photo-1636034744665-51e15c4c8c7f?auto=format&fit=crop&w=800&q=80',
  polish: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=1200&q=80',
  salon: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80',
}

const bigCards = [
  { title: 'Classic', sub: 'Extensions', tag: 'TIMELESS BEAUTY · ALWAYS IN STYLE', img: IMG.classic, dark: true },
  { title: 'Gel', sub: 'Extensions', tag: 'STRONG · NATURAL · FLAWLESS', img: IMG.gel, dark: false },
  { title: 'Acrylic', sub: 'Extensions', tag: 'BOLD DESIGNS · ENDLESS POSSIBILITIES', img: IMG.acrylic, dark: true },
  { title: 'Custom', sub: 'Nail Art', tag: 'YOUR IMAGINATION · OUR ART', img: IMG.custom, dark: false },
]

const signature = [
  { name: 'Classic Extensions', desc: 'Elegant and natural-looking enhancements for everyday beauty.', price: '$70+', time: '60–90 min', img: IMG.classic, badge: 'Most Popular' },
  { name: 'Gel Extensions', desc: 'Durable, lightweight, and long-lasting shine.', price: '$75+', time: '75–90 min', img: IMG.gel },
  { name: 'Acrylic Extensions', desc: 'Bold, strong, and fully customizable to match your style.', price: '$65+', time: '60–90 min', img: IMG.acrylic },
  { name: 'Custom Nail Art', desc: 'Unique designs crafted to express your personality.', price: '$15+', time: '15–60 min', img: IMG.custom },
]

const addons = [
  { icon: 'sparkle', name: 'Nail Repair', price: '$10+' },
  { icon: 'sparkle', name: 'French Tips', price: '$15+' },
  { icon: 'heart', name: 'Chrome Finish', price: '$20+' },
  { icon: 'diamond', name: 'Matte Finish', price: '$15+' },
  { icon: 'sparkle', name: 'Nail Removal', price: '$20+' },
  { icon: 'lotus', name: 'Paraffin Treatment', price: '$25+' },
]

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow">Our Services</p>
            <h1 className="mt-3 font-serif text-6xl leading-[1] text-wine-800 lg:text-7xl">
              More Than<br/>
              <span className="script text-wine-600 text-7xl lg:text-8xl">Nail Extensions</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-wine-800/80">
              Premium services, personalized care, and luxurious experiences — all in one place.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: 'diamond', title: 'Premium', sub: 'Products' },
                { icon: 'lotus', title: 'Hygienic', sub: '& Safe' },
                { icon: 'heart', title: 'Expert', sub: 'Nail Artists' },
              ].map((f) => (
                <div key={f.title} className="flex items-center gap-3">
                  <div className="text-wine-600"><Icon name={f.icon} className="h-6 w-6" /></div>
                  <div>
                    <p className="text-sm font-medium text-wine-800">{f.title}</p>
                    <p className="text-xs text-wine-800/70">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card-shape overflow-hidden bg-wine-700 shadow-xl">
              <img src={IMG.heroHand} alt="Elegant nail extensions" className="h-[440px] w-full object-cover" />
            </div>
            <p className="script absolute bottom-8 right-8 text-3xl text-cream-100">Beautiful Nails<br/>Brighter Days</p>
          </div>
        </div>
      </section>

      {/* 4 BIG CARDS */}
      <section className="py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 lg:grid-cols-4 lg:px-10">
          {bigCards.map((s) => (
            <div key={s.title} className={`card-shape relative overflow-hidden ${s.dark ? 'bg-wine-700' : 'bg-cream-200'}`}>
              <img src={s.img} alt={`${s.title} ${s.sub}`} className={`h-72 w-full object-cover ${s.dark ? 'opacity-85' : ''}`} />
              <div className={`absolute inset-0 bg-gradient-to-t ${s.dark ? 'from-wine-800/70' : 'from-cream-100/50'}`} />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div className={s.dark ? 'text-cream-100' : 'text-wine-800'}>
                  <h3 className="font-serif text-2xl">{s.title}</h3>
                  <p className="font-serif text-2xl -mt-1">{s.sub}</p>
                  <p className="mt-2 text-[10px] tracking-widest-2">{s.tag}</p>
                </div>
                <button aria-label="View" className={`grid h-10 w-10 place-items-center rounded-full border ${s.dark ? 'border-cream-100 text-cream-100' : 'border-wine-700 text-wine-700'}`}>
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES DESIGNED */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-3 lg:px-10">
          <div className="relative">
            <div className="card-shape overflow-hidden shadow-lg">
              <img src={IMG.polish} alt="Nail polish application" className="h-80 w-full object-cover" />
            </div>
            <p className="script absolute inset-0 flex items-center justify-center text-3xl text-cream-100">Precision<br/>in Every<br/>Detail</p>
          </div>
          <div>
            <p className="eyebrow">Our Services</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-wine-800">
              Services Designed<br/>
              <span className="italic">Around You</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-wine-800/80">
              From classic to creative, we offer a wide range of nail services tailored to your style, lifestyle, and nail goals. Each service is performed with precision, care, and premium products.
            </p>
          </div>
          <div className="blob mx-auto grid h-56 w-56 place-items-center bg-wine-700 text-center text-cream-100">
            <div>
              <div className="text-2xl">✦</div>
              <p className="mt-2 font-serif text-xl leading-tight">Healthy<br/>Nails<br/>Happier<br/>You</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE SERVICES */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-serif text-4xl text-wine-800">Our Signature Services</h2>
            <div className="flex flex-wrap gap-2 rounded-full bg-cream-200 p-1 text-xs">
              {['All Services', 'Extensions', 'Nail Art', 'Care', 'Add-ons'].map((t, i) => (
                <span key={t} className={`rounded-full px-4 py-2 ${i === 0 ? 'bg-wine-700 text-cream-100' : 'text-wine-800'}`}>{t}</span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {signature.map((s) => (
              <div key={s.name} className="rounded-3xl bg-cream-50 p-4 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={s.img} alt={s.name} className="h-52 w-full object-cover" />
                  {s.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-cream-100 px-3 py-1 text-[10px] font-medium tracking-widest-2 text-wine-700">{s.badge}</span>
                  )}
                  <button aria-label="Favorite" className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-cream-100/90 text-wine-700">
                    <Icon name="heart" className="h-4 w-4" />
                  </button>
                </div>
                <h3 className="mt-4 font-serif text-xl text-wine-800">{s.name}</h3>
                <p className="mt-1 text-sm text-wine-800/70">{s.desc}</p>
                <p className="mt-3 text-sm text-wine-800">{s.price} <span className="mx-2 text-wine-800/40">|</span> {s.time}</p>
                <Link href="/contact" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-wine-700/30 px-4 py-2 text-sm text-wine-700 hover:bg-wine-700 hover:text-cream-100">
                  Book Now <Icon name="arrow" className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr,300px] lg:px-10">
          <div>
            <h2 className="font-serif text-4xl text-wine-800">Additional Services</h2>
            <p className="mt-2 text-sm text-wine-800/70">The little extras that make a big difference.</p>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {addons.map((a) => (
                <div key={a.name} className="text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-cream-200 text-wine-700">
                    <Icon name={a.icon} className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-wine-800">{a.name}</p>
                  <p className="text-xs text-wine-800/70">{a.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-cream-200">
            <img src={IMG.salon} alt="Salon" className="h-52 w-full object-cover" />
            <p className="absolute inset-y-0 right-4 flex items-center text-[10px] tracking-widest-2 text-cream-100" style={{ writingMode: 'vertical-rl' }}>LUXURY · CARE · LASTING BEAUTY</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-wine-700 py-16 text-cream-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
          <h2 className="font-serif text-4xl">
            Ready for Your <span className="script text-gold-400 text-5xl">Next Look?</span>
          </h2>
          <div className="text-center md:text-left">
            <p className="text-cream-200/80">Book your appointment now and let our experts take care of the rest.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-cream-100 px-6 py-3 text-sm font-medium text-wine-800">
            <Icon name="calendar" className="h-4 w-4" /> Book Appointment <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
