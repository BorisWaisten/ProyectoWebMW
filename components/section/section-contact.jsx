'use client'

import { motion } from 'framer-motion'

export default function SectionContact() {
  return (
    <section className="w-full px-4 sm:px-10 py-20 bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Contacto</h2>
        <p className="mb-10 text-lg sm:text-xl">
          Si tienes alguna pregunta o sugerencia, no dudes en contactarnos. Estaremos encantados de ayudarte.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-xl mx-auto grid grid-cols-1 gap-6"
      >
        <input
          type="text"
          placeholder="Nombre"
          className="bg-white border border-[rgb(var(--color-text))] px-4 py-3 rounded-md outline-none focus:border-primary transition"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="bg-white border border-[rgb(var(--color-text))] px-4 py-3 rounded-md outline-none focus:border-primary transition"
        />
        <textarea
          rows="5"
          placeholder="Mensaje"
          className="bg-white border border-[rgb(var(--color-text))] px-4 py-3 rounded-md outline-none focus:border-primary transition resize-none"
        />
        <button
          type="submit"
          className="mx-auto py-2 sm:py-0 px-4 mb-4 sm:mb-0 sm:px-10 rounded-md font-semibold border-[1.5px] border-[rgb(var(--color-secondary))] bg-[rgb(var(--color-text))] text-white active:shadow-lg duration-300 active:bg-blue-500 sm:hover:scale-105"
        >
          Enviar mensaje
        </button>
      </motion.form>
    </section>
  )
}
