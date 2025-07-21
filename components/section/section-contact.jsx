'use client'

import { motion } from 'framer-motion'

export default function SectionContact() {
  return (
    <section className="w-full px-4 sm:px-10 py-20 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">Contacto</h2>
        <p className="mb-10 text-lg sm:text-xl  drop-shadow-md">
          Si tienes alguna pregunta o sugerencia, no dudes en contactarnos. Estaremos encantados de ayudarte.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-xl  mx-auto grid grid-cols-1 gap-6 p-8 "
      >
        <input
          type="text"
          placeholder="Nombre"
          className="bg-white/5 backdrop-blur-sm   px-4 py-3 rounded-lg outline-none focus:-white/80 focus:bg-white/15 transition-all duration-300 text-gray-900 placeholder-gray-600 shadow-sm"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="bg-white/5 backdrop-blur-sm   px-4 py-3 rounded-lg outline-none focus:-white/80 focus:bg-white/15 transition-all duration-300 text-gray-900 placeholder-gray-600 shadow-sm"
        />
        <textarea
          rows="5"
          placeholder="Mensaje"
          className="bg-white/5 backdrop-blur-sm   px-4 py-3 rounded-lg outline-none focus:-white/80 focus:bg-white/15 transition-all duration-300 resize-none text-gray-900 placeholder-gray-600 shadow-sm"
        />
        <button
          type="submit"
          className="mx-auto py-3 px-8 rounded-lg font-semibold bg-white/8 backdrop-blur-sm   text-gray-900 hover:bg-white/20 hover:-white/80 active:shadow-lg duration-300 sm:hover:scale-105 shadow-sm"
        >
          Enviar mensaje
        </button>
      </motion.form>
    </section>
  )
}
