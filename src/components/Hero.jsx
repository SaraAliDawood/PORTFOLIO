import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '/public/hero_v2.png';

const Hero = () => {
  const ref = useRef(null);

  // Track scroll from when the hero fills the screen until it leaves the top.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Background: slow parallax drift + gentle zoom (moves slower than content).
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.35]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.4, 0]);

  // Foreground copy: rises up, fades out and blurs away as you scroll.
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.94]);
  const contentBlur = useTransform(scrollYProgress, [0, 0.6], [0, 10]);
  const blurFilter = useTransform(contentBlur, (b) => `blur(${b}px)`);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center bg-aurora"
      style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
    >
      <motion.div
        style={{
          y: bgY,
          scale: bgScale,
          opacity: bgOpacity,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px)',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      />

      <motion.div
        className="relative z-10"
        style={{
          y: contentY,
          opacity: contentOpacity,
          scale: contentScale,
          filter: blurFilter,
          paddingBlock: 'var(--nav-height)',
          marginTop: 'var(--nav-height)',
        }}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-muted mb-4 block"
          style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.9rem' }}
        >
          Front-End Developer & Odoo Specialist
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-4"
          style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)' }}
        >
          I'm <span className="gradient-text">Sara Dawood</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl text-muted max-w-2xl mx-auto mb-8"
          style={{ margin: '0 auto 32px', lineHeight: '1.8' }}
        >
          I am a results-driven Front-End Developer with 3+ years of excellence in React, Redux, and Odoo ERP customization.
          I take pride in optimizing performance, improving SEO, and delivering high-quality user experiences that drive real business value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="https://wa.me/971502542590" target="_blank" rel="noreferrer" className="btn-primary">
            Get in Touch
          </a>
          <a href="https://drive.google.com/file/d/1_k5yoIlgo4aT0kEVj_r0sBc_a64BEH09/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-secondary">
            View Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue — fades out together with the hero copy */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          opacity: contentOpacity,
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          fontSize: '0.75rem',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          whiteSpace: 'nowrap',
        }}
      >
        Scroll ↓
      </motion.div>
    </div>
  );
};

export default Hero;
