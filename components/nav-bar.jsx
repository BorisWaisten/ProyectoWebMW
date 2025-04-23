// components/Navbar.jsx
'use client'

import Link from 'next/link'
import { useAppContext } from '@/context/app-context'
import Image from 'next/image'
import ScaleInWrapper from './animations/scale-in-wrapper'
// import SlideLeftWrapper from './animations/slide-left-wrapper'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Services', path: '/services' },
  { name: 'Our Work', path: '/our-work' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const { menuOpen, setMenuOpen } = useAppContext()

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm text-gray-800 font-serif">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <ScaleInWrapper delay={0.3}>
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={50}
              height={50}
              priority
              className="rounded-full object-cover"
            />
          </ScaleInWrapper>
          <ScaleInWrapper delay={0.3}
          >
            <h1 className="text-2xl font-semibold tracking-wide text-[rgb(var(--color-primary))]">
              Estudio
            </h1>
          </ScaleInWrapper>
        </div>

        <ul className="hidden md:flex gap-10 text-lg">
          {navItems.map((item) => (
            <ScaleInWrapper key={item.path} delay={0.3}>
              <li key={item.path}>
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

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-[rgb(var(--color-primary))]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white text-gray-800 px-6 transition-all duration-500 overflow-hidden ${
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
