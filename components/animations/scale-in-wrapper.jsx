'use client'
// logos,iconos,testimonios
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ScaleInWrapper({ children, delay}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
