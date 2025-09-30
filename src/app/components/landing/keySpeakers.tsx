// components/KeynoteSpeakers.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Speaker {
  name: string;
  role: string;
  image: string;
}

const keynoteSpeakers: Speaker[] = [
  {
    name: "Dr. Ayo Omotayo",
    role: "Keynote Speaker",
    image: "/images/pic7.jpg",
  },
  {
    name: "Prof. Jane Doe",
    role: "AI & Future of Work",
    image: "/images/pic2.jpg",
  },
  {
    name: "Engr. Musa Bello",
    role: "Tech Policy & Innovation",
    image: "/images/pic6.jpg",
  },
];

export default function KeynoteSpeakers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-black mb-5">Keynote Speakers</h2>
        <h5 className="text-gray-600 mb-12">
          Visionary leaders sharing ideas that will shape the future of technology
        </h5>

        {/* Responsive Grid for Speakers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
          {keynoteSpeakers.map((speaker) => (
            <div key={speaker.name} className="w-full max-w-[18rem]">
              <div className="relative w-full h-96 rounded-md overflow-hidden shadow-2xl">
                {/* Overlay with name + role */}
                <div className="absolute top-0 left-0 w-full p-4 z-10 text-left">
                  <h3 className="text-lg font-semibold text-white">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-gray-300">{speaker.role}</p>
                </div>

                {/* Speaker Image */}
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-tl from-green-300 to-green-900 px-10 py-2 cursor-pointer shadow-md"
            onClick={() => (window.location.href = "/speakers")}
          >
            <p className="text-white">Meet our speakers</p>
            <span className="inline-block ml-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
              →
            </span>
            <motion.span
              className="absolute -left-32 h-full w-32 bg-white/10 backdrop-blur"
              animate={{ x: [0, 520] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
