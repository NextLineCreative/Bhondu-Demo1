import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  categories,
  categoryBySlug,
  compactSearch,
  filterProducts,
  products,
  toShopQuery,
  type CategorySlug,
  type ShopQuery,
  type ShopSearch,
} from "@/data/catalog";
import { GridCard } from "@/components/site/product-card";
import { NotFoundView, PageHero, ThemeSelect } from "@/components/site/ui";

export function ShopScreen({ category, search }: { category?: string; search: ShopSearch }) {
  const navigate = useNavigate();
  const cat = category ? categoryBySlug(category) : undefined;
  const query = toShopQuery(search);
  const [shown, setShown] = useState(8);

  useEffect(() => {
    setShown(8);
  }, [category, query.q, query.sort, query.price, query.avail]);

  if (category && !cat) return <NotFoundView title="Collection not found" />;

  const list = filterProducts(products, {
    category: cat?.slug as CategorySlug | undefined,
    q: query.q,
    sort: query.sort,
    price: query.price,
    avail: query.avail,
  });
  const visible = list.slice(0, shown);

  function update(patch: Partial<ShopQuery>) {
    const next = compactSearch({ ...query, ...patch });
    if (cat) {
      void navigate({ to: "/shop/$category", params: { category: cat.slug }, search: next });
    } else {
      void navigate({ to: "/shop", search: next });
    }
  }

  return (
    <div className="pb-16">
      <PageHero
        eyebrow={cat ? `Collection ${cat.number}` : "The archive"}
        title={cat ? cat.name : "Shop the collection"}
        lede={cat ? cat.blurb : "Mugs, bowls, vases, and planters thrown by hand. Filter by what you need the table to hold."}
      />
      <div className="wrap grid gap-8 lg:grid-cols-[16rem_1fr]">
        <aside className="shop-filters h-fit space-y-5 lg:sticky lg:top-24">
          <div className="shop-cats">
            <p className="eyebrow text-muted">Category</p>
            <ul className="mt-3 space-y-2 text-sm lg:space-y-2">
              <li>
                <Link to="/shop" search={search} className={!cat ? "is-on" : undefined} aria-current={!cat ? "page" : undefined}>
                  All pieces
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/shop/$category"
                    params={{ category: c.slug }}
                    search={search}
                    className={cat?.slug === c.slug ? "is-on" : undefined}
                    aria-current={cat?.slug === c.slug ? "page" : undefined}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="shop-filter-fields">
            <label className="field shop-search">
              <span className="field-label">Search</span>
              <input value={query.q} onChange={(e) => update({ q: e.target.value })} placeholder="Mug, vase, planter" />
            </label>
            <ThemeSelect
              label="Sort"
              value={query.sort}
              onChange={(sort) => update({ sort: sort as ShopQuery["sort"] })}
              options={[
                { value: "featured", label: "Featured" },
                { value: "price-asc", label: "Price, low to high" },
                { value: "price-desc", label: "Price, high to low" },
                { value: "name", label: "Name" },
              ]}
            />
            <ThemeSelect
              label="Price"
              value={query.price}
              onChange={(price) => update({ price: price as ShopQuery["price"] })}
              options={[
                { value: "all", label: "All prices" },
                { value: "under-1500", label: "Under ₹1,500" },
                { value: "1500-3500", label: "₹1,500 – ₹3,500" },
                { value: "over-3500", label: "₹3,500 and above" },
              ]}
            />
            <label className="stock-check">
              <input type="checkbox" checked={query.avail} onChange={(e) => update({ avail: e.target.checked })} />
              In stock only
            </label>
          </div>
        </aside>
        <div>
          <p className="text-sm text-muted">{list.length} {list.length === 1 ? "piece" : "pieces"}</p>
          {visible.length === 0 ? (
            <p className="mt-8 max-w-md text-muted">Nothing matches those filters. Widen the price or clear the search.</p>
          ) : (
            <ul className="mt-4 grid grid-cols-2 items-stretch gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-4">
              {visible.map((p) => (
                <li key={p.slug} className="min-w-0">
                  <GridCard product={p} />
                </li>
              ))}
            </ul>
          )}
          {shown < list.length ? (
            <button type="button" className="btn btn-ghost mt-8" onClick={() => setShown((n) => n + 8)}>
              Load more
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
