'use client'

import FadeInWrapper from '@/components/animations/fade-in-wrapper'
import RevealWrapper from '@/components/animations/reveal-wrapper'
import SlideUpWrapper from '@/components/animations/slide-up-wrapper'
import Hero from '@/components/hero'
import SectionBranding from '@/components/section/section-branding'
import SectionInfo from '@/components/section/section-info'
import SectionInstagram from '@/components/section/section-instragram'
export default function Home() {
  return (
    <main className="bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] font-serif ">
      <div className='mb-10'>
        <FadeInWrapper>
          <Hero />
        </FadeInWrapper>
      </div>
      <RevealWrapper delay={0.3}>  
        <SectionBranding
          title="Diseñamos con alma"
          description="Creemos en el poder de las ideas y en la belleza de lo simple. Creamos identidades visuales que transmiten emociones."
          image="/branding.jpg"
        />
      </RevealWrapper>
      <RevealWrapper delay={0.3}>
     
        <SectionBranding
          title="Nuestro enfoque"
          description="Desde el concepto hasta la ejecución, cada paso está guiado por la sensibilidad estética y el detalle técnico."
          image="/branding-2.jpg"
          reverse
        />
      </RevealWrapper>
        <RevealWrapper delay={0.3}>
        <SectionBranding
          title="Nuestro enfoque"
          description="Desde el concepto hasta la ejecución, cada paso está guiado por la sensibilidad estética y el detalle técnico."
          image="/branding-3.jpg"
        />
        
        </RevealWrapper>
        <SectionInfo
          title="Nosotras somos el estudio"
          subtitle="Un equipo creativo con alma"
          description="Somos un estudio liderado por mujeres apasionadas por el diseño. Combinamos sensibilidad estética, investigación y estrategia para contar historias visuales con profundidad."
          image="/about.jpg"
        />
        <SectionInstagram />
   </main>
  )
}
