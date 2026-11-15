// Geometrija dekorativnih krivulja koje spajaju sekcije na javnim stranicama.

export const CURVE_W = 1440;
export const CURVE_H = 120;

const SAMPLES = 180;

const toPath = (fn, samples = SAMPLES) => {
  let d = '';
  for (let i = 0; i <= samples; i += 1) {
    const t = i / samples;
    d += `${i === 0 ? 'M' : 'L'}${(t * CURVE_W).toFixed(1)} ${fn(t).toFixed(1)} `;
  }
  return d.trim();
};

const toBand = (topFn, bottomFn, samples = SAMPLES) => {
  let d = '';
  for (let i = 0; i <= samples; i += 1) {
    const t = i / samples;
    d += `${i === 0 ? 'M' : 'L'}${(t * CURVE_W).toFixed(1)} ${topFn(t).toFixed(1)} `;
  }
  for (let i = samples; i >= 0; i -= 1) {
    const t = i / samples;
    d += `L${(t * CURVE_W).toFixed(1)} ${bottomFn(t).toFixed(1)} `;
  }
  return `${d}Z`;
};

// sinusni val - zadani broj ciklusa, amplituda, faza i srednja linija
const wave = (cycles, amp, phase = 0, mid = CURVE_H / 2) =>
  (t) => mid + amp * Math.sin(t * Math.PI * 2 * cycles + phase);

// jedan luk preko cijele širine
const bow = (amp, lift = 0, phase = 0) =>
  (t) => CURVE_H / 2 - lift - amp * Math.cos(t * Math.PI + phase);

const shifted = (fn, dy) => (t) => fn(t) + dy;

// Svaka krivulja dobiva i svoju paralelnu krivulju - tanju i blažu kopiju iste putanje.
const line = (fn, { color, width, opacity, gap = 9 }) => ({
  color,
  width,
  opacity,
  d: toPath(fn),
  parallel: {
    d: toPath(shifted(fn, gap)),
    width: width - 0.6,
    opacity: opacity * 0.65,
  },
});

export const curveTones = {
  light: { a: '--primary', b: '--secondary', c: '--curve-accent' },
  dark: { a: '--secondary', b: '--primary-foreground', c: '--curve-accent' },
};

export const curveVariants = {
  wave: {
    lines: [
      line(wave(1.5, 32), { color: 'a', width: 2.8, opacity: 0.7 }),
      line(wave(2.5, 16, 1.4), { color: 'b', width: 2.4, opacity: 0.65 }),
      line(wave(3, 20, 0.8, 46), { color: 'c', width: 2.2, opacity: 0.55 }),
      line(wave(4, 8, 2.8), { color: 'a', width: 1.6, opacity: 0.35 }),
    ],
  },
  bow: {
    lines: [
      line(bow(36), { color: 'a', width: 2.8, opacity: 0.65 }),
      line(bow(24, 14, 0.9), { color: 'b', width: 2.4, opacity: 0.62 }),
      line(bow(20, 26, 0.5), { color: 'c', width: 2.2, opacity: 0.5 }),
      line(bow(40, -6, -0.7), { color: 'a', width: 1.6, opacity: 0.35 }),
    ],
  },
  ribbon: {
    band: { d: toBand(wave(1.5, 26, 0, 58), wave(1.5, 26, 0, 74)), color: 'a', opacity: 0.18 },
    lines: [
      line(wave(1.5, 26, 0, 58), { color: 'a', width: 2.6, opacity: 0.7, gap: 14 }),
      line(wave(1.5, 26, 0, 74), { color: 'b', width: 2.2, opacity: 0.55 }),
      line(wave(2.5, 14, 2.4, 66), { color: 'c', width: 2, opacity: 0.5 }),
    ],
  },
};