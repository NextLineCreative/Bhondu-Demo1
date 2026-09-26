import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { articles, faqs, getArticle, img } from "@/data/catalog";
import { Field, NotFoundView, PageHero, ThemeSelect, emailOk } from "@/components/site/ui";

export function AboutScreen() {
  return (
    <div>
      <section className="wrap grid items-center gap-8 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-muted">About the studio</p>
          <h1 className="title mt-3">Clay, fire, and the patience between them.</h1>
          <p className="mt-4 max-w-prose text-muted">
            Clay Pot is a small ceramics studio making vessels for daily use. We throw stoneware and terracotta, fire them honestly, and leave the marks of the hand where they belong.
          </p>
        </div>
        <img src={img.wheel} alt="A potter shaping clay on the wheel" className="h-80 w-full object-cover" />
      </section>
      <section className="bg-paper">
        <div className="wrap grid gap-8 py-14 md:grid-cols-2">
          <div>
            <h2 className="subhead">Philosophy</h2>
            <p className="mt-3 text-muted">Earth. Fire. Hands. We do not chase a perfect match set. A cup should feel good at seven in the morning, and a bowl should be steady when it is full.</p>
          </div>
          <img src={img.hands} alt="Hands finishing the rim of a clay bowl" className="h-64 w-full object-cover" />
        </div>
      </section>
      <section className="wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-3xl">Materials</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">Stoneware for food, terracotta for planters and dry vessels. Every piece says which it is.</p>
        </div>
        <div>
          <h2 className="font-serif text-3xl">Process</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">Clay is wedged, thrown, dried slowly, and fired twice when it needs a glaze. Cracked work stays in the studio.</p>
        </div>
        <div>
          <h2 className="font-serif text-3xl">Sustainability</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">We make fewer objects, fire full kilns, and design pieces meant to be used for years rather than replaced next season.</p>
        </div>
      </section>
      <section className="bg-forest text-cream">
        <div className="wrap flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="title">See the work on a shelf.</h2>
            <p className="mt-2 max-w-md text-cream/75">The archive is the studio, photographed in the same light we work in.</p>
          </div>
          <Link to="/shop" className="btn btn-light">Shop the collection</Link>
        </div>
      </section>
      <img src={img.home} alt="A quiet table with a handmade vase" className="h-72 w-full object-cover" />
    </div>
  );
}

