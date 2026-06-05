import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-aurora" style={{ paddingBlock: 'var(--nav-height)', marginTop: 'var(--nav-height)' }}>
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 z-0 opacity-40" 
        style={{ 
          backgroundImage: 'url(/hero_v2.png)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px)'
        }}
      ></motion.div>
      
      <div className="relative z-10">
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
      </div>
    </div>
  );
};

export default Hero;
