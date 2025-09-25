'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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

        <div className="w-full max-w-5xl mt-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000, // Slide every 3 seconds
              disableOnInteraction: false, // Continue autoplay after interaction
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="mySwiper"
          >
            {members.map((member, index) => (
              <SwiperSlide key={member.id}>
                <div
                  className={`transition-all duration-300 ease-in-out bg-white shadow-lg rounded-lg p-6 text-center border ${
                    index === activeIndex
                      ? 'scale-105 z-10 border-green-500'
                      : 'scale-90 opacity-70'
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-green-300 mx-auto mb-4 flex items-center justify-center font-bold text-lg text-white">
                    {member.name.charAt(0)}
                  </div>
                  <h2 className="text-lg font-semibold">{member.name}</h2>
                  <p className="text-green-700 font-medium">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx>{`
            .swiper-slide {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .swiper-button-next,
            .swiper-button-prev {
              color: #ffffff;
              background: rgba(0, 0, 0, 0.5);
              border-radius: 50%;
              width: 40px; /* Adjusted for better visibility */
              height: 40px;
            }
            .swiper-button-next:after,
            .swiper-button-prev:after {
              font-size: 20px; /* Adjusted for better proportionality */
            }
            .swiper-pagination-bullet {
              background: #ffffff;
              opacity: 0.7;
            }
            .swiper-pagination-bullet-active {
              background: #22c55e;
              opacity: 1;
            }
          `}</style>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 gap-4">
        <p>
          Join the <span className="text-green-700">1000+</span> participants who have already signed up for the event
        </p>
        <button className="bg-gradient-to-tl from-green-300 to-green-900 px-10 py-2 rounded-sm text-white cursor-pointer">
          Join the Channel
        </button>
      </div>
    </div>
  );
};

export default Page;