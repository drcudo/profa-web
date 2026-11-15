// Geometrija animiranih parametarskih krivulja za pozadinu hero sekcije.
// Krivulje krecu pri dnu, preko brijega iznad naslova, do doline pri dnu sekcije.

export const CURVES = [
  { offset: -1.8, phase: 0, speed: 1, opacity: 0.7 },
  { offset: -1.05, phase: 0.4, speed: 0.94, opacity: 0.45 },
  { offset: -0.35, phase: 0.8, speed: 1.04, opacity: 0.6 },
  { offset: 0.35, phase: 1.2, speed: 0.98, opacity: 0.45 },
  { offset: 1.05, phase: 1.6, speed: 0.92, opacity: 0.6 },
  { offset: 1.8, phase: 2, speed: 1.02, opacity: 0.7 },
];

// Jedna boja za sve krivulje - svjetlija sekundarna boja teme.
export const CURVE_COLOR = 'hsl(var(--secondary))';
export const CURVE_LINE_WIDTH = 1.8;
export const CURVE_TIME_STEP = 0.012 * 0.8;

const TAU = Math.PI * 2;
const POINTER_RADIUS = 180;
const POINTER_STRENGTH_X = 12;
const POINTER_STRENGTH_Y = 18;

// Profil vrpce po visini sekcije: pocetak pri dnu, brijeg iznad naslova, dol pri dnu.
const PROFILE = [
  { t: 0, y: 0.91 },
  { t: 0.14, y: 0.09 },
  { t: 0.88, y: 0.93 },
  { t: 1, y: 0.86 },
];

const smoothstep = (value) => value * value * (3 - 2 * value);

function profileY(t) {
  for (let i = 1; i < PROFILE.length; i += 1) {
    const from = PROFILE[i - 1];
    const to = PROFILE[i];
    if (t <= to.t) {
      const progress = smoothstep((t - from.t) / (to.t - from.t));
      return from.y + (to.y - from.y) * progress;
    }
  }
  return PROFILE[PROFILE.length - 1].y;
}

function curvePoint(t, curve, { width, height, time, pointer }) {
  const spacing = Math.max(11, height * 0.022);
  // Gusce u sredini sekcije, rastegnutije na krajevima.
  const density = 0.72 + 0.6 * (2 * t - 1) ** 2;

  const timePhase = time * curve.speed + curve.phase;
  const stack = curve.offset * spacing * density;

  const x = t * width + Math.cos(t * Math.PI * 2.5 - timePhase) * 3;
  const y = profileY(t) * height + Math.sin(t * Math.PI * 3 + timePhase) * 5 + stack;

  let resultX = x;
  let resultY = y;

  if (pointer.x > 0) {
    const dx = resultX - pointer.x;
    const dy = resultY - pointer.y;
    const distance = Math.hypot(dx, dy);

    if (distance < POINTER_RADIUS) {
      const force = (1 - distance / POINTER_RADIUS) ** 2;
      const angle = Math.atan2(dy, dx);
      resultX += Math.cos(angle) * force * POINTER_STRENGTH_X;
      resultY += Math.sin(angle) * force * POINTER_STRENGTH_Y;
    }
  }

  return { x: resultX, y: resultY };
}

const round = (value) => Math.round(value * 10) / 10;

export function buildCurvePath(curve, options) {
  const steps = Math.max(80, Math.floor(options.width / 6));
  const first = curvePoint(0, curve, options);
  let d = `M ${round(first.x)} ${round(first.y)}`;
  let previous = first;

  for (let i = 1; i <= steps; i++) {
    const point = curvePoint(i / steps, curve, options);
    const midX = (point.x + previous.x) / 2;
    const midY = (point.y + previous.y) / 2;
    d += ` Q ${round(previous.x)} ${round(previous.y)} ${round(midX)} ${round(midY)}`;
    previous = point;
  }

  return d;
}