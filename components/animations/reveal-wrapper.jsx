'use client'
//ideal para experiencias mas interactivas
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function RevealWrapper({ children,delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
