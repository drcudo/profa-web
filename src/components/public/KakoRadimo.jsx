import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import RotatingImage from '@/components/public/RotatingImage';
import StepsCurve from '@/components/public/StepsCurve';

const steps = [
{
  image: '/images/kako-radimo-f9c8cdbd6.jpg',
  title: 'Predavanja',
  text: 'Gradivo obrađujemo cjelinu po cjelinu, online uživo, uz jasna objašnjenja i primjere koje odmah rješavamo zajedno.'
},
{
  image: '/images/kako-radimo-41dd97fc4.jpg',
  title: 'Domaće zadaće',
  text: 'Nakon svakog predavanja slijedi zadaća. Rješavaš je samostalno, a ja je pregledavam i dajem povratnu informaciju o svakom zadatku.'
},
{
  image: '/images/kako-radimo-1fdf25311.jpg',
  title: 'Provjera cijele cjeline',
  text: 'Nakon svake cjeline provjeravamo znanje cijele cjeline, a ne samo jedne lekcije kao kod zadaće.'
},
{
  image: '/images/kako-radimo-4771051c6.jpg',
  title: 'Probni ispiti',
  text: 'Kad završi ciklus predavanja, rješavaš probne ispite.'
},
{
  image: '/images/kako-radimo-66a53a408.jpg',
  title: 'Besplatne vježbe',
  text: 'Uz sve to dobivaš dodatne besplatne vježbe na zadatcima s prošlih matura i ispita.'
}];


export default function KakoRadimo() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 75%', 'end 55%']
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(progress, 'change', (v) => {
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length))));
  });

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12 reveal">
        <h2 className="font-display text-3xl font-bold text-primary">Kako radimo?</h2>
        <p className="text-muted-foreground mt-2">Pet koraka od prvog predavanja do sigurnog rezultata na ispitu.</p>
      </div>

      <div ref={trackRef} className="relative">
        {/* prazna crta */}
        <div className="absolute top-0 bottom-0 left-11 sm:left-20 -translate-x-1/2 w-[3px] rounded-full bg-border" />
        {/* crta koja se puni skrolom */}
        <motion.div
          style={{ scaleY: progress }}
          className="absolute top-0 bottom-0 left-11 sm:left-20 -translate-x-1/2 w-[3px] rounded-full origin-top bg-gradient-to-b from-primary to-secondary" />
        

        <StepsCurve trackRef={trackRef} cardRefs={cardRefs} />

        {steps.map((s, i) =>
        <div
          key={s.title}
          className="grid grid-cols-[44px_1fr] sm:grid-cols-[80px_1fr] gap-5 sm:gap-10 pb-10 md:pb-20 lg:pb-24">
          
            <div className="pt-1">
              <span
              className={`font-display font-bold leading-none tabular-nums text-3xl sm:text-5xl transition-colors duration-500 ${
              i <= active ? 'text-primary' : 'text-primary/20'}`
              }>
              
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="relative w-full">
              <motion.article
              ref={(el) => {cardRefs.current[i] = el;}}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className={`w-full md:max-w-[45%] lg:max-w-[420px] bg-background border rounded-3xl overflow-hidden transition-all duration-500 ${
              i % 2 === 1 ? 'md:ml-auto' : 'md:mr-auto'} ${
              i === active ? 'border-primary/40 shadow-lg' : 'border-border shadow-sm'}`}>
              
                <RotatingImage src={s.image} alt={s.title} />
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-primary">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.text}</p>
                </div>
              </motion.article>
            </div>
          </div>
        )}
      </div>
    </section>);

}