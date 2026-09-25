import { Icon } from './Icons'

/**
 * ServiceCard — clipped by a per-card SVG blob. Coordinates are in
 * objectBoundingBox space (0–1) so the shape scales with any container.
 * Each path is hand-tuned to be visibly asymmetric.
 */
const BLOBS = [
  // 1 · bulge top-left, taper bottom-right
  'M 0.05,0.30 C 0.02,0.12 0.15,0.02 0.38,0.03 L 0.70,0.06 C 0.90,0.08 0.99,0.22 0.95,0.42 L 0.90,0.68 C 0.86,0.88 0.72,0.98 0.52,0.96 L 0.28,0.93 C 0.08,0.90 0.00,0.72 0.03,0.55 Z',
  // 2 · bulge top-right, dip bottom-left
  'M 0.10,0.20 C 0.14,0.06 0.32,0.00 0.55,0.03 L 0.80,0.06 C 0.98,0.10 1.00,0.30 0.96,0.50 L 0.92,0.75 C 0.88,0.94 0.66,0.99 0.46,0.96 L 0.24,0.92 C 0.06,0.88 0.02,0.68 0.06,0.48 Z',
  // 3 · extended bottom-left, cut top-right
  'M 0.04,0.35 C 0.00,0.18 0.18,0.06 0.42,0.05 L 0.68,0.08 C 0.90,0.11 1.00,0.34 0.94,0.55 L 0.88,0.78 C 0.82,0.95 0.60,1.00 0.36,0.97 L 0.16,0.94 C 0.02,0.90 -0.02,0.70 0.02,0.52 Z',
  // 4 · irregular, bulge bottom, skinny top
  'M 0.18,0.10 C 0.28,0.02 0.50,0.00 0.68,0.04 L 0.82,0.10 C 0.96,0.20 0.98,0.42 0.92,0.62 L 0.86,0.82 C 0.78,0.98 0.54,1.00 0.32,0.96 L 0.14,0.90 C 0.02,0.82 0.02,0.58 0.06,0.38 Z',
]

// Slightly different inner (image) shapes so the image blob doesn't
// echo the card blob perfectly — layered asymmetry.
const IMG_BLOBS = [
  'M 0.08,0.20 C 0.04,0.06 0.24,0.02 0.44,0.04 L 0.70,0.06 C 0.90,0.10 0.98,0.30 0.92,0.50 L 0.86,0.78 C 0.78,0.96 0.56,0.98 0.36,0.94 L 0.18,0.90 C 0.04,0.82 0.02,0.60 0.06,0.42 Z',
  'M 0.14,0.08 C 0.30,0.02 0.54,0.02 0.72,0.06 L 0.88,0.14 C 0.98,0.30 0.96,0.52 0.90,0.70 L 0.82,0.88 C 0.68,0.98 0.44,0.96 0.26,0.90 L 0.10,0.82 C 0.02,0.66 0.02,0.44 0.06,0.26 Z',
  'M 0.10,0.16 C 0.18,0.04 0.40,0.02 0.60,0.04 L 0.78,0.08 C 0.94,0.16 0.98,0.36 0.94,0.56 L 0.88,0.78 C 0.80,0.94 0.58,0.96 0.38,0.92 L 0.18,0.86 C 0.04,0.78 0.02,0.56 0.06,0.36 Z',
  'M 0.16,0.12 C 0.32,0.04 0.56,0.04 0.72,0.10 L 0.86,0.20 C 0.94,0.38 0.92,0.60 0.86,0.76 L 0.78,0.90 C 0.62,0.98 0.42,0.96 0.24,0.90 L 0.10,0.80 C 0.04,0.62 0.06,0.40 0.10,0.24 Z',
]

export default function ServiceCard({ title, sub, tag, img, variant = 'dark', offset = 0, shape = 1 }) {
  const dark = variant === 'dark'
  const idx = (shape - 1) % 4
  const cardId = `blob-card-${idx}`
  const imgId = `blob-img-${idx}`

  return (
    <div className="relative" style={{ transform: `translateY(${offset}px)` }}>
      {/* Per-instance clipPath defs (objectBoundingBox = 0..1 space) */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id={cardId} clipPathUnits="objectBoundingBox">
            <path d={BLOBS[idx]} />
          </clipPath>
          <clipPath id={imgId} clipPathUnits="objectBoundingBox">
            <path d={IMG_BLOBS[idx]} />
          </clipPath>
        </defs>
      </svg>

      <div
        className={`group relative flex flex-col ${dark ? 'bg-wine-700 text-cream-100' : 'bg-cream-200 text-wine-800'} p-5 pb-7 shadow-md transition-transform duration-500 hover:-translate-y-1`}
        style={{ clipPath: `url(#${cardId})`, WebkitClipPath: `url(#${cardId})`, minHeight: 360 }}
      >
        <div
          className="relative overflow-hidden"
          style={{ clipPath: `url(#${imgId})`, WebkitClipPath: `url(#${imgId})` }}
        >
          <img
            src={img}
            alt={`${title} ${sub}`}
            className={`h-56 w-full object-cover transition duration-700 group-hover:scale-105 md:h-60 ${dark ? 'opacity-90' : ''}`}
          />
        </div>

        {/* Floating accent dot placed asymmetrically per card */}
        <span
          aria-hidden
          className={`pointer-events-none absolute h-2.5 w-2.5 rounded-full ${dark ? 'bg-gold-400' : 'bg-wine-600/70'}`}
          style={
            [
              { top: '14%', right: '12%' },
              { top: '20%', left: '14%' },
              { top: '18%', right: '18%' },
              { top: '22%', left: '20%' },
            ][idx]
          }
        />

        <div className={`mt-5 flex items-end justify-between gap-3 ${idx % 2 ? 'pl-3 pr-5' : 'pl-5 pr-3'}`}>
          <div>
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
