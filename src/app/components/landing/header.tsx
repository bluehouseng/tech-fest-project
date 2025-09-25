"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="inset-x-0 top-0 z-50 fixed">
      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="text-lg font-semibold text-green-800">TechFest</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white-700">
          <Link href="/" className="hover:text-amber-500">Home</Link>
          <Link href="/about" className="hover:text-amber-500">About</Link>
          <Link href="/community" className="hover:text-amber-500">Community</Link>
          <Link href="/speakers" className="hover:text-amber-500">Speakers</Link>
          <Link href="/contact" className="hover:text-amber-500">Contact</Link>
        </nav>

        {/* Desktop button */}
        <Link
          href="/register"
          className="hidden md:inline-block rounded-full border border-green-700 bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm"
        >
          Register Now
        </Link>

      
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

    
      <div className="overflow-hidden bg-green-700 text-white">
        <motion.div
          className="flex items-center gap-8 text-sm font-sm  py-2 sm:py-2 w-[200%] sm:w-[150%] md:w-full {poppins.className}"
          animate={{ x: ["100%", "-100%"]  }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
        
          <p> Welcome to TechFest 2025</p>
          <span className="material-symbols-outlined center">
          star
          </span>

          <p>Innovation</p>
          <span className="material-symbols-outlined center">
          star
          </span>

          <p>Creativity</p>
          <span className="material-symbols-outlined center">
          star
          </span>

          <p>Networking</p>
           <span className="material-symbols-outlined center">
          star
          </span>

          <p>World-class Speakers</p>
          <span className="material-symbols-outlined center">
          star
          </span>

          <p> #TechFestJos

          </p>
        </motion.div>
      </div>

     
      {open && (
        <div className="absolute left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-40">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/community" onClick={() => setOpen(false)}>Community</Link>
          <Link href="/speakers" onClick={() => setOpen(false)}>Speakers</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link
            href="/register"
            className="rounded-full bg-green-700 px-4 py-2 text-sm text-white hover:bg-amber-500"
            onClick={() => setOpen(false)}
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  )
}
