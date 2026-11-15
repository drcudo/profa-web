import { useEffect, useRef } from 'react';
import { CURVES, CURVE_COLOR, CURVE_LINE_WIDTH, CURVE_TIME_STEP, buildCurvePath } from '@/lib/heroCurves';

// Animacija parametarskih krivulja kao SVG pozadina hero sekcije.
export default function HeroCurvesBackground() {
  const svgRef = useRef(null);
  const pathRefs = useRef([]);

  useEffect(() => {
    const svg = svgRef.current;
    const host = svg.parentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -1000, y: -1000, tx: -1000, ty: -1000 };
    let width = 0;
    let height = 0;
    let time = 0;
    let frame = 0;

    const resize = () => {
      width = host.clientWidth;
      height = host.clientHeight;
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    };

    const draw = () => {
      if (!reduceMotion) time += CURVE_TIME_STEP;
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;

      const options = { width, height, time, pointer };
      CURVES.forEach((curve, index) => {
        pathRefs.current[index]?.setAttribute('d', buildCurvePath(curve, options));
      });
    };

    const loop = () => {
      draw();
      if (!reduceMotion) frame = requestAnimationFrame(loop);
    };

    const onPointerMove = (event) => {
      const source = event.touches?.[0] ?? event;
      const rect = svg.getBoundingClientRect();
      pointer.tx = source.clientX - rect.left;
      pointer.ty = source.clientY - rect.top;
    };

    const onPointerLeave = () => {
      pointer.tx = -1000;
      pointer.ty = -1000;
    };

    resize();
    loop();

    const observer = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw();
    });
    observer.observe(host);

    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseleave', onPointerLeave);
    window.addEventListener('touchmove', onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseleave', onPointerLeave);
      window.removeEventListener('touchmove', onPointerMove);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      viewBox="0 0 1200 500"
      className="absolute inset-0 z-0 w-full h-full pointer-events-none"
    >
      {CURVES.map((curve, index) => (
        <path
          key={index}
          ref={(element) => {
            pathRefs.current[index] = element;
          }}
          fill="none"
          stroke={CURVE_COLOR}
          strokeWidth={CURVE_LINE_WIDTH}
          strokeOpacity={curve.opacity}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}