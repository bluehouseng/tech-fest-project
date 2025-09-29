// components/KeynoteSpeakers.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

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
        <h2 className="text-4xl font-bold text-black mb-5">
          Keynote Speakers
        </h2>
        <h5 className="text-gray-600 mb-12">
    Visionary leaders sharing ideas that will shape the future of technology
  </h5>

        <div className="relative flex justify-center gap-3 items-center h-[520px]">
          {keynoteSpeakers.map((speaker, ) => {
          

            return (
              <div
                key={speaker.name}
                >
                <div className="relative w-72 h-96  rounded-md overflow-hidden shadow-2xl">
                  {/* Top overlay with name + role */}
                  <div className="absolute top-0 left-0 w-full  bg-opacity-90 p-4 z-10 text-left">
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
            );
          })}
        </div>
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-tl from-green-300 to-green-900 px-10 py-2 cursor-pointer shadow-md"
            onClick={() => (window.location.href = "/speakers")}
          >
            <p className="text-white">Meet our speakers</p>
            {/* <Link className="text-white" href="/speakers">
              Meet our Speakers
            </Link> */}
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
    </section>
  );
}
