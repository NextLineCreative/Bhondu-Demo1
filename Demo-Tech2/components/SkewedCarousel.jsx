'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * SkewedCarousel — marquee-of-cards on a tilted plane. As the user
 * scrolls past it, the tilt eases toward 0 and the whole strip scales up.
 * Since the React Bits Pro `@reactbits-starter/skewed-carousel-tw` requires
 * REACTBITS_LICENSE_KEY, this is an open-source equivalent built with
 * Framer Motion and Tailwind — same interaction, no license key required.
 *
 * Props:
 *   items      — array of { img, title, sub } objects
 *   speed      — marquee cycle duration in seconds (lower = faster)
 *   skew       — resting Y-skew in degrees (negative tilts down-right)
 *   rotate     — resting Z-rotation in degrees
 *   direction  — 'left' or 'right'
 *   cardWidth  — px width per card
 */
export default function SkewedCarousel({
  items = [],
  speed = 40,
  skew = -8,
  rotate = -4,
  direction = 'left',
  cardWidth = 320,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Eases from resting tilt/scale at edges to flat/large in the middle
  const dynSkew = useTransform(scrollYProgress, [0, 0.5, 1], [skew, 0, skew])
  const dynRotate = useTransform(scrollYProgress, [0, 0.5, 1], [rotate, 0, rotate])
  const dynScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.02, 0.92])

  const cycle = direction === 'right' ? ['-50%', '0%'] : ['0%', '-50%']
  const doubled = [...items, ...items]

  return (
    <section ref={ref} className="relative overflow-hidden py-24" style={{ background: 'var(--ivory)' }}>
      <motion.div
        style={{ skewY: dynSkew, rotate: dynRotate, scale: dynScale, transformOrigin: 'center' }}
        className="w-full"
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: cycle }}
          transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
          style={{ width: 'max-content' }}
        >
          {doubled.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, y: -8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="group relative shrink-0 overflow-hidden bg-cream elev-3"
              style={{ width: cardWidth }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title || ''}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              {(item.title || item.sub) && (
                <div className="p-5">
                  {item.title && (
                    <p className="font-serif text-xl" style={{ color: 'var(--text-dark)' }}>{item.title}</p>
                  )}
                  {item.sub && (
                    <p className="mt-1 text-[13px]" style={{ color: 'var(--text-muted)' }}>{item.sub}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
