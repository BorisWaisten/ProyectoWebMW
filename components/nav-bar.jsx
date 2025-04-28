'use client'

import { useEffect, useState} from 'react'
import { usePathname,useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAppContext } from '@/context/app-context'
import Image from 'next/image'
import ScaleInWrapper from './animations/scale-in-wrapper'

const navItems = [
  { name: 'Inicio', path: '/home' },
  { name: 'Trabajos', path: '/our-work' },
  { name: 'Servicios', path: '/services' },
  { name: 'Sobre Mi', path: '/about-us' },
  { name: 'Contacto', path: '/contact' },
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
            : 'ease-in-out  bg-[rgb(var(--color-bg))] shadow-md shadow-gray-600/50'
        }`}
      >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center text-gray-800">
        <div className="flex items-center gap-4">
          <ScaleInWrapper delay={0.3}>
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={50}
              height={50}
              priority
              className="rounded-full object-cover"
              onClick={handleClickHome}
            />
          </ScaleInWrapper>
          <ScaleInWrapper delay={0.3}>
            <h1 className="text-2xl font-semibold tracking-wide text-[rgb(var(--color-primary))]">
              Estudio
            </h1>
          </ScaleInWrapper>
        </div>

        <ul className="hidden md:flex gap-10 text-lg">
          {navItems.map((item) => (
            <ScaleInWrapper key={item.path} delay={0.3}>
              <li>
                <Link
                  href={item.path}
                  className="hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            </ScaleInWrapper>
          ))}
        </ul>

        <button
          className="md:hidden text-3xl text-[rgb(var(--color-primary))]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      <div
        className={`md:hidden bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))]  px-6 transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-96 pt-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-4 text-lg pb-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="block hover:text-[rgb(var(--color-primary))] transition-colors"
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
