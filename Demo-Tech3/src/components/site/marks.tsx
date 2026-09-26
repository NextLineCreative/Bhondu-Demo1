import type { SVGProps } from "react";

export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 88" fill="none" aria-hidden="true">
      <path d="M32 84V18" stroke="currentColor" strokeWidth="1.2" />
      <path d="M32 66c-12-2-20-12-18-24 8 2 16 8 18 16Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M32 54c12-4 22-8 24-20-10 2-18 8-24 16Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M32 40c-14-2-22-14-16-26 10 4 16 12 16 20Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M32 28c10-6 16-8 22-6-4 8-12 12-22 14Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M26 16c4-8 8-12 6-18 6 6 6 14 2 22" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function Botanical({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 220" fill="none" aria-hidden="true">
      <path d="M60 210 V30" stroke="currentColor" strokeWidth="1.1" />
      <path d="M60 170c-28-6-40-28-34-52 18 6 30 22 34 40Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M60 150c26-8 42-16 48-40-20 4-36 18-48 34Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M60 118c-30-4-46-30-32-56 20 8 32 26 32 44Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M60 96c22-12 36-16 48-10-8 16-24 24-48 28Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M48 48c8-18 16-28 10-42 14 12 16 30 6 46" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function Torn({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`block h-8 w-full ${className}`}
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 18c48 10 72-12 120-6 50 6 70 16 120 8 48-8 80-20 130-8 46 10 78 8 120-2 50-12 90 8 140 6 40-2 70-16 120-8 52 8 90 4 130-8 46-14 86 2 130 6 40 4 80-10 130-4 48 6 90 16 140 4 40-8 70-2 160 2v32H0Z"
      />
    </svg>
  );
}

export function ScribbleArrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 48" fill="none" aria-hidden="true">
      <path className="draw-path" d="M4 30c18-18 36-16 54-8 16 6 28 4 46-6" stroke="currentColor" strokeWidth="1.2" />
      <path className="draw-path" d="M90 10c6 2 12 6 16 8-8 2-12 6-14 10" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Stamp() {
  return (
    <div className="stamp" aria-hidden="true">
      <span>Natural</span>
      <span>Honest</span>
      <span>Timeless</span>
    </div>
  );
}

export function VesselSketch() {
  return (
    <svg viewBox="0 0 240 190" className="mt-6 w-full text-dark" aria-hidden="true">
      <ellipse cx="120" cy="42" rx="46" ry="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M74 42c2 18-8 40-6 68 4 36 22 52 52 52s48-16 52-52c2-28-8-50-6-68"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line x1="74" y1="172" x2="166" y2="172" stroke="currentColor" strokeWidth="1" />
      <line x1="74" y1="168" x2="74" y2="176" stroke="currentColor" />
      <line x1="166" y1="168" x2="166" y2="176" stroke="currentColor" />
      <text x="120" y="186" textAnchor="middle" fontSize="11" fill="currentColor" fontFamily="Outfit, sans-serif">
        22 cm
      </text>
      <line x1="196" y1="42" x2="196" y2="162" stroke="currentColor" strokeWidth="1" />
      <line x1="192" y1="42" x2="200" y2="42" stroke="currentColor" />
      <line x1="192" y1="162" x2="200" y2="162" stroke="currentColor" />
      <text x="214" y="106" fontSize="11" fill="currentColor" fontFamily="Outfit, sans-serif">
        18
      </text>
      <text x="188" y="28" fontSize="11" fill="currentColor" fontFamily="Caveat, cursive">
        Fig. 02
      </text>
    </svg>
  );
}

function base(props: SVGProps<SVGSVGElement>) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    "aria-hidden": true as const,
    ...props,
  };
}

export function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="17.2" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPinterest(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8" />
      <path d="M11 18.5c.4-1.4.7-2.8.2-4.1-.4 1.2-1.6 2-2.6 1.5A3.6 3.6 0 0 1 9 10.2c.8-1.6 2.6-2.2 4.2-1.8 1.8.4 3 1.8 2.8 3.6-.2 2.2-1.6 3.6-3.2 3.6-.8 0-1.4-.5-1.2-1.4" />
    </svg>
  );
}

export function IconYouTube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="7" width="18" height="10" rx="3" />
      <path d="M11 10.2v3.6l3.2-1.8-3.2-1.8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
