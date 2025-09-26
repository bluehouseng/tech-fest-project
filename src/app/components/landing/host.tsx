// components/Host.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Host {
  name: string;
  role: string;
  image: string;
}

const hosts: Host[] = [
  {
    name: "Ada Johnson",
    role: "Event Host",
    image: "/images/pic4.jpg",
  },
  {
    name: "Tunde Smith",
    role: "Co-Host",
    image: "/images/pic5.jpg",
  },
];

// Card Component
function Card({ host }: { host: Host }) {
  return (
    <div className="relative w-72 h-[400px] bg-white rounded-md overflow-hidden shadow-xl">

      <div className="absolute top-0 left-0 w-full  bg-opacity-90 p-4 z-10 text-left">
        <h3 className="text-lg font-semibold text-white">{host.name}</h3>
        <p className="text-sm text-gray-300">{host.role}</p>
      </div>


            {/* Host Image */}
      <Image
        src={host.image}
        alt={host.name}
        width={400}
        height={500}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default function Host() {
  return (
    <section className="py-20 bg-white -mt-26">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-4xl font-bold text-black mb-4"
        >
         Our Hosts
        </motion.h2>

        <motion.h5
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-gray-600 mb-12"
        >
            Guiding the flow of TechFest with energy, insight, and passion
        </motion.h5>

        {/* Overlapping rotated cards */}
        <div className="relative flex flex-col items-center justify-center h-[420px] md:flex-row gap-4">
          {/* First Card */}
          <motion.div
            className="absolute -rotate-16 left-1/4 z-10"
            whileHover={{ scale: 1.05, rotate: -10 }}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <Card host={hosts[0]} />
          </motion.div>

          {/* Second Card */}
          <motion.div
            className="absolute rotate-16 right-1/4 z-40"
            whileHover={{ scale: 1.05, rotate:10 }}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
          >
            <Card host={hosts[1]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
