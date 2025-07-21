'use client'

import ButtonSocials from './animations/button-socials'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className=" bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] py-4 px-6">
       <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 text-sm">
        {/* Logo - siempre a la izquierda */}
        <div className='flex-shrink-0'>
          <Image src="/images/LOGOMARTU.png" alt="Logo" className='rounded-full' width={80} height={80} />
        </div>

        {/* Contenido centrado en desktop */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-6 md:gap-12 flex-1">
          {/* Contactar */}
          <div className="text-left md:text-left">
            <h3 className="font-bold mb-2">CONTACTO</h3>
            <p>martina.waisten@gmail.com</p>
            <p>+54 11 1234 5678</p>
          </div>

          {/* Redes Sociales */}
          <div className='flex justify-start md:justify-center items-center'>
            <ButtonSocials />
          </div>
        </div>
      </div>

      {/* Footer base */}
      <div className="text-center mt-2 text-xs">
        © 2025 Estudio de Diseño. Todos los derechos reservados.
      </div>
    </footer>
  )
}