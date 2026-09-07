"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ── Gallery photos ───────────────────────────────────────────
   Mix of Vercel Blob CDN URLs + local /public/images files
   ─────────────────────────────────────────────────────────── */
const galleryPhotos = [
  {
    src: "https://77iiucovgsphsggt.public.blob.vercel-storage.com/pic%2040%29.jpg",
    alt: "TechFest attendees gathered in the main hall",
  },
  {
    src: "https://77iiucovgsphsggt.public.blob.vercel-storage.com/pic16.jpg",
    alt: "Speaker delivering a keynote on stage at TechFest",
  },
  {
    src: "https://77iiucovgsphsggt.public.blob.vercel-storage.com/picc1.jpg",
    alt: "Networking session at TechFest — builders connecting",
  },
  {
    src: "https://77iiucovgsphsggt.public.blob.vercel-storage.com/tf%20%2811%20of%2040%29.jpg",
    alt: "Panel discussion with industry experts at TechFest",
  },
  {
    src: "https://77iiucovgsphsggt.public.blob.vercel-storage.com/tf%20%2815%20of%2040%29.jpg",
    alt: "Audience engaged during a TechFest workshop session",
  },
  {
    src: "https://77iiucovgsphsggt.public.blob.vercel-storage.com/tf%20%2821%20of%2040%29.jpg",
    alt: "Community builders collaborating at TechFest open lounge",
  },
  {
    src: "https://77iiucovgsphsggt.public.blob.vercel-storage.com/tf%20%2835%20of%2040%29.jpg",
    alt: "Closing celebration and awards at TechFest",
  },
  {
    src: "/images/jtf-18.jpg",
    alt: "TechFest evening networking mixer",
  },
  {
    src: "/images/jtf-4.jpg",
    alt: "TechFest registration and welcome desk",
  },
  {
    src: "/images/jtf-2.jpg",
    alt: "Builders at a hands-on workshop session, TechFest",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative bg-slate-950 py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(16,185,129,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">
              Photo Archive
            </span>
            <h2
              id="gallery-heading"
              className="text-4xl sm:text-5xl font-black text-white tracking-tight"
            >
              From the Archives
            </h2>
            <p className="mt-3 text-slate-400 max-w-md">
              Snapshots of the energy, ideas, and people that made TechFest one for the books.
            </p>
          </div>

          <Link
            href="/galleries"
            aria-label="Browse full TechFest photo gallery"
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200 flex-shrink-0"
          >
            Browse all photos →
          </Link>
        </motion.div>

        {/* Photo grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          role="list"
          aria-label="TechFest photo gallery"
        >
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={index}
              role="listitem"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 cursor-pointer"
            >
              {/* Photo */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(2,6,23,0.7) 0%, transparent 60%)",
                }}
              />

              {/* Corner accent on hover */}
              <div className="absolute inset-0 ring-0 rounded-2xl group-hover:ring-1 group-hover:ring-blue-500/30 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/galleries"
            aria-label="See more photos from TechFest"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 px-7 py-3 text-sm font-semibold text-slate-200 hover:text-white transition-all duration-200"
          >
            See More Photos
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8h10M9 4l4 4-4 4"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
