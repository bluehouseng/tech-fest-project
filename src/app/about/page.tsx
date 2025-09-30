"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ images, aspectRatio = "4/3" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative group">
      <div 
        className="relative rounded-lg overflow-hidden shadow-xl"
        style={{ aspectRatio }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-emerald-600 w-8' 
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Attendees" },
    { number: "50+", label: "Speakers" },
    { number: "25+", label: "Partners" }
  ];

  return (
    <div className="grid grid-cols-3 gap-6 pt-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl font-bold text-emerald-600">{stat.number}</div>
          <div className="text-sm text-slate-500 uppercase tracking-wide">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero Slider Images - Add your image paths here
  const heroSliderImages = [
    "/images/pic8.jpg",
    "/images/pic9.webp",
    "/images/pic10.webp",
    "/images/pic11.webp"
  ];

  // About Section Slider Images - Add your image paths here
  const aboutSliderImages = [
    "/images/pic10.webp",
    "/images/pic11.webp",
    "/images/pic13.jpg",
    "/images/pic12.jpg"
  ];

  return (
    <div className="min-h-screen bg-white">
      
      <section className="bg-gradient-to-br from-slate-50 to-emerald-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div 
              className="space-y-8"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                Unleashing Potential,{' '}
                <span className="text-emerald-600">Igniting Innovation</span>
              </h1>
              
              <div className="prose prose-lg text-slate-600 max-w-none">
                <p className="text-lg leading-relaxed">
                  At JosTechFest, we are dedicated to empowering the tech community in 
                  Northern Nigeria and the Middle Belt by fostering innovation and 
                  collaboration. Our annual event brings together visionary thinkers, tech 
                  enthusiasts, and industry leaders to explore groundbreaking ideas and 
                  showcase the latest advancements.
                </p>
                <p className="text-lg leading-relaxed">
                  Together, we aim to drive growth and develop real-world solutions that 
                  will shape the future of technology in the region. Join us!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/events" 
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-200 transform hover:scale-105 text-center"
                >
                  Learn More
                </Link>
                <Link 
                  href="/events" 
                  className="inline-block border-2 border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-600 px-8 py-3 rounded-md font-medium transition-all duration-200 text-center"
                >
                  View Events
                </Link>
              </div>
            </div>

            {/* Hero Image Slider */}
            <div 
              className="relative"
              style={{
                transform: `translateY(${scrollY * -0.05}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <ImageSlider images={heroSliderImages} aspectRatio="4/3" />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-100 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          
            {/* About Image Slider */}
            <div className="relative">
              <ImageSlider images={aboutSliderImages} aspectRatio="1/1" />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Who We Are
                </h2>
                <div className="w-16 h-1 bg-emerald-600 mb-8"></div>
              </div>

              <div className="space-y-6 text-slate-600">
                <p className="text-lg leading-relaxed">
                  JosTechFest is Northern Nigeria&apos;s premier technology conference and innovation hub. 
                  We bring together the brightest minds in technology to share knowledge, collaborate 
                  on solutions, and drive the digital transformation of our region.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Our mission is to create a thriving ecosystem where technology entrepreneurs, 
                  developers, designers, and innovators can connect, learn, and build the future 
                  of tech in Northern Nigeria and the Middle Belt.
                </p>

                <p className="text-lg leading-relaxed">
                  Through workshops, keynote presentations, networking sessions, and hackathons, 
                  we provide a platform for both emerging talent and established professionals 
                  to showcase their innovations and contribute to the growth of our tech community.
                </p>
              </div>

              <StatsSection />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Be Part of the Innovation?
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Join hundreds of tech enthusiasts, entrepreneurs, and industry leaders 
            at JosTechFest 2025. Register now and be part of shaping the future of 
            technology in Northern Nigeria.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-md font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Register Now
            </Link>
            <Link 
              href="/events" 
              className="inline-block border-2 border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-600 px-10 py-4 rounded-md font-semibold text-lg transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}