'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/button';

const ActionBanner = () => {
  return (
    <section className="bg-purple-800  mt-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-white">
          🎓 Ready to Learn or Teach?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Join <span className="font-semibold text-purple-600 dark:text-purple-400">TutorLink</span> today and start your educational journey with trusted <br /> tutors or share your expertise with students worldwide.
        </p>

        <div className="flex sm:flex-row gap-4 justify-center mt-4">
          <Link
            href="/tutors"

          >
            <Button className='bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-300'>Find a Tutor</Button>
          </Link>
          <Link
            href="/register"
            // className="bg-white text-purple-600 hover:bg-gray-100 text-purple-700 font-semibold px-8 py-4 rounded-xl shadow-md shadow-purple-300 transition focus:ring-2  text-lg"
          >
            <Button className='bg-white hover:bg-gray-300 text-purple-600 shadow-md shadow-purple-300 transition'>Become a Tutor</Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ActionBanner;
