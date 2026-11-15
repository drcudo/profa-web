import { motion } from 'framer-motion';

// Laserski snop u bojama PROFA logotipa (ljubičasta, svjetloplava i ružičasti akcent)
// koji pri izlasku uvodnog ekrana preleti slijeva udesno.
const BEAM_LINE =
  'linear-gradient(180deg, transparent, hsl(var(--secondary)) 12%, hsl(var(--primary)) 45%, hsl(var(--curve-accent)) 78%, transparent)';
const BEAM_GLOW =
  'linear-gradient(180deg, transparent, hsl(var(--secondary) / 0.35) 18%, hsl(var(--primary) / 0.5) 48%, hsl(var(--curve-accent) / 0.4) 80%, transparent)';

export default function LaserSweep({ active }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 w-[14vw]"
        initial={false}
        animate={active ? { x: '116vw', opacity: [0, 1, 1, 0] } : { x: '-16vw', opacity: 0 }}
        transition={{
          duration: 0.85,
          ease: [0.5, 0, 0.2, 1],
          opacity: { duration: 0.85, times: [0, 0.12, 0.7, 1] }
        }}
      >
        {/* široki sjaj snopa */}
        <div
          className="absolute inset-y-0 -left-[7vw] -right-[7vw] blur-2xl opacity-80"
          style={{ background: BEAM_GLOW }}
        />
        {/* tanka crta */}
        <div
          className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 opacity-70"
          style={{ background: BEAM_LINE }}
        />
        {/* jezgra snopa u bojama logotipa */}
        <div
          className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2"
          style={{
            background: BEAM_LINE,
            boxShadow:
              '0 0 18px hsl(var(--primary) / 0.85), 0 0 36px hsl(var(--secondary) / 0.6), 0 0 60px hsl(var(--curve-accent) / 0.4)'
          }}
        />
      </motion.div>
    </div>
  );
}