'use client'

import FadeInWrapper from '@/components/animations/fade-in-wrapper'
import RevealWrapper from '@/components/animations/reveal-wrapper'
import Hero from '@/components/hero'
import SectionBranding from '@/components/section/section-branding'
import SectionInfo from '@/components/section/section-info'
import SectionInstagram from '@/components/section/section-instragram'
import Link from 'next/link'

const infoHero = {
  title: "Diseño Gráfico con Alma",
  subtitle: "Creo identidades visuales que cuentan tu historia",
  description: "Soy diseñadora gráfica independiente especializada en branding y diseño de identidad visual. Trabajo de forma cercana y personal para crear soluciones únicas que reflejen la esencia de tu proyecto.",
  image: "/images/hero.jpg"
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
    <section>
      <div className='mb-10'>
        <Hero image={infoHero.image} title={infoHero.title} description={infoHero.description}/>
      </div>
      
      <RevealWrapper delay={0.3}>
        <div className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué trabajar conmigo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Como diseñadora independiente, ofrezco un servicio personalizado y cercano
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <FadeInWrapper key={index} delay={index * 0.2}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeInWrapper>
            ))}
          </div>
        </div>
      </RevealWrapper>
      
      <RevealWrapper delay={0.3}>
        <div className="py-20 px-4 max-w-7xl mx-auto bg-gray-50">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trabajos destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una muestra de proyectos donde he puesto mi creatividad al servicio de marcas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <FadeInWrapper key={index} delay={index * 0.2}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0  group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
                          Ver proyecto
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </FadeInWrapper>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/our-work"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              Ver todos los proyectos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </RevealWrapper>
      
      <RevealWrapper delay={0.3}>  
        <SectionBranding
          title="Diseño que cuenta historias"
          description="Creo identidades visuales que van más allá del diseño. Cada elemento está pensado para transmitir la esencia y valores de tu marca."
          image="/images/branding-4.webp"
        />
      </RevealWrapper>
      
      <RevealWrapper delay={0.3}>
        <SectionBranding
          title="Proceso creativo cercano"
          description="Trabajo de forma colaborativa, escuchando tus necesidades y objetivos para crear soluciones que realmente funcionen para tu negocio."
          image="/images/branding-5.webp"
          reverse
        />
      </RevealWrapper>
      
      <RevealWrapper delay={0.3}>
        <SectionBranding
          title="Resultados que destacan"
          description="Desde el concepto inicial hasta la entrega final, cada paso está enfocado en crear diseños que te ayuden a destacar en el mercado."
          image="/images/branding-6.webp"
        />
      </RevealWrapper>

      <RevealWrapper delay={0.3}>
        <div className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mi proceso de trabajo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un enfoque estructurado que garantiza resultados excepcionales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <FadeInWrapper key={index} delay={index * 0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeInWrapper>
            ))}
          </div>
        </div>
      </RevealWrapper>

      <RevealWrapper delay={0.3}>
        <div className="py-20 px-4 max-w-7xl mx-auto bg-gray-50">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Servicios que ofrezco
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones creativas adaptadas a las necesidades de tu proyecto
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInWrapper key={index} delay={index * 0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInWrapper>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              Iniciar proyecto
            </Link>
          </div>
        </div>
      </RevealWrapper>
      
      <SectionInstagram />
    </section>
  )
}
