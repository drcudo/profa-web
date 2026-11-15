// Animirani PROFA natpis u bojama brenda: obris se iscrtava "laserom".
const OUTER = [
  'M 100 240 V 60 H 170 C 210 60, 210 140, 170 140 H 100',
  'M 280 240 V 60 H 350 C 390 60, 390 135, 350 135 H 280 M 345 135 L 395 240',
  'M 520 60 C 440 60, 440 240, 520 240 C 600 240, 600 60, 520 60 Z',
  'M 680 240 V 60 H 770 M 680 140 H 750',
  'M 830 240 L 900 60 L 970 240 M 853 180 H 947',
];

const INNER = [
  'M 120 220 V 80 H 165 C 190 80, 190 120, 165 120 H 120',
  'M 300 220 V 80 H 345 C 370 80, 370 115, 345 115 H 300 M 340 120 L 380 220',
  'M 520 80 C 460 80, 460 220, 520 220 C 580 220, 580 80, 520 80 Z',
  'M 700 220 V 80 H 755 M 700 135 H 740',
  'M 845 225 L 900 80 L 955 225 M 865 170 H 935',
];

export default function ProfaLaserWordmark({ compact = false, align = 'center', className = '' }) {
  const gradId = compact ? 'profaLaserGradCompact' : 'profaLaserGrad';
  const stops = compact
    ? ['--primary', '--curve-accent', '--primary']
    : ['--primary', '--curve-accent', '--secondary'];

  return (
    <svg
      viewBox="0 0 1000 300"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio={align === 'bottom' ? 'xMidYMax meet' : 'xMidYMid meet'}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={`hsl(var(${stops[0]}))`} />
          <stop offset="55%" stopColor={`hsl(var(${stops[1]}))`} />
          <stop offset="100%" stopColor={`hsl(var(${stops[2]}))`} />
        </linearGradient>
      </defs>

      <g strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* tihi obris koji ostaje vidljiv */}
        <g className={compact ? 'stroke-primary/40' : 'stroke-primary/20'} strokeWidth={6}>
          {OUTER.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
        <g className={compact ? 'stroke-primary/25' : 'stroke-primary/15'} strokeWidth={1.5}>
          {INNER.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {/* laserski iscrtani obris */}
        <g className="profa-laser profa-glow" stroke={`url(#${gradId})`} strokeWidth={6}>
          {OUTER.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
      </g>
    </svg>
  );
}