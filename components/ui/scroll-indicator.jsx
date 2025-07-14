'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <div className="flex flex-col items-center space-y-2">
        <motion.div
          className="text-white/60 text-sm font-light"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.div>
        <motion.div
          className="w-px h-12 bg-white/30"
          style={{
            scaleY: scrollYProgress,
            transformOrigin: "top"
          }}
        />
      </div>
    </motion.div>
  );
} 