
"use client";
import { motion } from "framer-motion";

const speakers = Array.from({ length: 20 }, (_, i) => ({
  name: `Speaker ${i + 1}`,
  role: "Innovation Leader",
  image: "/placeholder.jpg", // replace with real images later
}));

export default function Speakers() {
  return (
    <section className="w-full bg-[#f9faf9] py-16 px-6 md:px-12 font-poppins">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-900"
        >
          Meet Our Speakers
        </motion.h2>
        <p className="mt-4 text-gray-600">
          Visionaries, innovators, and leaders shaping the future of technology.
        </p>
      </div>

      {/* Speaker Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1,
              rotate: 1,
            }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer"
          >
            {/* Speaker Image */}
            <div className="h-56 w-full bg-gray-200 overflow-hidden">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Speaker Info */}
            <div className="p-4 text-center bg-gradient-to-r from-green-50 to-green-100">
              <h3 className="text-lg font-semibold">
                {speaker.name}
              </h3>
              <p className="text-sm text-gray-600">{speaker.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
