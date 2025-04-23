'use client'

import FadeInWrapper from '@/components/fade-in-wrapper'
import Hero from '@/components/hero'
import Section from '@/components/section'

export default function Home() {
  return (
    <main className="bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] font-serif space-y-32">
      <FadeInWrapper>
        <Hero />
      </FadeInWrapper>

      <FadeInWrapper delay={0.3}>
        <Section
          title="Diseñamos con alma"
          description="Creemos en el poder de las ideas y en la belleza de lo simple. Creamos identidades visuales que transmiten emociones."
          image="/branding.jpg"
        />
      </FadeInWrapper>

      <FadeInWrapper delay={0.3}>
        <Section
          title="Nuestro enfoque"
          description="Desde el concepto hasta la ejecución, cada paso está guiado por la sensibilidad estética y el detalle técnico."
          image="/studio.jpg"
          reverse
        />
      </FadeInWrapper>
    </main>
  )
}
