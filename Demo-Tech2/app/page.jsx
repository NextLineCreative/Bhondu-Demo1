import Link from 'next/link'
import { Icon } from '@/components/Icons'
import IMG from '@/lib/img'
import { Reveal, Stagger, StaggerItem, TiltedCard } from '@/components/Motion'

// Map to page-friendly names
const P = {
  heroPot: IMG.heroPot,
  handsClay: IMG.workshop,
  clayRaw: IMG.clayRaw,
  shaping: IMG.shaping,
  firing: IMG.firing,
  finishing: IMG.finishing,
  mug: IMG.mug1,
  bowl: IMG.bowl1,
  vase: IMG.vase1,
  plate: IMG.plate1,
  jug: IMG.jug1,
  planter: IMG.planter1,
  earthVessel: IMG.heroAlt,
  studio1: IMG.journalA,
  studio2: IMG.journalB,
  studio3: IMG.journalC,
}

const archive = [
  { n: '02', name: 'Espresso Cup', price: '₹599', img: P.mug, rot: -3 },
  { n: '03', name: 'Serving Bowl', price: '₹899', img: P.bowl, rot: 2 },
  { n: '01', name: 'Handmade Vase', price: '₹699', img: P.vase, rot: -1 },
  { n: '04', name: 'Ceramic Plate', price: '₹799', img: P.plate, rot: 3 },
  { n: '05', name: 'Clay Jug', price: '₹1,299', img: P.jug, rot: -2 },
]

const process = [
  { n: '01', title: 'Sourcing', desc: 'Natural clay from the earth', img: P.clayRaw },
  { n: '02', title: 'Shaping', desc: 'Guided by hand and intuition', img: P.shaping },
  { n: '03', title: 'Firing', desc: 'Transformed by heat', img: P.firing },
  { n: '04', title: 'Finishing', desc: 'Unique textures, for lasting beauty', img: P.finishing },
]

const collection = [
  { n: '01', title: 'Mugs', sub: 'For quiet moments', img: P.mug, span: 'col-span-1' },
  { n: '02', title: 'Plates & Bowls', sub: 'For shared tables', img: P.bowl, span: 'col-span-1' },
  { n: '03', title: 'Planters', sub: 'For greener spaces', img: P.planter, span: 'col-span-1' },
  { n: '04', title: 'Vases', sub: 'For meaningful corners', img: P.vase, span: 'col-span-1' },
  { n: '05', title: 'Others', sub: 'Unique pieces', img: P.jug, span: 'col-span-1' },
]

const journal = [
  { title: 'The Beauty in Imperfection', date: 'SEP 12, 2024', img: P.studio1 },
  { title: 'Inside Our Firing Process', date: 'AUG 28, 2024', img: P.studio2 },
  { title: 'Creating a Kinder, Slower Home', date: 'AUG 10, 2024', img: P.studio3 },
]

