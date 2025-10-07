


"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="text-gray-700 pt-12 pb-6 w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8 items-start">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mt-[-20px]">
            <Image
              src="/images/pic14.png"
              alt="Tech-fest Logo"
              width={120}
              height={120}
              className="mr-2"
              style={{ minWidth: 64, minHeight: 64 }}
            />
          </div>
          <p className="text-sm mt-2">
            Celebrating innovation, creativity, and collaboration across Africa.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-green-700">About</Link></li>
            <li><Link href="/agenda" className="hover:text-green-700">Agenda</Link></li>
            <li><Link href="/speakers" className="hover:text-green-700">Speakers</Link></li>
            <li><Link href="/partners" className="hover:text-green-700">Partners</Link></li>
            <li><Link href="/contact" className="hover:text-green-700">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Resources
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/blog" className="hover:text-green-700">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-green-700">FAQs</Link></li>
            <li><Link href="/privacy" className="hover:text-green-700">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-green-700">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-start w-full">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Stay Updated
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Subscribe to get the latest TechFest updates.
          </p>
{/*          
       
</form> */}
<form className="mt-4 flex flex-col sm:flex-row w-full max-w-full">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full md:w-36 sm:w-56 px-3 py-2 text-sm border border-gray-300 rounded-full sm:rounded-l-full sm:rounded-r-full focus:outline-none focus:ring-1 focus:ring-black mb-2 sm:mb-0"
  />
  <button
    type="submit"
    className="w-full sm:w-auto px-4 py-2 bg-green-900 text-sm text-white rounded-full sm:rounded-r-full sm:rounded-l-full transition"
  >
    Subscribe
  </button>
</form>
        </div>
      </div>
    </footer>
  )
}