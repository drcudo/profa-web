import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Dodaje klasu "is-visible" elementima s klasom "reveal" kad uđu u prikaz,
// a uklanja je kad izađu - tako se animacija ponavlja pri svakom skrolu.
export default function RevealOnScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.reveal'));
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}