export function JournalScreen() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const cats = ["All", ...new Set(articles.map((a) => a.category))];
  const list = articles.filter((a) => {
    const okCat = cat === "All" || a.category === cat;
    const okQ = !q.trim() || `${a.title} ${a.excerpt}`.toLowerCase().includes(q.trim().toLowerCase());
    return okCat && okQ;
  });
  const featured = articles[0];
  return (
    <div className="wrap py-10 pb-16">
      <PageHero eyebrow="Journal" title="Notes from the studio" lede="Short essays on clay, firing, and living with fewer objects." />
      {featured ? (
        <Link to="/journal/$slug" params={{ slug: featured.slug }} className="group grid overflow-hidden bg-paper md:grid-cols-2">
          <img src={featured.image} alt="" className="zoom-img h-64 w-full object-cover md:h-full" />
          <span className="p-6">
            <span className="eyebrow text-muted">Featured · {featured.category}</span>
            <span className="title mt-3 block">{featured.title}</span>
            <span className="mt-3 block text-muted">{featured.excerpt}</span>
          </span>
        </Link>
      ) : null}
      <div className="mt-8 flex flex-wrap gap-3">
        <label className="field min-w-48 flex-1">
          <span className="field-label">Search notes</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
        <div className="flex flex-wrap items-end gap-2">
          {cats.map((c) => (
            <button key={c} type="button" className={`btn ${cat === c ? "btn-primary" : "btn-ghost"}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
      </div>
      {list.length === 0 ? <p className="mt-8 text-muted">No notes match.</p> : null}
      <ul className="mt-8 grid gap-6 md:grid-cols-3">
        {list.map((a) => (
          <li key={a.slug}>
            <Link to="/journal/$slug" params={{ slug: a.slug }} className="group block">
              <img src={a.image} alt="" className="zoom-img aspect-[4/3] w-full object-cover" />
              <p className="eyebrow mt-3 text-muted">{a.category} · {a.date}</p>
              <h2 className="font-serif text-2xl">{a.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ArticleScreen({ slug }: { slug: string }) {
  const article = getArticle(slug);
  if (!article) return <NotFoundView title="Note not found" />;
  const more = articles.filter((a) => a.slug !== slug).slice(0, 2);
  return (
    <article className="wrap max-w-3xl py-10 pb-16">
      <p className="eyebrow text-muted">{article.category} · {article.date}</p>
      <h1 className="title mt-3">{article.title}</h1>
      <img src={article.image} alt="" className="mt-6 aspect-[16/9] w-full object-cover" />
      <div className="mt-6 space-y-4 text-base leading-relaxed">
        {article.paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <h2 className="subhead mt-12">More notes</h2>
      <ul className="mt-4 space-y-2">
        {more.map((a) => (
          <li key={a.slug}>
            <Link to="/journal/$slug" params={{ slug: a.slug }} className="font-serif text-2xl hover:text-clay">{a.title}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ContactScreen() {
  const [form, setForm] = useState({ name: "", email: "", subject: "Order", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!emailOk(form.email)) next.email = "Enter a valid email.";
    if (form.message.trim().length < 8) next.message = "Write a short message.";
    setErrors(next);
    if (Object.keys(next).length) {
      setDone(false);
      return;
    }
    const key = "claypot-notes";
    const prev = JSON.parse(localStorage.getItem(key) || "[]") as unknown[];
    localStorage.setItem(key, JSON.stringify([...prev, { ...form, at: new Date().toISOString() }]));
    setDone(true);
    setForm({ name: "", email: "", subject: "Order", message: "" });
  }

  return (
    <div className="wrap grid gap-10 py-12 lg:grid-cols-2">
      <div>
        <PageHero eyebrow="Contact" title="Write to the studio" lede="Questions about a piece, a firing, or a table you are setting." />
        <p className="text-sm text-muted">hello@claypot.in · +91 141 406 2180</p>
        <p className="mt-1 text-sm text-muted">Studio 12, Bapu Bazaar, Jaipur, Rajasthan 302003</p>
        <p className="mt-3 text-sm text-muted">This form keeps your note on this device. It does not send email.</p>
        <p className="mt-3 text-sm"><Link to="/faqs" className="underline">Read the FAQs</Link></p>
        <div className="mt-6 flex gap-4 text-sm">
          <a href="https://www.instagram.com/" className="underline">Instagram</a>
          <a href="https://www.pinterest.com/" className="underline">Pinterest</a>
          <a href="https://www.youtube.com/" className="underline">YouTube</a>
        </div>
      </div>
      <form className="grid gap-4" onSubmit={submit}>
        <Field label="Name" error={errors.name}><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></Field>
        <Field label="Email" error={errors.email}><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></Field>
        <ThemeSelect
          label="Subject"
          value={form.subject}
          onChange={(subject) => setForm({ ...form, subject })}
          options={["Order", "Care", "Wholesale", "Press", "Other"].map((s) => ({ value: s, label: s }))}
        />
        <Field label="Message" error={errors.message}><textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></Field>
        <button type="submit" className="btn btn-primary w-fit">Send note</button>
        {done ? <p className="text-sm text-muted">Saved on this device. Nothing was emailed.</p> : null}
      </form>
    </div>
  );
}

export function FaqScreen() {
  return (
    <div className="wrap max-w-3xl py-10 pb-16">
      <PageHero eyebrow="Customer care" title="Questions we hear often" />
      {faqs.map((item) => (
        <details key={item.q} className="acc">
          <summary>{item.q}</summary>
          <p className="acc-body">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ShippingScreen() {
  return (
    <div className="wrap max-w-3xl py-10 pb-16">
      <PageHero eyebrow="Customer care" title="Shipping & delivery" lede="Checkout estimates ₹199 within India, or complimentary shipping over ₹3,999." />
      <div className="space-y-4 text-muted">
        <p>In a working studio, pieces are wrapped and handed to a carrier after the clay has cooled and been checked. This website is a demo, so the shipping line is an estimate only. No parcel leaves the browser.</p>
        <p>Food-safe stoneware and decorative terracotta travel the same way on the form. The total updates in the cart and at checkout before you place a demo order.</p>
        <p>Track Order looks up a demo number saved on this device. It will not show a carrier status.</p>
      </div>
    </div>
  );
}

export function ReturnsScreen() {
  return (
    <div className="wrap max-w-3xl py-10 pb-16">
      <PageHero eyebrow="Customer care" title="Returns & exchanges" lede="Unused pieces, within 14 days, is the policy we would keep in a real studio." />
      <div className="space-y-4 text-muted">
        <p>Because nothing is shipped from this demo, there is no return label and no refund to process. Orders stay in this browser so you can review what a confirmation looks like.</p>
        <p>If a real piece arrived damaged, we would replace it. Variation in the rim, speckle, or fire color is not damage — it is how the work is made.</p>
      </div>
    </div>
  );
}

export function CareScreen() {
  return (
    <div className="wrap max-w-3xl py-10 pb-16">
      <PageHero eyebrow="Customer care" title="Care guide" lede="Clay is durable when you treat heat and water with a little respect." />
      <div className="space-y-4 text-muted">
        <p>Food-safe glazed stoneware can be washed by hand or on a gentle dishwasher cycle. Avoid moving a piece from a cold shelf straight into a hot oven.</p>
        <p>Unglazed terracotta is porous. Wipe it with a soft dry cloth. Do not store water in it, and do not leave it outdoors in a hard frost.</p>
        <p>Painted studio pieces, including the Kinship Vessel, are for looking at. Dust them. Do not soak them.</p>
      </div>
    </div>
  );
}

export function PrivacyScreen() {
  return (
    <div className="wrap max-w-3xl py-10 pb-16">
      <PageHero eyebrow="Studio" title="Privacy policy" lede="This demo keeps what you type in your browser. It does not run an account server." />
      <div className="space-y-4 text-muted">
        <p>Cart, wishlist, demo profile, demo orders, newsletter notes, and contact notes are stored in localStorage on your device. Clearing site data removes them.</p>
        <p>The payment step does not save card numbers. We do not sell data, because we do not collect it on a server.</p>
        <p>If this shop were connected to a real checkout, this page would name the payment provider and the data it receives. It is not.</p>
      </div>
    </div>
  );
}

export function TermsScreen() {
  return (
    <div className="wrap max-w-3xl py-10 pb-16">
      <PageHero eyebrow="Studio" title="Terms & conditions" lede="A preview of a ceramics shop, not a contract to deliver clay." />
      <div className="space-y-4 text-muted">
        <p>Prices are sample prices in US dollars. Placing a demo order creates a confirmation in your browser and does not form a sale.</p>
        <p>Product descriptions distinguish food-safe glaze from decorative clay. Please read them before imagining a piece at the table.</p>
        <p>Journal essays are original to this studio site. Photographs are made for the shop and are part of the preview.</p>
      </div>
    </div>
  );
}
