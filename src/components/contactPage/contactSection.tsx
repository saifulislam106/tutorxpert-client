'use client';

import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen w-full py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-purple-600 dark:text-white mb-4"
        >
          Get in Touch
        </motion.h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a question, feedback, or want to partner with us? Reach out using the form below or connect via live chat.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md"
          >
            <div className="mb-5">
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md transition duration-200"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              💬 Live Chat
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Chat with our support team 24/7. We&#39;re here to help with any inquiries or issues you may have.
            </p>

            <div className="space-y-2 text-gray-700 dark:text-gray-200">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:support@tutorlink.com" className="underline text-purple-600 dark:text-purple-400">
                  support@tutorXpert.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> +1 (234) 567-890
              </p>
              {/* Placeholder for chat widget */}
              {/* Example: <div id="live-chat-widget" /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
