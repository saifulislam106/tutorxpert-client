
import { getAllTutors } from "@/services/tutor";
import React from "react";
import type { Metadata } from 'next'
import BrowseTutors from "@/components/tutorPage/BrowseTutors";

export const metadata:Metadata = {
  title: "TutorLink | Tutors",
  description: "Find an online tutor to help you study",
};

const TutorsPage = async () => {
  const tutorsData = await getAllTutors(); // Fetch all tutors data
  // console.log(tutorsData ,"tutorsData");
  const tutors = tutorsData?.data || [];
  return (
    <div className="max-w-7xl mx-auto pt-40 bg-white dark:bg-gray-900">
      <h2 className="text-2xl md:text-4xl text-white font-bold text-center">
        Find an online tutor to help you study
      </h2>
      <p className="mt-4 text-sm text-center text-gray-300 max-w-2xl mx-auto">
        Browse our list of experienced and verified tutors across various
        subjects. Whether you are preparing for exams or need help understanding
        difficult topics, find the perfect tutor to guide your learning journey.
      </p>

      <div className="mt-8 px-4 md:px-0">
        <BrowseTutors tutors= {tutors}></BrowseTutors> {/* Pass the fetched tutors data to the BrowseTutors component */}
      </div>
    </div>
  );
};

export default TutorsPage;
