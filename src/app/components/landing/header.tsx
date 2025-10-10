"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="inset-x-0 top-0 z-50 fixed">
      {/* Navbar */}
      <div className="flex items-center justify-between px-8  bg-white">
       
      <Link href="/" passHref>
        <Image
          src="/images/pic14.png"
          alt="Tech-fest Logo"
          width={70}
          height={70}
          className="cursor-pointer"
        />
      </Link>
          
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white-700 h-10">
          <Link href="/" className="hover:text-amber-500">Home</Link>
          <Link href="/about" className="hover:text-amber-500">About</Link>
          <Link href="/community" className="hover:text-amber-500">Community</Link>
          <Link href="/speakers" className="hover:text-amber-500">Speakers</Link>
          <Link href="/contact" className="hover:text-amber-500">Contact</Link>
        </nav>

        {/* Desktop button */}
        <Link
          href="/register"
          className="hidden md:inline-block border-green-700 border-1 rounded-full px-4 py-1 font-xs hover:bg-green-700 hover:text-white transition"
          // className="hidden md:inline-block rounded-full border bg-gradient-to-tl from-green-300 to-green-900 cursor-pointer px-4 py-2 text-sm font-medium text-white shadow-sm"
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


      <div className="overflow-hidden bg-green-900 text-white h-8 sm:h-8 lg:h-12 flex items-center w-full">
        <motion.div
          className="flex items-center gap-8 text-sm sm:text-sm lg:text-base font-medium w-full"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
        >
        
          <p className="whitespace-nowrap"> Welcome to TechFest 2025</p>
          <span className="center">
          |
          </span>

          <p>Innovation</p>
          <span className=" center">
          |
          </span>

          <p>Creativity</p>
          <span className="center">
          |
          </span>

          <p>Networking</p>
           <span className="center">
          |
          </span>

          <p className="whitespace-nowrap">World-class Speakers</p>
          <span className=" center">
          |
          </span>
          <p>#JosTechFest</p>
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
            className="border-green-700 border-1 rounded-full px-4 py-1/2 font-xs hover:bg-green-700 hover:text-white transition"
            // className="bg-gradient-to-tl from-green-300 to-green-900 px-10 py-2 rounded-full text-white cursor-pointer shadow-sm"
            onClick={() => setOpen(false)}
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
    
  )
}
