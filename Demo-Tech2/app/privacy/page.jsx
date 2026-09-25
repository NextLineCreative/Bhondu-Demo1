import PageHero from '@/components/PageHero'
import { Reveal } from '@/components/Motion'

const sections = [
  {
    title: 'What we collect',
    body: 'When you shop or subscribe, we collect the details needed to fulfill your order — name, shipping address, email, phone, and payment reference. We also record basic analytics (pages viewed, device type) to improve the site.',
  },
  {
    title: 'How we use it',
    body: 'To ship your order, to answer your questions, to send you the occasional studio letter if you subscribe, and to keep our tax and business records in order. Nothing else.',
  },
  {
    title: 'Who sees it',
    body: 'Only the studio team and the small number of trusted partners we use to deliver your order (payment processor, courier, email service). We never sell or share your data with advertisers.',
  },
  {
    title: 'Your choices',
    body: 'You can unsubscribe from the journal any time via the link in every email. You may request a copy of the data we hold, or ask us to delete it, by writing to hello@claypot.studio.',
  },
  {
    title: 'Cookies',
    body: 'A small number of essential cookies keep your cart working. Analytics cookies are optional and can be declined on your first visit.',
  },
  {
    title: 'Changes to this policy',
    body: 'We may update this page as our business evolves. Material changes will be announced via email to subscribers and at the top of this page.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="What we hold, why."
        subtitle="A short, plain-English summary of the data we collect and how we treat it. Last updated 12 January 2025."
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
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
