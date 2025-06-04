'use client';

import { motion } from 'framer-motion';

export default function ScrollAnimate({
  children,
  className = '',
  variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  transition = { duration: 0.6, ease: 'easeOut' },
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
