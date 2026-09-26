import { Link, useNavigate } from "@tanstack/react-router";
import { Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { categoryName, getProduct, relatedProducts } from "@/data/catalog";
import { FREE_AT, SHIPPING_FLAT, money } from "@/lib/money";
import { notifyCart, notifyWish } from "@/lib/notify";
import { useShop } from "@/lib/shop-store";
import { GridCard } from "@/components/site/product-card";
import { Breadcrumbs, NotFoundView, Qty } from "@/components/site/ui";

export function ProductScreen({ slug }: { slug: string }) {
  const product = getProduct(slug);
  const navigate = useNavigate();
  const add = useShop((s) => s.addToCart);
  const setQtyCart = useShop((s) => s.setQty);
  const toggle = useShop((s) => s.toggleWish);
  const wished = useShop((s) => s.wishlist.includes(slug));
  const [photo, setPhoto] = useState(0);
  const [qty, setQty] = useState(1);

  if (!product) return <NotFoundView title="Piece not found" />;

  const related = relatedProducts(product.slug);
  const image = product.images[photo] ?? product.images[0];

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: product?.name, url });
        return;
      } catch {
        return;
      }
    }
    await navigator.clipboard.writeText(url);
    toast("Link copied");
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    brand: { "@type": "Brand", name: "Clay Pot" },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
  };

  return (
    <div className="wrap py-8 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/shop" },
          { label: product.name },
        ]}
      />
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <img src={image} alt={product.name} className="aspect-[4/5] w-full bg-paper object-cover" />
          {product.images.length > 1 ? (
            <ul className="mt-3 flex gap-2">
              {product.images.map((src, i) => (
                <li key={src}>
                  <button type="button" onClick={() => setPhoto(i)} aria-label={`Show image ${i + 1}`} className={`border ${i === photo ? "border-dark" : "border-transparent"}`}>
                    <img src={src} alt="" className="size-16 object-cover" />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div>
          <p className="eyebrow text-muted">{categoryName(product.category)}</p>
          <h1 className="title mt-2">{product.name}</h1>
          <p className="mt-3 font-serif text-3xl">{money(product.price)}</p>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted md:text-base">{product.description}</p>
          <p className="mt-3 text-sm">{product.stock > 0 ? `In the studio · ${product.stock} available` : "Sold out"}</p>
          <p className="mt-1 text-sm text-muted">{product.foodSafe ? "Food safe glaze." : "Decorative — not for food or water."}</p>
          {product.stock > 0 ? (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Qty value={qty} max={product.stock} onChange={setQty} />
              <button type="button" className="btn btn-primary" onClick={() => notifyCart(add(product.slug, qty))}>
                Add to cart
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  const result = setQtyCart(product.slug, qty);
                  notifyCart(result);
                  if (result === "added") void navigate({ to: "/checkout" });
                }}
              >
                Buy now
              </button>
            </div>
          ) : (
            <p className="mt-6 text-sm">This firing has left the shelf. Join the journal if you want to hear when it returns.</p>
          )}
          <div className="mt-4 flex gap-4">
            <button type="button" className="inline-flex items-center gap-2 text-sm" aria-pressed={wished} onClick={() => notifyWish(toggle(product.slug))}>
              <Heart size={16} fill={wished ? "currentColor" : "none"} />
              {wished ? "Wishlisted" : "Wishlist"}
            </button>
            <button type="button" className="inline-flex items-center gap-2 text-sm" onClick={() => void share()}>
              <Share2 size={16} /> Share
            </button>
          </div>
          <table className="spec-table mt-8">
            <tbody>
              <tr><th>Material</th><td>{product.material}</td></tr>
              <tr><th>Finish</th><td>{product.finish}</td></tr>
              <tr><th>Dimensions</th><td>{product.dimensions}</td></tr>
              <tr><th>Weight</th><td>{product.weight}</td></tr>
              <tr><th>Use</th><td>{product.foodSafe ? "Food safe" : "Decorative"}</td></tr>
            </tbody>
          </table>
          <div className="mt-6">
            <details className="acc" open>
              <summary>The making</summary>
              <p className="acc-body">{product.story}</p>
            </details>
            <details className="acc">
              <summary>Care</summary>
              <p className="acc-body">{product.care}</p>
            </details>
            <details className="acc">
              <summary>Shipping</summary>
              <p className="acc-body">
                Demo checkout adds {money(SHIPPING_FLAT)}, or complimentary shipping on orders of {money(FREE_AT)} and more. No parcel is dispatched from this preview.
              </p>
            </details>
          </div>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="subhead">Related pieces</h2>
        <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {related.map((p) => (
            <li key={p.slug}>
              <GridCard product={p} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
