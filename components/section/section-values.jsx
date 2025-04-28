'use client'
import { motion } from "framer-motion"

const values = [
  {
    title: "Sensibilidad Visual",
    description: "Diseñamos con intuición y cuidado, conectando con lo humano.",
  },
  {
    title: "Belleza Atemporal",
    description: "No seguimos modas: creamos identidad con permanencia y elegancia.",
  },
  {
    title: "Coherencia y Carácter",
    description: "Cada marca tiene una voz, nosotros ayudamos a encontrarla.",
  },
]

export default function SectionValues() {
  return (
    <section className="bg-[rgb(var(--color-blush))] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-serif font-semibold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Nuestros Valores
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {values.map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-white shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold font-serif mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
