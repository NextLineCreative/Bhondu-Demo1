export const Icon = ({ name, className = 'h-5 w-5' }) => {
  const props = { className, fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24' }
  switch (name) {
    case 'phone': return <svg {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.8 2Z"/></svg>
    case 'mail': return <svg {...props}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
    case 'pin': return <svg {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    case 'user': return <svg {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    case 'chat': return <svg {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>
    case 'help': return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
    case 'calendar': return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
    case 'clock': return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    case 'arrow': return <svg {...props}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    case 'play': return <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M8 5v14l11-7z"/></svg>
    case 'diamond': return <svg {...props}><path d="M6 3h12l4 6-10 12L2 9Z"/><path d="M2 9h20M12 3l4 6-4 12-4-12Z"/></svg>
    case 'lotus': return <svg {...props}><path d="M12 3c2 4 4 6 8 8-4 2-6 4-8 8-2-4-4-6-8-8 4-2 6-4 8-8Z"/></svg>
    case 'heart': return <svg {...props}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8Z"/></svg>
    case 'shield': return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
    case 'sparkle': return <svg {...props}><path d="M12 2v6M12 16v6M4 12h6M14 12h6"/></svg>
    case 'crown': return <svg {...props}><path d="M3 8l4 6 5-9 5 9 4-6-2 12H5Z"/></svg>
    case 'instagram': return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
    case 'pinterest': return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M11 8c2 0 4 1 4 4s-2 4-4 4c-1 0-2-1-2-1l-1 4"/></svg>
    case 'tiktok': return <svg {...props}><path d="M14 4v10a4 4 0 1 1-4-4"/><path d="M14 4a4 4 0 0 0 4 4"/></svg>
    case 'facebook': return <svg {...props}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8Z"/></svg>
    case 'chevron': return <svg {...props}><path d="m6 9 6 6 6-6"/></svg>
    case 'star': return <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2l3 7 7 .8-5.3 4.8L18 22l-6-3.5L6 22l1.3-7.4L2 9.8 9 9Z"/></svg>
    case 'quote': return <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M7 7h4v4H8c0 3 2 4 3 4v2c-3 0-6-2-6-6V7Zm9 0h4v4h-3c0 3 2 4 3 4v2c-3 0-6-2-6-6V7Z"/></svg>
    default: return null
  }
}
