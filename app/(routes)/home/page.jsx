'use client'

import FadeInWrapper from '@/components/animations/fade-in-wrapper'
import RevealWrapper from '@/components/animations/reveal-wrapper'
import Hero from '@/components/hero'
import SectionBranding from '@/components/section/section-branding'
import SectionInfo from '@/components/section/section-info'
import SectionInstagram from '@/components/section/section-instragram'
import Link from 'next/link'
import Image from 'next/image'

const infoHero = {
  title: "Diseño Gráfico",
  subtitle: "Creo identidades visuales que cuentan tu historia",
  description: "Diseñadora gráfica especializada en branding, identidad visual y diseño web. Soluciones únicas que reflejan la esencia de tu proyecto.",
  image: "/images/hero2.jpg"
}

const services = [
  {
    title: 'Identidad Visual',
    description: 'Diseño de logos, papelería comercial y manuales de marca que transmiten la personalidad única de tu negocio.',
    icon: '🎨',
    features: ['Logos y símbolos', 'Papelería comercial', 'Manual de marca', 'Aplicaciones']
  },
  {
    title: 'Diseño Web',
    description: 'Sitios web modernos y responsivos que convierten visitantes en clientes, con un diseño que refleja tu marca.',
    icon: '💻',
    features: ['Sitios responsivos', 'Landing pages', 'E-commerce', 'Mantenimiento']
  },
  {
    title: 'Redes Sociales',
    description: 'Contenido visual atractivo para redes sociales que fortalece tu presencia digital y conecta con tu audiencia.',
    icon: '📱',
    features: ['Posts e historias', 'Banners personalizados', 'Templates', 'Branding digital']
  },
];

const values = [
  {
    title: "Trabajo Personalizado",
    description: "Cada proyecto es único. Me involucro en tu historia para crear diseños que realmente te representen."
  },
  {
    title: "Comunicación Clara",
    description: "Mantengo una comunicación constante y transparente durante todo el proceso creativo."
  },
  {
    title: "Resultados que Convierten",
    description: "No solo diseño bonito, diseño estratégico que ayuda a tu negocio a crecer y destacar."
  }
];

const featuredProjects = [
  {
    title: "Identidad Visual CAM",
    category: "Branding",
    image: "/images/branding.webp",
    description: "Diseño completo de identidad visual"
  },
  {
    title: "Papelería Fulanitas", 
    category: "Branding",
    image: "/images/branding-2.webp",
    description: "Papelería comercial completa"
  },
  {
    title: "Lucía Pastelería",
    category: "Branding", 
    image: "/images/branding-3.webp",
    description: "Identidad para pastelería"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Descubrimiento",
    description: "Conversamos sobre tu proyecto, objetivos y visión para entender perfectamente lo que necesitas."
  },
  {
    number: "02", 
    title: "Conceptualización",
    description: "Desarrollo de conceptos creativos y propuestas iniciales basadas en tu brief."
  },
  {
    number: "03",
    title: "Diseño",
    description: "Creación de la identidad visual completa con todas las aplicaciones necesarias."
  },
  {
    number: "04",
    title: "Entrega",
    description: "Entrega de archivos finales y guías para el uso correcto de tu nueva identidad."
  }
];

export default function Home() {
  return (
    <main>
      <Hero image={infoHero.image} title={infoHero.title} description={infoHero.description}/>   
    </main>
  )
}
