



// "use client"
// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Link from "next/link"
// import { Typewriter } from "react-simple-typewriter"

// const heroImages = [
//   "/images/jtf-26.jpg",
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

// export default function Hero() {
//   const [showAlternate, setShowAlternate] = useState(false)
//   const [bgIndex, setBgIndex] = useState(0)

//   useEffect(() => {
//     const intervalId = setInterval(() => setShowAlternate(prev => !prev), 15000)
//     return () => clearInterval(intervalId)
//   }, [])

//   useEffect(() => {
//     const bgInterval = setInterval(() => {
//       setBgIndex((prev) => (prev + 1) % heroImages.length)
//     }, 10000)
//     return () => clearInterval(bgInterval)
//   }, [])

//   const theme = showAlternate
//     ? {
//         titlePart1Color: "text-gray-100",
//         titlePart2Color: "text-emerald-300",
//         paragraphText: "text-gray-200",
//         buttonGradient: "from-emerald-400 to-emerald-700",
//         subtleBadgeBg: "bg-white/10",
//         linkBorder: "border-gray-700",
//         linkText: "text-gray-200",
//         flashColor: "rgba(16, 185, 129, 0.12)", // emerald-400 with opacity
//       }
//     : {
//         titlePart1Color: "text-green-900",
//         titlePart2Color: "text-green-700",
//         paragraphText: "text-gray-700",
//         buttonGradient: "from-green-300 to-green-900",
//         subtleBadgeBg: "bg-white/20",
//         linkBorder: "border-gray-200",
//         linkText: "text-gray-700",
//         flashColor: "rgba(34, 197, 94, 0.12)", // green-500 with opacity
//       }

//   return (
//     <>
//       <section className="relative flex items-center justify-center w-full min-h-screen text-center overflow-hidden ">

//         {/* Background image crossfade, no bg before images */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={bgIndex}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 2.5, ease: "easeInOut" }}
//             className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${heroImages[bgIndex]})`
//             }}
//           />
//         </AnimatePresence>

//         {/* Centered content */}
//         <div className="z-10 mx-auto max-w-5xl flex flex-col items-center justify-center w-full h-full">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={showAlternate ? "alt" : "primary"}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 3.5, ease: "easeInOut" }}
//               className="w-full"
//             >
//               <motion.h1
//                 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
//               >
//                 <span className="text-green-700">
//                   <Typewriter
//                     words={[showAlternate ? "AI summit 2025" : "Jos TechFest"]}
//                     loop={false}
//                     cursor
//                     cursorStyle="|"
//                     typeSpeed={140}
//                     deleteSpeed={100}
//                     delaySpeed={2000}
//                   />
//                 </span>
//               </motion.h1>

//               <motion.p
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 0.7 }}
//                 className={`mt-6 text-lg sm:text-xl ${theme.paragraphText}`}
//               >
//                 {showAlternate
//                   ? "Dive into AI innovation — sessions on machine learning, agents, and real-world applications for builders."
//                   : "Slide into a world of creativity — discover speakers, community projects, and hands-on sessions designed to inspire the next generation of African builders."}
//               </motion.p>

//               <div className="mt-10 flex items-center justify-center gap-6">
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-tl ${theme.buttonGradient} px-10 py-2 cursor-pointer shadow-md`}
//                   onClick={() => (window.location.href = "/home")}
//                 >
//                   <p className="text-sm font-semibold text-white ">{showAlternate ? "Explore AI" : "Slide to enter"}</p>
//                   <span className={`inline-block ml-2 rounded-full ${theme.subtleBadgeBg} px-3 py-1 text-xs font-medium`}>
//                     →
//                   </span>
//                   <motion.span
//                     className="absolute -left-32 h-full w-32 bg-white/10 backdrop-blur"
//                     animate={{ x: [0, 520] }}
//                     transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
//                   />
//                 </motion.button>

//                 <Link
//                   href="/about"
//                   className={`hidden items-center rounded-full border ${theme.linkBorder} bg-white px-5 py-2 text-sm ${theme.linkText} hover:shadow-sm md:flex`}
//                 >
//                   Learn more
//                 </Link>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           <motion.div
//             key={`flash-${showAlternate ? 1 : 0}`}
//             className="absolute inset-0 pointer-events-none"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: [0, 1, 0] }}
//             transition={{ duration: 3.0, ease: "easeInOut" }}
//             style={{ background: theme.flashColor }}
//           />
//         </div>
//       </section>
//     </>
//   )
// }




"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Typewriter } from "react-simple-typewriter"

const heroImages = [
  "/images/jtf-26.jpg",
  "/images/jtf-21.jpg",
  "/images/jtf-43.jpg",
  "/images/jtf-7.jpg",
  "/images/jtf-40.jpg",
  "/images/jtf-8.jpg",
  "/images/jtf-18.jpg",
  "/images/jtf-36.jpg",
  "/images/jtf-3.jpg",
  "/images/jtf-2.jpg",
]

export default function Hero() {
  const [showAlternate, setShowAlternate] = useState(false)
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setShowAlternate(prev => !prev), 15000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length)
    }, 10000)
    return () => clearInterval(bgInterval)
  }, [])

  const theme = showAlternate
    ? {
        titlePart1Color: "text-gray-100",
        titlePart2Color: "text-emerald-300",
        paragraphText: "text-gray-200",
        buttonGradient: "from-emerald-400 to-emerald-700",
        subtleBadgeBg: "bg-white/10",
        linkBorder: "border-gray-700",
        linkText: "text-gray-200",
        flashColor: "rgba(16, 185, 129, 0.12)",
      }
    : {
        titlePart1Color: "text-green-900",
        titlePart2Color: "text-green-700",
        paragraphText: "text-gray-700",
        buttonGradient: "from-green-300 to-green-900",
        subtleBadgeBg: "bg-white/20",
        linkBorder: "border-gray-200",
        linkText: "text-gray-700",
        flashColor: "rgba(34, 197, 94, 0.12)",
      }

  return (
    <>
      <section className="relative flex items-center justify-center w-full min-h-screen text-center overflow-hidden">

        {/* Background image crossfade, resized to fit and show all features */}
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 -z-10 w-full h-full bg-center"
            style={{
              backgroundImage: `url(${heroImages[bgIndex]})`,
              backgroundSize: "cover", // Ensures full image is visible
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "#000",
               // fallback for empty space
            }}
          />
        </AnimatePresence>

        {/* Centered content */}
        <div className="z-10 mx-auto max-w-5xl flex flex-col items-center justify-center w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={showAlternate ? "alt" : "primary"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
              className="w-full"
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
                    typeSpeed={140}
                    deleteSpeed={100}
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
      </section>
    </>
  )
}