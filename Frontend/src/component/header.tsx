"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white py-6 px-10 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-3">
        <img src="/epic4.png" alt="EPIC Logo" className="w-10 h-10" />
        <span className="text-2xl font-semibold ml-2">EPIC™</span>
      </div>

      <nav className="flex space-x-8 text-lg relative">
        {/* Solutions */}
        <div className="relative group">
          <div className="hover:text-gray-400 cursor-pointer">Solutions ▼</div>
          <div className="absolute left-0 top-full mt-0 group-hover:block hidden bg-black/60 backdrop-blur text-white rounded-md shadow-xl w-64 z-50 border border-white/20">
            <ul className="py-2 text-base">
              <li className="px-5 py-2 hover:bg-white/10 border-b border-white/10 cursor-pointer">
                Analytics
              </li>
              <li className="px-5 py-2 hover:bg-white/10 border-b border-white/10 cursor-pointer">
                Automation
              </li>
              <li className="px-5 py-2 hover:bg-white/10 cursor-pointer">
                Integration
              </li>
            </ul>
          </div>
        </div>

        {/* Customers */}
        <div className="relative group">
          <div className="hover:text-gray-400 cursor-pointer">Customers ▼</div>
          <div className="absolute left-0 top-full mt-0 group-hover:block hidden bg-black/60 backdrop-blur text-white rounded-md shadow-xl w-64 z-50 border border-white/20">
            <ul className="py-2 text-base">
              <li className="px-5 py-2 hover:bg-white/10 border-b border-white/10 cursor-pointer">
                Case Studies
              </li>
              <li className="px-5 py-2 hover:bg-white/10 cursor-pointer">
                Testimonials
              </li>
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div className="relative group">
          <div className="hover:text-gray-400 cursor-pointer">Resources ▼</div>
          <div className="absolute left-0 top-full mt-0 group-hover:block hidden bg-black/60 backdrop-blur text-white rounded-md shadow-xl w-64 z-50 border border-white/20">
            <ul className="py-2 text-base">
              <li className="px-5 py-2 hover:bg-white/10 border-b border-white/10 cursor-pointer">
                Docs
              </li>
              <li className="px-5 py-2 hover:bg-white/10 border-b border-white/10 cursor-pointer">
                Tutorials
              </li>
              <li className="px-5 py-2 hover:bg-white/10 cursor-pointer">
                Webinars
              </li>
            </ul>
          </div>
        </div>

        {/* Company */}
        <div className="relative group">
          <div className="hover:text-gray-400 cursor-pointer">Company ▼</div>
          <div className="absolute left-0 top-full mt-0 group-hover:block hidden bg-black/60 backdrop-blur text-white rounded-md shadow-xl w-64 z-50 border border-white/20">
            <ul className="py-2 text-base">
              <li className="px-5 py-2 hover:bg-white/10 border-b border-white/10 cursor-pointer">
                About Us
              </li>
              <li className="px-5 py-2 hover:bg-white/10 border-b border-white/10 cursor-pointer">
                Careers
              </li>
              <li className="px-5 py-2 hover:bg-white/10 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>

        {/* Blog (no dropdown) */}
        <a href="#" className="hover:text-gray-400">
          Blog
        </a>
      </nav>

      <div className="flex space-x-4">
        <Link href="/get-started">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-700 shadow-lg hover:shadow-xl transition">
            Get started now
          </button>
        </Link>

        <Link href="/login">
          <button className="bg-white text-black px-6 py-2 rounded-lg text-lg font-medium hover:bg-gray-200 shadow-lg hover:shadow-xl transition">
            Log in
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
