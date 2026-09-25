import { Icon } from './Icons'

/**
 * ServiceCard — soft rounded organic rectangles matching the reference:
 * - Dark cards: image fills the top with a matching curved edge
 * - Cream cards: image inset as its own rounded blob at top
 * - Subtle per-corner border-radius variation (no extreme SVG clips)
 * - Vertical stagger via offset prop
 */
export default function ServiceCard({ title, sub, tag, img, variant = 'dark', offset = 0, shape = 1 }) {
  const dark = variant === 'dark'

  // Four gentle silhouettes — each slightly different but all read as
  // rounded rectangles with one soft bulge.
  const outerShapes = [
    '46% 54% 42% 58% / 52% 48% 56% 44%',
    '54% 46% 58% 42% / 48% 52% 44% 56%',
    '42% 58% 50% 50% / 56% 44% 52% 48%',
    '58% 42% 46% 54% / 44% 56% 48% 52%',
  ]
  const innerShapes = [
    '54% 46% 60% 40% / 62% 58% 42% 38%',
    '46% 54% 40% 60% / 58% 62% 38% 42%',
    '50% 50% 56% 44% / 60% 60% 40% 40%',
    '58% 42% 44% 56% / 56% 62% 38% 44%',
  ]

  return (
    <div
      className={`group relative flex flex-col ${dark ? 'bg-wine-700 text-cream-100' : 'bg-cream-200 text-wine-800'} shadow-sm transition-transform duration-500 hover:-translate-y-1`}
      style={{
        borderRadius: outerShapes[(shape - 1) % 4],
        transform: `translateY(${offset}px)`,
        padding: dark ? '0' : '18px 18px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Image — for dark cards fills to card edge; for cream cards, inset blob */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: dark
            ? `${outerShapes[(shape - 1) % 4].split('/')[0].trim()} / 100% 100% 0 0`
            : innerShapes[(shape - 1) % 4],
        }}
      >
        <img
          src={img}
          alt={`${title} ${sub}`}
          className={`h-64 w-full object-cover transition duration-700 group-hover:scale-105 md:h-72`}
        />
      </div>

      {/* Text panel */}
      <div className={`flex items-end justify-between gap-3 ${dark ? 'p-5 pt-4' : 'pt-5'}`}>
        <div>
          <h3 className="font-serif text-3xl italic leading-[0.95]">{title}</h3>
          <p className="font-serif text-3xl italic leading-[0.95]">{sub}</p>
          {tag && (
            <p className={`mt-3 text-[10px] tracking-widest-2 ${dark ? 'text-cream-200/80' : 'text-wine-700/70'}`}>
              {tag}
            </p>
          )}
        </div>
        <button
          aria-label={`View ${title}`}
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition ${dark ? 'border-cream-100/70 text-cream-100 hover:bg-cream-100 hover:text-wine-700' : 'border-wine-700/70 text-wine-700 hover:bg-wine-700 hover:text-cream-100'}`}
        >
          <Icon name="arrow" className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
