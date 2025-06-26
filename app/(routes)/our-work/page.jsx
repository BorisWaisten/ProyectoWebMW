'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import works from '@/public/data/works'
import FadeInWrapper from '@/components/animations/fade-in-wrapper'
import RevealWrapper from '@/components/animations/reveal-wrapper'

export default function PortfolioPage() {
  const [selectedWork, setSelectedWork] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const openWorkModal = (work) => {
    setSelectedWork(work)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedWork(null)
  }

  // Obtener categorías únicas
  const categories = ['Todos', ...new Set(works.map(work => work.category))]

  // Filtrar trabajos por categoría
  const filteredWorks = selectedCategory === 'Todos' 
    ? works 
    : works.filter(work => work.category === selectedCategory)

  return (
    <section className="py-20 px-6">
      <RevealWrapper delay={0.3}>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mi Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una selección de proyectos de identidad visual donde he puesto mi creatividad al servicio de marcas y emprendimientos
          </p>
        </div>
      </RevealWrapper>

      {/* Filtros por categoría */}
      <RevealWrapper delay={0.4}>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </RevealWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredWorks.map((work, i) => (
          <FadeInWrapper key={i} delay={i * 0.1}>
            <div 
              className="group cursor-pointer"
              onClick={() => openWorkModal(work)}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <Image src={work.image} alt={work.title} width={500} height={500} />
                <div className="absolute inset-0  group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black text-white px-4 py-2 rounded-lg font-semibold">
                      Ver proyecto
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-medium">
                  {work.year}
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">{work.title}</h2>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  {work.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{work.description}</p>
            </div>
          </FadeInWrapper>
        ))}
      </div>

      {/* Mensaje si no hay proyectos en la categoría */}
      {filteredWorks.length === 0 && (
        <RevealWrapper delay={0.3}>
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay proyectos en esta categoría.</p>
          </div>
        </RevealWrapper>
      )}

      {/* Modal para mostrar proyecto de Behance */}
      {isModalOpen && selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <div>
                <h2 className="text-2xl font-bold">{selectedWork.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {selectedWork.category}
                  </span>
                  <span className="text-gray-500 text-sm">{selectedWork.year}</span>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <p className="text-gray-600 mb-4">{selectedWork.description}</p>
              </div>
              
              {/* Sección de Behance */}
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="mb-4">
                </div>
                <h3 className="text-lg font-semibold mb-2">Proyecto completo en Behance</h3>
                <p className="text-gray-600 mb-6">
                  Este proyecto está disponible en mi portfolio de Behance con todos los detalles del proceso creativo, mockups y aplicaciones finales.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href={selectedWork.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                  >
                    Ver proyecto completo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <button 
                    onClick={closeModal}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sección de CTA */}
      <RevealWrapper delay={0.3}>
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">¿Te gustó mi trabajo?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Si quieres ver más proyectos de identidad visual o tienes una idea en mente, ¡hablemos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.behance.net/martinawaisten"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              Ver más en Behance
            </a>
            <Link 
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 font-semibold"
            >
              Iniciar proyecto
            </Link>
          </div>
        </div>
      </RevealWrapper>
    </section>
  )
}
