import Image from "next/image";
import Link from "next/link";
import fs from "fs"
import matter from "gray-matter"

const dirContent = fs.readdirSync("content", "utf-8");

const blogs = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent)
  return data
})

// const blogs = [
//   {
//     id: 1,
//     title: "Mastering Tailwind CSS for Developers",
//     description:
//       "Learn how to use Tailwind like a pro to build modern, responsive UIs.",
//     image:
//       "/tailwind.png",
//     date: "Oct 1, 2025",
//     readTime: "6 min read",
//     slug: "/tailwind"
//   },
//   {
//     id: 2,
//     title: "UI/UX Design Tips for Developers",
//     description:
//       "Essential design principles every developer should know in 2025.",
//     image:
//       "/uxui.png",
//     date: "Sep 25, 2025",
//     readTime: "7 min read",
//     slug: "/uiux"
//   },
//   {
//     id: 3,
//     title: "Building Stunning UIs with Next.js",
//     description:
//       "A step-by-step guide to creating clean and powerful interfaces with Next.js.",
//     image:
//       "/next.png",
//     date: "Sep 28, 2025",
//     readTime: "5 min read",
//     slug: "/next"
//   },
//   {
//     id: 4,
//     title: "Next.js 15 — What’s New & Why It Matters",
//     description:
//       "Discover the latest features and performance boosts in Next.js 15.",
//     image:
//       "/nexNext.png",
//     date: "Sep 20, 2025",
//     readTime: "4 min read",
//     slug: "/15next"
//   },
//   {
//     id: 5,
//     title: "The Art of Responsive Design",
//     description:
//       "Design principles and Tailwind tricks for a pixel-perfect layout.",
//     image:
//       "/responsive.png",
//     date: "Sep 10, 2025",
//     readTime: "8 min read",
//     slug: "/responsive"
//   },
// ];
export default function BlogsPage() {

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mt-5">
            All Blogs
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mt-3">
            Explore all my latest articles, tutorials, and insights.
          </p>
        </div>

        {/* 🧱 Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.image}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:-translate-y-2 transition-transform duration-300 overflow-hidden"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-semibold">
                  {new Date(blog.date).toDateString()}
                </p>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {blog.title}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400 line-clamp-2 font-semibold">
                  {blog.description}
                </p>
                <Link href={`/blogpost/${blog.slug}`}>
                  <button className="mt-4 py-2 rounded-lg text-primary font-medium px-3 dark:hover:bg-gray-600 hover:bg-gray-400 border">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
