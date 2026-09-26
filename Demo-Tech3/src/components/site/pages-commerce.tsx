import { Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { getProduct, searchAll } from "@/data/catalog";
import { FREE_AT, money, shippingFor } from "@/lib/money";
import { notifyCart, notifyWish } from "@/lib/notify";
import { selectSubtotal, useShop, type Order } from "@/lib/shop-store";
import { EmptyState, Field, PageHero, ThemeSelect, emailOk } from "@/components/site/ui";

const countries = ["India", "United States", "United Kingdom", "United Arab Emirates", "Singapore", "Australia", "Canada", "Germany", "France", "Japan"];

export function CartScreen() {
  const hydrated = useShop((s) => s.hydrated);
  const cart = useShop((s) => s.cart);
  const setQty = useShop((s) => s.setQty);
  const remove = useShop((s) => s.removeFromCart);
  const clear = useShop((s) => s.clearCart);
  if (!hydrated) return <p className="wrap py-20 text-muted">Opening your shelf…</p>;
  const sub = selectSubtotal(cart);
  const ship = shippingFor(sub);
  if (cart.length === 0) {
    return (
      <EmptyState
        eyebrow="Cart"
        title="The shelf is clear"
        text="Nothing is waiting to be wrapped. The archive is a good place to start."
        action={<Link to="/shop" className="btn btn-primary">Shop the collection</Link>}
      />
    );
  }
  return (
    <div className="wrap grid gap-10 py-10 lg:grid-cols-[1fr_20rem]">
      <div>
        <h1 className="title">Your cart</h1>
        <ul className="mt-6 divide-y divide-line">
          {cart.map((line) => {
            const product = getProduct(line.slug);
            if (!product) return null;
            return (
              <li key={line.slug} className="flex gap-4 py-4">
                <img src={product.images[0]} alt="" className="size-24 object-cover" />
                <div className="flex-1">
                  <Link to="/product/$slug" params={{ slug: product.slug }} className="font-serif text-2xl">{product.name}</Link>
                  <p className="text-sm text-muted">{money(product.price)}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="inline-flex border border-line">
                      <button type="button" className="size-10" aria-label="Decrease" onClick={() => setQty(product.slug, line.qty - 1)} disabled={line.qty <= 1}>−</button>
                      <span className="grid w-8 place-items-center">{line.qty}</span>
                      <button type="button" className="size-10" aria-label="Increase" onClick={() => setQty(product.slug, line.qty + 1)} disabled={line.qty >= product.stock}>+</button>
                    </div>
                    <button type="button" className="text-sm text-muted underline" onClick={() => remove(product.slug)}>Remove</button>
                  </div>
                </div>
                <p>{money(product.price * line.qty)}</p>
              </li>
            );
          })}
        </ul>
        <button type="button" className="mt-4 text-sm underline" onClick={clear}>Clear cart</button>
      </div>
      <aside className="h-fit border border-line bg-white p-5">
        <h2 className="font-serif text-2xl">Summary</h2>
        <p className="mt-4 flex justify-between text-sm"><span>Subtotal</span><span>{money(sub)}</span></p>
        <p className="mt-2 flex justify-between text-sm"><span>Shipping</span><span>{ship === 0 ? "Complimentary" : money(ship)}</span></p>
        <p className="mt-3 flex justify-between border-t border-line pt-3"><span>Estimated total</span><span>{money(sub + ship)}</span></p>
        <p className="mt-2 text-xs text-muted">Complimentary shipping from {money(FREE_AT)}.</p>
        <Link to="/checkout" className="btn btn-primary mt-5 w-full">Checkout</Link>
      </aside>
    </div>
  );
}

type Details = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postal: string;
  country: string;
};

const emptyDetails: Details = { name: "", email: "", phone: "", address: "", city: "", state: "", postal: "", country: "India" };

