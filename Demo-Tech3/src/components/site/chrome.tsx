import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Toaster } from "sonner";
import { articles, products, searchAll } from "@/data/catalog";
import { money } from "@/lib/money";
import { useOverlay } from "@/lib/use-overlay";
import { selectSubtotal, useCartCount, useShop } from "@/lib/shop-store";
import { Botanical, IconInstagram, IconPinterest, IconYouTube, Sprig } from "@/components/site/marks";
import { emailOk } from "@/components/site/ui";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="logo-link" aria-label="Clay Pot home">
      <Sprig className="logo-mark text-forest" />
      <span className="logo-copy">
        <span className="logo-word block text-dark">CLAY POT</span>
        <span className="logo-sub block text-muted">HANDCRAFTED CERAMICS</span>
      </span>
    </Link>
  );
}

function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [stuck, setStuck] = useState(false);
  const openSearch = useShop((s) => s.openSearch);
  const openMenu = useShop((s) => s.openMenu);
  const openCart = useShop((s) => s.openCart);
  const count = useCartCount();
  const hydrated = useShop((s) => s.hydrated);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${stuck ? "is-stuck" : ""}`}>
      <div className="wrap header-bar">
        <Logo />
        <nav className="desk-nav items-center gap-5 xl:gap-8" aria-label="Primary">
          {NAV.map((item) => {
            const on = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm tracking-wide ${on ? "text-clay" : "text-dark hover:text-clay"}`}
                aria-current={on ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-tools">
          <button type="button" className="icon-btn" aria-label="Search" onClick={openSearch}>
            <Search strokeWidth={1.4} size={20} />
          </button>
          <Link to="/account" className="icon-btn" aria-label="Account">
            <UserRound strokeWidth={1.4} size={20} />
          </Link>
          <button type="button" className="icon-btn" aria-label="Open cart" onClick={openCart}>
            <ShoppingBag strokeWidth={1.4} size={20} />
            {hydrated && count > 0 ? <span className="badge">{count}</span> : null}
          </button>
          <button type="button" className="icon-btn menu-btn" aria-label="Open menu" onClick={openMenu}>
            <Menu strokeWidth={1.4} size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!emailOk(email)) {
      setError("Enter a valid email.");
      setDone(false);
      return;
    }
    const key = "claypot-journal-list";
    const prev = JSON.parse(localStorage.getItem(key) || "[]") as string[];
    const next = [...new Set([...prev, email.trim().toLowerCase()])];
    localStorage.setItem(key, JSON.stringify(next));
    setDone(true);
    setError("");
    setEmail("");
  }

  return (
    <form onSubmit={submit} className="relative z-10 mt-4">
      <label className="sr-only" htmlFor="journal-email">Email</label>
      <div className="journal-row">
        <input
          id="journal-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="journal-input"
          autoComplete="email"
        />
        <button type="submit" className="journal-go" aria-label="Join the journal">
          <ArrowRight size={16} />
        </button>
      </div>
      {error ? <p className="field-error">{error}</p> : null}
      {done ? <p className="mt-2 text-xs text-white/70">Saved on this device. This demo does not send email.</p> : null}
    </form>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-white">
      <Botanical className="pointer-events-none absolute bottom-0 left-0 h-48 text-white/15" />
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Sprig className="h-10 w-7" />
            <span>
              <span className="logo-word block">CLAY POT</span>
              <span className="logo-sub block text-white/60">HANDCRAFTED CERAMICS</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            Thoughtfully crafted objects for a more beautiful, slower everyday life.
          </p>
          <p className="mt-4 text-sm text-white/80">
            <a href="tel:+911414062180">+91 141 406 2180</a>
            <br />
            <a href="mailto:hello@claypot.in">hello@claypot.in</a>
            <br />
            Studio 12, Bapu Bazaar, Jaipur 302003
          </p>
          <div className="mt-5 flex gap-2">
            <a className="icon-btn text-white" href="https://www.instagram.com/" aria-label="Instagram">
              <IconInstagram className="size-5" />
            </a>
            <a className="icon-btn text-white" href="https://www.pinterest.com/" aria-label="Pinterest">
              <IconPinterest className="size-5" />
            </a>
            <a className="icon-btn text-white" href="https://www.youtube.com/" aria-label="YouTube">
              <IconYouTube className="size-5" />
            </a>
          </div>
        </div>
        <div>
          <p className="eyebrow text-white/50">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white/70">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white/70">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white/70">About Us</Link></li>
            <li><Link to="/journal" className="hover:text-white/70">Journal</Link></li>
            <li><Link to="/contact" className="hover:text-white/70">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-white/50">Customer care</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/faqs" className="hover:text-white/70">FAQs</Link></li>
            <li><Link to="/shipping" className="hover:text-white/70">Shipping & Delivery</Link></li>
            <li><Link to="/returns" className="hover:text-white/70">Returns & Exchanges</Link></li>
            <li><Link to="/care" className="hover:text-white/70">Care Guide</Link></li>
            <li><Link to="/track" className="hover:text-white/70">Track Order</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-white/50">Join our journal</p>
          <p className="mt-4 text-sm text-white/75">Get updates on new pieces, studio stories and more.</p>
          <Newsletter />
        </div>
      </div>
      <div className="wrap flex flex-col gap-3 border-t border-white/15 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2024 Clay Pot. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

function MobileMenu() {
  const open = useShop((s) => s.menuOpen);
  const close = useShop((s) => s.closeMenu);
  const ref = useRef<HTMLDivElement>(null);
  useOverlay(open, close, ref);
  return (
    <div
      ref={ref}
      inert={open ? undefined : true}
      aria-hidden={!open}
      className={`fixed inset-0 z-50 bg-ivory transition duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <Logo />
        <button type="button" className="icon-btn" aria-label="Close menu" onClick={close}>
          <X />
        </button>
      </div>
      <nav className="flex flex-col gap-4 px-6 pt-6" aria-label="Mobile">
        {NAV.map((item) => (
          <Link key={item.to} to={item.to} className="subhead text-dark" onClick={close}>
            {item.label}
          </Link>
        ))}
        <Link to="/wishlist" className="mt-4 text-sm" onClick={close}>Wishlist</Link>
        <Link to="/account" className="text-sm" onClick={close}>Account</Link>
        <Link to="/track" className="text-sm" onClick={close}>Track order</Link>
      </nav>
    </div>
  );
}

function SearchOverlay() {
  const open = useShop((s) => s.searchOpen);
  const close = useShop((s) => s.closeSearch);
  const ref = useRef<HTMLDivElement>(null);
  const [q, setQ] = useState("");
  useOverlay(open, close, ref);
  useEffect(() => {
    if (!open) setQ("");
  }, [open]);
  const results = searchAll(q);
  const suggestions = ["Mugs", "Vases", "Planters", "Firing", "Bowls"];
  return (
    <div
      ref={ref}
      inert={open ? undefined : true}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      className={`fixed inset-0 z-50 bg-ivory/96 backdrop-blur-md transition ${open ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <div className="wrap pt-8">
        <div className="flex items-start gap-3">
          <label className="field flex-1">
            <span className="sr-only">Search pieces and journal</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search pieces and notes"
              className="title border-0 border-b border-line bg-transparent px-0"
            />
          </label>
          <button type="button" className="icon-btn" aria-label="Close search" onClick={close}>
            <X />
          </button>
        </div>
        {!q.trim() ? (
          <div className="mt-8">
            <p className="eyebrow text-muted">Suggestions</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button key={s} type="button" className="btn btn-ghost" onClick={() => setQ(s)}>
                  {s}
                </button>
              ))}
            </div>
            <p className="eyebrow mt-10 text-muted">In the studio</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {products.filter((p) => p.featured).slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <Link to="/product/$slug" params={{ slug: p.slug }} onClick={close} className="flex items-center gap-3">
                    <img src={p.images[0]} alt="" className="size-16 object-cover" />
                    <span>
                      <span className="block font-serif text-xl">{p.name}</span>
                      <span className="text-sm text-muted">{money(p.price)}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : results.products.length + results.articles.length === 0 ? (
          <p className="mt-10 text-muted">Nothing under that name yet. Try mug, vase, or firing.</p>
        ) : (
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <p className="eyebrow text-muted">Pieces</p>
              <ul className="mt-3 space-y-3">
                {results.products.slice(0, 6).map((p) => (
                  <li key={p.slug}>
                    <Link to="/product/$slug" params={{ slug: p.slug }} onClick={close} className="flex items-center gap-3">
                      <img src={p.images[0]} alt="" className="size-14 object-cover" />
                      <span>
                        <span className="block">{p.name}</span>
                        <span className="text-sm text-muted">{money(p.price)}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-muted">Journal</p>
              <ul className="mt-3 space-y-3">
                {results.articles.map((a) => (
                  <li key={a.slug}>
                    <Link to="/journal/$slug" params={{ slug: a.slug }} onClick={close} className="block">
                      <span className="font-serif text-xl">{a.title}</span>
                      <span className="mt-1 block text-sm text-muted">{a.date}</span>
                    </Link>
                  </li>
                ))}
                {results.articles.length === 0 ? <li className="text-sm text-muted">No notes match.</li> : null}
              </ul>
            </div>
          </div>
        )}
        {q.trim() ? (
          <Link to="/search" search={{ q }} onClick={close} className="mt-8 inline-flex items-center gap-2 text-sm">
            View all results <ArrowRight size={16} />
          </Link>
        ) : null}
        <p className="sr-only">{articles.length} notes in the journal</p>
      </div>
    </div>
  );
}

function CartDrawer() {
  const open = useShop((s) => s.cartOpen);
  const close = useShop((s) => s.closeCart);
  const cart = useShop((s) => s.cart);
  const setQty = useShop((s) => s.setQty);
  const remove = useShop((s) => s.removeFromCart);
  const ref = useRef<HTMLDivElement>(null);
  useOverlay(open, close, ref);
  const sub = selectSubtotal(cart);
  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <button type="button" className={`absolute inset-0 bg-dark/40 transition ${open ? "opacity-100" : "opacity-0"}`} aria-label="Close cart" onClick={close} tabIndex={open ? 0 : -1} />
      <div
        ref={ref}
        inert={open ? undefined : true}
        role="dialog"
        aria-modal="true"
        aria-label="Cart"
        className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="font-serif text-2xl">Your shelf</h2>
          <button type="button" className="icon-btn" aria-label="Close cart" onClick={close}>
            <X />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <p className="text-muted">Your cart is empty. The archive is still open.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((line) => {
                const product = products.find((p) => p.slug === line.slug);
                if (!product) return null;
                return (
                  <li key={line.slug} className="flex gap-3">
                    <img src={product.images[0]} alt="" className="size-20 object-cover" />
                    <div className="flex-1">
                      <Link to="/product/$slug" params={{ slug: product.slug }} onClick={close} className="font-serif text-xl">
                        {product.name}
                      </Link>
                      <p className="text-sm text-muted">{money(product.price)}</p>
                      <div className="mt-2 flex items-center gap-3">
                        <div className="inline-flex border border-line">
                          <button type="button" className="size-9" aria-label={`Decrease ${product.name}`} onClick={() => setQty(product.slug, line.qty - 1)} disabled={line.qty <= 1}>−</button>
                          <span className="grid w-6 place-items-center text-sm">{line.qty}</span>
                          <button type="button" className="size-9" aria-label={`Increase ${product.name}`} onClick={() => setQty(product.slug, line.qty + 1)} disabled={line.qty >= product.stock}>+</button>
                        </div>
                        <button type="button" className="text-xs tracking-wide text-muted underline" onClick={() => remove(product.slug)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="border-t border-line px-5 py-4">
          <p className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{money(sub)}</span>
          </p>
          <p className="mt-1 text-xs text-muted">Shipping is calculated at checkout.</p>
          <Link to="/cart" onClick={close} className="btn btn-ghost mt-4 w-full">
            Review cart
          </Link>
          <Link to="/checkout" onClick={close} className={`btn btn-primary mt-2 w-full ${cart.length === 0 ? "pointer-events-none opacity-40" : ""}`} aria-disabled={cart.length === 0}>
            Checkout <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const closeOverlays = useShop((s) => s.closeOverlays);
  const setHydrated = useShop((s) => s.setHydrated);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void Promise.resolve(useShop.persist.rehydrate()).finally(() => {
      setHydrated();
      setReady(true);
    });
  }, [setHydrated]);

  useEffect(() => {
    closeOverlays();
  }, [pathname, closeOverlays]);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <svg className="grain" aria-hidden="true">
        <filter id="clay-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#clay-grain)" />
      </svg>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
      <MobileMenu />
      {ready ? <Toaster position="bottom-center" toastOptions={{ className: "clay-toast" }} /> : null}
    </div>
  );
}
