import React from "react";
import heroImage from "@/public/images/hero_image.svg";
import Image from "next/image";
import DropDownMenu from "@/components/DropDownMenu"

const HeroSection = () => {
  return (
    <section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className=" text-white h-fit flex items-center justify-center">
        <div className="hidden lg:block">
          {/* Increase the width and height values as needed */}
          <Image
            src={heroImage}
            alt="Programmer Art"
            className="rounded-full"
            width={650}
            height={650}
          />
        </div>
        <div className="max-w-2xl text-left mx-8">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Houssem</h1>
          <p className="text-lg mb-8 leading-relaxed">
          I'm a Full Stack Developer and Designer with a passion for crafting
            seamless, user-centric digital experiences. Proficient in both the
            technical intricacies of web development and the artistry of design
          </p>
          <div className="flex items-start mb-8">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-purple-700">
              Download CV
            </button>

            <div className="flex ml-4 items-start mt-3">
              {/* GitHub icon */}
              <a
                href="https://github.com/Houssem-DH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-white hover:text-purple-600 text-2xl"></i>
              </a>

              {/* LinkedIn icon */}
              <a
                href="https://www.linkedin.com/in/xdhoussem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in text-white hover:text-purple-600 text-2xl ml-4"></i>
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <hr className="border-t border-gray-400 flex-grow mr-4" />
            <span className="text-gray-400">Tech Stack</span>
            <hr className="border-t border-gray-400 flex-grow ml-4" />
          </div>
          <div className="flex items-center mt-4">
            {/* Add your tech stack icons here */}

            <i className="fab fa-python text-4xl mx-2"></i>
            <i className="fab fa-vuejs text-4xl mx-2"></i>
            <i className="fab fa-react text-4xl mx-2"></i>
            <i className="fab fa-js text-4xl mx-2"></i>
            <i className="fab fa-node-js text-4xl mx-2"></i>

            <i className="fab fa-unity text-4xl mx-2"></i>

            <i className="fab fa-docker text-4xl mx-2"></i>
            <i className="fas fa-database text-4xl mx-2"></i>
            {/* Add more icons as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
