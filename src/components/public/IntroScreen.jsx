import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ProfaLaserWordmark from './ProfaLaserWordmark';
import LaserSweep from './LaserSweep';

// Nakon klika laserski snop preleti udesno i uvodni se ekran povuče za njim.

export default function IntroScreen({ onDone }) {
  const reduceMotion = useReducedMotion();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  const start = () => {
    if (leaving) return;
    setLeaving(true);

    if (reduceMotion) {
      onDone();
      return;
    }

    window.setTimeout(onDone, 1150);
  };

  return (
    <div
      className="fixed inset-0 z-[100] select-none"
      role="button"
      tabIndex={0}
      aria-label="Uđi na stranicu"
      onClick={start}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          start();
        }
      }}>

      {/* Uvodni panel - pri izlasku se povuče udesno i otkrije stranicu */}
      <motion.div
        className="absolute inset-0 overflow-hidden bg-background"
        animate={leaving ? { x: '100%' } : { x: '0%' }}
        transition={{ duration: 0.8, delay: 0.28, ease: [0.65, 0, 0.35, 1] }}>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-secondary/40 blur-3xl" />
          <div className="absolute -bottom-28 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <motion.div
          className="relative flex h-full flex-col items-center justify-center gap-7 px-6"
          animate={
          leaving ?
          { opacity: 0, x: '6%', filter: 'blur(8px)' } :
          { opacity: 1, x: '0%', filter: 'blur(0px)' }
          }
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}>

          <motion.div
            data-profa-logo
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>

            <ProfaLaserWordmark className="w-[min(72vw,520px)] aspect-[10/3]" />
          </motion.div>

          <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-muted-foreground text-center">
            Online pripreme iz matematike
          </p>

          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Klikni za ulaz
          </span>
        </motion.div>
      </motion.div>

      {!reduceMotion && <LaserSweep active={leaving} />}
    </div>);

}