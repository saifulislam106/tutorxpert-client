"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const faqData = [
  {
    question: "How can I register as a tutor?",
    answer:
      'Click on "Become a Tutor", fill in your info, and submit. We’ll review and respond shortly.',
  },
  {
    question: "How do I book a tutoring session?",
    answer:
      "Browse tutors, pick your subject, check availability, and follow the checkout steps.",
  },
  {
    question: "What subjects can I learn on TutorLink?",
    answer:
      "We offer Math, Science, English, Programming, History, and many more subjects.",
  },
  {
    question: "How do I make payment for a session?",
    answer:
      "Securely pay through our platform during the booking process with various methods.",
  },
  {
    question: "Can I reschedule my session?",
    answer:
      "Yes, if the tutor agrees and has availability. Use our messaging feature to coordinate.",
  },
  {
    question: "Do you offer any free sessions?",
    answer:
      "Some tutors offer trial classes or discounts. Check individual tutor profiles.",
  },
  {
    question: "How do I update my personal information?",
    answer:
      "Go to your account settings to edit name, email, subjects, and more.",
  },
  {
    question: "How do I get paid as a tutor?",
    answer:
      "Payments are processed after sessions. Set your preferred method in account settings.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "You can cancel up to 24 hours in advance for a full refund, unless stated otherwise.",
  },
  {
    question: "Is TutorLink available internationally?",
    answer:
      "Yes! Anyone with an internet connection can join as a tutor or student.",
  },
  {
    question: "How do I contact customer support?",
    answer: 'Visit our "Contact Us" page or email support@tutorlink.com.',
  },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQ = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-600 dark:text-white mb-10">
          Frequently Asked Questions
        </h2>

        {/* Search Box */}
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-xl mb-10 shadow-sm">
          <Search className="text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="ml-3 bg-transparent outline-none w-full text-gray-800 dark:text-white placeholder:text-gray-500 focus:ring-0"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm transition-all bg-white dark:bg-gray-800"
              >
                <button
                  onClick={() => toggleAnswer(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 dark:text-white"
                >
                  <span>{faq.question}</span>
                  {activeIndex === index ? (
                    <ChevronUp className="text-purple-600" />
                  ) : (
                    <ChevronDown className="text-purple-600" />
                  )}
                </button>

                {activeIndex === index && (
                  <p className="mt-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed transition-all duration-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No results found for &quot;{searchTerm}&quot;
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
