const STAGGER = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

// Vraća klase za postupno pojavljivanje elementa u nizu.
export function revealClass(index = 0, extra = '') {
  const stagger = STAGGER[index % STAGGER.length];
  return `reveal ${stagger} ${extra}`.replace(/\s+/g, ' ').trim();
}