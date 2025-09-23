"use client"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 flex items-center justify-between px-6 md:px-12">
      <div className="text-lg font-semibold text-green-800">TechFest</div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
        <Link href="/" className="hover:text-amber-200">Home</Link>
        <Link href="/about" className="hover:text-amber-200">About</Link>
        <Link href="/community" className="hover:text-amber-200">Community</Link>
        <Link href="/speakers" className="hover:text-amber-200">Speakers</Link>
        <Link href="/contact" className="hover:text-amber-200">Contact</Link>
      </nav>
      <div className="ml-4">
        <Link
          href="/register"
          className="inline-block rounded-full border border-green-700 bg-white px-4 py-2 text-sm font-medium text-green-800 shadow-sm hover:shadow-md"
        >
          Register Now
        </Link>
      </div>
    </header>
  )
}
