'use client'
import { useRef, useState } from 'react'
import './SpotlightCard.css'

/**
 * SpotlightCard — the canonical React Bits card: a bordered surface with a
 * radial spotlight glow that tracks the cursor and fades in on hover/focus.
 * Adapted to the Clay Pot palette (warm terracotta glow by default).
 *
 * Props:
 *   spotlightColor — the glow color (rgba recommended)
 *   className      — extra classes for the surface
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(169, 87, 56, 0.35)',
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [focused, setFocused] = useState(false)

  const handleMove = (e) => {
    if (!ref.current || focused) return
    const r = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onFocus={() => { setFocused(true); setOpacity(1) }}
      onBlur={() => { setFocused(false); setOpacity(0) }}
      className={`spotlight-card ${className}`.trim()}
    >
      <div
        className="spotlight-card__glow"
        style={{
          opacity,
          background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 72%)`,
        }}
      />
      <div className="spotlight-card__content">{children}</div>
    </div>
  )
}
