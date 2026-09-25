export const Icon = ({ name, className = 'h-5 w-5' }) => {
  const p = { className, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24' }
  switch (name) {
    case 'search': return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
    case 'user': return <svg {...p}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    case 'bag': return <svg {...p}><path d="M6 8h12l-1 12H7Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>
    case 'arrow': return <svg {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    case 'arrow-r': return <svg {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    case 'chev-r': return <svg {...p}><path d="m9 18 6-6-6-6"/></svg>
    case 'sprig': return <svg {...p}><path d="M12 22V6"/><path d="M12 10c-2-1-3-3-3-6 3 0 5 2 5 5"/><path d="M12 14c2-1 3-3 3-5-3 0-5 2-5 5"/><path d="M12 18c-2-1-3-2-3-4 2 0 4 1 4 3"/></svg>
    case 'leaf': return <svg {...p}><path d="M20 4c0 8-6 16-16 16 0-8 6-16 16-16Z"/><path d="M4 20 20 4"/></svg>
    case 'heart': return <svg {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8Z"/></svg>
    case 'truck': return <svg {...p}><rect x="1" y="6" width="14" height="10"/><path d="M15 9h5l3 3v4h-8"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>
    case 'hand-icon': return <svg {...p}><path d="M6 11V6a2 2 0 0 1 4 0v5"/><path d="M10 6V4a2 2 0 0 1 4 0v7"/><path d="M14 6a2 2 0 0 1 4 0v10a5 5 0 0 1-10 0V9"/></svg>
    case 'ins': return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
    case 'pin-social': return <svg {...p}><circle cx="12" cy="12" r="10"/><path d="M11 8c2 0 4 1 4 4s-2 4-4 4c-1 0-2-1-2-1l-1 4"/></svg>
    case 'fb': return <svg {...p}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8Z"/></svg>
    case 'tk': return <svg {...p}><path d="M14 4v10a4 4 0 1 1-4-4"/><path d="M14 4a4 4 0 0 0 4 4"/></svg>
    case 'mail': return <svg {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
    case 'phone': return <svg {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.8 2Z"/></svg>
    case 'pin': return <svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    case 'fire': return <svg {...p}><path d="M12 3c1 3 4 4 4 8a4 4 0 1 1-8 0c0-2 1-3 2-4-1 2 0 3 1 3 2-1 1-4 1-7Z"/></svg>
    case 'circle': return <svg {...p}><circle cx="12" cy="12" r="10"/></svg>
    case 'menu': return <svg {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    default: return null
  }
}
