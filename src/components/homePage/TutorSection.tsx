'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import tutorImg from '../../assets/tutor.jpg'
import { IUser } from '@/types/user'

const TutorSection = ({ tutors }: { tutors: IUser[] }) => {
  return (
    <section className="mt-12 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-purple-700 dark:text-white mb-10"
        >
          Meet Our Top Tutors 
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor, idx) => (
            <motion.div
              key={tutor._id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 group"
            >
              <div className="relative w-full h-56 md:h-60">
                <Image
                  src={tutor?.profilePicture || tutorImg}
                  alt={tutor?.name || 'Tutor'}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 transition duration-300">
                  {tutor?.name}
                </h3>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-300">
                  {tutor?.subjects
                    ?.split(',')
                    .map((s) => s.trim())
                    .filter(Boolean)
                    .join(', ')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{tutor?.bio}</p>
              </div>
              <div className="p-4 text-center">
                <Link
                  href={`/tutors/${tutor?._id}`}
                  className="inline-block bg-purple-600 text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-purple-700 transition"
                >
                  View Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/tutors">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
              See All Tutors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TutorSection
