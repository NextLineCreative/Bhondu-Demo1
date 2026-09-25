import Link from 'next/link'
import { Icon } from '@/components/Icons'
import IMG from '@/lib/img'

const A = {
  studioHero: IMG.studioHero,
  kiln: IMG.firing,
  hands: IMG.workshop,
  clay: IMG.clayRaw,
  manifesto: IMG.manifesto,
  potter1: IMG.potter1,
  potter2: IMG.potter2,
  potter3: IMG.potter3,
}

const values = [
  { icon: 'sprig', title: 'Rooted in Nature', desc: 'Every piece begins with clay from the earth — no shortcuts, no synthetics.' },
  { icon: 'hand-icon', title: 'Shaped by Hand', desc: 'Slow, intentional making. Each vessel bears the mark of its maker.' },
  { icon: 'fire', title: 'Transformed by Fire', desc: 'Kiln-fired for strength and character. No two pieces alike.' },
  { icon: 'heart', title: 'Made to Last', desc: 'Timeless objects designed for a lifetime of everyday use.' },
]

const team = [
  { name: 'Anaya Rao', role: 'Founder & Lead Potter', img: A.potter1 },
  { name: 'Kabir Sen', role: 'Kiln Master', img: A.potter2 },
  { name: 'Meera Iyer', role: 'Studio Designer', img: A.potter3 },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-100 pt-6 pb-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr,1.1fr] lg:px-10">
          <div className="pt-6">
            <p className="text-[10px] uppercase tracking-widest-2 text-ink-800">Our Story</p>
            <h1 className="display mt-6 text-6xl leading-[0.95] text-ink-800 lg:text-8xl">SHAPED<br/>BY HAND.<br/>ROOTED<br/>IN EARTH.</h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700/85">
              Clay Pot began in a small studio with a single wheel and a desire to make objects that matter — pieces that carry warmth, history, and the honest imprint of human hands.
            </p>
          </div>
          <div className="relative">
            <img src={A.studioHero} alt="Inside the studio" className="h-[520px] w-full rounded-sm object-cover paper-edge" />
            <p className="hand absolute -top-2 left-10 rotate-[-4deg] text-xl text-ink-800">Where clay becomes character.</p>
            <p className="hand absolute right-6 bottom-6 rotate-[3deg] text-lg text-cream-50">Est. 2024<br/>Studio No. 04</p>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 lg:grid-cols-[240px,1fr,1fr] lg:px-10">
          <div>
            <p className="eyebrow">Manifesto</p>
            <span className="mt-3 block h-px w-16 bg-clay-500" />
            <img src={A.manifesto} alt="Handmade ceramic detail" className="mt-6 h-64 w-full rounded-sm object-cover paper-edge" />
          </div>
          <div>
            <h2 className="display text-4xl leading-tight text-ink-800 lg:text-5xl">A slower kind of beauty — for a life lived with intention.</h2>
            <img src={A.hands} alt="Hands shaping clay" className="mt-8 h-56 w-full rounded-sm object-cover paper-edge" />
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-700">
            <p>We believe the objects we live with should tell a story. That a mug should feel right in the hand. That a bowl should carry meaning, not just food. That a vase should hold the memory of the potter as much as the flowers within it.</p>
            <p>Every piece we make is a small resistance against a disposable world — a quiet reminder that things made with love are made to last.</p>
            <img src={A.kiln} alt="Kiln firing" className="mt-4 h-48 w-full rounded-sm object-cover paper-edge" />
          </div>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="pb-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 md:grid-cols-4 lg:px-10">
          <img src={A.clay} alt="Raw clay" className="h-64 w-full rounded-sm object-cover paper-edge" />
          <img src={A.hands} alt="Hands shaping" className="h-64 w-full rounded-sm object-cover paper-edge mt-8" />
          <img src={A.kiln} alt="Kiln firing" className="h-64 w-full rounded-sm object-cover paper-edge" />
          <img src={A.studioHero} alt="Studio" className="h-64 w-full rounded-sm object-cover paper-edge mt-8" />
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-moss-800 py-20 text-cream-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[10px] uppercase tracking-widest-2 text-cream-100/60">What we stand for</p>
          <h2 className="display mt-3 text-5xl leading-[0.95] lg:text-6xl">Values in every vessel.</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title}>
                <div className="grid h-12 w-12 place-items-center rounded-full border border-cream-100/30 text-cream-100"><Icon name={v.icon} className="h-6 w-6" /></div>
                <p className="mt-4 font-serif text-xl text-cream-50">{v.title}</p>
                <p className="mt-2 text-sm text-cream-100/70">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The Makers</p>
              <h2 className="display mt-3 text-5xl leading-[0.95] text-ink-800">Hands behind the clay.</h2>
            </div>
            <p className="max-w-sm text-sm text-ink-700/80">A small team of potters, designers, and dreamers — each piece is signed by the hands that made it.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {team.map((t, i) => (
              <div key={t.name} className="polaroid bg-cream-50 p-3 paper-edge" style={{ ['--rot']: `${[-2, 1, -1][i]}deg` }}>
                <img src={t.img} alt={t.name} className="h-80 w-full object-cover" />
                <div className="p-2 pt-4">
                  <p className="hand text-2xl leading-none text-ink-800">{t.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest-2 text-ink-800/70">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-100 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
          <div>
            <p className="eyebrow">Visit the Studio</p>
            <h2 className="display mt-2 text-4xl text-ink-800">Come see how we make.</h2>
          </div>
          <Link href="/contact" className="btn-primary">Book a Visit <Icon name="arrow" className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </>
  )
}
