"use client"
import { motion, Variants } from "framer-motion"
import Link from "next/link"

const sentence: Variants =  {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08, // delay between each letter
    },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, scale: 0.3, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 500, 
      damping: 20,
    },
  },
};

export default function Body() {
  const part1 = "Welcome to  "; // normal color
  const part2 = "Jos TechFest";    // highlighted in green
  return (
    <>

      <section className="flex min-h-screen items-center justify-center px-6 text-center ">

     
        <div className="z-10 mx-auto max-w-5xl">
           <motion.h1
              initial="hidden"
              animate="visible"
              variants={sentence}
              className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
              >
              {/* Part 1 (default color) */}
              {part1.split("").map((char, index) => (
                <motion.span 
                  key={`p1-${index}`} 
                  variants={letter} 
                  className="text-green-900">
                    {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}

            {/* Part 2 (highlighted in green) */}
            {part2.split("").map((char, index) => (
              <motion.span 
                key={`p2-${index}`} 
                variants={letter} 
                className="text-green-700">
                {char}
              </motion.span>
              ))}
             </motion.h1>

          {/* <motion.h1
            initial="hidden"
            animate="visible"
            variants={sentence}
            className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-green-900 sm:text-5xl md:text-6xl"
          >
            {text.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
            {char === " " ? "\u00A0" : char}
            </motion.span>
            ))}
            Welcome to <span className="text-green-700">TechFest</span>
          </motion.h1> */}

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg text-gray-700 sm:text-xl"
          >
            Slide into a world of creativity — discover speakers, community projects, and hands-on
            sessions designed to inspire the next generation of African builders.
          </motion.p>

          <div className="mt-10 flex items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-tl from-green-300 to-green-900 px-10 py-2 cursor-pointer shadow-md"
              onClick={() => (window.location.href = "/home")}
            >
  
              <p className="text-sm font-semibold text-white ">Slide to enter</p>
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

          {/* <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-600">
            <div>June 12–14 • Lagos</div>
            <div className="h-1 w-1 rounded-full bg-gray-400" />
            <div>Hybrid • In-person & Online</div>
          </div> */}
        </div>

         <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center text-xs text-gray-500 sm:hidden">
          Swipe → to enter
        </div>

      </section>
    </>
  )
}
