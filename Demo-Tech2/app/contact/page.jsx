import Link from 'next/link'
import { Icon } from '@/components/Icons'
import IMG from '@/lib/img'

const C = {
  studio: IMG.studioHero,
  door: IMG.door,
  detail: IMG.studioDetail,
  vessel: IMG.heroPot,
  hands: IMG.workshop,
}

const infoCards = [
  { icon: 'pin', title: 'The Studio', lines: ['14 Terracotta Lane,', 'Auroville, TN 605101'] },
  { icon: 'mail', title: 'Write to Us', lines: ['hello@claypot.studio'] },
  { icon: 'phone', title: 'Speak with Us', lines: ['+91 98765 43210'] },
]

const faqs = [
  { q: 'Are your pieces food-safe?', a: 'Yes — every glazed piece is lead-free, dishwasher-safe, and tested for daily use.' },
  { q: 'Do you take custom orders?', a: 'We do. Reach out with your idea and we\'ll share timelines and pricing.' },
  { q: 'Where do you ship?', a: 'India and select international destinations. Each order is packed by hand with care.' },
  { q: 'Can I visit the studio?', a: 'Absolutely. Book a visit through the form below or drop us a note.' },
]

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream-100 pt-10 pb-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr,1.1fr] lg:px-10">
          <div className="pt-4">
            <p className="text-[10px] uppercase tracking-widest-2 text-ink-800">Say Hello</p>
            <h1 className="display mt-6 text-6xl leading-[0.95] text-ink-800 lg:text-8xl">A LETTER,<br/>A VISIT,<br/>A CONVERSATION.</h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700/85">
              Every piece begins with a story. If you have one to share, a question to ask, or a project in mind — we'd love to hear from you.
            </p>
          </div>
          <div className="relative">
            <img src={C.studio} alt="Studio door" className="h-[500px] w-full rounded-sm object-cover paper-edge" />
            <p className="hand absolute -top-2 right-6 rotate-[-3deg] text-xl text-ink-800">The door is always open.</p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3 lg:px-10">
          {infoCards.map((c, i) => (
            <div key={c.title} className="group relative overflow-hidden rounded-sm bg-cream-50 p-6 paper-edge">
              <img src={[C.vessel, C.detail, C.hands][i]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-0 transition group-hover:opacity-20" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-rust-500 text-cream-50">
                  <Icon name={c.icon} className="h-5 w-5" />
                </div>
                <p className="mt-4 text-[10px] uppercase tracking-widest-2 text-clay-600">{c.title}</p>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 text-lg font-serif text-ink-800">{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STUDIO GALLERY */}
      <section className="py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 md:grid-cols-4 lg:px-10">
          <img src={C.studio} alt="Studio corner" className="h-56 w-full rounded-sm object-cover paper-edge" />
          <img src={C.detail} alt="Finished pieces" className="h-56 w-full rounded-sm object-cover paper-edge mt-6" />
          <img src={C.hands} alt="Hands at work" className="h-56 w-full rounded-sm object-cover paper-edge" />
          <img src={C.vessel} alt="Featured vessel" className="h-56 w-full rounded-sm object-cover paper-edge mt-6" />
        </div>
      </section>

      {/* FORM + IMAGE */}
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative">
            <img src={C.door} alt="Studio corner" className="h-[560px] w-full rounded-sm object-cover paper-edge" />
            <p className="hand absolute left-4 bottom-4 rotate-[-2deg] text-lg text-cream-50">Studio No. 04<br/>Auroville</p>
          </div>
          <div>
            <p className="eyebrow">Send a Message</p>
            <h2 className="display mt-3 text-5xl leading-tight text-ink-800">Let's talk.</h2>
            <p className="mt-3 max-w-md text-sm text-ink-700/80">Fill in the form below and we'll write back within 48 hours.</p>

            <form className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] uppercase tracking-widest-2 text-ink-800/70">Name</span>
                  <input type="text" placeholder="Your name" className="mt-1 w-full border-b border-clay-500/40 bg-transparent py-2 text-sm focus:border-rust-500 focus:outline-none" />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-widest-2 text-ink-800/70">Email</span>
                  <input type="email" placeholder="you@example.com" className="mt-1 w-full border-b border-clay-500/40 bg-transparent py-2 text-sm focus:border-rust-500 focus:outline-none" />
                </label>
              </div>
              <label className="block">
                <span className="text-[10px] uppercase tracking-widest-2 text-ink-800/70">Subject</span>
                <select className="mt-1 w-full border-b border-clay-500/40 bg-transparent py-2 text-sm focus:border-rust-500 focus:outline-none">
                  <option>General enquiry</option>
                  <option>Custom order</option>
                  <option>Studio visit</option>
                  <option>Wholesale</option>
                </select>
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-widest-2 text-ink-800/70">Message</span>
                <textarea rows={5} placeholder="Tell us more…" className="mt-1 w-full border-b border-clay-500/40 bg-transparent py-2 text-sm focus:border-rust-500 focus:outline-none" />
              </label>
              <button type="button" className="btn-primary">Send Message <Icon name="arrow" className="h-3.5 w-3.5" /></button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr,1.5fr] lg:px-10">
          <div>
            <p className="eyebrow">Frequently Asked</p>
            <h2 className="display mt-3 text-5xl leading-[0.95] text-ink-800">Good things to know.</h2>
          </div>
          <div className="divide-y divide-clay-400/30 border-y border-clay-400/30">
            {faqs.map((f, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="font-serif text-xl text-ink-800">{f.q}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-clay-500/40 text-clay-600 transition group-open:rotate-45">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-ink-700/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* MAP CTA */}
      <section className="bg-moss-800 py-16 text-cream-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-widest-2 text-cream-100/60">Visit the Studio</p>
            <h2 className="display mt-2 text-3xl">14 Terracotta Lane, Auroville.</h2>
            <p className="mt-2 text-sm text-cream-100/70">Open Wed – Sun · 10:00 to 18:00</p>
          </div>
          <button className="btn-primary bg-cream-50 text-ink-800 hover:bg-cream-100">Get Directions <Icon name="arrow" className="h-3.5 w-3.5" /></button>
        </div>
      </section>
    </>
  )
}
