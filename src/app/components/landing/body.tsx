"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Body() {
  return (
    <>
      {/* Decorative shapes
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg className="absolute right-0 top-0 h-[420px] w-[420px] opacity-20" viewBox="0 0 600 600">
          <circle cx="300" cy="300" r="280" fill="#e6f8eb" />
        </svg>
        <svg className="absolute left-0 bottom-0 h-[320px] w-[320px] opacity-15" viewBox="0 0 600 600">
          <circle cx="300" cy="300" r="260" fill="#f5efe6" />
        </svg>
      </div> */}

      {/* Main section */}
      <section className="flex min-h-screen items-center justify-center px-6 text-center">
        <div className="z-10 mx-auto max-w-5xl">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-green-900 sm:text-5xl md:text-6xl"
          >
            Welcome to <span className="text-green-700">TechFest</span>
          </motion.h1>

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
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-green-700 px-6 py-3 text-white shadow-md"
              onClick={() => (window.location.href = "/home")}
            >
              <p className="mr-3 text-sm font-semibold text-amber-500">Slide to enter</p>
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

          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-600">
            <div>June 12–14 • Lagos</div>
            <div className="h-1 w-1 rounded-full bg-gray-400" />
            <div>Hybrid • In-person & Online</div>
          </div>
        </div>
      </section>

      {/* Swipe hint (mobile only) */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center text-xs text-gray-500 sm:hidden">
        Swipe → to enter
      </div>

      <footer className="pointer-events-none fixed bottom-6 left-6 z-40 text-xs text-gray-400">
        © TechFest — built with ❤️
      </footer>
    </>
  )
}
