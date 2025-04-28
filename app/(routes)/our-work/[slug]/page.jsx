import works from '@/public/data/works'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default function ProjectPage({ params }) {
  const work = works.find(w => w.slug === params.slug)

  if (!work) return notFound()
 
  return (
    <main className="py-20 px-6 min-h-screen overflow-hidden bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] ">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">{work.title}</h1>
        <p className="mb-10 text-lg">{work.description}</p>
        <Image
          src={work.image}
          alt={work.title}
          width={800}
          height={600}
          className="rounded-xl mx-auto"
        />
      </div>
    </main>
  )
}
