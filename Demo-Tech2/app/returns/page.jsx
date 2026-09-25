import PageHero from '@/components/PageHero'
import { Reveal, Stagger, StaggerItem } from '@/components/Motion'

const steps = [
  { n: '01', title: 'Reach out', desc: 'Email us at hello@claypot.studio within 14 days of receiving your order, with a photo of the piece.' },
  { n: '02', title: 'Pack it up', desc: 'Wrap the piece in the original packaging (or something similar). Include a copy of your order confirmation.' },
  { n: '03', title: 'Ship it back', desc: 'We\'ll email you a return label. Drop it at any partner courier point.' },
  { n: '04', title: 'Refund or exchange', desc: 'Once received, we process refunds within 5 business days. Exchanges ship the next working day.' },
]

const policies = [
  ['Return window', '14 days from delivery'],
  ['Eligible items', 'Unused pieces in original condition'],
  ['Non-returnable', 'Custom or made-to-order pieces'],
  ['Refund method', 'Original payment method'],
  ['Damaged in transit', 'Free replacement — send us a photo'],
]

export default function ReturnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Returns & Exchanges"
        title="A quiet promise."
        subtitle="If a piece doesn't feel right in your home, send it back. We want every object we make to be loved — not tolerated."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><h2 className="display text-3xl text-ink-800">How returns work.</h2></Reveal>
          <Stagger className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="relative rounded-sm bg-ivory-50 p-6 paper-edge">
                  <span className="hand absolute -left-2 -top-3 text-3xl text-clay-500">{s.n}</span>
                  <p className="font-serif text-xl text-ink-800">{s.title}</p>
                  <p className="mt-2 text-sm text-ink-700">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-ivory-200 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal><h2 className="display text-3xl text-ink-800">Policy at a glance.</h2></Reveal>
          <Reveal delay={0.1}>
            <table className="mt-8 w-full text-sm">
              <tbody className="divide-y divide-clay-500/25 border-y border-clay-500/25">
                {policies.map(([k, v]) => (
                  <tr key={k}>
                    <td className="py-4 pr-4 text-[11px] uppercase tracking-widest-2 text-clay-600">{k}</td>
                    <td className="py-4 text-ink-800">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
    </>
  )
}