export function CheckoutScreen() {
  const hydrated = useShop((s) => s.hydrated);
  const cart = useShop((s) => s.cart);
  const account = useShop((s) => s.account);
  const place = useShop((s) => s.placeOrder);
  const navigate = useNavigate();
  const [step, setStep] = useState<"details" | "pay">("details");
  const [details, setDetails] = useState<Details>(emptyDetails);
  const [errors, setErrors] = useState<Partial<Record<keyof Details, string>>>({});
  const [card, setCard] = useState({ name: "", number: "", expiry: "", cvc: "" });
  const [cardError, setCardError] = useState("");
  const [addressId, setAddressId] = useState("");

  if (!hydrated) return <p className="wrap py-20 text-muted">Preparing checkout…</p>;
  if (cart.length === 0) {
    return (
      <EmptyState eyebrow="Checkout" title="Nothing to wrap" text="Add a piece before checkout." action={<Link to="/shop" className="btn btn-primary">Browse the archive</Link>} />
    );
  }
  const sub = selectSubtotal(cart);
  const ship = shippingFor(sub);

  function set<K extends keyof Details>(key: K, value: Details[K]) {
    setDetails((d) => ({ ...d, [key]: value }));
  }

  function validateDetails() {
    const next: Partial<Record<keyof Details, string>> = {};
    if (details.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!emailOk(details.email)) next.email = "Enter a valid email.";
    if (details.phone.replace(/\D/g, "").length < 8) next.phone = "Enter a phone number.";
    if (details.address.trim().length < 4) next.address = "Enter a street address.";
    if (details.city.trim().length < 2) next.city = "Enter a city.";
    if (details.state.trim().length < 2) next.state = "Enter a state or region.";
    if (details.postal.trim().length < 4) next.postal = "Enter a postal code.";
    if (!details.country) next.country = "Choose a country.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function continuePay(e: FormEvent) {
    e.preventDefault();
    if (validateDetails()) setStep("pay");
  }

  function pay(e: FormEvent) {
    e.preventDefault();
    const digits = card.number.replace(/\D/g, "");
    const exp = /^(\d{2})\/(\d{2})$/.exec(card.expiry.trim());
    const month = exp ? Number(exp[1]) : 0;
    if (card.name.trim().length < 2 || (digits.length !== 15 && digits.length !== 16) || !exp || month < 1 || month > 12 || card.cvc.replace(/\D/g, "").length < 3) {
      setCardError("Check the name, card number, expiry (MM/YY), and CVC. This is a demo — any plausible number is accepted, and nothing is charged.");
      return;
    }
    const order = place(details);
    if (order) void navigate({ to: "/order/$id", params: { id: order.id } });
  }

  return (
    <div className="wrap grid gap-10 py-10 lg:grid-cols-[1fr_20rem]">
      <div>
        <h1 className="title">Checkout</h1>
        <p className="mt-2 max-w-lg text-sm text-muted">Demo checkout. No payment is processed and nothing is shipped.</p>
        {step === "details" ? (
          <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={continuePay}>
            {account && account.addresses.length > 0 ? (
              <div className="sm:col-span-2">
                <ThemeSelect
                  label="Saved address"
                  value={addressId}
                  onChange={(id) => {
                    const found = account.addresses.find((a) => a.id === id);
                    if (!found) return;
                    setAddressId(id);
                    setDetails((d) => ({
                      ...d,
                      name: account.name,
                      email: account.email,
                      phone: account.phone || d.phone,
                      address: found.line,
                      city: found.city,
                      state: found.state,
                      postal: found.postal,
                      country: found.country,
                    }));
                  }}
                  options={[
                    { value: "", label: "Choose" },
                    ...account.addresses.map((a) => ({ value: a.id, label: a.label })),
                  ]}
                />
              </div>
            ) : null}
            <Field label="Full name" error={errors.name}><input value={details.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" /></Field>
            <Field label="Email" error={errors.email}><input type="email" value={details.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" /></Field>
            <Field label="Mobile" error={errors.phone}><input value={details.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" placeholder="+91 98765 43210" inputMode="tel" /></Field>
            <div>
              <ThemeSelect
                label="Country"
                value={details.country}
                onChange={(country) => set("country", country)}
                options={countries.map((c) => ({ value: c, label: c }))}
              />
              {errors.country ? <span className="field-error">{errors.country}</span> : null}
            </div>
            <Field label="Address" error={errors.address}><input value={details.address} onChange={(e) => set("address", e.target.value)} autoComplete="street-address" /></Field>
            <Field label="City" error={errors.city}><input value={details.city} onChange={(e) => set("city", e.target.value)} /></Field>
            <Field label="State" error={errors.state}><input value={details.state} onChange={(e) => set("state", e.target.value)} /></Field>
            <Field label="Postal code" error={errors.postal}><input value={details.postal} onChange={(e) => set("postal", e.target.value)} /></Field>
            <div className="sm:col-span-2">
              <button type="submit" className="btn btn-primary">Continue to demo payment</button>
            </div>
          </form>
        ) : (
          <form className="mt-6 grid max-w-lg gap-4" onSubmit={pay}>
            <p className="text-sm text-muted">Enter any plausible card. We do not store the number and no charge is made.</p>
            <Field label="Name on card"><input value={card.name} onChange={(e) => setCard({ ...card, name: e.target.value })} /></Field>
            <Field label="Card number"><input inputMode="numeric" value={card.number} onChange={(e) => setCard({ ...card, number: e.target.value })} placeholder="4242 4242 4242 4242" /></Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Expiry"><input value={card.expiry} onChange={(e) => setCard({ ...card, expiry: e.target.value })} placeholder="MM/YY" /></Field>
              <Field label="CVC"><input inputMode="numeric" value={card.cvc} onChange={(e) => setCard({ ...card, cvc: e.target.value })} /></Field>
            </div>
            {cardError ? <p className="field-error">{cardError}</p> : null}
            <div className="flex gap-3">
              <button type="button" className="btn btn-ghost" onClick={() => setStep("details")}>Back</button>
              <button type="submit" className="btn btn-primary">Place demo order</button>
            </div>
          </form>
        )}
      </div>
      <OrderSummary />
    </div>
  );
}

function OrderSummary() {
  const cart = useShop((s) => s.cart);
  const sub = selectSubtotal(cart);
  const ship = shippingFor(sub);
  return (
    <aside className="h-fit border border-line bg-white p-5">
      <h2 className="font-serif text-2xl">Order summary</h2>
      <ul className="mt-4 space-y-3">
        {cart.map((line) => {
          const p = getProduct(line.slug);
          if (!p) return null;
          return (
            <li key={line.slug} className="flex justify-between gap-3 text-sm">
              <span>{p.name} × {line.qty}</span>
              <span>{money(p.price * line.qty)}</span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 flex justify-between text-sm"><span>Subtotal</span><span>{money(sub)}</span></p>
      <p className="mt-2 flex justify-between text-sm"><span>Shipping</span><span>{ship === 0 ? "Complimentary" : money(ship)}</span></p>
      <p className="mt-3 flex justify-between border-t border-line pt-3"><span>Total</span><span>{money(sub + ship)}</span></p>
    </aside>
  );
}

export function OrderScreen({ id }: { id: string }) {
  const hydrated = useShop((s) => s.hydrated);
  const order = useShop((s) => s.orders.find((o) => o.id.toLowerCase() === id.toLowerCase()));
  if (!hydrated) return <p className="wrap py-20 text-muted">Finding your order…</p>;
  if (!order) {
    return <EmptyState eyebrow="Order" title="Order not found" text="That number is not in this browser. Demo orders never leave the device." action={<Link to="/track" className="btn btn-ghost">Track an order</Link>} />;
  }
  return <OrderView order={order} />;
}

function OrderView({ order }: { order: Order }) {
  return (
    <div className="wrap max-w-3xl py-12">
      <p className="eyebrow text-muted">Demo order</p>
      <h1 className="title mt-2">Thank you, {order.name.split(" ")[0]}.</h1>
      <p className="mt-3 text-muted">Order {order.id} is saved in this browser. No payment was taken and nothing will be shipped.</p>
      <ul className="mt-8 divide-y divide-line">
        {order.items.map((item) => (
          <li key={item.slug} className="flex items-center gap-4 py-3">
            <img src={item.image} alt="" className="size-16 object-cover" />
            <span className="flex-1">{item.name} × {item.qty}</span>
            <span>{money(item.price * item.qty)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex justify-between text-sm"><span>Shipping</span><span>{order.shipping === 0 ? "Complimentary" : money(order.shipping)}</span></p>
      <p className="mt-2 flex justify-between"><span>Total</span><span>{money(order.total)}</span></p>
      <p className="mt-4 text-sm text-muted">{order.address}, {order.city}, {order.state} {order.postal}, {order.country}</p>
      <Link to="/shop" className="btn btn-primary mt-8">Continue browsing</Link>
    </div>
  );
}

export function WishlistScreen() {
  const hydrated = useShop((s) => s.hydrated);
  const slugs = useShop((s) => s.wishlist);
  const toggle = useShop((s) => s.toggleWish);
  const add = useShop((s) => s.addToCart);
  if (!hydrated) return <p className="wrap py-20 text-muted">Opening your wishlist…</p>;
  const items = slugs.map((s) => getProduct(s)).filter((p) => p !== undefined);
  if (items.length === 0) {
    return <EmptyState eyebrow="Wishlist" title="Nothing saved yet" text="Hearts on the shop will keep pieces here, on this device." action={<Link to="/shop" className="btn btn-primary">Shop the collection</Link>} />;
  }
  return (
    <div className="wrap py-10">
      <PageHero eyebrow="Saved" title="Wishlist" lede="Kept in this browser. Move a piece to the cart when you are ready." />
      <ul className="divide-y divide-line">
        {items.map((p) => (
          <li key={p.slug} className="flex flex-wrap items-center gap-4 py-4">
            <img src={p.images[0]} alt="" className="size-20 object-cover" />
            <div className="min-w-40 flex-1">
              <Link to="/product/$slug" params={{ slug: p.slug }} className="font-serif text-2xl">{p.name}</Link>
              <p className="text-sm text-muted">{money(p.price)}</p>
            </div>
            <button type="button" className="btn btn-primary" disabled={p.stock <= 0} onClick={() => notifyCart(add(p.slug, 1))}>Move to cart</button>
            <button type="button" className="btn btn-ghost" onClick={() => notifyWish(toggle(p.slug))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SearchScreen({ q }: { q: string }) {
  const navigate = useNavigate();
  const results = searchAll(q);
  return (
    <div className="wrap py-10">
      <PageHero eyebrow="Search" title="Find a piece" lede="Search the archive and the studio notes." />
      <label className="field max-w-xl">
        <span className="field-label">Query</span>
        <input value={q} onChange={(e) => void navigate({ to: "/search", search: { q: e.target.value } })} />
      </label>
      {!q.trim() ? <p className="mt-8 text-muted">Try mug, kiln, or planter.</p> : null}
      {q.trim() && results.products.length + results.articles.length === 0 ? (
        <p className="mt-8 text-muted">No results for “{q}”.</p>
      ) : null}
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="eyebrow text-muted">Pieces</h2>
          <ul className="mt-4 space-y-3">
            {results.products.map((p) => (
              <li key={p.slug}>
                <Link to="/product/$slug" params={{ slug: p.slug }} className="flex items-center gap-3">
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
        <div>
          <h2 className="eyebrow text-muted">Journal</h2>
          <ul className="mt-4 space-y-3">
            {results.articles.map((a) => (
              <li key={a.slug}>
                <Link to="/journal/$slug" params={{ slug: a.slug }} className="font-serif text-2xl">{a.title}</Link>
                <p className="text-sm text-muted">{a.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function AccountScreen() {
  const account = useShop((s) => s.account);
  const hydrated = useShop((s) => s.hydrated);
  const [mode, setMode] = useState<"login" | "register" | "forgot">("login");
  const [tab, setTab] = useState<"profile" | "orders" | "addresses">("profile");
  const signIn = useShop((s) => s.signIn);
  const register = useShop((s) => s.register);
  const signOut = useShop((s) => s.signOut);
  const update = useShop((s) => s.updateAccount);
  const reset = useShop((s) => s.resetPassword);
  const addAddress = useShop((s) => s.addAddress);
  const removeAddress = useShop((s) => s.removeAddress);
  const orders = useShop((s) => s.orders);
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "" });
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState({ label: "Home", line: "", city: "", state: "", postal: "", country: "India" });

  if (!hydrated) return <p className="wrap py-20 text-muted">Opening your profile…</p>;

  function onLogin(e: FormEvent) {
    e.preventDefault();
    const result = signIn(form.email, form.password);
    setMessage(result === "ok" ? "" : result === "bad" ? "That password does not match this demo profile." : "No profile in this browser uses that email.");
  }
  function onRegister(e: FormEvent) {
    e.preventDefault();
    if (form.name.trim().length < 2 || !emailOk(form.email) || form.password.length < 6) {
      setMessage("Use a name, a valid email, and a password of at least 6 characters.");
      return;
    }
    const result = register({ name: form.name, email: form.email, password: form.password });
    setMessage(result === "exists" ? "This browser already has a demo profile. Sign in or reset it." : "");
  }
  function onForgot(e: FormEvent) {
    e.preventDefault();
    if (form.password.length < 6) {
      setMessage("Choose a new password of at least 6 characters.");
      return;
    }
    const ok = reset(form.email, form.password);
    setMessage(ok ? "Password updated on this device. No email was sent." : "That email does not match the demo profile.");
  }

  if (!account) {
    return (
      <div className="wrap max-w-lg py-12">
        <PageHero eyebrow="Account" title={mode === "register" ? "Create a profile" : mode === "forgot" ? "Reset password" : "Sign in"} lede="A demo profile stored only in this browser. It is not a secure account." />
        <div className="mb-4 flex gap-3 text-sm">
          <button type="button" className={mode === "login" ? "text-clay" : ""} onClick={() => setMode("login")}>Sign in</button>
          <button type="button" className={mode === "register" ? "text-clay" : ""} onClick={() => setMode("register")}>Register</button>
          <button type="button" className={mode === "forgot" ? "text-clay" : ""} onClick={() => setMode("forgot")}>Forgot password</button>
        </div>
        <form className="grid gap-4" onSubmit={mode === "login" ? onLogin : mode === "register" ? onRegister : onForgot}>
          {mode === "register" ? <Field label="Name"><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></Field> : null}
          <Field label="Email"><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></Field>
          <Field label={mode === "forgot" ? "New password" : "Password"}><input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></Field>
          {mode === "forgot" ? <p className="text-sm text-muted">This changes the password saved in this browser. No email is sent.</p> : null}
          {message ? <p className="text-sm text-clay">{message}</p> : null}
          <button type="submit" className="btn btn-primary w-fit">{mode === "login" ? "Sign in" : mode === "register" ? "Create profile" : "Update password"}</button>
        </form>
      </div>
    );
  }

  return (
    <div className="wrap py-10">
      <PageHero eyebrow="Demo profile" title={`Hello, ${account.name.split(" ")[0]}`} lede="Orders and addresses below live only on this device." />
      <div className="flex flex-wrap gap-3">
        {(["profile", "orders", "addresses"] as const).map((key) => (
          <button key={key} type="button" className={`btn ${tab === key ? "btn-primary" : "btn-ghost"}`} onClick={() => setTab(key)}>{key}</button>
        ))}
        <button type="button" className="btn btn-ghost" onClick={signOut}>Sign out</button>
      </div>
      {tab === "profile" ? (
        <form
          className="mt-6 grid max-w-lg gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            update({ name: form.name || account.name, phone: form.phone || account.phone });
            setMessage("Profile updated on this device.");
          }}
        >
          <Field label="Name"><input defaultValue={account.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></Field>
          <Field label="Email"><input value={account.email} readOnly /></Field>
          <Field label="Phone"><input defaultValue={account.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></Field>
          {message ? <p className="text-sm text-muted">{message}</p> : null}
          <button type="submit" className="btn btn-primary w-fit">Save</button>
        </form>
      ) : null}
      {tab === "orders" ? (
        <ul className="mt-6 space-y-4">
          {orders.filter((o) => o.email.toLowerCase() === account.email).length === 0 ? <li className="text-muted">No demo orders for this email yet.</li> : null}
          {orders.filter((o) => o.email.toLowerCase() === account.email).map((o) => (
            <li key={o.id} className="border border-line p-4">
              <Link to="/order/$id" params={{ id: o.id }} className="font-serif text-2xl">{o.id}</Link>
              <p className="text-sm text-muted">{money(o.total)} · {new Date(o.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : null}
      {tab === "addresses" ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ul className="space-y-3">
            {account.addresses.length === 0 ? <li className="text-muted">No saved addresses.</li> : null}
            {account.addresses.map((a) => (
              <li key={a.id} className="border border-line p-4 text-sm">
                <p className="font-serif text-xl">{a.label}</p>
                <p>{a.line}</p>
                <p>{a.city}, {a.state} {a.postal}</p>
                <p>{a.country}</p>
                <button type="button" className="mt-2 underline" onClick={() => removeAddress(a.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <form
            className="grid gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (address.line.trim().length < 4 || address.city.trim().length < 2) return;
              addAddress(address);
              setAddress({ ...address, line: "", city: "", postal: "" });
            }}
          >
            <Field label="Label"><input value={address.label} onChange={(e) => setAddress({ ...address, label: e.target.value })} /></Field>
            <Field label="Address"><input value={address.line} onChange={(e) => setAddress({ ...address, line: e.target.value })} /></Field>
            <Field label="City"><input value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} /></Field>
            <Field label="State"><input value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} /></Field>
            <Field label="Postal"><input value={address.postal} onChange={(e) => setAddress({ ...address, postal: e.target.value })} /></Field>
            <button type="submit" className="btn btn-primary w-fit">Save address</button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export function TrackScreen() {
  const orders = useShop((s) => s.orders);
  const hydrated = useShop((s) => s.hydrated);
  const [id, setId] = useState("");
  const [tried, setTried] = useState(false);
  const found = orders.find((o) => o.id.toLowerCase() === id.trim().toLowerCase());
  return (
    <div className="wrap max-w-xl py-12">
      <PageHero eyebrow="Customer care" title="Track an order" lede="Demo orders are not with a carrier. Look up a number saved in this browser." />
      <form
        className="grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setTried(true);
        }}
      >
        <Field label="Order number">
          <input value={id} onChange={(e) => setId(e.target.value)} placeholder="CP-XXXXXX" />
        </Field>
        <button type="submit" className="btn btn-primary w-fit">Look up</button>
      </form>
      {!hydrated ? <p className="mt-4 text-sm text-muted">Checking this browser…</p> : null}
      {tried && hydrated && !found ? <p className="mt-4 text-sm text-clay">No demo order with that number on this device.</p> : null}
      {found ? (
        <div className="mt-6">
          <p className="font-serif text-2xl">{found.id}</p>
          <p className="text-sm text-muted">Placed in this browser. Status: recorded, not shipped.</p>
          <p className="mt-2">{money(found.total)}</p>
          <Link to="/order/$id" params={{ id: found.id }} className="mt-3 inline-block underline">View order</Link>
        </div>
      ) : null}
    </div>
  );
}
