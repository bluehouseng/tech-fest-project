
"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Typewriter } from "react-simple-typewriter"

// const heroImages = [
//   "/images/https:/77iiucovgsphsggt.public.blob.vercel-storage.com/pic%2040%29.jpg",
//   "/images/jtf-21.jpg",
//   "/images/jtf-43.jpg",
//   "/images/jtf-7.jpg",
//   "/images/jtf-40.jpg",
//   "/images/jtf-8.jpg",
//   "/images/jtf-18.jpg",
//   "/images/jtf-36.jpg",
//   "/images/jtf-3.jpg",
//   "/images/jtf-2.jpg",
// ]
const heroImages = [
  "https://77iiucovgsphsggt.public.blob.vercel-storage.com/pic%2040%29.jpg",
   "https://77iiucovgsphsggt.public.blob.vercel-storage.com/pic16.jpg",
   "https://77iiucovgsphsggt.public.blob.vercel-storage.com/picc1.jpg",
   "https://77iiucovgsphsggt.public.blob.vercel-storage.com/tf%20%2811%20of%2040%29.jpg",
   "https://77iiucovgsphsggt.public.blob.vercel-storage.com/tf%20%2815%20of%2040%29.jpg",
   "https://77iiucovgsphsggt.public.blob.vercel-storage.com/tf%20%2821%20of%2040%29.jpg",
   "https://77iiucovgsphsggt.public.blob.vercel-storage.com/tf%20%2835%20of%2040%29.jpg",
  // "/images/jtf-21.jpg",
  // "/images/jtf-43.jpg",
  // "/images/jtf-7.jpg",
  // "/images/jtf-40.jpg",
  // "/images/jtf-8.jpg",
  // "/images/jtf-18.jpg",
  // "/images/jtf-36.jpg",
  // "/images/jtf-3.jpg",
  
];


export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0)

  // Slide images every 7 seconds
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(bgInterval)
  }, [])

  return (
    <section className="relative flex items-center justify-center w-full min-h-screen text-center overflow-hidden ">
      {/* Sliding background images - no AnimatePresence, no opacity white */}
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-center transition-all duration-3000 "
        style={{
          backgroundImage: `url(${heroImages[bgIndex]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          
        }}
      />

      {/* Centered hero content */}
      <div className="z-10 mx-auto max-w-5xl flex flex-col items-center justify-center w-full h-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl text-white"
        >
          <span>
            <Typewriter
              words={["Jos TechFest", "AI Summit 2025"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={2000}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-lg sm:text-xl  text-amber-500 font-semibold"
        >
          Slide into a world of creativity — discover speakers, community projects, and hands-on sessions designed to inspire the next generation of African builders.
        </motion.p>

        <div className="mt-10 flex items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-tl from-green-300 to-green-900 px-10 py-2 cursor-pointer shadow-md"
            onClick={() => (window.location.href = "/home")}
          >
            <p className="text-sm font-semibold text-white">Slide to enter</p>
            <span className="inline-block ml-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
              →
            </span>
            <motion.span
              className="absolute -left-32 h-full w-32 bg-white/10 backdrop-blur"
              animate={{ x: [0, 520] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </motion.button>

          <Link
            href="/about"
            className="hidden items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-gray-700 hover:shadow-sm md:flex"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
}