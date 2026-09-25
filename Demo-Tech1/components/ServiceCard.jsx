import { Icon } from './Icons'

/**
 * Asymmetric organic card — each shape entry gives the card a distinct
 * silhouette (per-corner border-radius), a slight tilt, and its own
 * off-center inner image blob. Cards read as hand-drawn, no two alike.
 */
const SHAPES = [
  {
    outer: '68% 32% 56% 44% / 60% 46% 54% 40%',
    inner: '54% 46% 62% 38% / 66% 52% 48% 34%',
    rotate: -3,
    innerShift: { x: -6, y: -4 },
  },
  {
    outer: '34% 66% 40% 60% / 50% 62% 38% 50%',
    inner: '42% 58% 50% 50% / 58% 44% 56% 42%',
    rotate: 2.5,
    innerShift: { x: 8, y: -2 },
  },
  {
    outer: '58% 42% 30% 70% / 40% 66% 34% 60%',
    inner: '52% 48% 40% 60% / 46% 60% 40% 54%',
    rotate: -2,
    innerShift: { x: -4, y: 6 },
  },
  {
    outer: '44% 56% 70% 30% / 62% 46% 54% 38%',
    inner: '58% 42% 62% 38% / 50% 60% 40% 50%',
    rotate: 3,
    innerShift: { x: 6, y: 4 },
  },
]

export default function ServiceCard({ title, sub, tag, img, variant = 'dark', offset = 0, shape = 1 }) {
  const dark = variant === 'dark'
  const s = SHAPES[(shape - 1) % SHAPES.length]

  return (
    <div
      className={`group relative flex flex-col ${dark ? 'bg-wine-700 text-cream-100' : 'bg-cream-200 text-wine-800'} p-4 pb-6 shadow-md transition-transform duration-500 hover:-translate-y-1`}
      style={{
        borderRadius: s.outer,
        transform: `translateY(${offset}px) rotate(${s.rotate}deg)`,
      }}
    >
      {/* Un-rotate the inner content so text and image stay upright */}
      <div style={{ transform: `rotate(${-s.rotate}deg)` }} className="flex flex-1 flex-col">
        <div
          className="relative overflow-hidden shadow-inner"
          style={{
            borderRadius: s.inner,
            transform: `translate(${s.innerShift.x}px, ${s.innerShift.y}px)`,
          }}
        >
          <img
            src={img}
            alt={`${title} ${sub}`}
            className={`h-56 w-full object-cover transition duration-700 group-hover:scale-105 md:h-60 ${dark ? 'opacity-90' : ''}`}
          />
        </div>

        {/* Decorative floating accent — asymmetric placement */}
        <span
          aria-hidden
          className={`pointer-events-none absolute h-2 w-2 rounded-full ${dark ? 'bg-gold-400/70' : 'bg-wine-600/50'}`}
          style={{ top: '18%', right: shape % 2 ? '8%' : 'auto', left: shape % 2 ? 'auto' : '10%' }}
        />

        <div className="mt-5 flex items-end justify-between gap-3 px-2">
          <div className={shape % 2 ? '' : 'pl-2'}>
            <h3 className="font-serif text-3xl italic leading-[0.95]">{title}</h3>
            <p className="font-serif text-3xl italic leading-[0.95]">{sub}</p>
            {tag && (
              <p className={`mt-3 text-[9px] tracking-widest-2 ${dark ? 'text-cream-200/80' : 'text-wine-700/70'}`}>
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
    </div>
  )
}
