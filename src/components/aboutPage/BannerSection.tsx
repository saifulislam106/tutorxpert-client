'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import img from '../../assets/banner.jpg'

const BannerSection = () => {
  return (
    <section className="mt-[80px] px-6 pb-12 bg-white dark:bg-gray-900">
      {/* Banner Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 dark:text-white  mb-4 leading-tight">
            Find the Right Tutor for You 🎯
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Personalized one-on-one learning with top-rated tutors. Book your first session today and excel in your studies!
          </p>
          <Link href="/tutors">
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-3 rounded-lg transition">
              Get Started
            </button>
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="https://i.ibb.co.com/2Yf91FR6/banner2-removebg-preview.png" 
            alt="Banner"
            fill
            className="object-contain rounded-xl"
            priority
          />
        </motion.div>
      </div>

      {/* Small Feature Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-7xl mx-auto"
      >
        {[
          {
            icon: '🎓',
            title: 'Expert Tutors',
            desc: 'Learn from certified professionals across subjects.',
          },
          {
            icon: '⏳',
            title: 'Flexible Times',
            desc: 'Book sessions that fit your schedule.',
          },
          {
            icon: '💬',
            title: 'Interactive Learning',
            desc: 'Engage through live chats, quizzes & more.',
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold text-purple-700 dark:text-white mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default BannerSection;
