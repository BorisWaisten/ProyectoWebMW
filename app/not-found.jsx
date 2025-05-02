'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function NotFound() {
  const router = useRouter()

  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-center px-6 bg-[rgb(var(--color-blush))] text-[rgb(var(--color-text))]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-serif font-bold mb-4"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl font-light mb-6"
      >
        Página no encontrada
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-base text-gray-700 mb-8 max-w-xl"
      >
        La página que estás buscando no existe o fue movida. Te invitamos a volver al inicio o explorar otras secciones de nuestro estudio.
      </motion.p>

      <motion.button
        onClick={() => router.push('/home')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-black text-white px-6 py-3 rounded-lg font-medium transition"
      >
        Volver al inicio
      </motion.button>
    </section>
  )
}
