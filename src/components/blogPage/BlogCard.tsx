/* eslint-disable @next/next/no-img-element */
import { BlogArticle } from "@/app/(WithCommonLayout)/blogs/page";
import Link from "next/link";
import React from "react";

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const BlogCard: React.FC<{ blog: BlogArticle }> = ({ blog }) => {
  const dateOnly = blog?.publishedAt?.split("T")[0];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={blog.urlToImage}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-purple-700 text-white text-xs px-3 py-1 rounded-full">
          {dateOnly}
        </span>
        
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors duration-300">
          {truncateText(blog.title, 8)}
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {truncateText(blog.description, 20)}
        </p>

        <Link
          href={`/blogs/${blog.author}`}
          className="inline-block text-purple-600 hover:underline font-medium text-sm"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
