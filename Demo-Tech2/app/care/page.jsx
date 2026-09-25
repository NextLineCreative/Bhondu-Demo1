import PageHero from '@/components/PageHero'
import { Reveal, Stagger, StaggerItem } from '@/components/Motion'
import { Icon } from '@/components/Icons'
import IMG from '@/lib/img'

const dos = [
  'Hand-wash with mild soap and warm water for the longest life',
  'Let pieces air-dry fully before stacking',
  'Season new stoneware with a light coat of oil once a month',
  'Use trivets when moving between warm and cool surfaces',
]
const donts = [
  'Avoid sudden temperature changes (hot piece into cold water)',
  'Don\'t microwave pieces with metallic-look glazes',
  'Skip abrasive scourers — soft cloths preserve the finish',
  'Not for open-flame use',
]

const materials = [
  { icon: 'sprig', title: 'Stoneware', desc: 'Dense and hard-wearing. Dishwasher and microwave safe unless noted.' },
  { icon: 'fire',  title: 'Terracotta', desc: 'Warm, porous, and rustic. Hand-wash only; season with oil.' },
  { icon: 'leaf',  title: 'Porcelain', desc: 'Fine, translucent, refined. Dishwasher-safe; avoid thermal shock.' },
]

export default function CarePage() {
  return (
    <>
      <PageHero
        eyebrow="Care Guide"
        title="How to keep them."
        subtitle="Handmade pieces are surprisingly durable — but a little care keeps them beautiful for a lifetime and beyond."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr,1fr] lg:px-10">
          <Reveal>
            <img src={IMG.finishing} alt="Finished ceramic detail" className="h-96 w-full rounded-sm object-cover paper-edge" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display text-3xl text-ink-800">Everyday rituals.</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest-2 text-forest-500">Please do</p>
                <ul className="mt-3 space-y-2 text-[15px] text-ink-700">
                  {dos.map((d) => <li key={d} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-500" />{d}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest-2 text-rust-500">Please don't</p>
                <ul className="mt-3 space-y-2 text-[15px] text-ink-700">
                  {donts.map((d) => <li key={d} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rust-500" />{d}</li>)}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-200 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><h2 className="display text-3xl text-ink-800">By material.</h2></Reveal>
          <Stagger className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {materials.map((m) => (
              <StaggerItem key={m.title}>
                <div className="rounded-sm bg-ivory-50 p-6 paper-edge">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-forest-600 text-ivory-50"><Icon name={m.icon} className="h-5 w-5" /></div>
                  <p className="mt-4 font-serif text-xl text-ink-800">{m.title}</p>
                  <p className="mt-2 text-sm text-ink-700">{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
