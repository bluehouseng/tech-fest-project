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
    image: "/images/host_ada.jpg",
  },
  {
    name: "Tunde Smith",
    role: "Co-Host",
    image: "/images/host_tunde.jpg",
  },
];

// Card Component
function Card({ host }: { host: Host }) {
  return (
    <div className="relative w-72 h-[400px] bg-white rounded-md overflow-hidden shadow-xl">
      {/* Top overlay with name + role */}
      <div className="absolute top-0 left-0 w-full bg-gray-700 bg-opacity-90 p-4 z-10">
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">Our Hosts</h2>

        <h5 className="text-gray-600 mb-12">
          Guiding the flow of TechFest with energy, insight, and passion
        </h5>

        {/* Overlapping rotated cards */}
        <div className="relative flex items-center justify-center h-[420px] ">
          {/* First Card */}
          <motion.div
            className="absolute -rotate-16 left-1/4 z-10"
            whileHover={{ scale: 1,  }}
          >
            <Card host={hosts[0]} />
          </motion.div>

          {/* Second Card */}
          <motion.div
            className="absolute rotate-16 right-1/4 z-40"
            whileHover={{ scale: 1,  }}
          >
            <Card host={hosts[1]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
