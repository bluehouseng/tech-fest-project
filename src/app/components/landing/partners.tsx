"use client"
import { motion } from "framer-motion"

const partners = Array(8).fill(null) 

export default function Partners() {
  return (
    <section className="w-full bg-[#fafaf9] py-10 px-6 md:px-12 font-poppins -mt-10">
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
        <div className="mt-12 overflow-hidden relative">
            <motion.div
               className="flex gap-6"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...partners, ...partners].map((_, index) => (
              <div
                key={index}
                className="bg-white min-w-[150px] rounded-2xl shadow-lg flex items-center justify-center h-28 hover:shadow-lg mb-8"
              >
                <span className="text-gray-300 text-sm">Partner {index + 1}</span>
              </div>
            ))}
            </motion.div>
        </div>
      </div>
    </section>
  )
}
