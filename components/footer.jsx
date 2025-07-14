'use client'

import ButtonSocials from './animations/button-socials'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className=" bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] py-10 px-6">
       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-left">
        {/* Logo */}
        <div className="flex flex-col items-start justify-center">
          <Image src="/images/LOGOMARTU.png" alt="Logo" className='rounded-full' width={80} height={80} />
        </div>


        {/* Contactar */}
        <div>
          <h3 className="font-bold mb-2">CONTACTO</h3>
          <p>martina.waisten@gmail.com</p>
          <p>+54 11 1234 5678</p>
        </div>

        {/* Redes Sociales */}
        <div className='flex justify-center items-center '>
          <ButtonSocials />
        </div>
      </div>

      {/* Footer base */}
      <div className="text-center mt-8 text-xs">
        © 2025 Estudio de Diseño. Todos los derechos reservados.
      </div>
    </footer>
  )
}