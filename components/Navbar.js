"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "INSTITUTE", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "CURRICULUM", href: "/curriculum" },
    { name: "T&P Cell", href: "/tnp" },
    { name: "Innovation", href: "/patents" },
    { name: "CONTACT", href: "/contact" },
  ];

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav
      className="w-screen bg-[#43536a] fixed border-b border-gray-200 z-10"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-[1550px] flex flex-col items-center mx-auto py-4 px-4">
        {/* Header: Logo and Titles */}
        <div className="flex items-center justify-center space-x-4">
          <div className="text-white text-lg font-semibold text-center mr-3.5">
            डॉ. श्यामाप्रसाद मुखर्जी
            <br />
            अंतरराष्ट्रीय सूचना प्रौद्योगिकी संस्थान
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJiGTSMVoPC-Bcqpx-pLRu4xVWvJs5nwIvQ&s"
            className="h-16 w-16 rounded-full"
            alt="IIIT Naya Raipur Logo"
          />
          <div className="text-white text-xl font-bold text-center mr-3.5">
            DR. SHYAMA PRASAD MUKHERJEE <br />
            INTERNATIONAL INSTITUTE OF INFORMATION TECHNOLOGY
          </div>
        </div>

        {/* Navbar Links */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block`}>
          <ul
            className="flex flex-col md:flex-row justify-center mt-4 font-medium space-y-2 md:space-y-0 md:space-x-8"
            role="menu"
          >
            {navLinks.map((link, index) => (
              <li key={index} role="menuitem">
                <Link
                  href={link.href}
                  className="block py-2 px-3 text-white rounded hover:bg-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleNavbar}
        type="button"
        className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 p-2 text-gray-300 rounded-lg md:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
        aria-label="Toggle Navigation"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
