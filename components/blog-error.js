export default function BlogError({ message }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">{message || "Sorry, this blog post couldn't be loaded."}</p>
        <a
          href="/blog"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View all blogs
        </a>
      </div>
    </div>
  );
}