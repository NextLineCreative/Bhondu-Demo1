import PageHero from '@/components/PageHero'
import { Reveal } from '@/components/Motion'

const sections = [
  {
    title: '1. About us',
    body: 'Clay Pot Studio is a small ceramics workshop based in Auroville, India. These terms apply to every order placed through claypot.studio and to any communication you have with our team.',
  },
  {
    title: '2. Placing an order',
    body: 'When you place an order, you are making an offer to buy. We accept it by sending an order confirmation email. Ownership passes to you once payment is received in full.',
  },
  {
    title: '3. Prices and payment',
    body: 'Prices are shown in INR and include GST where applicable. We accept credit and debit cards, UPI, and net banking. All payments are processed securely by our payment partner.',
  },
  {
    title: '4. Delivery and risk',
    body: 'Delivery times are estimates, not guarantees. Risk of loss passes to you when the courier delivers the parcel. Damaged deliveries are covered under our Returns policy — send us a photo within 48 hours.',
  },
  {
    title: '5. Returns',
    body: 'Unused pieces may be returned within 14 days for a refund or exchange. Custom or made-to-order pieces are non-returnable unless faulty. Full process on our Returns page.',
  },
  {
    title: '6. Handmade variation',
    body: 'Because every piece is hand-made and kiln-fired, small differences in colour, weight, and finish are inherent to the craft. These are not defects, and are not grounds for return.',
  },
  {
    title: '7. Intellectual property',
    body: 'All images, text, and designs on this site are ours or used with permission. Please don\'t reproduce them for commercial purposes without asking.',
  },
  {
    title: '8. Liability',
    body: 'We take reasonable care to describe pieces accurately, but we are not liable for indirect losses arising from use of our products. Nothing in these terms limits your statutory consumer rights.',
  },
  {
    title: '9. Governing law',
    body: 'These terms are governed by the laws of India. Any dispute will be resolved in the courts of Tamil Nadu.',
  },
  {
    title: '10. Contact',
    body: 'Questions? Write to hello@claypot.studio or use our Contact page.',
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="The fine print."
        subtitle="The rules of the road when you shop with us — written to be readable, not sneaky. Last updated 12 January 2025."
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="space-y-8">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <div>
                  <h2 className="font-serif text-2xl text-ink-800">{s.title}</h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink-700">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
