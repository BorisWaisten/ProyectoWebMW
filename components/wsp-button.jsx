'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5491138212583" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-white/8 backdrop-blur-sm border border-white/50 text-green-500 p-4 rounded-full shadow-sm hover:bg-white/20 hover:border-white/80 transition-all duration-300"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  )
}
