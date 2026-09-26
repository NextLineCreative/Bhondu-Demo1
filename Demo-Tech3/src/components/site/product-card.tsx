import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { categoryName, type Product } from "@/data/catalog";
import { money } from "@/lib/money";
import { notifyCart, notifyWish } from "@/lib/notify";
import { useShop } from "@/lib/shop-store";
import { Qty } from "@/components/site/ui";

const tilts = ["-1.8deg", "1.3deg", "-0.8deg", "1.6deg", "-1.2deg"];

export function PolaroidCard({ product, index }: { product: Product; index: number }) {
  const add = useShop((s) => s.addToCart);
  return (
    <article className="polaroid polaroid-tilt" style={{ ["--tilt" as string]: tilts[index % tilts.length] }}>
      <Link to="/product/$slug" params={{ slug: product.slug }} className="group relative block">
        <div className="relative overflow-hidden bg-paper">
          {product.archive ? (
            <span className="absolute top-2 left-2 z-10 bg-ivory/95 px-1.5 py-1 font-serif text-sm leading-none text-dark">{product.archive}</span>
          ) : null}
          <img src={product.images[0]} alt={product.name} className="zoom-img aspect-[3/4] w-full object-cover" />
          <span className="arrow-dot absolute right-2 bottom-2 bg-white/80 text-dark">
            <ArrowRight size={14} />
          </span>
        </div>
        <h3 className="mt-3 px-1 font-serif text-2xl leading-none">{product.name}</h3>
      </Link>
      <div className="mt-1 flex items-center justify-between px-1">
        <p className="text-sm text-muted">{money(product.price)}</p>
        <button
          type="button"
          className="eyebrow text-clay"
          onClick={() => notifyCart(add(product.slug, 1))}
          disabled={product.stock <= 0}
        >
          {product.stock <= 0 ? "Sold out" : "Add"}
        </button>
      </div>
    </article>
  );
}

export function GridCard({ product }: { product: Product }) {
  const add = useShop((s) => s.addToCart);
  const toggle = useShop((s) => s.toggleWish);
  const wished = useShop((s) => s.wishlist.includes(product.slug));
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <article className="grid-card group">
      <div className="relative overflow-hidden bg-paper">
        <Link to="/product/$slug" params={{ slug: product.slug }} className="block">
          <img src={product.images[0]} alt={product.name} width={1200} height={1600} className="zoom-img aspect-square w-full object-cover sm:aspect-[3/4]" loading="lazy" />
        </Link>
        <button
          type="button"
          className="icon-btn card-wish absolute top-1 right-1 bg-white/80"
          aria-pressed={wished}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          onClick={() => notifyWish(toggle(product.slug))}
        >
          <Heart size={16} strokeWidth={1.4} fill={wished ? "currentColor" : "none"} />
        </button>
        {product.stock <= 0 ? <span className="eyebrow absolute top-3 left-3 bg-forest px-2 py-1 text-white">Sold out</span> : null}
      </div>
      <p className="eyebrow mt-3 text-muted">{categoryName(product.category)}</p>
      <h3 className="card-title font-serif leading-tight">
        <Link to="/product/$slug" params={{ slug: product.slug }}>{product.name}</Link>
      </h3>
      <p className="text-sm text-muted">{money(product.price)}</p>
      <div className="card-actions">
        <button type="button" className="btn btn-primary" disabled={product.stock <= 0} onClick={() => notifyCart(add(product.slug, 1))}>
          Add to cart
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => setOpen(true)}>
          Quick view
        </button>
      </div>
      {open ? (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-dark/45 p-4" role="dialog" aria-modal="true" aria-labelledby={`qv-${product.slug}`}>
          <div className="grid max-h-[90vh] w-full max-w-3xl overflow-auto bg-ivory md:grid-cols-2">
            <img src={product.images[0]} alt={product.name} className="h-72 w-full object-cover md:h-full" />
            <div className="relative p-6">
              <button type="button" className="icon-btn absolute top-2 right-2" aria-label="Close quick view" onClick={() => setOpen(false)}>
                <X />
              </button>
              <p className="eyebrow text-muted">{categoryName(product.category)}</p>
              <h2 id={`qv-${product.slug}`} className="subhead mt-2">{product.name}</h2>
              <p className="mt-2">{money(product.price)}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{product.description}</p>
              <p className="mt-3 text-sm">{product.stock > 0 ? `${product.stock} in the studio` : "Sold out"}</p>
              {product.stock > 0 ? (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Qty value={qty} max={product.stock} onChange={setQty} />
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      notifyCart(add(product.slug, qty));
                      setOpen(false);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              ) : null}
              <Link to="/product/$slug" params={{ slug: product.slug }} className="mt-4 inline-block text-sm underline" onClick={() => setOpen(false)}>
                View details
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}
