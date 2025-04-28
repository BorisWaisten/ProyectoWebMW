'use client'

import Image from 'next/image'
import FadeInWrapper from './animations/fade-in-wrapper'

export default function Hero({ title, description, image }) {
  return (
    <section 
      className="h-screen flex flex-col justify-center items-center text-white text-center px-6"
      style={{ backgroundImage: `url(${image})` }}
    >      
      <FadeInWrapper delay={0.3}>
      <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
        {title}
      </h1>
      <p className="text-lg md:text-2xl text-primary max-w-2xl">
        {description}
      </p>
      </FadeInWrapper>
    </section>
  )
}
