import PageHero from '@/components/PageHero'
import { Reveal, Stagger, StaggerItem } from '@/components/Motion'

const faqs = [
  { q: 'Are your pieces food-safe?', a: 'Every glazed piece is lead-free, dishwasher-safe, and tested for daily use with food and drink.' },
  { q: 'How do I care for handmade ceramics?', a: 'Hand-wash for longevity, avoid sudden temperature changes, and store gently. See our Care Guide for details.' },
  { q: 'Do you accept custom orders?', a: 'Yes — reach out with your idea via Contact and we\'ll share timelines and pricing within 48 hours.' },
  { q: 'Where do you ship?', a: 'Across India and to select international destinations. Full details on our Shipping page.' },
  { q: 'Can I return a piece?', a: 'Absolutely. Unused items can be returned within 14 days. See our Returns page for the process.' },
  { q: 'Why does my piece look different from the photo?', a: 'Because each is hand-made and kiln-fired, subtle variations in color, texture, and glaze are natural — and celebrated.' },
  { q: 'Can I visit the studio?', a: 'Yes. Book a visit through the Contact page.' },
  { q: 'How long do orders take?', a: 'In-stock pieces ship within 3-5 days. Custom pieces take 3-6 weeks depending on complexity.' },
]

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Help Centre"
        title="Frequently Asked."
        subtitle="Everything you might want to know about our pieces, our process, and how we care for you as a customer."
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Stagger className="divide-y divide-clay-400/25 border-y border-clay-400/25" gap={0.05}>
            {faqs.map((f, i) => (
              <StaggerItem key={i}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-serif text-xl text-ink-800">{f.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-clay-500/40 text-clay-600 transition group-open:rotate-45">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{f.a}</p>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
