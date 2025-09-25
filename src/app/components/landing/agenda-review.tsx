"use client"
import { motion } from "framer-motion"

const agenda = [
  {
    day: "Day 1 - Innovation",
    date: "June 12, 2025",
    events: [
      { time: "09:00 AM", title: "Opening Ceremony & Welcome" },
      { time: "10:30 AM", title: "Keynote: The Future of African Tech" },
      { time: "01:00 PM", title: "Panel: Startups & Sustainable Growth" },
      { time: "03:00 PM", title: "Workshop: Building Scalable Apps" },
    ],
  },
  {
    day: "Day 2 - Collaboration",
    date: "June 13, 2025",
    events: [
      { time: "09:00 AM", title: "Networking Breakfast" },
      { time: "11:00 AM", title: "Panel: Women in Tech Leadership" },
      { time: "02:00 PM", title: "Fireside Chat: Investors & Founders" },
      { time: "04:00 PM", title: "Hackathon Kickoff" },
    ],
  },
  
]

export default function Agenda() {
  return (
    <section className="w-full bg-[#f5f5f4] py-16 px-6 md:px-12 font-poppins mt-30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-900 text-center"
        >
          Agenda
        </motion.h2>
        <p className="mt-3 text-center text-gray-600">
          2 days of innovation, collaboration, and unforgettable experiences.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {agenda.map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-green-800">{day.day}</h3>
              <p className="text-sm text-gray-500">{day.date}</p>
              <div className="mt-6 space-y-5">
                {day.events.map((event, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    {/* Timeline dot */}
                    <div className="w-2 h-2 mt-2 rounded-full bg-amber-500"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{event.time}</p>
                      <p className="text-sm text-gray-600">{event.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
