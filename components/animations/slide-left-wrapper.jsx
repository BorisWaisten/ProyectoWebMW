'use client'
//titulos o subtitulos
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
export default function SlideLeftWrapper({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

