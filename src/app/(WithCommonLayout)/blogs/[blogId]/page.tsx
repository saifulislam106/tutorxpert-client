/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import Image from "next/image";

interface BlogDetailsPageProps {
  params: {
    blogId: string;
  };
}

type Blog = {
  author: string;
  title: string;
  description: string;
  publishedAt: string;
  urlToImage: string;
};

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const decodedParams = decodeURIComponent(params.blogId);

  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a893a3bfa6ff4d6ba04ffebee2a4e707",
    { next: { revalidate: 30 } }
  );
  const BlogData = await res.json();
  const blog = BlogData?.articles?.find(
    (item: Blog) => item.author === decodedParams
  );

  return {
    title: blog?.title || "Blog",
    description: blog?.description || "Explore this blog post on TutorXpert!",
  };
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const decodedParams = decodeURIComponent(params.blogId);

  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a893a3bfa6ff4d6ba04ffebee2a4e707",
    { next: { revalidate: 30 } }
  );
  const BlogData = await res.json();
  const blog = BlogData?.articles?.find(
    (item: any) => item.author === decodedParams
  );

  if (!blog)
    return (
      <div className="text-center pt-20 text-lg text-gray-500 dark:text-gray-400">
        Blog not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Blog Image */}
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={blog.urlToImage || "/fallback.jpg"}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Blog Content */}
        <div className="mt-8 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-purple-700 dark:text-white">
            {blog.title}
          </h1>

          <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-4">
            <span>✍️ {blog.author || "Unknown Author"}</span>
            <span>📅 {new Date(blog.publishedAt).toLocaleDateString()}</span>
          </div>

          <p className="text-lg leading-relaxed dark:text-gray-300">
            {blog.description?.repeat(3) ||
              "No content available for this blog."}
          </p>

          <div className="pt-6 flex gap-2 flex-wrap">
            <span className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-white px-3 py-1 rounded-full text-xs">
              Tech
            </span>
            <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-3 py-1 rounded-full text-xs">
              News
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
