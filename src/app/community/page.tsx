'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Sample data for cards (replace with your own)
const members = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Frontend Developer',
    description: 'Passionate about building user-friendly web apps.',
  },
  {
    id: 2,
    name: 'Mary Jane',
    role: 'UI/UX Designer',
    description: 'Creating delightful user experiences with modern design.',
  },
  {
    id: 3,
    name: 'Samuel Green',
    role: 'Backend Developer',
    description: 'Focused on scalable server-side applications.',
  },
  {
    id: 4,
    name: 'Grace White',
    role: 'Product Manager',
    description: 'Driving innovation and collaboration in teams.',
  },
  {
    id: 5,
    name: 'David Black',
    role: 'Cloud Engineer',
    description: 'Ensuring smooth cloud infrastructure and deployments.',
  },
  {
    id: 6,
    name: 'Angela Brown',
    role: 'Mobile Developer',
    description: 'Building modern cross-platform mobile apps.',
  },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Ensure Swiper updates pagination after mount
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.pagination.update();
      setActiveIndex(swiperRef.current.realIndex);
      console.log('Swiper Initialized, Real Index:', swiperRef.current.realIndex);
    }
  }, []);

  return (
    <div className="p-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center font-bold text-2xl mb-4">Our Community</h1>
        <p className="text-center px-16 md:px-25">
          Jos Tech Fest is more than a gathering—it's a dedicated community working
          to strengthen Plateau State's tech ecosystem. We unite tech hubs,
          innovators, and enthusiasts in a shared mission to elevate our region's
          technological landscape.
        </p>

        <div className="w-full h-[] mt-16 mb-10 md:mb-16 relative px-24">
          {/* Increased height and proper overflow handling */}
          <div className="h-[450px] py-8">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              pagination={{
                clickable: true,
                el: '.custom-pagination',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => {
                console.log('Slide Changed, Real Index:', swiper.realIndex);
                setActiveIndex(swiper.realIndex);
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                console.log('Swiper Instance:', swiper);
              }}
              className="h-full"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {members.map((member, index) => (
                <SwiperSlide key={member.id} className="flex justify-center items-center h-full">
                  <div
                    className={`transition-all duration-300 ease-in-out bg-white shadow-lg rounded-lg p-6 text-center border h-64 w-full max-w-sm ${
                      index === activeIndex
                        ? 'scale-110 z-10 border-green-500 shadow-xl'
                        : 'scale-95 opacity-80'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-green-300 mx-auto mb-4 flex items-center justify-center font-bold text-lg text-white">
                      {member.name.charAt(0)}
                    </div>
                    <h2 className="text-lg font-semibold mb-2">{member.name}</h2>
                    <p className="text-green-700 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom pagination positioned below cards with reduced spacing */}
          <div className="custom-pagination flex justify-center mt-4 space-x-3">
            {members.map((_, index) => (
              <button
                key={index}
                className={`rounded-full transition-all duration-300 ease-in-out cursor-pointer hover:scale-110 ${
                  index === activeIndex 
                    ? 'w-4 h-4 bg-green-500 scale-125' 
                    : 'w-3 h-3 bg-green-300 hover:bg-green-400'
                }`}
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slideToLoop(index);
                    setActiveIndex(index);
                  }
                }}
              />
            ))}
          </div>

          {/* Minimal custom CSS for Swiper specifics */}
          <style jsx>{`
            .swiper-pagination {
              display: none !important;
            }
            .swiper-wrapper {
              align-items: center;
            }
          `}</style>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 gap-4">
        <p className="text-center">
          Join the <span className="text-green-700 font-semibold">1000+</span> participants who have already signed up for the event
        </p>
        <button className="bg-gradient-to-tl from-green-300 to-green-900 px-10 py-2 rounded-sm text-white cursor-pointer transition-all duration-300 hover:from-green-400 hover:to-green-800 hover:shadow-lg transform hover:scale-105">
          Join the Channel
        </button>
      </div>
    </div>
  );
};

export default Page;