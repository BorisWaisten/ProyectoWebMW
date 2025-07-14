'use client'

import Image from 'next/image'
import clsx from 'clsx'
export default function Section({ title, description, image, reverse = false }) {
  return (
    <section
      className={clsx(
        'py-20 px-6 flex flex-col md:flex-row items-center gap-12 h-auto mx-auto',
        reverse && 'md:flex-row-reverse'
      )}
    >
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-base md:text-lg w-[40%] md:w-full max-w-3xl mx-auto">{description}</p>
        
        </div>
        <div className="flex-1">  
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            priority
            className="rounded-2xl shadow-lg  max-w-xs md:max-w-full object-contain"
          />
        </div>
    </section>
  )
}
