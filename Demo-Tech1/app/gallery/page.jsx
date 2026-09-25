import Link from 'next/link'
import { Icon } from '@/components/Icons'

const IMG = {
  heroHand: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
  classic: 'https://images.unsplash.com/photo-1610992015762-45dca7a2b3c9?auto=format&fit=crop&w=800&q=80',
  french: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
  art: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80',
  glam: 'https://images.unsplash.com/photo-1636034744665-51e15c4c8c7f?auto=format&fit=crop&w=800&q=80',
  bridal: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=800&q=80',
  acrylic: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80',
  minimal: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&w=800&q=80',
  seasonal: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
  chrome: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80',
  favorites: 'https://images.unsplash.com/photo-1636034744665-51e15c4c8c7f?auto=format&fit=crop&w=800&q=80',
  salon: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80',
  video: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
}

const filters = ['All', 'Classic', 'Gel', 'Acrylic', 'Nail Art', 'Seasonal', 'Bridal', 'Celeb Looks']

const gallery = [
  { title: 'Classic', sub: 'Elegance', img: IMG.classic, dark: true, span: '' },
  { title: 'Timeless', sub: 'French', img: IMG.french, dark: false, span: '' },
  { title: 'Custom', sub: 'Nail Art', img: IMG.art, dark: false, span: '' },
  { title: 'Soft', sub: 'Glam', img: IMG.glam, dark: false, span: '' },
  { title: 'Bridal', sub: 'Special', img: IMG.bridal, dark: false, span: '' },
  { title: 'Acrylic', sub: 'Perfection', img: IMG.acrylic, dark: true, span: '' },
  { title: 'Minimal', sub: 'Luxury', img: IMG.minimal, dark: false, span: '' },
  { title: 'Seasonal', sub: 'Inspo', img: IMG.seasonal, dark: false, span: '' },
  { title: 'Trendy', sub: 'Looks', img: IMG.chrome, dark: true, span: '' },
  { title: 'Client', sub: 'Favourites', img: IMG.favorites, dark: false, span: '' },
]

export default function GalleryPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow">Our Gallery</p>
            <h1 className="mt-3 font-serif text-6xl leading-[1] text-wine-800 lg:text-7xl">
              Nail Art<br/>
              <span className="script text-wine-600 text-7xl lg:text-8xl">Speaks Louder</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-wine-800/80">
              Explore our collection of real work, real clients, and endless inspiration. Every set tells a unique story of beauty, creativity, and confidence.
            </p>
          </div>
          <div className="relative">
            <div className="blob-hero-c overflow-hidden bg-wine-700 shadow-xl">
              <img src={IMG.heroHand} alt="Featured nail art" className="h-[420px] w-full object-cover" />
            </div>
            <p className="script absolute right-6 top-6 text-3xl text-cream-100">Real Nails<br/>Real Stories</p>
            <div className="absolute bottom-6 right-6 grid h-24 w-24 place-items-center rounded-full bg-cream-100/20 text-[9px] tracking-widest-2 text-cream-100">
              BEAUTY · REAL · STORIES
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="pb-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {filters.map((f, i) => (
              <button
                key={f}
                className={`rounded-full px-5 py-2 text-sm ${i === 0 ? 'bg-wine-700 text-cream-100' : 'bg-cream-200 text-wine-800 hover:bg-cream-300'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 sm:grid-cols-3 lg:grid-cols-4 lg:px-10">
          {gallery.map((g, i) => (
            <div key={i} className={`card-shape group relative overflow-hidden ${g.dark ? 'bg-wine-700' : 'bg-cream-200'}`}>
              <img src={g.img} alt={`${g.title} ${g.sub}`} className={`h-64 w-full object-cover transition group-hover:scale-105 ${g.dark ? 'opacity-85' : ''}`} />
              <div className={`absolute inset-0 bg-gradient-to-t ${g.dark ? 'from-wine-800/70' : 'from-cream-100/50'}`} />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                <div className={g.dark ? 'text-cream-100' : 'text-wine-800'}>
                  <p className="font-serif text-xl italic leading-none">{g.title}</p>
                  <p className="font-serif text-xl italic leading-none">{g.sub}</p>
                </div>
                <button className={`grid h-8 w-8 place-items-center rounded-full border ${g.dark ? 'border-cream-100 text-cream-100' : 'border-wine-700 text-wine-700'}`}>
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Video card fills remaining slot */}
          <div className="card-shape relative col-span-2 overflow-hidden bg-wine-700 text-cream-100 sm:col-span-2 lg:col-span-2">
            <img src={IMG.video} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
            <div className="relative flex h-full items-center gap-6 p-6">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest-2 text-gold-400">Video Gallery</p>
                <h3 className="mt-2 font-serif text-3xl leading-tight">Watch Our<br/>Nail Transformations</h3>
                <p className="mt-2 text-sm text-cream-200/80">From simple to stunning — see the magic happen.</p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream-100 px-5 py-2.5 text-sm text-wine-800">
                  Watch Now <Icon name="arrow" className="h-4 w-4" />
                </button>
              </div>
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-cream-100 text-wine-700">
                <Icon name="play" className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL PEOPLE */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative">
            <div className="card-shape overflow-hidden shadow-lg">
              <img src={IMG.salon} alt="Salon interior" className="h-80 w-full object-cover" />
            </div>
            <div className="absolute bottom-6 left-6">
              <p className="script text-3xl text-cream-100">Real People<br/>Real Confidence</p>
              <p className="mt-2 text-[10px] tracking-widest-2 text-cream-100">OUR CLIENTS, OUR INSPIRATION</p>
            </div>
          </div>
          <div>
            <Icon name="quote" className="h-8 w-8 text-wine-600" />
            <p className="mt-4 font-serif text-2xl italic leading-relaxed text-wine-800">
              "Every set is a reflection of our passion and your unique style. These are real nails, real clients, and real confidence."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="h-10 w-10 rounded-full border-2 border-cream-100 bg-wine-400" />
                <div className="h-10 w-10 rounded-full border-2 border-cream-100 bg-cream-300" />
                <div className="h-10 w-10 rounded-full border-2 border-cream-100 bg-wine-600" />
              </div>
              <button className="inline-flex items-center gap-3 text-sm text-wine-800">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-wine-700 text-wine-700"><Icon name="arrow" className="h-4 w-4" /></span>
                See More<br/>Client Looks
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-wine-700 py-16 text-cream-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
          <div>
            <h2 className="font-serif text-4xl">Love What You See?</h2>
            <p className="mt-2 text-cream-200/80">Book your appointment and let's create your next look.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-cream-100 px-6 py-3 text-sm font-medium text-wine-800">
            <Icon name="calendar" className="h-4 w-4" /> Book Appointment <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
