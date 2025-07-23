'use client'

import { useEffect, useState} from 'react'
import { usePathname,useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAppContext } from '@/context/app-context'
import Image from 'next/image'
import ScaleInWrapper from './animations/scale-in-wrapper'

const navItems = [
  { name: 'home', path: '/home' },
  { name: 'diseño gráfico', path: '/branding' },
  { name: 'contacto', path: '/contact' },
]

export default function Navbar() {
  const { menuOpen, setMenuOpen } = useAppContext()
  const [isTop, setIsTop] = useState(true)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('header')
      if (menuOpen && navbar && !navbar.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen, setMenuOpen])

  function handleClickHome() {
    setMenuOpen(false)
    if(pathname === '/home' || pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }else {
      router.push('/home')
    }
  }

  return (
      <header
        className={`fixed w-full z-50 transition-all duration-300 font-serif ${
          isTop
            ? 'bg-transparent backdrop-blur-none'
            : 'ease-in-out bg-white/8 backdrop-blur-[1.5px]'
        }`}
      >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center ">
        <div className="flex items-center gap-4">
          <ScaleInWrapper delay={0.3}>
            <Image
              src="/images/LOGOMARTU.png"
              alt="Logo"
              width={50}
              height={50}
              priority
              quality={100}
              className="scale-[2] rounded-full object-contain"
              onClick={handleClickHome}
            />
          </ScaleInWrapper>
        </div>

        <ul className="hidden md:flex gap-10 text-lg">
          {navItems.map((item, idx) => (
            <ScaleInWrapper key={item.name} delay={0.3}>
              <li>
                <Link
                  href={item.path}
                  className="hover:text-[rgb(var(--color-primary))] text-gray-800 transition-colors duration-300 px-4 py-2 rounded-lg  bg-white/8 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40"
                >
                  {item.name}
                </Link>
              </li>
            </ScaleInWrapper>
          ))}
        </ul>

        <div className="md:hidden relative group hamburger-menu-container">
          <button
            className="text-3xl text-[rgb(var(--color-primary))] hover:text-gray-800 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Invisible bridge to prevent hover gap */}
      <div className="md:hidden absolute top-full left-0 right-0 h-1 bg-transparent pointer-events-none" />

      <div
        className={`md:hidden bg-white/6 backdrop-blur-[2px] border-white/15 text-gray-900 px-6 transition-all duration-500 overflow-hidden shadow-sm -mt-1 ${
          menuOpen ? 'max-h-96 pt-4 pb-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-6 items-end text-lg">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="block  rounded-full p-2 hover:text-[rgb(var(--color-primary))] backdrop-blur-[0.5px] border-white/15 text-gray-900  transition-all duration-500 overflow-hidden shadow-sm -mt-1"
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
