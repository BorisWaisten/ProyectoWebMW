'use client'

import Link from 'next/link'
import Image from 'next/image'
import works from '@/public/data/works'
import FadeInWrapper from '@/components/animations/fade-in-wrapper'

export default function PortfolioPage() {
  return (
    <main className="py-20 px-6 min-h-screen overflow-hidden bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] ">
      <h1 className="text-4xl font-bold mb-12 text-center">Nuestro trabajo</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {works.map((work, i) => (
          <FadeInWrapper key={i} delay={i * 0.1}>
            <Link href={`/our-work/${work.slug}`}>
              <div className="group cursor-pointer">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={600}
                  height={400}
                  className="rounded-xl mb-4 transition-transform group-hover:scale-[1.02] duration-300 object-cover"
                />
                <h2 className="text-xl font-semibold">{work.title}</h2>
                <p className="text-sm text-gray-500">{work.category}</p>
              </div>
            </Link>
          </FadeInWrapper>
        ))}
      </div>
    </main>
  )
}
