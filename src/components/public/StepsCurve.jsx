import { useId, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Sidrišta krivulje (udio širine trake) - na širokim ekranima amplituda prati cik-cak kartice.
const ANCHORS_WIDE = { left: 0.29, right: 0.71 };
const ANCHORS_NARROW = { left: 0.42, right: 0.58 };

const draw = (delay) => ({
  initial: { pathLength: 0 },
  whileInView: { pathLength: 1 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 1.6, delay, ease: 'easeInOut' },
});

// Jedna neprekinuta krivulja koja se provlači iza kartica i povezuje korake 1-5.
export default function StepsCurve({ trackRef, cardRefs }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const [shape, setShape] = useState(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const measure = () => {
      const width = track.offsetWidth;
      if (!width) return;
      const anchors = window.innerWidth >= 768 ? ANCHORS_WIDE : ANCHORS_NARROW;
      const points = [];

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        // offsetTop je neovisan o transformacijama, pa je mjerenje stabilno i tijekom animacije.
        let y = 0;
        let node = card;
        while (node && node !== track) {
          y += node.offsetTop;
          node = node.offsetParent;
        }
        points.push({
          x: (i % 2 === 0 ? anchors.left : anchors.right) * width,
          y: y + card.offsetHeight / 2,
        });
      });

      if (points.length < 2) return;

      let d = `M ${points[0].x} ${points[0].y}`;
      points.slice(1).forEach((point, i) => {
        const prev = points[i];
        const mid = (prev.y + point.y) / 2;
        d += ` C ${prev.x} ${mid} ${point.x} ${mid} ${point.x} ${point.y}`;
      });

      setShape({ d, width, height: track.offsetHeight });
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [cardRefs, trackRef]);

  if (!shape) return null;

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full overflow-visible"
      viewBox={`0 0 ${shape.width} ${shape.height}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`${uid}-grad`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" />
        </linearGradient>
      </defs>

      {/* tanja paralelna krivulja - dubina */}
      <motion.path
        d={shape.d}
        transform="translate(0, 8)"
        fill="none"
        stroke={`url(#${uid}-grad)`}
        strokeWidth={1.2}
        strokeOpacity={0.18}
        strokeLinecap="round"
        {...draw(0.2)}
      />
      <motion.path
        d={shape.d}
        fill="none"
        stroke={`url(#${uid}-grad)`}
        strokeWidth={2.4}
        strokeOpacity={0.42}
        strokeLinecap="round"
        {...draw(0)}
      />
    </svg>
  );
}