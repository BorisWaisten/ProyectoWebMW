'use client'

import Slider from 'react-slick'
import Image from 'next/image'
import SlideUpOnScroll from '@/components/animations/slide-up-wrapper'

const images = [
  {link:'https://www.instagram.com/p/C-lDd3bRmg8/?img_index=1',src:'/images/instragram-1.jpg'},
  {link:'https://www.instagram.com/p/C69AXS4OebD/?img_index=1',src:'/images/instragram-2.jpg'},
  {link:'https://www.instagram.com/p/C4dMWpYLPSQ/?img_index=1',src:'/images/instragram-3.jpg'},
  {link:'https://www.instagram.com/p/Cyy-po7rS1n/?img_index=1',src:'/images/instragram-4.jpg'},
  {link:'https://www.instagram.com/p/CvN0zYirGdv/?img_index=1',src:'/images/instragram-5.jpg'},
]

export default function SectionInstagram() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  }

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto text-center">
      <SlideUpOnScroll>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-text)] mb-6">
          Sígueme en Instagram
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
          Descubre mi trabajo diario y el proceso creativo detrás de cada proyecto
        </p>
      </SlideUpOnScroll>
      <Slider {...settings} className="w-full mx-auto">
        {images.map((image, i) => (
          <div key={i} className="px-5 h-[50vh]  py-5 focus:outline-none">
            <div className="relative group  cursor-pointer" onClick={() => window.open(image.link, '_blank')}>
              <div className="absolute -inset-2  bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <Image
                src={image.src}
                alt={`Instagram ${i + 1}`}  
                width={400}
                height={400}
                className="relative rounded-2xl object-cover w-full h-80 md:h-96 group-hover:scale-105 transition-transform duration-500 shadow-lg"
              />
              <div className="absolute inset-0  transition-all duration-300 rounded-2xl flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}
