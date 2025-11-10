'use client';

import Link from "next/link";

export default function Error({ error, reset }) {
  return ( 
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Something went wrong!</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">{error.message || "An unexpected error occurred."}</p>
        <div className="space-x-4">
          <button
            onClick={() => reset()}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}