'use client'
import { motion } from "framer-motion"
import Image from "next/image"

export default function SectionStory({ title, paragraphs = [], image }) {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-serif font-semibold mb-4">{title}</h2>
        {paragraphs.map((p, idx) => (
          <p key={idx} className="text-lg text-gray-700 mb-4">{p}</p>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-full"
      >
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="rounded-xl shadow-md object-cover w-full h-auto"
        />
      </motion.div>
    </section>
  )
}
