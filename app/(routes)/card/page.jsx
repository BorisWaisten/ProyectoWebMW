'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const packagingProjects = [
  {
    id: 1,
    title: "Grupo APC",
    image: "/images/branding-13.webp",
    link: "https://www.behance.net/gallery/165443725/Manual-Normativo-Apc"
  },
  {
    id: 2,
    title: "Calma Chica",
    image: "/images/branding-14.png",
    link: "https://www.behance.net/gallery/125582703/Calma-Chica-Identidad-Visual"
  },
  {
    id: 3,
    title: "Daniel Schmer Seguros",
    image: "/images/branding-15.png",
    link: "https://www.behance.net/gallery/117732527/Tarjeta-Personal"
  },
]

export default function Card() {
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
          {packagingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-100">
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
                    <p className="text-sm text-gray-600">{project.category}</p>
                  </div>
                  <span className="text-sm text-gray-400">{project.year}</span>
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
            ¿Necesitas tarjetas que destaque tu producto?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Diseñemos tarjetas que cuente la historia de tu marca
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/contact"
              className="inline-block bg-[rgb(var(--color-primary))] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[rgb(var(--color-secondary))] transition-colors duration-300"
            >
              Comenzar Proyecto
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 