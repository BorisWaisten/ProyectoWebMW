'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Button from './ui/button';


export default function Hero({ title, description, image }) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Hook para detectar el scroll dentro de la sección
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Background image parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [.8, .3]);
  
  // Title animations
  const titleScale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], isMobile ? [1, 1, 0.9, 0.8] : [1.2, 1.05, 0.95, 0.85]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  
  // Description section animations
  const descriptionOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 1]);
  const descriptionScale = useTransform(scrollYProgress, [0.3, 0.5], isMobile ? [1, 1] : [1.05, 1]);
  const descriptionY = useTransform(scrollYProgress, [0.3, 0.5], [30, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative "
      data-hero-section
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="fixed h-[115vh] inset-0"
        style={{
          y: backgroundY,
          opacity: backgroundOpacity
        }}
      >
        <Image 
          src={image} 
          alt={title} 
          fill 
          className=" object-cover "
          priority
        />
      </motion.div>
      
      {/* Hero Section */}
      <div className="h-[600px] flex flex-col justify-center items-center text-center px-6 relative">
        <motion.div
          className="flex flex-col items-center"
          style={{
            scale: titleScale,
            opacity: titleOpacity,
            y: titleY
          }}
        >
          {/* Primer renglón - Waisten Martina */}
          <div className="hero-split-text text-5xl md:text-7xl lg:text-8xl leading-tight ">
            <span className="text-part left font-filosofia">Waisten</span>
            <span className="text-part right font-filosofia">Martina</span>
          </div>
          
          {/* Segundo renglón - diseñadora gráfica */}
          <div className="hero-split-text text-base uppercase md:text-xl lg:text-2xl leading-tight">
            <span className="text-part left font-century-gothic">Diseño Gráfico</span>
            <span className="text-part right font-century-gothic">y Comunicación Visual</span>
          </div>
        </motion.div>
      </div>

      {/* Description Section */}
      <motion.div 
        className="h-[650px] flex flex-col justify-center items-center text-center px-6"
        style={{
          opacity: descriptionOpacity,
          scale: descriptionScale,
          y: descriptionY
        }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Estudio de Diseño Gráfico
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl  mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              href="/branding" 
              size="lg"
            >
              Ver Proyectos
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
