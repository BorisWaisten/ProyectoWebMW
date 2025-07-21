'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import SectionContact from "@/components/section/section-contact"

export default function Contact() {
  const containerRef = useRef(null);

  // Hook para detectar el scroll dentro de la sección
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Background image parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 0.3]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="fixed h-[115vh] inset-0 "
        style={{
          y: backgroundY,
          opacity: backgroundOpacity
        }}
      >
        <Image 
          src="/images/hero.jpg" 
          alt="Fondo Contacto" 
          fill 
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative text-gray-900 min-h-screen flex items-center justify-center">
        <SectionContact />
      </div>
    </section>
  )
}