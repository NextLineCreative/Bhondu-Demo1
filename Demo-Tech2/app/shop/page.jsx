import Link from 'next/link'
import { Icon } from '@/components/Icons'
import IMG from '@/lib/img'
import SpotlightCard from '@/components/SpotlightCard'
import { Stagger, StaggerItem } from '@/components/Motion'

const products = [
  { n: '01', name: 'Everyday Clay Mug',      price: '₹599',   tag: 'Best Seller', img: IMG.mug1 },
  { n: '02', name: 'Serving Clay Bowl',      price: '₹899',   tag: 'New',         img: IMG.bowl1 },
  { n: '03', name: 'Handmade Clay Vase',     price: '₹699',                        img: IMG.vase1 },
  { n: '04', name: 'Ceramic Dinner Plate',   price: '₹799',                        img: IMG.plate1 },
  { n: '05', name: 'Rustic Clay Jug',        price: '₹1,299',                      img: IMG.jug1 },
  { n: '06', name: 'Terracotta Planter',     price: '₹849',                        img: IMG.planter1 },
  { n: '07', name: 'Storage Clay Pot',       price: '₹1,099',                      img: IMG.pot1 },
  { n: '08', name: 'Espresso Cup',           price: '₹499',   tag: 'Popular',      img: IMG.cup2 },
  { n: '09', name: 'Stoneware Cup',          price: '₹549',                        img: IMG.cup1 },
  { n: '10', name: 'Ridged Clay Bowl',       price: '₹999',                        img: IMG.bowl2 },
  { n: '11', name: 'Slim Bud Vase',          price: '₹749',                        img: IMG.vase2 },
  { n: '12', name: 'Salad Plate Set',        price: '₹1,199',                      img: IMG.plate2 },
  { n: '13', name: 'Small Ceramic Planter',  price: '₹649',                        img: IMG.planter2 },
  { n: '14', name: 'Table Decor Object',     price: '₹899',   tag: 'Limited',      img: IMG.decor1 },
  { n: '15', name: 'Incense Holder',         price: '₹399',                        img: IMG.decor4 },
  { n: '16', name: 'Handmade Coffee Mug',    price: '₹649',                        img: IMG.mug3 },
]

const categories = ['All', 'Mugs', 'Plates & Bowls', 'Vases', 'Planters', 'Others']

export default function ShopPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ivory-100 pt-10 pb-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[10px] uppercase tracking-widest-2 text-ink-800">Shop the Archive</p>
          <div className="mt-6 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.2fr,1fr]">
            <h1 className="display text-6xl leading-[0.95] text-ink-800 lg:text-8xl">Handcrafted<br/>Objects.<br/>Lasting Worth.</h1>
            <div className="relative">
              <img src={IMG.studioSet} alt="Ceramic set" className="h-56 w-full rounded-sm object-cover paper-edge" />
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

      {/* PRODUCT GRID — React Bits SpotlightCard + staggered reveal */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Stagger className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4" gap={0.05}>
            {products.map((p) => (
              <StaggerItem key={p.n}>
                <SpotlightCard className="group h-full rounded-sm p-3">
                  <div className="relative overflow-hidden rounded-sm">
                    <img src={p.img} alt={p.name} loading="lazy" className="h-72 w-full object-cover transition duration-700 group-hover:scale-110" />
                    <span className="hand absolute left-3 top-2 text-2xl text-ink-800">{p.n}</span>
                    {p.tag && (
                      <span className="absolute right-3 top-3 rounded-full bg-ivory-50 px-3 py-1 text-[9px] uppercase tracking-widest-2 text-ink-800">{p.tag}</span>
                    )}
                    <button className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-rust-500 text-ivory-50 opacity-0 transition group-hover:opacity-100 hover:bg-rust-600">
                      <Icon name="bag" className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between px-1">
                    <p className="font-serif text-lg text-ink-800">{p.name}</p>
                    <p className="text-sm text-ink-800 tabular-nums">{p.price}</p>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* BANNER */}
      <section className="bg-forest-600 py-14 text-ivory-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-widest-2 text-ivory-100/60">Join Us</p>
            <h2 className="display mt-2 text-3xl">Sign up for early access to new drops.</h2>
          </div>
          <form className="flex w-full max-w-md items-center gap-0 border-b border-ivory-100/40 pb-2">
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
