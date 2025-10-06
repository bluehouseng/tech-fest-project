"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Sample data for cards (replace with your own)
const members = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    description: "Passionate about building user-friendly web apps.",
  },
  {
    id: 2,
    name: "Mary Jane",
    role: "UI/UX Designer",
    description: "Creating delightful user experiences with modern design.",
  },
  {
    id: 3,
    name: "Samuel Green",
    role: "Backend Developer",
    description: "Focused on scalable server-side applications.",
  },
  {
    id: 4,
    name: "Grace White",
    role: "Product Manager",
    description: "Driving innovation and collaboration in teams.",
  },
  {
    id: 5,
    name: "David Black",
    role: "Cloud Engineer",
    description: "Ensuring smooth cloud infrastructure and deployments.",
  },
  {
    id: 6,
    name: "Angela Brown",
    role: "Mobile Developer",
    description: "Building modern cross-platform mobile apps.",
  },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<import("swiper").Swiper | null>(null);

  // Ensure Swiper updates pagination after mount
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.pagination.update();
      setActiveIndex(swiperRef.current.realIndex);
      console.log(
        "Swiper Initialized, Real Index:",
        swiperRef.current.realIndex
      );
    }
  }, []);

  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-green-900 font-bold text-xl sm:text-2xl md:text-3xl mb-4">
          Our Community
        </h1>
        <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg px-4 sm:px-8 md:px-16 lg:px-25 font-semibold">
          Jos Tech Fest is more than a gathering—it's a dedicated community
          working to strengthen Plateau State's tech ecosystem. We unite tech
          hubs, innovators, and enthusiasts in a shared mission to elevate our
          region's technological landscape.
        </p>

        <div className="w-full mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-8 md:mb-10 lg:mb-16 relative px-4 sm:px-8 md:px-16 lg:px-24">
          {/* Adjusted height for responsiveness */}
          <div className="h-[300px] sm:h-[320px] md:h-[340px] lg:h-[350px] p-2 sm:p-3 md:p-4 overflow-visible">
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={10}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => {
                console.log("Slide Changed, Real Index:", swiper.realIndex);
                setActiveIndex(swiper.realIndex);
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                console.log("Swiper Instance:", swiper);
              }}
              className="h-full overflow-visible"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                466: {
                  slidesPerView: 1.2,
                  spaceBetween: 3,
                },
                576: {
                  slidesPerView: 1.5,
                  spaceBetween: 7,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 12,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {members.map((member, index) => (
                <SwiperSlide
                  key={member.id}
                  className="flex justify-center items-center h-fit p-4 sm:p-5"
                >
                  <div
                    className={`transition-all duration-300 ease-in-out bg-white shadow-lg rounded-lg px-2 py-4 text-center border h-60 sm:h-62 md:h-64 w-full max-w-xs sm:max-w-sm ${
                      index === activeIndex
                        ? "scale-105 sm:scale-110 z-10 border-green-500 shadow-xl"
                        : "scale-90 sm:scale-95 opacity-80"
                    }`}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-300 mx-auto mb-3 sm:mb-4 flex items-center justify-center font-bold text-base sm:text-lg text-white">
                      {member.name.charAt(0)}
                    </div>
                    <h2 className="text-base sm:text-lg font-semibold mb-2">
                      {member.name}
                    </h2>
                    <p className="text-green-700 font-medium text-sm sm:text-base mb-2">
                      {member.role}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 md:-translate-x-8 lg:-translate-x-6 xl:-translate-x-8 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green-900 hover:bg-green-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl">
              <ArrowLeft size={20} />
            </button>
            <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 md:translate-x-8 lg:translate-x-6 xl:translate-x-8 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green-900 hover:bg-green-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl">
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Custom pagination positioned below cards with reduced spacing */}
          <div className="custom-pagination flex justify-center mt-2 space-x-2 sm:space-x-3">
            {members.map((_, index) => (
              <button
                key={index}
                style={{
                  backgroundColor:
                    index === activeIndex ? "#22c55e" : "#86efac",
                  width: index === activeIndex ? "14px" : "10px",
                  height: index === activeIndex ? "14px" : "10px",
                  borderRadius: "50%",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                }}
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
            @media (max-width: 484px) {
              .swiper-wrapper {
                justify-content: center !important;
              }
              .swiper-slide {
                width: 80% !important; /* Ensure single slide takes up centered space */
              }
            }
            .swiper-pagination {
              display: none !important;
            }
            .swiper-wrapper {
              align-items: center;
            }
          `}</style>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 md:mt-10 gap-4">
        <p className="text-center text-sm sm:text-base">
          Join the <span className="text-green-700 font-semibold">1000+</span>{" "}
          participants who have already signed up for the event
        </p>
        <button className="bg-gradient-to-tl from-green-300 to-green-900 px-6 sm:px-8 md:px-10 py-2 rounded-sm text-white cursor-pointer transition-all duration-300 hover:from-green-400 hover:to-green-800 hover:shadow-lg transform hover:scale-105 text-sm sm:text-base">
          Join the Channel
        </button>
      </div>
    </div>
  );
};

export default Page;
