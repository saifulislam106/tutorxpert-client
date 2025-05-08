"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Aria Johnson",
    role: "Lead Developer",
    image:
      "https://i.ibb.co.com/sxr43gZ/cute-woman-avatar-profile-vector-illustration-1058532-14546.jpg",
  },
  {
    name: "Liam Chen",
    role: "Education Specialist",
    image:
      "https://i.ibb.co.com/TBTwPyCX/flat-design-happy-middle-age-man-icon-vector-illustration-1322553-70859.jpg",
  },
  {
    name: "Rachin Rivera",
    role: "Product Designer",
    image:
      "https://i.ibb.co.com/S7GPdmtF/young-black-man-icon-vector-man-icon-illustration-face-black-man-icon-african-people-icons-cartoon-s.webp",
  },
];

const TeamSection = () => {
  return (
    <section
      id="team"
      className="py-12 px-4 bg-gray-50 dark:bg-gray-900 text-center"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-white  mb-6">
          👥 Meet the Team
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-14 max-w-3xl mx-auto">
          TutorXpert is powered by passionate educators, innovative designers, and skilled developers.
          Together, we&apos;re reimagining online tutoring with empathy and precision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-24 h-24 mx-auto mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover border-4 border-purple-200 dark:border-purple-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
