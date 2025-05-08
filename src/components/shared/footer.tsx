import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-black dark:bg-gray-800 dark:text-white mx-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600 dark:text-gray-400">
        {/* Brand Info */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-500 mb-2">
            TutorXpert 🎓
          </h3>
          <p>Connecting students with verified tutors for academic success.</p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-2">
            Explore
          </h4>
          <ul className="space-y-1 flex gap-8">
            <div>
            <li>
              <Link
                href="/"
                className="hover:text-purple-700 dark:hover:text-purple-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/tutors"
                className="hover:text-purple-700 dark:hover:text-purple-400"
              >
                Tutors
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-purple-700 dark:hover:text-purple-400"
              >
                About Us
              </Link>
            </li>
            </div>
            <div>
            <li>
              <Link
                href="/contact"
                className="hover:text-purple-700 dark:hover:text-purple-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="hover:text-purple-700 dark:hover:text-purple-400"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-purple-700 dark:hover:text-purple-400"
              >
                FAQ
              </Link>
            </li>
            </div>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
            Contact
          </h4>
          <p>Email: support@tutorlink.com</p>
          <p>Phone: +880-1234-567890</p>
          <p>Dhaka, Bangladesh 🇧🇩</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-b text-center text-xs py-4 text-gray-500 dark:text-gray-100">
        © {new Date().getFullYear()} TutorLink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
