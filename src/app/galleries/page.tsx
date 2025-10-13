"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Speaker {
  name: string;
  role: string;
  image: string;
}

const eventGallery: Speaker[] = [
  {
    name: "Dr. Ayo Omotayo",
    role: "Keynote Speaker",
    image: "/images/jtf-21.jpg",
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

export default function galleries() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-4xl font-bold text-green-900 mb-4"
        >
          Passed Events 
        </motion.h2>

        {/* Subtitle */}
        <motion.h5
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-gray-600 mb-12 font-semibold"
        >
          A collection of our pass events
        </motion.h5>

        {/* Responsive Grid for Speakers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center w-full">
          {eventGallery.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="w-full max-w-[18rem]"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeInOut" }} // 👈 Slow hover effect added
                className="relative w-full h-96 rounded-md overflow-hidden shadow-2xl"
              >
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
              </motion.div>
            </motion.div>
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
