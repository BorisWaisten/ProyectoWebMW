'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const webProjects = [
  {
    id: 1,
    title: "Martu & Gino",
    category: "Diseño Web",
    image: "/images/branding-12.jpeg",
    description: "Sitio web responsivo para empresa de servicios",
    year: "2024",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://martuygino.vercel.app/"
  },
  {
    id: 2,
    title: "Shirley & Diego",
    category: "Diseño Web",
    image: "/images/branding-11.jpeg",
    description: "Tienda online con diseño moderno y funcional",
    year: "2024",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://boda-syd.vercel.app/"
  },
]

export default function DesignWeb() {
  return (
    <div className="min-h-screen bg-white">

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-30 ">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {webProjects.map((project, index) => (
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
                <Link href={project.link} target="_blank" className="absolute inset-0 flex items-center justify-center">
                  
                </Link>

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
            ¿Necesitas un sitio web profesional?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creemos juntos tu presencia digital perfecta
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