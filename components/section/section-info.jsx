'use client'

import Image from 'next/image'
import SlideLeftWrapper from '../animations/slide-left-wrapper'
import ScaleInWrapper from '../animations/scale-in-wrapper'

export default function SectionInfo({ title, subtitle, description, image }) {
  return (
    <section className="px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-12">
      <SlideLeftWrapper delay={0.3}>
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-[var(--brand-text)]">
            {title}
          </h2>
          <p className="text-lg text-[var(--brand-text)]/80 italic">{subtitle}</p>
          <p className="max-w-xl text-[var(--brand-text)]">{description}</p>
        </div>
      </SlideLeftWrapper>
      {image && (
        <div className="flex-1">
          <ScaleInWrapper delay={0.3}>
          <Image
            src={image}
            alt="info image"
            width={600}
            height={400}
            className="rounded-2xl object-cover  shadow-md"
          />
          </ScaleInWrapper>
        </div>
      )}
    </section>
  )
}
