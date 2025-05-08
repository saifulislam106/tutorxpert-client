"use client";

import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaRegPaperPlane,
  FaRocketchat,
} from "react-icons/fa";

const steps = [
  {
    title: "Set Your Schedule",
    description:
      "Students and tutors align on available times, ensuring convenient learning sessions.",
    icon: <FaCalendarCheck size={32} />,
  },
  {
    title: "Apply as a Tutor",
    description:
      "Tutors create a professional profile and apply to teach on our platform.",
    icon: <FaRegPaperPlane size={32} />,
  },
  {
    title: "Start the Journey",
    description:
      "Enjoy a personalized tutoring experience from booking to learning and beyond.",
    icon: <FaRocketchat size={32} />,
  },
];

const WorkingSection = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-bold text-purple-700 dark:text-white  mb-14"
        >
          🚀 How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-700 text-purple-700 dark:text-white">
                  {step.icon}
                </div>
                <span className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                  {step.title}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
