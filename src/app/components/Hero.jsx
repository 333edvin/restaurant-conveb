'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../globals.css';
import heroSlider1 from '../../../public/images/hero-slider-1.jpg';
import heroSlider2 from '../../../public/images/hero-slider-2.jpg';
import heroSlider3 from '../../../public/images/hero-slider-3.jpg';

const slides = [
  {
    image: heroSlider1,
    heading: 'For the love of delicious food',
  },
  {
    image: heroSlider2,
    heading: 'Where every flavor tells a story',
  },
  {
    image: heroSlider3,
    heading: 'Flavors Inspired by the Seasons',
  },
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div id="hero-carousel" className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden hero_carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? ' z-20' : ' z-10'
            }`}
            data-carousel-item={index === activeIndex ? 'active' : undefined}
          >
            <Image src={slide.image} alt={`Hero Slider ${index + 1}`} className={`object-cover block w-full h-full ${index === activeIndex ? 'active' : ''}`} />
          </div>
        ))}
      </div>

      {/* Centered content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30 w-3/4 ">
        <h1 className="text-4xl md:text-8xl font-bold text-white ">{slides[activeIndex].heading}</h1>
        <p className="text-lg text-white mt-2">Come with family & feel the joy of mouthwatering food</p>
        <button className="btn btn-secondary mt-20 md:mt-10 border-orange-400 border-2   p-3">
          <span className="text-white">View Our Menu</span>
        </button>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-40 flex items-center justify-center h-full px-4 cursor-pointer group  "
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rotate-45 bg-white/20  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-orange-400 dark:group-focus:ring-orange-800/70 group-focus:outline-none border-orange-400 border-2">
          <svg
            className="w-4 h-4 text-white   rotate-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-40 flex items-center justify-center h-full px-4 cursor-pointer group "
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rotate-45 bg-white/20 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-orange-400 dark:group-focus:ring-orange-800/70 group-focus:outline-none border-orange-400 border-2">
          <svg
            className="w-4 h-4 text-white   rotate-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Hero;
