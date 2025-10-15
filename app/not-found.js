"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-20 gap-16 md:gap-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 transition-colors">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Looks like you’ve found the doorway to the great nothing
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto lg:mx-0">
          Sorry about that! Please visit our homepage to get where you need to go.
        </p>
        <div>
          <Link
            href="/"
            className="inline-block rounded-md bg-indigo-600 px-8 py-4 text-white font-medium shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 transition"
          >
            Take me there!
          </Link>
        </div>
      </div>

      {/* Right Illustration */}
      <div className="w-full lg:w-1/2 flex justify-center animate-fadeIn">
        <Image
          src="https://i.ibb.co/ck1SGFJ/Group.png"
          alt="404 astronaut illustration"
          width={400}
          height={400}
          className="w-full max-w-sm md:max-w-md"
          priority
        />
      </div>
    </div>
  );
}
