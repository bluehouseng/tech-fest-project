"use client"
import { useEffect, useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {Typewriter} from "react-simple-typewriter";

 

export default function Hero() {
  const part1 = "  ";
  const primaryTitle = "Jos TechFest";
  const alternateTitle = "AI Summit 2025";
  const [showAlternate, setShowAlternate] = useState(false)

  const themes = [
    {
      key: "techfest",
      titlePart1Color: "text-green-900",
      titlePart2Color: "text-green-700",
      bgClass: "bg-gradient-to-br from-emerald-50 to-green-200",
      paragraphText: "text-gray-700",
      buttonGradient: "from-green-300 to-green-900",
      subtleBadgeBg: "bg-white/20",
      linkBorder: "border-gray-200",
      linkText: "text-gray-700",
      flashColor: "rgba(255,255,255,0.75)",
    },
    {
      key: "aisummit",
      titlePart1Color: "text-gray-100",
      titlePart2Color: "text-emerald-300",
      bgClass: "bg-gradient-to-br from-gray-900 to-black",
      paragraphText: "text-gray-200",
      buttonGradient: "from-emerald-400 to-emerald-700",
      subtleBadgeBg: "bg-white/10",
      linkBorder: "border-gray-700",
      linkText: "text-gray-200",
      flashColor: "rgba(255,255,255,0.6)",
    },
  ] as const

  const theme = themes[showAlternate ? 1 : 0]

  useEffect(() => {
    const intervalId = setInterval(() => setShowAlternate(prev => !prev), 15000)
    return () => clearInterval(intervalId)
  }, [])
  return (
    <>
      <section className={`flex h-[120vh] w-full items-center justify-center px-6 text-center relative overflow-hidden`}>

        {/* Background gradient crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={theme.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
            className={`absolute inset-0 -z-10 ${theme.bgClass}`}
          />
        </AnimatePresence>

        <div className="z-10 mx-auto max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={showAlternate ? "alt" : "primary"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
            >
              <motion.h1
                className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            >
          <span className="text-green-700">
            <Typewriter
              words={[showAlternate ? "AI summit 2025" : "Jos TechFest"]}
              loop={false}          
              cursor
              cursorStyle="|"
              typeSpeed={350}        
              deleteSpeed={150}     
              delaySpeed={2000}     
            />
          </span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className={`mt-6 text-lg sm:text-xl ${theme.paragraphText}`}
              >
                {showAlternate
                  ? "Dive into AI innovation — sessions on machine learning, agents, and real-world applications for builders."
                  : "Slide into a world of creativity — discover speakers, community projects, and hands-on sessions designed to inspire the next generation of African builders."}
              </motion.p>

              <div className="mt-10 flex items-center justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-tl ${theme.buttonGradient} px-10 py-2 cursor-pointer shadow-md`}
                  onClick={() => (window.location.href = "/home")}
                >
                  <p className="text-sm font-semibold text-white ">{showAlternate ? "Explore AI" : "Slide to enter"}</p>
                  <span className={`inline-block ml-2 rounded-full ${theme.subtleBadgeBg} px-3 py-1 text-xs font-medium`}>
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
                  className={`hidden items-center rounded-full border ${theme.linkBorder} bg-white px-5 py-2 text-sm ${theme.linkText} hover:shadow-sm md:flex`}
                >
                  Learn more
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={`flash-${showAlternate ? 1 : 0}`}
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3.0, ease: "easeInOut" }}
            style={{ background: theme.flashColor }}
          />
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center text-xs text-gray-500 sm:hidden">
          Swipe → to enter
        </div>

      </section>
    </>
  )
}


