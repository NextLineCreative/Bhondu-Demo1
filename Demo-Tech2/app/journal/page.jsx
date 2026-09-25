import Link from 'next/link'
import { Icon } from '@/components/Icons'
import IMG from '@/lib/img'

const J = {
  hero: IMG.journalFeature,
  a: IMG.journalA,
  b: IMG.journalB,
  c: IMG.journalC,
  d: IMG.journalD,
  e: IMG.journalE,
  f: IMG.journalF,
}

const featured = {
  title: 'The Beauty in Imperfection.',
  excerpt: 'Wabi-sabi teaches us that beauty lives in the cracks, the asymmetries, the marks of time. A short essay on why our pieces are never quite the same.',
  date: 'Sep 12, 2024',
  category: 'Philosophy',
  img: J.hero,
}

const posts = [
  { title: 'Inside Our Firing Process', excerpt: 'A look at the kiln — the fire that transforms every piece.', date: 'AUG 28, 2024', category: 'Studio', img: J.a },
  { title: 'Creating a Kinder, Slower Home', excerpt: 'Small changes, quiet joys, and objects that matter.', date: 'AUG 10, 2024', category: 'Living', img: J.b },
  { title: 'From Earth to Table', excerpt: 'The journey of a piece — from raw clay to your dining room.', date: 'JUL 22, 2024', category: 'Process', img: J.c },
  { title: 'Why We Fire With Wood', excerpt: 'The character that only a wood-fired kiln can give.', date: 'JUL 05, 2024', category: 'Craft', img: J.d },
  { title: 'Notes on Glaze & Texture', excerpt: 'A designer\'s guide to the surfaces we love.', date: 'JUN 18, 2024', category: 'Design', img: J.e },
  { title: 'The Studio Journal, Vol. 1', excerpt: 'Behind-the-scenes moments from our first year.', date: 'MAY 30, 2024', category: 'Studio', img: J.f },
]

const categories = ['All', 'Philosophy', 'Studio', 'Craft', 'Living', 'Design', 'Process']

export default function JournalPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ivory-100 pt-10 pb-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[10px] uppercase tracking-widest-2 text-ink-800">The Journal</p>
          <h1 className="display mt-6 text-6xl leading-[0.95] text-ink-800 lg:text-8xl">Notes from<br/>the Studio.</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-700/85">
            Small stories from the wheel, the kiln, and everyday life with handmade things.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-y border-clay-400/20 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-6 px-6 lg:px-10">
          {categories.map((c, i) => (
            <button key={c} className={`text-[11px] uppercase tracking-widest-2 transition ${i === 0 ? 'text-rust-500 border-b border-rust-500 pb-1' : 'text-ink-800/70 hover:text-rust-500'}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative">
            <img src={featured.img} alt={featured.title} className="h-[520px] w-full rounded-sm object-cover paper-edge" />
            <span className="absolute left-4 top-4 rounded-full bg-ivory-50 px-3 py-1 text-[10px] uppercase tracking-widest-2 text-ink-800">Featured</span>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest-2 text-clay-600">{featured.category} · {featured.date}</p>
            <h2 className="display mt-4 text-5xl leading-tight text-ink-800">{featured.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-700/85">{featured.excerpt}</p>
            <Link href="#" className="btn-ghost mt-8">Read Essay <Icon name="arrow" className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* POST GRID */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article key={p.title} className="group">
                <div className="overflow-hidden rounded-sm">
                  <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <p className="mt-4 text-[10px] uppercase tracking-widest-2 text-clay-600">{p.category} · {p.date}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight text-ink-800">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-700/80">{p.excerpt}</p>
                <Link href="#" className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest-2 text-rust-500 hover:text-rust-600">
                  Read More <Icon name="arrow" className="h-3 w-3" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="bg-forest-600 py-16 text-ivory-100">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center lg:px-10">
          <p className="text-[10px] uppercase tracking-widest-2 text-ivory-100/60">Join the journal</p>
          <h2 className="display text-4xl leading-tight">A quiet letter, once a month.</h2>
          <p className="max-w-md text-sm text-ivory-100/70">New essays, kiln notes, and early access to small drops. No noise. Just clay.</p>
          <form className="mt-6 flex w-full max-w-md items-center gap-0 border-b border-ivory-100/40 pb-2">
            <input type="email" placeholder="Enter your email" className="w-full bg-transparent text-sm placeholder:text-ivory-100/50 focus:outline-none" />
            <button type="button" className="grid h-9 w-9 place-items-center bg-rust-500 text-ivory-50 hover:bg-rust-600">
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
