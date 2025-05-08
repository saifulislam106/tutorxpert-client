'use client';

import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <section className="w-full py-12 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400 mb-4"
        >
          🎯 Our Mission
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Our mission is to empower students by connecting them with top educators and resources. We’re building a platform that promotes learning, growth, and achievement—accessible to all, no matter where they are or where they come from.
        </motion.p>
      </div>
    </section>
  );
};

export default MissionSection;

