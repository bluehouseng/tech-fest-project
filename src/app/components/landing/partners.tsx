"use client"
import { motion } from "framer-motion"

const partners = Array(8).fill(null) 

export default function Partners() {
  return (
    <section className="w-full bg-[#fafaf9] py-10 px-6 md:px-12font-poppins -mt-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-900 text-center"
        >
          Our Partners
        </motion.h2>
        <p className="mt-3 text-center text-gray-600">
          We’re proud to be supported by forward-thinking organizations and innovators.
        </p>

        {/* Grid of partner cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-md flex items-center justify-center h-32 hover:shadow-lg"
            >
              {/* Empty card for logos */}
              <span className="text-gray-300 text-sm">Partner {index + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
