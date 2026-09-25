import { Reveal } from './Motion'

export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="bg-ivory-100 pt-12 pb-16 border-b border-clay-400/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-widest-2 text-clay-600">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display mt-5 text-5xl leading-[1] text-ink-800 lg:text-7xl">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-700">{subtitle}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.3}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
