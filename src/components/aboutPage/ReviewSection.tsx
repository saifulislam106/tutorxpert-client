'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const ReviewSection = () => {
  const reviews = [
    { name: 'Sarah M.', comment: 'TutorLink helped me find the perfect tutor for my SATs. Highly recommended!', role: 'Student' },
    { name: 'James T.', comment: 'As a tutor, this platform gave me exposure and helped me connect with more students.', role: 'Tutor' },
    { name: 'Olivia R.', comment: 'A brilliant concept! Easy to use and effective for online learning.', role: 'Student' },
    { name: 'Michael B.', comment: 'This platform really simplified finding help for my child’s homework.', role: 'Parent' },
    { name: 'Anna L.', comment: 'Great UX, intuitive interface, and real results!', role: 'Student' },
  ];

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 12,
        },
      },
    },
  });

  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 dark:text-white  mb-12">
          💬 What People Are Saying
        </h2>

        <div ref={sliderRef} className="keen-slider">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-100 dark:border-purple-700"
            >
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-4 leading-relaxed italic">
                “{review.comment}”
              </p>
              <div className="mt-4">
                <h3 className="text-purple-700 dark:text-purple-400 font-semibold text-base">{review.name}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
