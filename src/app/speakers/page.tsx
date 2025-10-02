// "use client";

// import { motion } from "framer-motion";

// const speakers = Array.from({ length: 15 }, (_, i) => ({
//   name: `Speaker ${i + 1}`,
//   role: "Innovation Leader",
//   image: "/placeholder.jpg", // replace with real images later
// }));

// export default function Speakers() {
//   return (
//     <section className="w-full bg-[#f9faf9] py-16 px-6 md:px-12 font-poppins">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-green-900"
//         >
//           Meet Our Speakers
//         </motion.h2>
//         <p className="mt-4 text-gray-600">
//           Visionaries, innovators, and leaders shaping the future of technology.
//         </p>
//       </div>

//       {/* Speaker Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-color-#35939b">
//         {speakers.map((speaker, index) => (
//           <motion.div
//             key={index}
//             whileHover={{
//               scale: 1,
//               rotate: 1,
//             }}
//             transition={{ duration: 0.3 }}
//             className="relative bg-white rounded-md overflow-hidden group cursor-pointer"
//           >
//             {/* Speaker Image */}
//             <div className="h-96 w-full bg-green-200 overflow-hidden">
//               <img
//                 src={speaker.image}
//                 alt={speaker.name}
//                 className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
//               />
//             </div>

//             {/* Speaker Info */}
//             {/* <div className="p-4 text-center bg-gradient-to-r from-green-50 to-green-100">
//               <h3 className="text-lg font-semibold">
//                 {speaker.name}
//               </h3>
//               <p className="text-sm text-gray-600">{speaker.role}</p>
//             </div> */}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
// // 



// components/Speakers.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Speaker {
  name: string;
  role: string;
  image: string;
}

// Generate 15 speakers
const speakers: Speaker[] = Array.from({ length: 15 }, (_, i) => ({
  name: `Speaker ${i + 1}`,
  role: "Innovation Leader",
  image: "/images/pic4.jpg", // replace with real images later
}));

export default function Speakers() {
  return (
    <section className="py-20 bg-[#f9faf9] font-poppins">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-900"
        >
          Meet Our Speakers
        </motion.h2>
        <p className="mt-4 text-gray-600 mb-12">
          Visionaries, innovators, and leaders shaping the future of technology.
        </p>

        {/* Speaker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.name}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full max-w-[18rem]"
            >
              <div className="relative w-full h-96 rounded-md overflow-hidden shadow-2xl">
                {/* Overlay with name + role */}
                <div className="absolute top-0 left-0 w-full p-4 z-10 text-left">
                  <h3 className="text-lg font-semibold text-white">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-gray-300">{speaker.role}</p>
                </div>

                {/* Speaker Image */}
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        {/* <div className="mt-12">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-tl from-green-300 to-green-900 px-10 py-2 cursor-pointer shadow-md"
            onClick={() => (window.location.href = "/speakers")}
          >
            <p className="text-white">Explore all speakers</p>
            <span className="inline-block ml-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
              →
            </span>
            <motion.span
              className="absolute -left-32 h-full w-32 bg-white/10 backdrop-blur"
              animate={{ x: [0, 520] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </motion.button>
        </div> */}
      </div>
    </section>
  );
}
