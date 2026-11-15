import { useId } from 'react';
import { motion } from 'framer-motion';
import { CURVE_W, CURVE_H, curveVariants, curveTones } from '@/lib/curveGeometry';

const draw = (delay) => ({
  initial: { pathLength: 0 },
  whileInView: { pathLength: 1 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 1.1, delay, ease: 'easeInOut' },
});

// Dekorativni separator - krivulje koje vizualno spajaju dvije susjedne sekcije.
export default function CurveDivider({ variant = 'wave', tone = 'light', className = '' }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const set = curveVariants[variant] ?? curveVariants.wave;
  const toneColors = curveTones[tone] ?? curveTones.light;
  const color = (slot) => `hsl(var(${toneColors[slot] ?? toneColors.a}))`;

  const fade = (id, slot) => (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" style={{ stopColor: color(slot) }} stopOpacity="0" />
      <stop offset="50%" style={{ stopColor: color(slot) }} stopOpacity="1" />
      <stop offset="100%" style={{ stopColor: color(slot) }} stopOpacity="0" />
    </linearGradient>
  );

  return (
    <div aria-hidden="true" className={`w-full pointer-events-none select-none ${className}`}>
      <svg
        viewBox={`0 0 ${CURVE_W} ${CURVE_H}`}
        preserveAspectRatio="none"
        className="block w-full h-12 sm:h-16"
      >
        <defs>
          {set.lines.map((l, i) => fade(`${uid}-l${i}`, l.color))}
          {set.band && fade(`${uid}-band`, set.band.color)}
        </defs>

        {set.band && (
          <motion.path
            d={set.band.d}
            fill={`url(#${uid}-band)`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: set.band.opacity }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        )}

        {set.lines.map((l, i) => (
          <g key={i}>
            <motion.path
              d={l.parallel.d}
              fill="none"
              stroke={`url(#${uid}-l${i})`}
              strokeWidth={l.parallel.width}
              strokeOpacity={l.parallel.opacity}
              strokeLinecap="round"
              {...draw(i * 0.12 + 0.06)}
            />
            <motion.path
              d={l.d}
              fill="none"
              stroke={`url(#${uid}-l${i})`}
              strokeWidth={l.width}
              strokeOpacity={l.opacity}
              strokeLinecap="round"
              {...draw(i * 0.12)}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}