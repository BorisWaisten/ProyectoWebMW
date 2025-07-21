'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const brandingProjects = [
  {
    id: 0,
    title: "Odontología Andrea",
    category: "Branding Corporativo",
    image: "/images/branding-7.webp",
    description: "Diseño completo de identidad visual para consultorio de odontología",
    year: "2025",
    link: "https://www.behance.net/gallery/229655299/Diseno-de-Identidad-Visual-Odontologa-Andrea"
  },
  {
    id: 1,
    title: "CAM",
    category: "Branding Corporativo",
    image: "/images/branding.webp",
    description: "Diseño completo de identidad visual para consultorio odontológico",
    year: "2025",
    link: "https://www.behance.net/gallery/224163101/Identidad-Visual-CAM"
  },
  {
    id: 2,
    title: "Fulanitas Bordados",
    category: "Branding Corporativo",
    image: "/images/branding-2.webp",
    description: "Diseño completo de identidad visual para empresa de bordados",
    year: "2024",
    link: "https://www.behance.net/gallery/205539953/Papeleria-Fulanitas"
  },
  {
    id: 3,
    title: "Date un Gusto",
    category: "Branding Gastronómico",
    image: "/images/branding-8.webp",
    description: "Diseño completo de identidad visual para comercio gastronómico",
    year: "2024",
    link: "https://www.behance.net/gallery/168403195/Date-un-Gusto-Identidad-Visual"
  },
  {
    id: 4,
    title: "Lucía Pastelería",
    category: "Branding Gastronómico",
    image: "/images/branding-3.webp",
    description: "Identidad visual para pastelería artesanal",
    year: "2023",
    link: "https://www.behance.net/gallery/194614613/Diseno-de-Identidad-Visual-Lucia-Pasteleria"
  },
  {
    id: 8,
    title: "VMC Distribuciones",
    category: "Branding Empresarial",
    image: "/images/branding-4.webp",
    description: "Identidad corporativa para empresa de distribución",
    year: "2023",
    link: "https://www.behance.net/gallery/176236291/Identidad-Visual-VMC-Distribuciones"
  },
  {
    id: 5,
    title: "Bourlot Implementos Avícolas",
    category: "Branding Empresarial",
    image: "/images/branding-5.webp",
    description: "Diseño de marca para empresa de implementos avícolas",
    year: "2023",
    link: "https://www.behance.net/gallery/186199319/Cambio-de-Imagen"
  },
  {
    id: 6,
    title: "Lotus",
    category: "Branding Elegante",
    image: "/images/branding-6.webp",
    description: "Identidad visual minimalista y elegante",
    year: "2023",
    link: "https://www.behance.net/gallery/147769819/Identidad-Lotus"
  },
]

export default function Branding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-30">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {brandingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/50 shadow-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-300" />
                <Link href={project.link} target="_blank" className="absolute inset-0 flex items-center justify-center"></Link>
              </div>
              
              {/* Project Info */}
              <div className="mt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-[rgb(var(--color-primary))] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ¿Listo para crear tu identidad visual?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformemos tu marca en una experiencia visual memorable
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/contact"
              className="inline-block bg-white/8 backdrop-blur-sm border border-white/50 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 hover:border-white/80 transition-all duration-300 shadow-sm"
            >
              Comenzar Proyecto
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}