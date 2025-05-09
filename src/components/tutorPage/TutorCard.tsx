"use client";

import { MapPin, ScanEye } from "lucide-react";
import React from "react";
import img from "../../assets/tutor.jpg";
import Link from "next/link";
import { IUser } from "@/types/user";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const TutorsCard = ({ tutor }: { tutor: IUser }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-5 mb-6 border border-purple-100 dark:border-zinc-700">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image */}
        <div className="lg:w-1/4 w-full flex justify-center">
          <Image
            src={tutor?.profilePicture || img}
            alt={tutor?.name || "Tutor"}
            height={400}
            width={400}
            className="rounded-lg object-cover border-2 border-purple-200 dark:border-zinc-600 w-full max-w-[250px] h-[250px]"
          />
        </div>

        {/* Tutor Info */}
        <div className="lg:w-2/4 w-full space-y-2">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">
            {tutor?.name}
          </h2>
          <div className="flex items-center text-zinc-500 dark:text-zinc-300 text-sm gap-2">
            <MapPin size={16} className="text-red-500" />
            {tutor?.address ? tutor.address.split(",").pop()?.trim() : "N/A"}
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Hi! I’m <strong>{tutor?.name}</strong>. I have years of experience tutoring{" "}
            {tutor?.subjects?.split(",").map((subject, index) => (
              <strong key={index}>
                {index > 0 && ", "}
                {subject.trim()}
              </strong>
            ))}
            , which I’m truly passionate about. My strong subject foundation and
            near-completed Master’s in M.S.C. help me guide students with clarity and confidence.
          </p>
        </div>

        {/* Action Area */}
        <div className="lg:w-1/4 w-full flex flex-col items-center justify-center text-center space-y-3">
          <div className="text-sm font-semibold text-zinc-700 dark:text-white">
            ⭐ {tutor?.averageRating?.toFixed(1) || "0.0"} / 5.0
          </div>

          {/* Subject tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            {tutor?.subjects?.split(",").map((subject, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {subject.trim()}
              </span>
            ))}
          </div>

          <p className="text-lg font-bold text-purple-600">${tutor?.price}/hr</p>

          {/* Button */}
          <Link href={`/tutors/${tutor?._id}`} className="w-full">
            <Button
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm flex items-center justify-center gap-2"
            >
              <ScanEye size={16} />
              View Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorsCard;
