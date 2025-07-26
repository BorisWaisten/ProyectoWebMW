'use client'

import ButtonSocials from './animations/button-socials'
import Image from 'next/image'
import { useState } from 'react'

export default function Footer() {
  const [copyStatus, setCopyStatus] = useState('')

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopyStatus(`${type} copiado!`)
      setTimeout(() => setCopyStatus(''), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
      setCopyStatus('Error al copiar')
      setTimeout(() => setCopyStatus(''), 2000)
    }
  }

  return (
    <footer className="relative z-50 bg-[rgb(var(--color-bg))]/90 text-[rgb(var(--color-text))] py-4 px-6">
       <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 text-sm">
        {/* Logo - siempre a la izquierda */}
        <div className='flex-shrink-0'>
          <Image src="/images/LOGOMARTU.png" alt="Logo" className='rounded-full' width={80} height={80} />
        </div>

        {/* Contenido centrado en desktop */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-6 md:gap-12 flex-1">
          {/* Contactar */}
          <div className="text-left text-base md:text-lg">
            <h3 className="font-bold mb-2 md:mb-0">CONTACTO</h3>
            <div >
              <div 
                className="flex items-center  cursor-pointer hover:text-gray-400 transition-colors select-text"
                onClick={() => copyToClipboard('martina.waisten@gmail.com', 'Email')}
                title="Haz clic para copiar el email"
              >
                <p className="select-all">martina.waisten@gmail.com</p>
              </div>
              <div 
                className="flex items-center  cursor-pointer hover:text-gray-400 transition-colors select-text"
                onClick={() => copyToClipboard('+54 11 1234 5678', 'Teléfono')}
                title="Haz clic para copiar el teléfono"
              >
                <p className="select-all">+54 11 1234 5678</p>
              </div>
            </div>
            {copyStatus && (
              <div className="text-xs text-green-400 mt-1 animate-pulse">
                {copyStatus}
              </div>
            )}
          </div>

          {/* Redes Sociales */}
          <div className='flex justify-start md:justify-center items-center'>
            <ButtonSocials />
          </div>
        </div>
      </div>

      {/* Footer base */}
      <div className="text-center mt-4 sm:mt-2 text-xs">
        © 2025 Estudio de Diseño. Todos los derechos reservados.
      </div>
    </footer>
  )
}