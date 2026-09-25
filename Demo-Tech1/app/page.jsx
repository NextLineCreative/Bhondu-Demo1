import Link from 'next/link'
import { Icon } from '@/components/Icons'
import ServiceCard from '@/components/ServiceCard'

const IMG = {
  heroHand: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
  classic: 'https://images.unsplash.com/photo-1610992015762-45dca7a2b3c9?auto=format&fit=crop&w=800&q=80',
  gel: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
  acrylic: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80',
  custom: 'https://images.unsplash.com/photo-1636034744665-51e15c4c8c7f?auto=format&fit=crop&w=800&q=80',
  salon: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80',
  polish: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80',
}

const services = [
  { title: 'Classic', sub: 'Extensions', tag: 'TIMELESS BEAUTY · ALWAYS IN STYLE', img: IMG.classic, variant: 'dark', offset: 16, shape: 1 },
  { title: 'Gel', sub: 'Extensions', tag: 'STRONG · NATURAL · FLAWLESS', img: IMG.gel, variant: 'cream', offset: -12, shape: 2 },
  { title: 'Acrylic', sub: 'Extensions', tag: 'BOLD DESIGNS · ENDLESS POSSIBILITIES', img: IMG.acrylic, variant: 'dark', offset: 16, shape: 3 },
  { title: 'Custom', sub: 'Nail Art', tag: 'YOUR IMAGINATION · OUR ART', img: IMG.custom, variant: 'cream', offset: -12, shape: 4 },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-100 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow">More Than a Manicure</p>
            <h1 className="mt-4 font-serif text-6xl leading-[0.95] text-wine-800 lg:text-7xl">
              Nail<br/>
              <span className="script text-wine-600 text-8xl lg:text-9xl">Extensions</span>
            </h1>
            <p className="mt-4 text-xs uppercase tracking-widest-2 text-wine-700">Art · Care · Confidence</p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-wine-800/80">
              Premium nail extensions crafted with precision, designed to make you feel extraordinary.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Link href="/contact" className="btn-primary">
                Book Appointment <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-9 w-9 rounded-full border-2 border-cream-100 bg-wine-400" />
                  <div className="h-9 w-9 rounded-full border-2 border-cream-100 bg-wine-600" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-sm text-wine-800">
                    4.9/5 <Icon name="star" className="h-3 w-3 text-gold-500" />
                    <Icon name="star" className="h-3 w-3 text-gold-500" />
                    <Icon name="star" className="h-3 w-3 text-gold-500" />
                    <Icon name="star" className="h-3 w-3 text-gold-500" />
                    <Icon name="star" className="h-3 w-3 text-gold-500" />
                  </div>
                  <p className="text-xs text-wine-800/70">Trusted by 10K+ Clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card-shape overflow-hidden bg-wine-700 shadow-2xl">
              <img src={IMG.heroHand} alt="Beautiful nail extensions" className="h-[520px] w-full object-cover mix-blend-luminosity opacity-95" />
            </div>
            <div className="absolute -top-4 left-6 grid h-24 w-24 place-items-center rounded-full bg-wine-800 text-cream-100">
              <Icon name="play" className="h-8 w-8" />
            </div>
            <p className="script absolute right-6 bottom-10 text-3xl text-cream-100">Luxury in Every Detail</p>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS — staggered organic row */}
      <section className="bg-cream-100 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 px-6 lg:grid-cols-4 lg:gap-x-6 lg:px-10">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-cream-100 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative">
            <div className="card-shape overflow-hidden shadow-xl">
              <img src={IMG.salon} alt="Luxe Nails salon interior" className="h-[440px] w-full object-cover" />
            </div>
            <p className="script absolute bottom-8 left-8 text-3xl text-cream-100">Step into a<br/>Nail Experience</p>
          </div>

          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight text-wine-800">
              Where<br/>
              <span className="script text-wine-600 text-6xl">Art Meets Care</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-wine-800/80">
              We are a premium nail studio dedicated to high-quality nail extensions, artistic designs, and a luxurious self-care experience. Every detail is crafted to make you feel confident, beautiful, and uniquely you.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { icon: 'diamond', title: 'Premium', sub: 'Products' },
                { icon: 'heart', title: 'Hygienic', sub: '& Safe' },
                { icon: 'lotus', title: 'Expert', sub: 'Nail Artists' },
              ].map((f) => (
                <div key={f.title} className="text-center">
                  <div className="mx-auto grid h-10 w-10 place-items-center text-wine-600">
                    <Icon name={f.icon} className="h-6 w-6" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-wine-800">{f.title}</p>
                  <p className="text-xs text-wine-800/70">{f.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-6">
              <Link href="/about" className="btn-ghost">
                Our Story <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <div className="rounded-xl bg-cream-200 px-4 py-3 text-sm text-wine-800">
                <p className="script text-2xl leading-none">Self Care</p>
                <p>Looks Good on You</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK NOW */}
      <section className="relative overflow-hidden bg-wine-700 py-20 text-cream-100">
        <img src={IMG.polish} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-widest-2 text-gold-400">Book Now</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight">
              Your Next<br/>
              Look <span className="script text-gold-400 text-6xl">Awaits</span>
            </h2>
            <p className="mt-4 max-w-md text-cream-200/80">
              Choose your service, pick a time, and let us take care of the rest.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl bg-cream-100/10 p-6 backdrop-blur">
            <div className="flex items-center gap-3 rounded-full bg-cream-100 px-5 py-3 text-wine-800">
              <Icon name="calendar" className="h-4 w-4" />
              <span className="flex-1 text-sm">Select Service</span>
              <Icon name="chevron" className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-3 rounded-full bg-cream-100 px-5 py-3 text-wine-800">
              <Icon name="calendar" className="h-4 w-4" />
              <span className="flex-1 text-sm">Select Date & Time</span>
              <Icon name="chevron" className="h-4 w-4" />
            </div>
            <Link href="/contact" className="flex w-full items-center justify-center gap-2 rounded-full bg-cream-200 px-5 py-3 text-sm font-medium text-wine-800 hover:bg-cream-100">
              Book Appointment <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