const badges = [
  { icon: 'hand-icon', title: 'Handcrafted', sub: 'with Care' },
  { icon: 'leaf', title: 'Sustainably', sub: 'Sourced Materials' },
  { icon: 'heart', title: 'Timeless', sub: 'Design' },
  { icon: 'truck', title: 'Worldwide', sub: 'Shipping' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO — full-bleed image right, tight copy column left */}
      <section className="relative bg-ivory-100">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,42%),minmax(0,58%)]">
          {/* LEFT: copy */}
          <div className="flex flex-col justify-center px-6 py-16 lg:px-14 lg:py-24">
            <p className="text-[11px] font-semibold uppercase tracking-widest-2 text-ink-800">
              Natural Materials · Timeless Objects
            </p>
            <h1 className="display mt-8 text-[72px] leading-[0.9] text-ink-800 lg:text-[104px]">
              FORMED<br/>BY EARTH.
            </h1>
            <p className="mt-8 max-w-sm text-[17px] leading-relaxed text-ink-700">
              Handcrafted clay pieces for a more meaningful home. Rooted in nature, shaped by hands, made to last.
            </p>
            <Link href="/shop" className="btn-primary mt-10 self-start">
              Shop the Collection <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* RIGHT: big pot image with annotations */}
          <div className="relative min-h-[520px] lg:min-h-[720px]">
            <img
              src={P.heroPot}
              alt="Handcrafted earthen vessel"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* handwritten note top-left */}
            <p className="hand absolute left-6 top-8 max-w-[180px] rotate-[-5deg] text-2xl leading-tight text-ink-800">
              Raw earth<br/>shaped by<br/>human hands.
            </p>
            {/* dotted arrow line under first note (decorative) */}
            <svg className="pointer-events-none absolute left-32 top-24 h-14 w-24 text-ink-800/60" viewBox="0 0 100 60" fill="none">
              <path d="M2 8 C 30 20, 60 30, 92 52" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M85 45 L92 52 L83 55" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
            {/* handwritten note top-right */}
            <p className="hand absolute right-8 top-10 max-w-[180px] rotate-[3deg] text-2xl leading-tight text-ink-800">
              Each piece<br/>carries a story
            </p>
            {/* vertical sidebar text */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-right text-[11px] font-semibold uppercase tracking-widest-2 text-ivory-50/95">
              <p>CLAY</p><p>FIRE</p><p>HANDS</p><p>HOME</p>
              <span className="mt-2 ml-auto block h-px w-8 bg-ivory-50/80" />
            </div>
            {/* fig. label bottom-right */}
            <p className="hand absolute bottom-8 right-6 rotate-[-3deg] text-right text-xl leading-tight text-ivory-50">
              Fig. 01<br/>Earthen Vessel<br/>c. 2024
            </p>
          </div>
        </div>

        {/* Objects strip — sits under the copy column, product card straddles the image edge */}
        <div className="relative mx-auto -mt-4 grid max-w-none grid-cols-1 items-center gap-6 px-6 pb-10 lg:grid-cols-[minmax(0,42%),minmax(0,58%)] lg:gap-0 lg:px-14 lg:pb-14">
          <div className="flex items-start gap-3">
            <Icon name="sprig" className="h-6 w-6 shrink-0 text-clay-600" />
            <p className="text-[10px] font-semibold uppercase tracking-widest-2 leading-[1.5] text-ink-800/85">
              Objects<br/>for a Slower<br/>Life
            </p>
          </div>
          <div className="relative -mx-2 flex items-center gap-4 rounded-sm bg-ivory-50 p-4 paper-edge lg:mx-0 lg:-ml-24 lg:mr-6">
            {[P.mug, P.bowl, P.vase, P.plate, P.jug].map((src, i) => (
              <img key={i} src={src} alt="" className="h-20 w-24 shrink-0 rounded-sm object-cover md:h-24 md:w-32" />
            ))}
          </div>
        </div>
      </section>

      {/* CLAY ARCHIVE — polaroid grid, tilt-on-hover + stagger reveal */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">The Clay Archive</p>
                <h2 className="display mt-3 text-5xl leading-[0.95] text-ink-800 lg:text-6xl">Everyday<br/>Objects,<br/>Lasting Stories.</h2>
              </div>
              <Link href="/shop" className="btn-ghost">Explore All <Icon name="arrow" className="h-3.5 w-3.5" /></Link>
            </div>
          </Reveal>

          <Stagger className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-5">
            {archive.map((a, i) => (
              <StaggerItem key={i}>
                <TiltedCard className="relative bg-ivory-50 p-3 paper-edge" max={10}>
                  <span className="absolute -left-2 -top-3 hand text-2xl text-ink-800 z-10">{a.n}</span>
                  <img src={a.img} alt={a.name} className="h-56 w-full object-cover" />
                  <div className="flex items-end justify-between p-2 pt-4">
                    <div>
                      <p className="hand text-2xl leading-none text-ink-800">{a.name}</p>
                      <p className="mt-1 text-sm text-ink-800/70">{a.price}</p>
                    </div>
                    <button className="grid h-9 w-9 place-items-center rounded-full bg-rust-500 text-ivory-50 hover:bg-rust-600">
                      <Icon name="arrow" className="h-4 w-4" />
                    </button>
                  </div>
                </TiltedCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* EARTH FIRE HANDS */}
      <section className="relative py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr,1.3fr] lg:px-10">
          <div>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="display mt-3 text-6xl leading-[0.95] text-ink-800 lg:text-7xl">EARTH.<br/>FIRE.<br/>HANDS.</h2>
            <div className="mt-6 flex items-start gap-4">
              <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full border border-clay-400/50 text-[9px] uppercase tracking-widest-2 text-clay-600">
                <div className="text-center">Natural<br/>Honest<br/>Timeless</div>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-ink-700/85">
                From raw earth to finished form, each piece is a journey of transformation. We work with nature's oldest material to create objects that bring warmth, beauty and intention into everyday life.
              </p>
            </div>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-widest-2 uppercase text-rust-500 hover:text-rust-600 border-b border-rust-500/40 pb-1">
              Our Story <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="relative">
            <img src={P.handsClay} alt="Hands shaping clay on a wheel" className="h-[460px] w-full rounded-sm object-cover paper-edge" />
            <p className="hand absolute right-6 top-8 text-xl text-ivory-50 rotate-[3deg]">Same materials.<br/>A brighter<br/>tomorrow.</p>
          </div>
        </div>
      </section>

      {/* MAKING PROCESS — dark strip */}
      <section className="relative overflow-hidden bg-forest-600 py-16 text-ivory-100">
        <Icon name="leaf" className="pointer-events-none absolute -bottom-4 -left-4 h-40 w-40 text-ivory-100/10" />
        <Icon name="leaf" className="pointer-events-none absolute -top-4 right-4 h-32 w-32 text-ivory-100/10 rotate-180" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[180px,1fr] lg:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-widest-2 text-ivory-100/60">The<br/>Making<br/>Process</p>
            <span className="mt-3 block h-px w-8 bg-ivory-100/60" />
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.n} className="relative">
                <div className="relative overflow-hidden rounded-sm">
                  <img src={p.img} alt={p.title} className="h-32 w-full object-cover" />
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="hand text-xl text-ivory-100/80">{p.n}</span>
                  <p className="font-serif text-lg text-ivory-50">{p.title}</p>
                </div>
                <p className="mt-1 text-xs text-ivory-100/70">{p.desc}</p>
                {i < 3 && <span className="pointer-events-none absolute -right-4 top-14 text-ivory-100/40"><Icon name="arrow" className="h-4 w-4" /></span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEANINGFUL HOME COLLECTION */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Our Collection</p>
              <h2 className="display mt-3 text-5xl leading-[0.95] text-ink-800 lg:text-6xl">Objects for a More<br/>Meaningful Home.</h2>
            </div>
            <div className="flex items-end gap-8">
              <p className="max-w-xs text-sm text-ink-700/80">Handcrafted ceramics designed to be lived with — in your kitchen, on your table, and throughout your home.</p>
              <Link href="/shop" className="btn-ghost">Shop All <Icon name="arrow" className="h-3.5 w-3.5" /></Link>
            </div>
          </div>

          <Stagger className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5" gap={0.06}>
            {collection.map((c) => (
              <StaggerItem key={c.title}>
                <TiltedCard className="h-full" max={8}>
                  <Link href="/shop" className="group relative block overflow-hidden rounded-sm bg-ivory-50">
                    <img src={c.img} alt={c.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink-800/70 via-transparent p-4 text-ivory-50">
                      <div>
                        <p className="hand text-lg leading-none opacity-80">{c.n}</p>
                        <p className="mt-1 text-lg font-medium tracking-wide uppercase">{c.title}</p>
                        <p className="text-xs opacity-80">{c.sub}</p>
                      </div>
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-ivory-50/70">
                        <Icon name="arrow" className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </TiltedCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FEATURED — EARTH VESSEL */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-3 lg:px-10">
          <div>
            <p className="eyebrow">Featured Piece</p>
            <h2 className="display mt-3 text-5xl leading-[0.95] text-ink-800">The Earth<br/>Vessel</h2>
            <p className="mt-5 text-sm text-ink-700/85">
              A sculptural form with raw texture and timeless presence. Each vessel is uniquely handcrafted, embracing the natural variations of clay and fire.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <button className="btn-primary">Add to Cart <Icon name="arrow" className="h-3.5 w-3.5" /></button>
              <button className="btn-ghost">View Details <Icon name="arrow" className="h-3.5 w-3.5" /></button>
            </div>
          </div>

          <div className="relative">
            <img src={P.earthVessel} alt="The Earth Vessel featured piece" className="mx-auto h-[420px] w-full max-w-sm rounded-sm object-cover paper-edge" />
            <div className="absolute -top-2 left-0 grid h-24 w-24 place-items-center rounded-full bg-ivory-50 text-center paper-edge">
              <p className="hand text-lg leading-tight text-ink-800">One of<br/>a kind</p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Specifications</p>
            <table className="mt-4 w-full text-sm">
              <tbody className="divide-y divide-clay-400/30">
                {[
                  ['Material', 'Natural Clay'],
                  ['Finish', 'Matte, Unglazed'],
                  ['Dimensions', 'H 18 cm × W 22 cm'],
                  ['Weight', '1.4 kg (approx)'],
                  ['Care', 'Wipe with soft, dry cloth'],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td className="py-2 pr-4 text-ink-800/70">{k}</td>
                    <td className="py-2 text-ink-800">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-5 flex items-end justify-between">
              <svg viewBox="0 0 100 60" className="h-14 w-24 text-ink-800/70"><path d="M20 55 C 20 25, 80 25, 80 55" fill="none" stroke="currentColor" strokeWidth="1.5"/><line x1="20" y1="55" x2="80" y2="55" stroke="currentColor" strokeWidth="1.5" /></svg>
              <p className="hand text-sm text-ink-800/70">Fig. 02<br/>The Earth Vessel</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr,2fr] lg:px-10">
          <div>
            <p className="eyebrow">From the Journal</p>
            <h2 className="display mt-3 text-5xl leading-[0.95] text-ink-800">Notes from<br/>the Studio.</h2>
            <Link href="/journal" className="btn-ghost mt-6">Read All <Icon name="arrow" className="h-3.5 w-3.5" /></Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {journal.map((j) => (
              <article key={j.title} className="group">
                <div className="overflow-hidden rounded-sm">
                  <img src={j.img} alt={j.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <p className="mt-4 text-lg font-serif text-ink-800">{j.title}</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest-2 text-ink-800/60">{j.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="border-t border-clay-400/20 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 lg:px-10">
          {badges.map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <Icon name={b.icon} className="h-8 w-8 text-clay-600" />
              <div>
                <p className="text-sm font-serif text-ink-800">{b.title}</p>
                <p className="text-xs text-ink-800/60">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
