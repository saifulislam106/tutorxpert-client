'use client';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import bannerImg from '../../assets/banner.jpg'; // or use from public folder if needed

const Banner = () => {
  return (
    <section className="bg-white dark:bg-gray-900 pt-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-white leading-tight">
            Find & Connect with the Best Tutors
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            TutorXpert helps students succeed by matching them with top-rated, verified tutors across all subjects.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Search by subject, grade, or tutor..."
              className="w-full py-3 pl-12 pr-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <Search className="absolute left-4 top-3.5 text-gray-500 dark:text-gray-400" size={20} />
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start gap-4 pt-2">
            <Link href="/tutors">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-300">
                Find Tutors
              </Button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full max-w-md md:max-w-none">
          <Image
            src={bannerImg}
            alt="Banner"
            width={400}
            height={300}
            className="w-full h-auto object-cover rounded-xl shadow-lg shadow-purple-100 transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
