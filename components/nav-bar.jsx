'use client'

import { useEffect, useState} from 'react'
import { usePathname,useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAppContext } from '@/context/app-context'
import Image from 'next/image'
import ScaleInWrapper from './animations/scale-in-wrapper'

const navItems = [
  {
    name: 'diseño gráfico',
    dropdown: [
      { name: 'home gráfico', path: '/home' },
      { name: 'identidad visual', path: '/branding' },
      { name: 'diseño web', path: '/design-web' },
      { name: 'tarjetas', path: '/card' },
    ],
  },
  { name: 'contacto', path: '/contact' },
]

export default function Navbar() {
  const { menuOpen, setMenuOpen } = useAppContext()
  const [isTop, setIsTop] = useState(true)
  const [openSubmenu, setOpenSubmenu] = useState(null)
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
        setOpenSubmenu(null)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen, setMenuOpen])

  // Cerrar submenu cuando se cierra el menú principal
  useEffect(() => {
    if (!menuOpen) {
      setOpenSubmenu(null)
    }
  }, [menuOpen])


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
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center ">
        <div className="flex items-center gap-4">
          <ScaleInWrapper delay={0.3}>
            <Image
              src="/images/LOGOMARTU.png"
              alt="Logo"
              width={50}
              height={50}
              priority
              className="scale-[2] rounded-full object-cover"
              onClick={handleClickHome}
            />
          </ScaleInWrapper>
        </div>

        <ul className="hidden md:flex gap-10 text-lg">
          {navItems.map((item, idx) => (
            <ScaleInWrapper key={item.name} delay={0.3}>
              {item.dropdown ? (
                <li className="relative group">
                  <button
                    className="hover:text-gray-800 text-[rgb(var(--color-primary))] transition-colors duration-300 flex items-center gap-1"
                    tabIndex={0}
                  >
                    {item.name}
                    <span className="ml-1">▼</span>
                  </button>
                  <ul
                    className="absolute left-0  w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all z-50"
                    onMouseEnter={e => e.currentTarget.classList.add('pointer-events-auto')}
                    onMouseLeave={e => e.currentTarget.classList.remove('pointer-events-auto')}
                  >
                    {item.dropdown.map((subitem) => (
                      <li key={subitem.path}>
                        <Link
                          href={subitem.path}
                          className="block px-6 py-3 text-gray-900 hover:bg-gray-100 hover:text-[rgb(var(--color-primary))] transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li>
                  <Link
                    href={item.path}
                    className="hover:text-gray-800 text-[rgb(var(--color-primary))] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              )}
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
        className={`md:hidden bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] px-6 transition-all duration-500 overflow-hidden shadow-lg -mt-1 ${
          menuOpen ? 'max-h-96 pt-4 pb-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-6 text-lg">
          {navItems.map((item) => (
            item.dropdown ? (
              <li key={item.name} className="relative">
                <button 
                  className="w-full text-left hover:text-[rgb(var(--color-primary))] flex items-center justify-between py-2 transition-colors duration-300" 
                  tabIndex={0}
                  onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                >
                  {item.name}
                  <span className={`ml-1 transition-transform duration-300 ${openSubmenu === item.name ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <ul 
                  className={`pl-4 mt-2 overflow-hidden transition-all duration-300 ${
                    openSubmenu === item.name ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.dropdown.map((subitem) => (
                    <li key={subitem.path}>
                      <Link
                        href={subitem.path}
                        className="block py-3 hover:text-[rgb(var(--color-primary))] transition-colors duration-300 border-l-2 border-transparent hover:border-[rgb(var(--color-primary))] pl-4"
                        onClick={() => {
                          setMenuOpen(false)
                          setOpenSubmenu(null)
                        }}
                      >
                        {subitem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="block py-2 hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                  onClick={() => {
                    setMenuOpen(false)
                    setOpenSubmenu(null)
                  }}
                >
                  {item.name}
                </Link>
              </li>
            )
          ))}
        </ul>
      </div>
    </header>
  )
}
