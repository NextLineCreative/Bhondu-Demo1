import PageHero from '@/components/PageHero'
import { Reveal, Stagger, StaggerItem } from '@/components/Motion'
import { Icon } from '@/components/Icons'

const zones = [
  { region: 'Within India', time: '3 – 5 business days', price: 'Free above ₹1,500' },
  { region: 'South Asia', time: '7 – 10 business days', price: 'From ₹800' },
  { region: 'Europe & UK', time: '10 – 14 business days', price: 'From ₹2,400' },
  { region: 'North America', time: '10 – 14 business days', price: 'From ₹2,800' },
  { region: 'Rest of World', time: '14 – 21 business days', price: 'On request' },
]

const highlights = [
  { icon: 'leaf', title: 'Plastic-free packaging', desc: 'Recycled paper, cotton twine, and rice-hull cushion.' },
  { icon: 'heart', title: 'Hand-packed with care', desc: 'Every parcel is wrapped by the makers themselves.' },
  { icon: 'truck', title: 'Insured against breakage', desc: 'If your piece arrives damaged, we replace it — no questions.' },
]

export default function ShippingPage() {
  return (
    <>
      <PageHero
        eyebrow="Shipping & Delivery"
        title="Sent with intention."
        subtitle="Every parcel we ship is packed by hand in plastic-free materials and insured against the small chance of a cracked journey."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="display text-3xl text-ink-800">Delivery zones & timing</h2>
          </Reveal>
          <Stagger className="mt-8 overflow-hidden rounded-sm border border-clay-400/25 bg-ivory-50">
            {zones.map((z, i) => (
              <StaggerItem key={z.region}>
                <div className={`grid grid-cols-3 items-center gap-4 px-6 py-5 text-sm ${i > 0 ? 'border-t border-clay-400/20' : ''}`}>
                  <p className="font-serif text-lg text-ink-800">{z.region}</p>
                  <p className="text-ink-700">{z.time}</p>
                  <p className="text-right text-ink-700">{z.price}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-forest-600 py-16 text-ivory-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="display text-3xl">How we pack.</h2>
          </Reveal>
          <Stagger className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <StaggerItem key={h.title}>
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-ivory-100/30"><Icon name={h.icon} className="h-5 w-5" /></div>
                  <p className="mt-4 font-serif text-xl">{h.title}</p>
                  <p className="mt-2 text-sm text-ivory-100/75">{h.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
