// components/KeynoteSpeakers.tsx
"use client";

import Image from "next/image";

interface Speaker {
  name: string;
  role: string;
  image: string;
}

const keynoteSpeakers: Speaker[] = [
  {
    name: "Dr. Ayo Omotayo",
    role: "Keynote Speaker",
    image: "/images/speaker_ayo.jpg",
  },
  {
    name: "Prof. Jane Doe",
    role: "AI & Future of Work",
    image: "/images/speaker_jane.jpg",
  },
  {
    name: "Engr. Musa Bello",
    role: "Tech Policy & Innovation",
    image: "/images/speaker_musa.jpg",
  },
];

export default function KeynoteSpeakers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-5">
          Keynote Speakers
        </h2>
        <h5 className="text-gray-600 mb-12">
    Visionary leaders sharing ideas that will shape the future of technology
  </h5>

        <div className="relative flex justify-center gap-3 items-center h-[520px]">
          //{keynoteSpeakers.map((speaker, index) => {
           // const rotations = ["-rotate-12", "rotate-0", "rotate-12"];
            // const positions = [
            //   "left-0 top-16",
            //   "left-1/2 -translate-x-1/2 top-0 z-20",
            //    "right-0 top-16",
            //  ];

            return (
              <div
                key={speaker.name}
                //className={`absolute ${positions[index]} ${rotations[index]} hover:rotate-0 transition-transform duration-500`}
              >
                <div className="relative w-72 h-96 bg-white rounded-md overflow-hidden shadow-2xl">
                  {/* Top overlay with name + role */}
                  <div className="absolute top-0 left-0 w-full bg-gray-600 bg-opacity-90 p-4 z-10">
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
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
