/* eslint-disable react-hooks/exhaustive-deps */
"use client";

// Modern, professional redesign of tutor profile using purple as primary color and Tailwind best practices

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent } from "@/components/ui/tabs";
// import { CardContent } from "@/components/ui/card";

import {
  BookDown,
  CalendarCheck2,
  CalendarDays,
  CheckCircle,
  Clock3,
  GraduationCap,
  Mail,
  MapPinHouse,
  MessageSquareDiff,
  PhoneCall,
  UserRound,
  UserSearch,
} from "lucide-react";

import { useUser } from "@/context/UserContext";
import { sendTutorPermit } from "@/services/sendTutorPermits";
import { getReviews, postReview } from "@/services/review";
import StarRating from "@/components/shared/starRating";

import { IUser } from "@/types/user";
import tutorImg from "../../../assets/tutor.jpg";

export interface IReview {
  tutorId: string;
  name: string;
  rating: number;
  reviewText: string;
}

const DetailsProfiles = ({ tutor }: { tutor: IUser | null }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [reviews, setReviews] = useState<IReview[]>([]);
  const user = useUser();
  const router = useRouter();
  const [requestStatus, setRequestStatus] = useState<string | null>(null);

  const fetchReviews = async () => {
    if (!tutor?._id) return;
    const response = await getReviews(tutor._id);
    if (response.success) setReviews(response.data);
  };

  useEffect(() => {
    fetchReviews();
  }, [tutor?._id]);

  const handleOpenDialog = () => {
    if (!user?.user?.email) {
      toast.error("Log in First");
      router.push("/login");
      return;
    }
    setIsDialogOpen(true);
  };

  const handleReviewSubmit = async () => {
    if (!reviewText.trim()) {
      toast.error("Review cannot be empty!");
      return;
    }
    if (!tutor) {
      toast.error("Tutor information is not available.");
      return;
    }
    const response = await postReview(tutor._id, reviewerName, rating, reviewText);
    if (response.success) {
      toast.success("Review submitted successfully!");
      setIsDialogOpen(false);
      setReviewText("");
      fetchReviews();
    } else {
      toast.error(response.message);
    }
  };

  const handleRequest = async () => {
    if (!user?.user?.email) {
      toast.error("User Information is not available.");
      router.push("/login");
      return;
    }
    setRequestStatus("pending");
    if (!tutor) {
      toast.error("Tutor information is not available.");
      return;
    }
    const response = await sendTutorPermit(tutor._id, user.user.email, tutor.price ?? 0);
    if (response.success) {
      toast.success(response.message);
      setRequestStatus("sent");
    } else {
      toast.error(response.message);
      setRequestStatus(null);
    }
  };

  if (!tutor) return <p>Loading tutor data...</p>;

  return (
    <section className="space-y-8 pt-8 bg-white dark:bg-slate-900 ">
      <header className="text-center my-8">
        <h2 className="text-3xl font-bold text-purple-600">{tutor.name}`s Profile</h2>
      </header>

      <div className=" border rounded-xl shadow-md p-6 space-y-6">
        {/* Profile Card */}
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40">
            <Image
              src={tutor.profilePicture || tutorImg}
              alt="Profile Picture"
              fill
              className="rounded-full border-4 border-purple-500 object-cover"
            />
            <CheckCircle className="absolute bottom-2 right-2 text-green-500 bg-white rounded-full w-6 h-6 p-1" />
          </div>

          <h3 className="text-2xl text-white font-semibold mt-4">{tutor.name}</h3>
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-200 text-sm">
            <StarRating rating={tutor?.averageRating ?? 0} />
            <span className="font-bold">5.0</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {tutor.subjects?.split(",").map((subject, i) => (
              <span key={i} className="px-4 py-1 border border-purple-600 text-purple-600 rounded-full text-sm">
                {subject.trim()}
              </span>
            ))}
          </div>

          <div className="mt-2 text-lg font-medium dark:text-white">
            Hourly Rate: <span className="text-purple-700 font-bold">${tutor.price}</span>
          </div>
        </div>

        {/* Availability */}
        <div className="text-center">
          <h4 className="text-xl font-semibold dark:text-white flex items-center justify-center gap-2">
            <CalendarCheck2 className="text-purple-500 " /> Available Time Slots
          </h4>
          <div className="mt-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 py-2 px-4 rounded">
            <CalendarDays size={18} className="inline mr-1" />
            {tutor?.availability?.from && tutor?.availability?.to
              ? `${new Date(tutor.availability.from).toLocaleDateString()} - ${new Date(tutor.availability.to).toLocaleDateString()}`
              : "Availability not provided"}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="about">
          <TabsContent value="about">
            <div className="space-y-6">
              <section>
                <h4 className="text-xl font-semibold dark:text-white flex gap-2">
                  <UserRound className="text-purple-500" /> About
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{tutor.bio}</p>
              </section>

              <section className="flex flex-col md:flex-row gap-12">
                <div>
                  <h4 className="text-xl font-semibold dark:text-white flex gap-2">
                    <GraduationCap className="text-purple-500" /> Education
                  </h4>
                  <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
                    <li>
                      Master`s in {tutor.subjects?.split(",").join(" and ")}, University of Oxford (2020–2022)
                    </li>
                    <li>B.Sc in Mathematics, University of Dhaka (2020–2022)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold dark:text-white flex gap-2">
                    <Clock3 className="text-purple-500" /> Experience
                  </h4>
                  <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
                    <li>5+ years of tutoring experience</li>
                    <li>Worked with 50+ students</li>
                  </ul>
                </div>
              </section>

              <section>
                <h4 className="text-xl font-semibold dark:text-white flex gap-2">
                  <UserSearch className="text-purple-500" /> Contact
                </h4>
                <div className="space-y-1 mt-2 text-gray-600 dark:text-gray-300">
                  <div className="flex gap-2 items-center">
                    <PhoneCall size={18} /> {tutor.phone || "01874072***"}
                  </div>
                  <div className="flex gap-2 items-center">
                    <Mail size={18} /> {tutor.email}
                  </div>
                  <div className="flex gap-2 items-center">
                    <MapPinHouse size={18} /> {tutor.address || "N/A"}
                  </div>
                </div>
              </section>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 mt-4"
            onClick={handleRequest}
            disabled={requestStatus === "pending"}
          >
            <BookDown className="mr-2" />
            {requestStatus === "pending" ? "Booking Pending..." : "Book Now"}
          </Button>
        </div>
      </div>

      {/* Reviews */}
      <section className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-lg shadow mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-purple-800 dark:text-white">Student Reviews</h3>
          <Button className="bg-purple-600 text-white hover:bg-purple-700" onClick={handleOpenDialog}>
            <MessageSquareDiff className="mr-2" /> Add Review
          </Button>
        </div>
        <div className="mt-4 space-y-4">
          {reviews.length > 0 ? (
            reviews.map((review, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded shadow">
                <div className="flex justify-between">
                  <h4 className="font-bold uppercase">{review.name}</h4>
                  <StarRating rating={review.rating} />
                </div>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{review.reviewText}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-300">No reviews yet...</p>
          )}
        </div>
      </section>

      {/* Review Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white dark:bg-slate-800 border border-purple-600">
          <DialogHeader>
            <DialogTitle className="text-purple-700 dark:text-purple-300">Write a Review</DialogTitle>
          </DialogHeader>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
          <Input value={reviewerName} onChange={(e) => setReviewerName(e.target.value)} placeholder="Name" />

          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">Rating (1-5)</label>
          <Input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />

          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">Feedback</label>
          <Textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Share your experience"
            rows={4}
          />

          <div className="mt-4 text-end">
            <Button onClick={handleReviewSubmit} className="bg-purple-600 text-white hover:bg-purple-700">
              Submit Review
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DetailsProfiles;
