'use client'

import Slider from 'react-slick'
import Image from 'next/image'
import SlideUpOnScroll from '@/components/animations/slide-up-wrapper'

const images = [
  {link:'https://www.instagram.com/p/C-lDd3bRmg8/?img_index=1',src:'/instragram-1.jpg'},
  {link:'https://www.instagram.com/p/C69AXS4OebD/?img_index=1',src:'/instragram-2.jpg'},
  {link:'https://www.instagram.com/p/C4dMWpYLPSQ/?img_index=1',src:'/instragram-3.jpg'},
  {link:'https://www.instagram.com/p/Cyy-po7rS1n/?img_index=1',src:'/instragram-4.jpg'},
  {link:'https://www.instagram.com/p/CvN0zYirGdv/?img_index=1',src:'/instragram-5.jpg'},
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
    pauseOnHover: false,
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
    <section className="py-20 px-6 text-center">
      <SlideUpOnScroll>
        <h2 className="text-4xl font-serif mb-8">Contáctanos en Instagram</h2>
      </SlideUpOnScroll>
      <Slider {...settings} className="max-w-4xl mx-auto ">
        {images.map((image, i) => (
          <div key={i} className="px-2 focus:outline-none">
            <Image
              src={image.src}
              alt={`Instagram ${i + 1}`}  
              
              width={600}
              height={600}
              onClick={() => window.open(image.link, '_blank')}
              className="rounded-xl object-cover md:w-[50vh] md:h-[50vh] cursor-pointer"
            />
          </div>
        ))}
      </Slider>
    </section>
  )
}
