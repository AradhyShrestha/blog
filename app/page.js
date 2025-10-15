"use client"
import Image from "next/image";
import Link from "next/link";
import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';

export default function Home() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['C',
        'C++',
        'Java',
        'Python',
        'JavaScript',
        'TypeScript',],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main className="bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* 🌟 Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:flex lg:items-center lg:justify-between gap-10">
        {/* Left Section */}
        <div className="w-full text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl md:text-4xl leading-snug text-gray-800 dark:text-gray-200">
            A <span className="font-semibold">free blog</span> for learning
            <br className="hidden lg:block" /> languages like{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to
            <br className="hidden lg:block" /> bootstrap your new apps, projects,
            or landing sites!
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="Tailwind CSS components"
            width={500}
            height={500}
            className="w-full max-w-md h-auto"
          />
        </div>
      </section>

      {/* 💸 Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Pricing Section
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            Choose a plan that fits your needs. No hidden fees.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
            {/* Free Plan */}
            <div className="p-8 transition-transform duration-300 border rounded-2xl hover:-translate-y-2 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Free
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                For personal or hobby projects
              </p>
              <p className="mt-6 text-4xl font-bold text-gray-800 dark:text-white">
                $0
                <span className="text-base font-medium text-gray-500">/mo</span>
              </p>
              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-300">
                <li>✔ 1 project</li>
                <li>✔ Basic support</li>
                <li>✔ Community access</li>
              </ul>
              <button className="w-full px-4 py-2 mt-8 text-white rounded-lg bg-primary hover:bg-primary/80 dark:text-black">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="p-8 border-2 border-primary rounded-2xl shadow-xl bg-gradient-to-br from-primary/5 to-transparent">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Pro
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                For freelancers and small teams
              </p>
              <p className="mt-6 text-4xl font-bold text-gray-800 dark:text-white">
                $19
                <span className="text-base font-medium text-gray-500">/mo</span>
              </p>
              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-300">
                <li>✔ Up to 10 projects</li>
                <li>✔ Priority support</li>
                <li>✔ Custom components</li>
              </ul>
              <button className="w-full px-4 py-2 mt-8 text-white rounded-lg bg-primary hover:bg-primary/80 dark:text-black">
                Upgrade Now
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 transition-transform duration-300 border rounded-2xl hover:-translate-y-2 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Enterprise
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                For large-scale business solutions
              </p>
              <p className="mt-6 text-4xl font-bold text-gray-800 dark:text-white">
                $49
                <span className="text-base font-medium text-gray-500">/mo</span>
              </p>
              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-300">
                <li>✔ Unlimited projects</li>
                <li>✔ Dedicated support</li>
                <li>✔ Early access features</li>
              </ul>
              <button className="w-full px-4 py-2 mt-8 text-white rounded-lg bg-primary hover:bg-primary/80 dark:text-black">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            Hear from some of our happy customers who trust our product.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow hover:-translate-y-2 transition-transform duration-300">
              <p className="text-gray-600 dark:text-gray-300 italic">
                "This platform helped us build and deploy our product in record time.
                The UI components are beautiful and easy to customize!"
              </p>
              <div className="flex items-center justify-center mt-6 space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client 1"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Rajesh Kumar
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Product Manager, NexaTech
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg border border-primary/20 hover:-translate-y-2 transition-transform duration-300">
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Absolutely love the simplicity and the design consistency.
                Highly recommend to any developer or designer."
              </p>
              <div className="flex items-center justify-center mt-6 space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Client 2"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Sneha Patel
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    UI Designer, PixelWave
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow hover:-translate-y-2 transition-transform duration-300">
              <p className="text-gray-600 dark:text-gray-300 italic">
                "The customer support is outstanding! They go above and beyond to
                ensure you succeed with their components."
              </p>
              <div className="flex items-center justify-center mt-6 space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  alt="Client 3"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Arjun Mehta
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    CEO, Cloudify
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📝 My Top Blogs Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            My Top Blogs
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            Explore some of my latest articles, guides, and tutorials.
          </p>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Blog 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
              <img
                src="/3.jpeg"
                alt="Blog 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  CSS Tutorial
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  This is CSS tutorial and this is for learning CSS
                </p>
                <Link href={"/blogpost/css-tutorial"}>
                  <button className="mt-4 text-primary font-medium hover:underline">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
              <img
                src="/2.webp"
                alt="Blog 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  ChatGPT vs Gemini
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  This is a debate for ChatGPT vs Gemini. A Comparative Analysis
                </p>
                <Link href={"/blogpost/chatgpt-vs-gemini"}>
                  <button className="mt-4 text-primary font-medium hover:underline">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
              <img
                src="/1.webp"
                alt="Blog 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  C++ Programming Tutorials
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  This is a C++ tutorial and this is for learning C++
                </p>
                <Link href={"/blogpost/cpp-programming-tutorial"}>
                  <button className="mt-4 text-primary font-medium hover:underline">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
