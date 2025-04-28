'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/hero';

const services = [
  {
    title: 'Branding de Marcas',
    description: 'Creamos identidades visuales únicas y memorables que transmiten el alma de tu proyecto.'
  },
  {
    title: 'Diseño Web',
    description: 'Diseñamos sitios web modernos, responsivos y optimizados para una experiencia de usuario fluida.'
  },
  {
    title: 'Frames Personales',
    description: 'Desarrollamos piezas gráficas personalizadas que reflejan tu esencia o la de tu negocio.'
  },
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen overflow-hidden bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] mx-auto">
        <Hero
          image="/images/hero-services.jpg"
          title="Servicios"
          description="Ofrecemos una amplia gama de servicios para ayudarte a destacar en el mercado."
        />
      <div className="space-y-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-md"
          >
            <button 
              onClick={() => toggleService(index)}
              className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              <span className="text-xl font-semibold">{service.title}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 500 }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="px-6 pb-6 text-gray-600 overflow-hidden"
                >
                  <div className="py-2">
                    {service.description}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
