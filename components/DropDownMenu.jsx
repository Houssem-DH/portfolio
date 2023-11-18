"use client";
import React, { useState } from "react";
import Link from "next/link";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="text-white hover:text-gray-300 focus:outline-none"
          onClick={toggleDropdown}
        >
          More
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link href="/dashboard">
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Dashboard
              </a>
            </Link>
            <Link href="/projects">
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Projects
              </a>
            </Link>
            {/* Add more links as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
