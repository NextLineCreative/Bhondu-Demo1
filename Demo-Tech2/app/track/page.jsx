'use client'
import PageHero from '@/components/PageHero'
import { Reveal } from '@/components/Motion'
import { Icon } from '@/components/Icons'
import { useState } from 'react'

const stages = [
  { title: 'Order placed', desc: 'We\'ve received your order and started preparing it.' },
  { title: 'Being packed', desc: 'Hand-wrapping in progress at the studio.' },
  { title: 'In transit', desc: 'On its way to you via our courier partner.' },
  { title: 'Delivered', desc: 'Enjoy your new piece.' },
]

export default function TrackPage() {
  const [orderId, setOrderId] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Track Order"
        title="Where is it now?"
        subtitle="Enter your order number and email to see the current status of your parcel."
      />

      <section className="py-14">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
              className="rounded-sm bg-ivory-50 p-8 paper-edge"
            >
              <label className="block">
                <span className="text-[11px] font-semibold uppercase tracking-widest-2 text-clay-600">Order Number</span>
                <input
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  required
                  placeholder="e.g. CP-2024-00423"
                  className="mt-2 w-full border-b border-clay-500/40 bg-transparent py-2 text-base focus:border-rust-500 focus:outline-none"
                />
              </label>
              <label className="mt-6 block">
                <span className="text-[11px] font-semibold uppercase tracking-widest-2 text-clay-600">Email Address</span>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full border-b border-clay-500/40 bg-transparent py-2 text-base focus:border-rust-500 focus:outline-none"
                />
              </label>
              <button type="submit" className="btn-primary mt-8">
                Track Order <Icon name="arrow" className="h-3.5 w-3.5" />
              </button>
            </form>
          </Reveal>

          {submitted && (
            <Reveal delay={0.15}>
              <div className="mt-10">
                <p className="text-[11px] font-semibold uppercase tracking-widest-2 text-clay-600">Status for {orderId || 'CP-2024-00423'}</p>
                <ol className="mt-6 space-y-6">
                  {stages.map((s, i) => (
                    <li key={s.title} className="flex gap-4">
                      <span className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-semibold ${i < 3 ? 'bg-forest-600 text-ivory-50' : 'border border-clay-500/40 text-clay-500'}`}>
                        {i < 3 ? '✓' : i + 1}
                      </span>
                      <div>
                        <p className="font-serif text-lg text-ink-800">{s.title}</p>
                        <p className="text-sm text-ink-700">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
