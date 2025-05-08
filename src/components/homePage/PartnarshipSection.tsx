'use client';

import { motion } from 'framer-motion';
import edxImg from '../../assets/sponsorshipLogo/edx.png'
import KhanImg from '../../assets/sponsorshipLogo/khanAcademy.png';
import udemeImg from '../../assets/sponsorshipLogo/udeme.png'
import unescoImg from '../../assets/sponsorshipLogo/unesco-seeklogo.png';
import courseraImg from '../../assets/sponsorshipLogo/Coursera-Logo.png';
import Image from 'next/image';


const partners = [
  { name: 'Khan Academy', logo: KhanImg },
  { name: 'Coursera', logo: courseraImg },
  { name: 'EdX', logo: edxImg },
  { name: 'Udemy', logo: udemeImg},
  { name: 'UNESCO', logo: unescoImg},
];

const Partnerships = () => {
  return (
    <section className="mt-12 py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-700  dark:text-white mb-6"
        >
          🤝 Our Trusted Partners
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          We’re proud to collaborate with leading organizations in education and technology to ensure
          every student and tutor gets the best tools and support.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative w-28 h-14 mx-auto"
            >
              <Image
                src={partner?.logo}
                alt={partner?.name}
                fill
                className="object-contain bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                priority={true}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
