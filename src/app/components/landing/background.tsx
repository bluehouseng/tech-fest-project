"use client";
import { motion } from "framer-motion";

const circles = Array.from({ length: 10 });

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {circles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 bg-green-400 rounded-full opacity-70"
          initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
          animate={{ y: "-10vh" }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}
