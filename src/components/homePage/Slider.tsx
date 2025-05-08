'use client'

import {
  FaChalkboardTeacher,
  FaUsers,
  FaSmile,
  FaHeadset,
  FaRegCalendarCheck,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const achievements = [
  {
    stat: '5,000+',
    label: 'Successful Sessions',
    icon: <FaRegCalendarCheck size={32} className="text-purple-600 dark:text-purple-400" />,
  },
  {
    stat: '1,200+',
    label: 'Verified Tutors',
    icon: <FaChalkboardTeacher size={32} className="text-green-600 dark:text-green-400" />,
  },
  {
    stat: '10,000+',
    label: 'Registered Students',
    icon: <FaUsers size={32} className="text-blue-600 dark:text-blue-400" />,
  },
  {
    stat: '99%',
    label: 'Positive Feedback',
    icon: <FaSmile size={32} className="text-yellow-500 dark:text-yellow-400" />,
  },
  {
    stat: '24/7',
    label: 'Support Available',
    icon: <FaHeadset size={32} className="text-pink-500 dark:text-pink-400" />,
  },
]

const AchievementsColumn = () => {
  return (
    <section className="mt-12 pt-12 bg-purple-50 dark:bg-gray-900 border-t border-purple-200 dark:border-gray-700 transition-colors duration-300">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold text-purple-700 dark:text-white">Our Achievements 🏆</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Celebrating milestones with our amazing community
        </p>
      </motion.div>

      {/* Vertical Cards Layout */}
      <div className="max-w-2xl mx-auto flex flex-col gap-6 px-4">
        {achievements.slice(0, 4).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all flex items-center gap-6"
          >
            <div className="bg-white dark:bg-gray-700 p-4 rounded-full shadow-sm">
              {item.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400">{item.stat}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AchievementsColumn
