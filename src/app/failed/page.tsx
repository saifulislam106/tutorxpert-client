// pages/failure.js

"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Failure = () => {
  const router = useRouter();

  useEffect(() => {
    console.error("Payment failed or was canceled.");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-red-600">Payment Failed! ❌</h1>
        <p className="mt-2 text-gray-700">
          Something went wrong. Please try again.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Failure;
