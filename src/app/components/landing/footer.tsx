"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f4] text-gray-700 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-green-700">TechFest</h2>
          <p className="mt-4 text-sm text-gray-600">
            Celebrating innovation, creativity, and collaboration across Africa.
          </p>
        </div>

        {/* Quick Links */}
        <div>
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
        <div>
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
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Stay Updated
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Subscribe to get the latest TechFest updates.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-700 text-white text-sm rounded-r-lg hover:bg-amber-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10  pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TechFest. Built with ❤️ in Africa.
      </div>
    </footer>
  )
}
