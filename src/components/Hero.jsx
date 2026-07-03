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

  // Letter-by-letter kinetic reveal for the headline.
  // Words are kept as intact inline-block groups so the line wraps *between*
  // words on narrow screens (never mid-word), while each letter still flips
  // in with a staggered delay driven by a running index.
  let letterIndex = 0;
  const renderWord = (word, className = '') => (
    <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
      {word.split('').map((char, ci) => {
        const delay = 0.25 + letterIndex * 0.05;
        letterIndex += 1;
        return (
          <motion.span
            key={ci}
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
            style={{ display: 'inline-block', transformOrigin: 'bottom' }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );

  const renderPhrase = (text, className = '') =>
    text.split(' ').map((word, wi) => (
      <React.Fragment key={`${className}-${wi}`}>
        {wi > 0 && ' '}
        {renderWord(word, className)}
      </React.Fragment>
    ));

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
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          paddingInline: '20px',
          boxSizing: 'border-box',
        }}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-muted mb-4 block"
          style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: 'clamp(0.68rem, 2.6vw, 0.9rem)' }}
        >
          Full-Stack Developer
        </motion.span>

        <h1
          className="text-6xl md:text-8xl font-bold mb-4"
          style={{ fontSize: 'clamp(2.25rem, 9vw, 5.5rem)', perspective: '800px', lineHeight: 1.1, overflowWrap: 'break-word' }}
        >
          {renderPhrase("I'm")} {renderPhrase('Sara Dawood', 'gradient-text')}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl text-muted max-w-2xl mx-auto mb-8"
          style={{ maxWidth: '640px', margin: '0 auto 32px', lineHeight: '1.7', fontSize: 'clamp(0.95rem, 3.6vw, 1.25rem)' }}
        >
          I'm a results-driven Full-Stack Developer with 3+ years building scalable web applications — React, Next.js, TypeScript and Redux on the front end, Python, FastAPI and Odoo on the back.
          I care about clean architecture, performance, and delivering e-commerce, dashboard and ERP experiences that drive real business value.
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
          <a href="https://drive.google.com/file/d/1Z1dHPy8ZwFQUa7nV9A2lbKDP5hI0Gff6/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-secondary">
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
