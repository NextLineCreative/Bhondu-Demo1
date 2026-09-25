import Link from 'next/link'
import { Icon } from '@/components/Icons'

const IMG = {
  heroHand: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
  salon: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80',
  polish: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80',
  team1: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80',
  team2: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80',
  team3: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=600&q=80',
  tools: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1200&q=80',
  client: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
}

const pillars = [
  { icon: 'lotus', title: 'Our Mission', text: 'To enhance natural beauty through premium nail care and artistic excellence.' },
  { icon: 'diamond', title: 'Our Vision', text: 'To be the most trusted and loved nail studio, known for luxury, creativity, and care.' },
  { icon: 'heart', title: 'Our Promise', text: 'Exceptional service, hygienic practices, and designs that make you feel you.' },
]

const team = [
  { name: 'Ana', role: 'Senior Nail Artist', img: IMG.team1 },
  { name: 'Mia', role: 'Nail Art Specialist', img: IMG.team2 },
  { name: 'Zara', role: 'Extension Expert', img: IMG.team3 },
]

const whyUs = [
  { icon: 'diamond', title: 'Premium\nProducts', sub: 'Only the best for your nails' },
  { icon: 'shield', title: 'Hygienic\n& Safe', sub: 'Clean tools, safer beauty' },
  { icon: 'heart', title: 'Personalized\nExperience', sub: 'Designs tailored to your style' },
  { icon: 'crown', title: 'Expert\nNail Artists', sub: 'Skilled, creative and passionate' },
]

const stats = [
  { n: '10K+', label: 'Happy Clients' },
  { n: '5+', label: 'Years of Experience' },
  { n: '50+', label: 'Unique Designs' },
  { n: '100%', label: 'Client Satisfaction' },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow">About Us</p>
            <h1 className="mt-3 font-serif text-6xl leading-[0.95] text-wine-800 lg:text-7xl">
              More Than<br/>
              Nails<span className="script text-wine-600 text-6xl lg:text-7xl">, A Feeling</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-wine-800/80">
              At Luxe Nails, we believe nail extensions are more than beauty — they're a form of self-expression, confidence, and care. Our mission is to make every visit a luxurious and personalized experience.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Link href="/contact" className="btn-primary">
                Book Appointment <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-wine-700 text-wine-700">
                  <Icon name="play" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-wine-800">Watch Our Story</p>
                  <p className="text-xs text-wine-800/70">2 min</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="card-shape overflow-hidden shadow-xl">
              <img src={IMG.heroHand} alt="Luxe nails feature" className="h-[440px] w-full object-cover" />
            </div>
            <p className="script absolute right-6 top-8 text-3xl text-wine-800">Confidence<br/>Looks<br/>Beautiful<br/>on You</p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3 lg:px-10">
          {pillars.map((p) => (
            <div key={p.title} className="text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center text-wine-600">
                <Icon name={p.icon} className="h-8 w-8" />
              </div>
              <h3 className="mt-3 font-serif text-2xl text-wine-800">{p.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-wine-800/70">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative">
            <div className="card-shape overflow-hidden shadow-lg">
              <img src={IMG.salon} alt="Salon interior" className="h-96 w-full object-cover" />
            </div>
            <p className="script absolute bottom-6 left-6 text-3xl text-cream-100">A Space<br/>Created for You</p>
          </div>
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-wine-800">
              From Passion<br/>
              to a <span className="italic">Destination</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-wine-800/80">
              What started as a small dream turned into Luxe Nails — a premium nail studio built on passion, creativity, and a love for details. We created a space where artistry meets care, and every client feels special.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <Link href="/services" className="btn-ghost">
                Our Journey <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <div className="blob grid h-32 w-32 place-items-center bg-wine-700 p-4 text-center text-[10px] tracking-widest-2 text-cream-100">
                IT'S MORE THAN A NAIL APPOINTMENT<br/>IT'S A SELF CARE RITUAL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow">Meet Our Team</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-wine-800">
              The Artists<br/>
              Behind the Beauty
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-wine-800/80">
              Our talented nail artists are not just technicians — they are creators, dedicated to bringing your vision to life with precision, care, and artistry.
            </p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full border border-wine-700 px-5 py-2.5 text-sm text-wine-700">
              Meet Our Team <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {team.map((t) => (
              <div key={t.name} className="card-shape relative overflow-hidden bg-wine-700">
                <img src={t.img} alt={t.name} className="h-72 w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-800/80" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-cream-100">
                  <p className="script text-2xl leading-none">{t.name}</p>
                  <span className="mt-2 inline-block rounded-full bg-wine-800/80 px-3 py-1 text-[10px] tracking-widest-2">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[380px,1fr] lg:px-10">
          <div className="card-shape overflow-hidden">
            <img src={IMG.tools} alt="Nail tools" className="h-72 w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Why Choose Luxe Nails</p>
            <h2 className="mt-3 font-serif text-4xl text-wine-800">
              It's in the <span className="script text-wine-600 text-5xl">Details</span>
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
              {whyUs.map((w) => (
                <div key={w.title} className="text-center">
                  <div className="mx-auto grid h-10 w-10 place-items-center text-wine-600">
                    <Icon name={w.icon} className="h-7 w-7" />
                  </div>
                  <p className="mt-2 whitespace-pre-line text-sm font-medium text-wine-800">{w.title}</p>
                  <p className="mt-1 text-xs text-wine-800/70">{w.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS + TESTIMONIAL */}
      <section className="relative overflow-hidden bg-wine-700 py-16 text-cream-100">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr,1fr] lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-widest-2 text-gold-400">Our Impact</p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-4xl">{s.n}</p>
                  <p className="mt-1 text-xs text-cream-200/80">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-cream-100/10 p-6">
            <Icon name="quote" className="h-6 w-6 text-gold-400" />
            <p className="mt-3 text-sm leading-relaxed text-cream-100/90">
              "Luxe Nails is my go-to place! The team is so talented and the experience is always so luxurious. I leave feeling more confident every time."
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-cream-200">
                  <img src={IMG.client} alt="Priya S." className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium">Priya S.</p>
                  <div className="flex gap-0.5 text-gold-400">
                    {[1,2,3,4,5].map((i) => <Icon key={i} name="star" className="h-3 w-3" />)}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="grid h-10 w-10 place-items-center rounded-full border border-cream-100/40 text-cream-100"><Icon name="arrow" className="h-4 w-4 rotate-180" /></button>
                <button className="grid h-10 w-10 place-items-center rounded-full border border-cream-100/40 text-cream-100"><Icon name="arrow" className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-100 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
          <h2 className="font-serif text-4xl text-wine-800">
            Be a Part of <span className="script text-wine-600 text-5xl">Our Story</span>
          </h2>
          <p className="max-w-xs text-sm text-wine-800/70">Book your appointment and experience the Luxe Nails difference.</p>
          <Link href="/contact" className="btn-primary">
            <Icon name="calendar" className="h-4 w-4" /> Book Appointment <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
