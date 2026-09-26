import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Hand, Heart, Leaf, Truck } from "lucide-react";
import { useRef } from "react";
import {
  archiveProducts,
  articles,
  categories,
  getProduct,
  img,
  processSteps,
} from "@/data/catalog";
import { money } from "@/lib/money";
import { notifyCart } from "@/lib/notify";
import { useShop } from "@/lib/shop-store";
import { Botanical, Sprig, Stamp, Torn, VesselSketch } from "@/components/site/marks";
import { PolaroidCard } from "@/components/site/product-card";

function CategoryTile({
  slug,
  className,
}: {
  slug: (typeof categories)[number]["slug"];
  className: string;
}) {
  const cat = categories.find((c) => c.slug === slug)!;
  return (
    <Link to="/shop/$category" params={{ category: cat.slug }} className={`group ${className}`}>
      <img src={cat.image} alt="" className="zoom-img absolute inset-0 size-full object-cover" />
      <span className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/15 to-transparent" />
      <span className="relative flex h-full min-h-64 flex-col justify-end p-4 text-cream">
        <span className="eyebrow">{cat.number}</span>
        <span className="mt-1 flex items-end justify-between gap-3">
          <span>
            <span className="block font-serif text-3xl leading-none">{cat.name}</span>
            <span className="mt-1 block text-sm text-cream/80">{cat.blurb}</span>
          </span>
          <span className="arrow-dot shrink-0">
            <ArrowRight size={14} />
          </span>
        </span>
      </span>
    </Link>
  );
}

