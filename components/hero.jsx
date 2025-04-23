'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="h-screen  flex flex-col justify-center items-center text-center px-6 bg-[url('/hero.jpg')]">
        <Image
          src="/logo.jpg"
          alt="Estudio Logo"
          width={120}
          height={120}
          priority
          className="mb-6"
        />
      <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
        Estudio de Diseño
      </h1>
      <p className="text-lg md:text-2xl text-primary max-w-2xl">
        Creamos marcas con propósito, sensibilidad y carácter.
      </p>
    </section>
  )
}
