'use client'
//textos.largos.frases.bloquesdecontenido
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function FadeInWrapper({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}