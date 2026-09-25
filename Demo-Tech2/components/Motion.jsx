'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * Reveal — fade + slide-up when the element enters the viewport.
 * Used to sequence sections and cards as the user scrolls.
 */
export function Reveal({ children, delay = 0, y = 32, once = true, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Stagger — parent that reveals children one after another.
 */
export function Stagger({ children, className = '', gap = 0.08 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  )
}
export function StaggerItem({ children, className = '', y = 24 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * TiltedCard — mouse-tracking 3D tilt inspired by the ReactBits pattern.
 * Wraps any children and tilts them based on cursor position.
 */
export function TiltedCard({ children, className = '', max = 12, scale = 1.02 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 160, damping: 20 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 160, damping: 20 })

  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900, transformStyle: 'preserve-3d' }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Spotlight — a soft radial glow that follows the mouse. Layer under card
 * content with pointer-events-none so the parent handles hover.
 */
export function Spotlight({ color = 'rgba(255,255,255,0.14)' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const bg = useTransform([x, y], ([xv, yv]) =>
    `radial-gradient(220px circle at ${xv}px ${yv}px, ${color}, transparent 70%)`
  )
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - r.left)
        y.set(e.clientY - r.top)
      }}
      style={{ background: bg }}
      className="pointer-events-none absolute inset-0"
    />
  )
}

/**
 * Marquee — infinite horizontal scroll for a strip of items.
 */
export function Marquee({ children, duration = 30, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal
