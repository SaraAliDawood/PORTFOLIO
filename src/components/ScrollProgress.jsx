import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin gradient bar pinned to the very top that fills as you scroll
 * the page — the little "you are here" cue Apple/Casper use.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 100,
        background:
          'linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
        boxShadow: '0 0 12px var(--primary-glow)',
      }}
    />
  );
};

export default ScrollProgress;
