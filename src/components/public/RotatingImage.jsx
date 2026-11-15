import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { Image } from '@/components/ui/image';

// Slika koja se zakreće oko okomite osi u ritmu skrolanja - naprijed pri skrolu prema dolje,
// natrag pri skrolu prema gore.
export default function RotatingImage({ src, alt }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });

  const rotateY = useTransform(progress, [0, 0.5, 1], [42, 0, -42]);
  const scale = useTransform(progress, [0, 0.5, 1], [1.14, 1.02, 1.14]);

  return (
    <div ref={ref} className="aspect-[16/9] overflow-hidden bg-secondary/20" style={{ perspective: 900 }}>
      <motion.div style={reduceMotion ? undefined : { rotateY, scale }} className="w-full h-full">
        <Image src={src} alt={alt} fittingType="fill" className="w-full h-full" />
      </motion.div>
    </div>
  );
}