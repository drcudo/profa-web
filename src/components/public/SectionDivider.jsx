// Moderni grafički separatori između sekcija - povezuju sadržaj u cjelinu.
// Varijante: wave, symbols, dots, curve

const PRIMARY = 'hsl(227 11% 24%)';
const ACCENT = 'hsl(355 100% 75%)';
const MUTED = 'hsl(227 8% 40%)';
const BLUE = 'hsl(205 70% 55%)';

export default function SectionDivider({ variant = 'wave', className = '' }) {
  return null;









}

/* 6. Valna frekvencijska vizualizacija - preklapajući sinusni valovi s blještavom sredinom */
function Frequency() {
  const COLOR = '#FF808B';
  const waves = [
  { phase: 0, amp: 26, cycles: 3, opacity: 0.9, width: 2 },
  { phase: 1.0, amp: 18, cycles: 5, opacity: 0.7, width: 1.6 },
  { phase: 2.0, amp: 32, cycles: 2, opacity: 0.8, width: 2.4 },
  { phase: 3.2, amp: 14, cycles: 7, opacity: 0.55, width: 1.4 },
  { phase: 4.4, amp: 22, cycles: 4, opacity: 0.65, width: 1.8 },
  { phase: 5.6, amp: 10, cycles: 9, opacity: 0.45, width: 1.2 }];

  const makePath = (phase, amp, cycles) => {
    const steps = 200;
    const center = 40;
    const width = 1440;
    let d = '';
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = t * width;
      const y = center + amp * Math.sin(t * Math.PI * 2 * cycles + phase);
      d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)} `;
    }
    return d;
  };
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
      <defs>
        <linearGradient id="freqGlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLOR} stopOpacity="0" />
          <stop offset="50%" stopColor={COLOR} stopOpacity="0.18" />
          <stop offset="100%" stopColor={COLOR} stopOpacity="0" />
        </linearGradient>
        <filter id="freqBlur" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>
      {/* blještava središnja vrpca */}
      <rect x="0" y="34" width="1440" height="12" fill="url(#freqGlow)" />
      <line x1="0" y1="40" x2="1440" y2="40" stroke={COLOR} strokeOpacity="0.25" strokeWidth="1" />
      {/* zamućeni sloj za bloom efekt */}
      <g filter="url(#freqBlur)" opacity="0.6">
        {waves.map((w, i) =>
        <path key={`b${i}`} d={makePath(w.phase, w.amp, w.cycles)} fill="none" stroke={COLOR} strokeWidth={w.width * 2} strokeOpacity={w.opacity * 0.5} strokeLinecap="round" />
        )}
      </g>
      {/* oštri valovi */}
      {waves.map((w, i) =>
      <path key={i} d={makePath(w.phase, w.amp, w.cycles)} fill="none" stroke={COLOR} strokeWidth={w.width} strokeOpacity={w.opacity} strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>);

}

/* 1. Pet isprepletenih valova koji se međusobno sijeku - različite faze i amplitude */
function Wave() {
  const waves = [
  { color: PRIMARY, phase: 0, amp: 20, cycles: 3 },
  { color: ACCENT, phase: 1.2, amp: 9, cycles: 5 },
  { color: BLUE, phase: 2.5, amp: 24, cycles: 2 },
  { color: 'hsl(152 56% 40%)', phase: 3.7, amp: 7, cycles: 7 },
  { color: 'hsl(32 95% 50%)', phase: 5.0, amp: 16, cycles: 4 }];

  const makePath = (phase, amp, cycles) => {
    const steps = 160;
    const center = 30;
    const width = 1440;
    let d = '';
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = t * width;
      const y = center + amp * Math.sin(t * Math.PI * 2 * cycles + phase);
      d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)} `;
    }
    return d;
  };
  return (
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 sm:h-14">
      {waves.map((w, i) =>
      <path
        key={i}
        d={makePath(w.phase, w.amp, w.cycles)}
        fill="none"
        stroke={w.color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.65" />

      )}
    </svg>);

}

/* 2. Niz matematičkih simbola s gradijentnom linijom */
function Symbols() {
  const symbols = ['π', '∑', '∫', '√', '∞', 'Δ', 'θ', 'λ'];
  return (
    <div className="flex items-center gap-4 sm:gap-5 py-2">
      <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-primary/30" />
      <div className="flex items-center gap-4 sm:gap-6">
        {symbols.map((s, i) =>
        <span
          key={s}
          className={`font-mono text-2xl sm:text-3xl transition-colors ${
          i % 2 === 0 ? 'text-primary/40' : 'text-accent/60'}`
          }>
          
            {s}
          </span>
        )}
      </div>
      <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-primary/30" />
    </div>);

}

/* 3. Niz točaka s gradijentom - minimalistički ritem */
function Dots() {
  return null;


























}

/* 4. Asimetrična krivulja - dinamičan vizualni prijelaz */
function Curve() {
  return null;













}

/* 5. A-razinske matematičke formule - vodoravni niz s gradijentnim linijama */
function Formulas() {
  const formulas = [
  'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
  '\\sin^2 x + \\cos^2 x = 1',
  "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
  '\\log_a x = \\frac{\\ln x}{\\ln a}',
  '\\int f(x) \\, dx',
  'e^{i\\pi} + 1 = 0'];

  return (
    <div className="flex items-center gap-3 sm:gap-4 py-1 overflow-x-auto">
      <span className="h-px w-10 sm:w-16 shrink-0 bg-gradient-to-r from-transparent to-primary/25" />
      <div className="flex items-center gap-3 sm:gap-5">
        {formulas.map((f, i) =>
        <span
          key={f}
          className={`font-mono text-xs sm:text-sm whitespace-nowrap transition-colors ${
          i % 2 === 0 ? 'text-primary/45' : 'text-accent/60'}`
          }>
          
            {f}
          </span>
        )}
      </div>
      <span className="h-px w-10 sm:w-16 shrink-0 bg-gradient-to-l from-transparent to-primary/25" />
    </div>);

}