export function HomePage() {
  const rail = useRef<HTMLDivElement>(null);
  const archive = archiveProducts();
  const earth = getProduct("earth-vessel")!;
  const add = useShop((s) => s.addToCart);

  function scrollRail(dir: number) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.current?.scrollBy({ left: dir * 280, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <div>
      <section className="hero-home">
        <div className="hero-canvas">
          <img
            src={`${img.heroClose}?v=2`}
            alt="Large hand-thrown earthen vessel with a coarse unglazed surface"
            width={1792}
            height={1008}
            fetchPriority="high"
            className="hero-bg"
          />
          <div className="wrap hero-top">
            <div className="hero-copy settle">
              <p className="eyebrow text-muted">Natural materials. Timeless objects.</p>
              <h1 className="hero-title text-dark">
                Formed
                <br />
                by earth.
              </h1>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted md:text-base">
                Handcrafted clay pieces for a more meaningful home. Rooted in nature, shaped by hands, made to last.
              </p>
              <Link to="/shop" className="btn btn-primary mt-7">
                Shop the collection <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="wrap hero-strip">
            <div className="hero-strip-label">
              <Sprig className="h-10 w-7 shrink-0 text-forest" />
              <p className="eyebrow leading-relaxed">
                Objects
                <br />
                for a slower
                <br />
                life
              </p>
            </div>
            <ul className="hero-thumbs">
              {archive.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link to="/product/$slug" params={{ slug: p.slug }} className="hero-mini">
                    <img src={p.images[0]} alt="" />
                    <span className="hero-mini-name">{p.name}</span>
                    <span className="hero-mini-price">{money(p.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Torn className="absolute bottom-0 left-0 translate-y-px text-paper" />
      </section>

      <section className="bg-paper pt-10 pb-16">
        <div className="wrap">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-muted">The clay archive</p>
              <h2 className="title mt-2 max-w-md">
                Everyday
                <br />
                objects,
                <br />
                lasting stories.
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="icon-btn border border-line" aria-label="Previous pieces" onClick={() => scrollRail(-1)}>
                <ArrowLeft size={18} />
              </button>
              <button type="button" className="icon-btn border border-line" aria-label="Next pieces" onClick={() => scrollRail(1)}>
                <ArrowRight size={18} />
              </button>
              <Link to="/shop" className="eyebrow ml-2 hidden items-center gap-2 sm:inline-flex">
                Explore all <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div ref={rail} className="rail mt-4" aria-label="Featured pieces" tabIndex={0}>
            {archive.map((p, i) => (
              <PolaroidCard key={p.slug} product={p} index={i} />
            ))}
          </div>
          <Link to="/shop" className="eyebrow inline-flex items-center gap-2 sm:hidden">
            Explore all <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="relative bg-ivory">
        <div className="wrap grid items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-muted">Our philosophy</p>
            <div className="mt-3 flex items-start justify-between gap-4">
              <h2 className="display text-[clamp(3rem,6vw,5.2rem)] uppercase">
                Earth.
                <br />
                Fire.
                <br />
                Hands.
              </h2>
              <Stamp />
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
              From raw earth to finished form, each piece is a journey of transformation. We work with nature's oldest material to create objects that bring warmth, beauty and intention into everyday life.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm">
              Our story <ArrowRight size={15} />
            </Link>
          </div>
          <figure className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-xl">
            <img src={img.wheel} alt="Hands covered in wet clay shaping a vessel on the wheel" className="h-[min(26rem,70vw)] w-full max-w-full object-cover md:h-[min(34rem,50vw)]" />
            <figcaption className="script absolute right-4 bottom-6 max-w-40 text-right text-3xl leading-tight text-white">
              Same materials. A brighter tomorrow.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-16 text-cream">
        <Botanical className="pointer-events-none absolute top-6 right-0 hidden h-64 text-cream/30 lg:block" />
        <div className="wrap grid items-center gap-10 lg:grid-cols-[12rem_1fr]">
          <h2 className="eyebrow text-cream/70">The making process</h2>
          <ol className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <li key={step.n} className="text-center">
                <div className="relative mx-auto size-28 overflow-hidden rounded-full md:size-36">
                  <img src={step.image} alt="" className="size-full object-cover transition duration-500 hover:scale-105" />
                  {i < processSteps.length - 1 ? (
                    <ArrowRight className="absolute top-1/2 -right-5 hidden -translate-y-1/2 text-cream/50 md:block" size={16} aria-hidden="true" />
                  ) : null}
                </div>
                <p className="mt-4 font-serif text-3xl">{step.n}</p>
                <p className="eyebrow mt-1">{step.title}</p>
                <p className="mt-1 text-sm text-cream/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="wrap">
          <div className="grid items-end gap-6 md:grid-cols-[1.2fr_1fr_auto]">
            <div>
              <p className="eyebrow text-muted">Our collection</p>
              <h2 className="title mt-2">
                Objects for a more
                <br />
                meaningful home.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Handcrafted ceramics designed to be lived with — in your kitchen, on your table, and throughout your home.
            </p>
            <Link to="/shop" className="btn btn-ghost">
              Shop all <ArrowRight size={15} />
            </Link>
          </div>
          <div className="cat-grid mt-8">
            <CategoryTile slug="mugs" className="cat-a" />
            <CategoryTile slug="bowls-plates" className="cat-b" />
            <CategoryTile slug="planters" className="cat-c" />
            <CategoryTile slug="vases" className="cat-d" />
            <CategoryTile slug="others" className="cat-e" />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="wrap grid items-center gap-10 lg:grid-cols-3">
          <div>
            <p className="eyebrow text-muted">Featured piece</p>
            <h2 className="title mt-2">
              The Earth
              <br />
              Vessel
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{earth.description}</p>
            <p className="mt-3 font-serif text-3xl">{money(earth.price)}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" className="btn btn-primary" onClick={() => notifyCart(add(earth.slug, 1))}>
                Add to cart <ArrowRight size={15} />
              </button>
              <Link to="/product/$slug" params={{ slug: earth.slug }} className="btn btn-ghost">
                View details
              </Link>
            </div>
          </div>
          <figure className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <img src={earth.images[0]} alt={earth.name} className="mx-auto max-h-[min(32rem,70vh)] w-full max-w-full object-contain" />
            <p className="script absolute top-4 left-2 text-3xl text-dark" aria-hidden="true">
              One of a kind
            </p>
          </figure>
          <div>
            <p className="eyebrow text-muted">Specifications</p>
            <table className="spec-table mt-3">
              <tbody>
                <tr><th>Material</th><td>{earth.material}</td></tr>
                <tr><th>Finish</th><td>{earth.finish}</td></tr>
                <tr><th>Dimensions</th><td>{earth.dimensions}</td></tr>
                <tr><th>Weight</th><td>{earth.weight}</td></tr>
                <tr><th>Care</th><td>{earth.care}</td></tr>
              </tbody>
            </table>
            <VesselSketch />
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="wrap">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-muted">From the journal</p>
              <h2 className="title mt-2">
                Notes from
                <br />
                the studio.
              </h2>
            </div>
            <Link to="/journal" className="eyebrow inline-flex items-center gap-2">
              Read all <ArrowRight size={14} />
            </Link>
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <li key={a.slug}>
                <Link to="/journal/$slug" params={{ slug: a.slug }} className="group block">
                  <span className="block overflow-hidden bg-ivory">
                    <img src={a.image} alt="" className="zoom-img aspect-[4/3] w-full object-cover" />
                  </span>
                  <span className="mt-3 flex items-start justify-between gap-3">
                    <span>
                      <span className="block font-serif text-2xl leading-tight">{a.title}</span>
                      <span className="eyebrow mt-1 block text-muted">{a.date}</span>
                    </span>
                    <span className="arrow-dot mt-1 text-dark">
                      <ArrowRight size={14} />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-ivory">
        <ul className="wrap grid grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Hand, title: "Handcrafted with care" },
            { icon: Leaf, title: "Sustainably sourced materials" },
            { icon: Heart, title: "Timeless design" },
            { icon: Truck, title: "Shipping across India" },
          ].map(({ icon: Icon, title }, i) => (
            <li key={title} className={`flex items-center gap-3 px-2 py-6 ${i > 0 ? "lg:border-l lg:border-line" : ""}`}>
              <Icon strokeWidth={1.25} className="size-7 shrink-0" aria-hidden="true" />
              <p className="font-serif text-xl leading-tight">{title}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
