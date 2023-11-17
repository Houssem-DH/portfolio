import React from "react";
import heroImage from "@/public/images/hero_image.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" text-white h-screen flex items-center justify-center">
      <div className="hidden lg:block">
        {/* Increase the width and height values as needed */}
        <Image
          src={heroImage}
          alt="Programmer Art"
          className="rounded-full w-256 h-256 "
        />
      </div>
      <div className="max-w-2xl text-left mx-8">
        <h1 className="text-4xl font-bold mb-4">Your Name</h1>
        <p className="text-lg mb-8 leading-relaxed">
          I am a passionate UX designer, dedicated to creating seamless and user-friendly experiences. My work combines innovative design with a focus on functionality and user satisfaction.
        </p>
        <div className="flex items-start mb-8">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-purple-700">
            Download CV
          </button>

          <div className="flex ml-4 items-start mt-3">
            {/* GitHub icon */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-white hover:text-purple-600 text-2xl"></i>
            </a>

            {/* LinkedIn icon */}
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-white hover:text-purple-600 text-2xl ml-4"></i>
            </a>
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default HeroSection;
