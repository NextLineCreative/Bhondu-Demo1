import Link from 'next/link'
import { Icon } from '@/components/Icons'

const IMG = {
  mug: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80',
  bowl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80',
  vase: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=600&q=80',
  plate: 'https://images.unsplash.com/photo-1592837827234-a95a14ca7bfa?auto=format&fit=crop&w=600&q=80',
  jug: 'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?auto=format&fit=crop&w=600&q=80',
  planter: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
  pot: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80',
  set: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80',
}

const products = [
  { n: '01', name: 'Everyday Mug', price: '₹599', tag: 'Best Seller', img: IMG.mug },
  { n: '02', name: 'Serving Bowl', price: '₹899', tag: 'New', img: IMG.bowl },
  { n: '03', name: 'Handmade Vase', price: '₹699', img: IMG.vase },
  { n: '04', name: 'Ceramic Plate', price: '₹799', img: IMG.plate },
  { n: '05', name: 'Clay Jug', price: '₹1,299', img: IMG.jug },
  { n: '06', name: 'Terracotta Planter', price: '₹849', img: IMG.planter },
  { n: '07', name: 'Storage Pot', price: '₹1,099', img: IMG.pot },
  { n: '08', name: 'Espresso Cup', price: '₹499', tag: 'Popular', img: IMG.mug },
]

const categories = ['All', 'Mugs', 'Plates & Bowls', 'Vases', 'Planters', 'Others']

export default function ShopPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream-100 pt-10 pb-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[10px] uppercase tracking-widest-2 text-ink-800">Shop the Archive</p>
          <div className="mt-6 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.2fr,1fr]">
            <h1 className="display text-6xl leading-[0.95] text-ink-800 lg:text-8xl">Handcrafted<br/>Objects.<br/>Lasting Worth.</h1>
            <div className="relative">
              <img src={IMG.set} alt="Ceramic set" className="h-56 w-full rounded-sm object-cover paper-edge" />
              <p className="hand absolute -top-2 right-4 rotate-[-3deg] text-xl text-ink-800">Made to be loved daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="border-y border-clay-400/20 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 lg:px-10">
          <div className="flex flex-wrap gap-3">
            {categories.map((c, i) => (
              <button key={c} className={`text-[11px] uppercase tracking-widest-2 transition ${i === 0 ? 'text-rust-500 border-b border-rust-500 pb-1' : 'text-ink-800/70 hover:text-rust-500'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest-2 text-ink-800/70">
            <span>Sort: Featured</span>
            <Icon name="chev-r" className="h-3.5 w-3.5 rotate-90" />
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <article key={p.n} className="group">
                <div className="relative overflow-hidden bg-cream-50 rounded-sm">
                  <img src={p.img} alt={p.name} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="hand absolute left-3 top-2 text-2xl text-ink-800">{p.n}</span>
                  {p.tag && (
                    <span className="absolute right-3 top-3 rounded-full bg-cream-50 px-3 py-1 text-[9px] uppercase tracking-widest-2 text-ink-800">{p.tag}</span>
                  )}
                  <button className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-rust-500 text-cream-50 opacity-0 transition group-hover:opacity-100 hover:bg-rust-600">
                    <Icon name="bag" className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <p className="font-serif text-lg text-ink-800">{p.name}</p>
                  <p className="text-sm text-ink-800">{p.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="bg-moss-800 py-14 text-cream-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-widest-2 text-cream-100/60">Join Us</p>
            <h2 className="display mt-2 text-3xl">Sign up for early access to new drops.</h2>
          </div>
          <form className="flex w-full max-w-md items-center gap-0 border-b border-cream-100/40 pb-2">
            <input type="email" placeholder="Enter your email" className="w-full bg-transparent text-sm placeholder:text-cream-100/50 focus:outline-none" />
            <button type="button" className="grid h-9 w-9 place-items-center bg-rust-500 text-cream-50 hover:bg-rust-600">
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
