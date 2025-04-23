'use client'
//secciones completas,elementos de portafolios
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SlideUpWrapper({ children, delay}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
