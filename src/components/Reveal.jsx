import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reveal-on-scroll wrapper. Children rise + fade + subtly de-blur into
 * place the first time they enter the viewport — the calm, deliberate
 * entrance used all over Apple / casperscaviar.
 *
 * Props:
 *   direction: 'up' | 'down' | 'left' | 'right'  (default 'up')
 *   delay:     seconds before this element starts (for staggering)
 *   className / style: passed straight through to the wrapper
 */
const OFFSETS = {
  up: { y: 60 },
  down: { y: -60 },
  left: { x: 60 },
  right: { x: -60 },
};

const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  style = {},
}) => {
  const offset = OFFSETS[direction] || OFFSETS.up;

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, filter: 'blur(8px)', ...offset }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
