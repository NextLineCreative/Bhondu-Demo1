import { Icon } from './Icons'

/**
 * ServiceCard — asymmetric organic card matching the Luxe Nails mockup.
 * The outer card and inner image use different border-radius signatures
 * so no two cards read as identical. `variant` alternates dark/cream.
 * `offset` staggers the card vertically to create the wavy row.
 */
export default function ServiceCard({ title, sub, tag, img, variant = 'dark', offset = 0, shape = 1 }) {
  const dark = variant === 'dark'

  // Four subtly different blob signatures so the row feels hand-drawn
  const outerShapes = [
    '58% 42% 55% 45% / 52% 58% 42% 48%',
    '42% 58% 45% 55% / 58% 48% 52% 42%',
    '55% 45% 58% 42% / 45% 55% 45% 55%',
    '48% 52% 42% 58% / 55% 42% 58% 45%',
  ]
  const innerShapes = [
    '50% 50% 45% 55% / 60% 55% 45% 40%',
    '55% 45% 50% 50% / 55% 60% 40% 45%',
    '45% 55% 55% 45% / 50% 45% 55% 50%',
    '50% 50% 55% 45% / 45% 50% 50% 55%',
  ]

  const outerRadius = outerShapes[(shape - 1) % 4]
  const innerRadius = innerShapes[(shape - 1) % 4]

  return (
    <div
      className={`relative flex flex-col ${dark ? 'bg-wine-700 text-cream-100' : 'bg-cream-200 text-wine-800'} p-3 pb-6 shadow-sm transition hover:shadow-lg`}
      style={{ borderRadius: outerRadius, transform: `translateY(${offset}px)` }}
    >
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: innerRadius }}
      >
        <img
          src={img}
          alt={`${title} ${sub}`}
          className={`h-56 w-full object-cover md:h-64 ${dark ? 'opacity-90' : ''}`}
        />
      </div>

      <div className="mt-4 flex items-end justify-between gap-3 px-3">
        <div>
          <h3 className="font-serif text-3xl italic leading-none">{title}</h3>
          <p className="font-serif text-3xl italic leading-none">{sub}</p>
          {tag && (
            <p className={`mt-3 text-[9px] tracking-widest-2 ${dark ? 'text-cream-200/80' : 'text-wine-700/70'}`}>
              {tag}
            </p>
          )}
        </div>
        <button
          aria-label={`View ${title}`}
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${dark ? 'border-cream-100/70 text-cream-100 hover:bg-cream-100 hover:text-wine-700' : 'border-wine-700/70 text-wine-700 hover:bg-wine-700 hover:text-cream-100'} transition`}
        >
          <Icon name="arrow" className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
