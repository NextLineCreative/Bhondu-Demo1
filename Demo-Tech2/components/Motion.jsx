'use client'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

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

/**
 * MagneticButton — attracts the pointer within a threshold, snapping back
 * when the cursor leaves. Wraps any child clickable element.
 */
export function MagneticButton({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 200, damping: 15 })
  const y = useSpring(0, { stiffness: 200, damping: 15 })

  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    x.set(dx * strength)
    y.set(dy * strength)
  }
  const reset = () => { x.set(0); y.set(0) }

  return (
    <motion.div ref={ref} onMouseMove={handleMove} onMouseLeave={reset} style={{ x, y }} className={className}>
      {children}
    </motion.div>
  )
}

/**
 * DecoderText — scrambles letters, then resolves to the final text on mount /
 * when it enters the viewport. Cursor-forward feel for editorial headings.
 */
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
export function DecoderText({ text, className = '', speed = 50 }) {
  const [display, setDisplay] = useState(text)
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || !ref.current) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.3 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    let step = 0
    const total = text.length * 2
    const id = setInterval(() => {
      setDisplay(
        text.split('').map((ch, i) => {
          if (i < step / 2) return ch
          if (ch === ' ' || ch === '\n') return ch
          return GLYPHS[Math.floor((step + i) % GLYPHS.length)]
        }).join('')
      )
      step++
      if (step > total) { clearInterval(id); setDisplay(text) }
    }, speed)
    return () => clearInterval(id)
  }, [inView, text, speed])

  return <span ref={ref} className={className}>{display}</span>
}

/**
 * ImageZoom — wraps an image (or any block) and applies a smooth scale
 * transform on hover. Uses transform-gpu for cheap frames.
 */
export function ImageZoom({ children, scale = 1.06, className = '' }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        whileHover={{ scale }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  )
}

/**
 * ScrollProgress — a thin bar pinned to the top of the viewport that fills
 * as the user scrolls the page. Terracotta by default.
 */
export function ScrollProgress({ color = 'var(--terracotta)' }) {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: '0% 0%', background: color }}
      className="fixed left-0 right-0 top-0 z-50 h-[2px]"
    />
  )
}

export default Reveal
