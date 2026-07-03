import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Buttery, weighted momentum scrolling (the "Apple / Casper" feel).
 * Lenis takes over the wheel/touch scroll and eases it, while still
 * driving the real window scroll position — so Framer Motion's
 * useScroll() keeps working for all our scroll-linked animations.
 *
 * Fully disabled when the user prefers reduced motion.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      // No smooth scroll, but still honour deep links.
      if (window.location.hash.length > 1) {
        const target = document.querySelector(window.location.hash);
        if (target) setTimeout(() => target.scrollIntoView(), 300);
      }
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,           // higher = more "weight"/glide
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Smooth-scroll for in-page anchor links (#experience, #projects…)
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -100 }); // clear the fixed navbar
    };
    document.addEventListener('click', handleAnchorClick);

    // Deep-link: if the page loads with a hash, scroll to that section once
    // the content has mounted (Lenis owns scrolling, so use it).
    if (window.location.hash.length > 1) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => lenis.scrollTo(target, { offset: -100, immediate: true }), 300);
      }
    }

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);
}
