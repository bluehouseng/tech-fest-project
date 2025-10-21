"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const members: Member[] = [
  {
    id: 1,
    name: "Ardel Mbiplang",
    role: "Chief Executive Officer",
    description:
      "Leads company vision, drives innovation, and oversees strategic growth and success.",
    image: "/images/mbi.jpg",
  },
  {
    id: 2,
    name: "Shola Akambi",
    role: "Chief Operating Officer",
    description:
      "Oversees operations, drives strategy, and ensures efficient tech company growth.",
    image: "/images/shola.jpg",
  },
  {
    id: 3,
    name: "Peter Gyang Sha",
    role: "Frontend Developer Lead",
    description: "Passionate about building user-friendly web apps.",
    image: "/images/piro.png",
  },
  {
    id: 4,
    name: "Mary Jane",
    role: "UI/UX Designer",
    description: "Creating delightful user experiences with modern design.",
    image: "/images/member2.jpg",
  },
  {
    id: 5,
    name: "Samuel Green",
    role: "Backend Developer",
    description: "Focused on scalable server-side applications.",
    image: "/images/member3.jpg",
  },
  {
    id: 6,
    name: "Grace White",
    role: "Product Manager",
    description: "Driving innovation and collaboration in teams.",
    image: "/images/member4.jpg",
  },
  {
    id: 7,
    name: "Angela Brown",
    role: "Mobile Developer",
    description: "Building modern cross-platform mobile apps.",
    image: "/images/member6.jpg",
  },
];

const CommunityPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.pagination.update();
      setActiveIndex(swiperRef.current.realIndex);
    }
  }, []);

  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-green-900 font-bold text-xl sm:text-2xl md:text-3xl md:mt-8">
          Our Community
        </h1>
        <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg px-4 sm:px-8 md:px-16 lg:px-25 font-semibold md:mt-4">
          Jos Tech Fest is more than a gathering—it's a dedicated community
          working to strengthen Plateau State's tech ecosystem.
        </p>

        <div className="w-full mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-8 md:mb-10 lg:mb-16 relative px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="h-[300px] sm:h-[340px] md:h-[360px] lg:h-[380px] p-2 overflow-visible">
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={10}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              speed={2500} 
              autoplay={{
                delay: 3000, 
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true, el: ".custom-pagination" }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="h-full overflow-visible"
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {members.map((member, index) => (
                <SwiperSlide
                  key={member.id}
                  className="flex justify-center items-center h-fit p-4"
                >
                  <div
                    className={`transition-all duration-4000 ease-in-out bg-white shadow-lg rounded-lg text-center border h-72 sm:h-80 md:h-84 w-full max-w-xs sm:max-w-sm overflow-hidden ${
                      index === activeIndex
                        ? "scale-105 border-green-500 shadow-xl"
                        : "scale-90 opacity-80"
                    }`}
                  >
                    {/* ✅ Avatar Image Section */}
                    <div className="flex justify-center mt-4">
                      <div className="relative w-40 h-40 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-green-500 shadow-md">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* ✅ Text Section */}
                    <div className="p-4">
                      <h2 className="text-base sm:text-lg font-semibold mb-1">
                        {member.name}
                      </h2>
                      <p className="text-green-700 font-medium text-sm mb-1">
                        {member.role}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ✅ Custom Navigation Buttons */}
            <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-10 h-10 bg-green-900 hover:bg-green-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg">
              <ArrowLeft size={20} />
            </button>
            <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-10 h-10 bg-green-900 hover:bg-green-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg">
              <ArrowRight size={20} />
            </button>
          </div>

          {/* ✅ Custom Pagination */}
          <div className="custom-pagination flex justify-center mt-3 space-x-2 sm:space-x-3" />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
