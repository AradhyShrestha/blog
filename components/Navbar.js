"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-button";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

export default function Navbar() {
  
  const [progress, setProgress] = useState(0)
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30)

    setTimeout(() => {
      setProgress(70)
    }, 100);

    setTimeout(() => {
      setProgress(100)
    }, 800);
  }, [pathname])

  useEffect(() => {
    setTimeout(() => {
      setProgress(0)
    }, 900);
  }, [])
  
  

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur border-b">
      <LoadingBar
        color="#9810fa"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-purple-600">
          AradhyBlog
        </Link>

        {/* Desktop Menu + Buttons */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 font-medium">
            <li>
              <Link href="/" className="hover:text-purple-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-purple-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-600">
                Contact
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex space-x-4 items-center">
            <button className="px-4 py-2 rounded-md border border-purple-600 text-purple-600 hover:bg-gray-300 transition">
              Login
            </button>
            <button className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition">
              Sign Up
            </button>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu (Hamburger + Sheet) */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <div className="mx-4">
              <ModeToggle />
            </div>
            <SheetTrigger asChild>
              <button className=" focus:outline-none">
                {/* Hamburger Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="text-xl font-bold text-purple-600">
                  AradhyBlog
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Links */}
              <ul className="mx-auto space-y-4 font-medium">
                <li>
                  <Link href="/" className="block hover:text-purple-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block hover:text-purple-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="block hover:text-purple-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block hover:text-purple-600">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Auth Buttons (for mobile) */}
              <div className="mt-2 flex flex-col space-y-3 px-4">
                <button className="w-full px-4 py-2 rounded-md border border-purple-600 text-purple-600 hover:bg-purple-50 transition">
                  Login
                </button>
                <button className="w-full px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-700 transition">
                  Sign Up
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
