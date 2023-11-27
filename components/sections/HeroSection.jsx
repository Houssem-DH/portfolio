import React from "react";
import heroImage from "@/public/images/hero_image.svg";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
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
          <h1 className="text-4xl font-bold mb-4">{"Hi I'm Houssem"}</h1>
          <p className="text-lg mb-8 leading-relaxed">
            {
              " I'm a Full Stack Developer and Designer with a passion for crafting seamless, user-centric digital experiences. Proficient in both thetechnical intricacies of web development and the artistry of design"
            }
          </p>
          <div className="flex items-start mb-8">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-purple-700">
              Download CV
            </button>

            <div className="flex ml-4 items-start mt-3">
              {/* GitHub icon */}
              <Link
                href="https://github.com/Houssem-DH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-white hover:text-purple-600 text-2xl"></i>
              </Link>

              {/* LinkedIn icon */}
              <Link
                href="https://www.linkedin.com/in/xdhoussem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in text-white hover:text-purple-600 text-2xl ml-4"></i>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <hr className="border-t border-gray-400 flex-grow mr-4" />
            <span className="text-gray-300">Tech and Tools</span>
            <hr className="border-t border-gray-400 flex-grow ml-4" />
          </div>
          <div className="flex items-center mt-4">
            {/* Add your tech stack icons here */}

            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"} className="fab fa-python text-4xl mx-2" width={26} height={26} alt="x"></Image>
            <Image src={"/images/icons/Visual_Studio_Icon_2022.svg"} className="fab fa-python text-4xl mx-2" width={26} height={26} alt="x"></Image>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"} className="fab fa-python text-4xl mx-2" width={26} height={26} alt="x"></Image>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} className="fab fa-python text-4xl mx-2" width={26} height={26} alt="x"></Image>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} className="fab fa-python text-4xl mx-2" width={26} height={26} alt="x"></Image>
            <Image src={"/images/icons/laravel.svg"} className="fab fa-python text-4xl mx-2" width={26} height={26}></Image>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"} className="fab fa-python text-4xl mx-2" width={26} height={26} alt="x"></Image>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} className="fab fa-python text-4xl mx-2" width={26} height={26} alt="x"></Image>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"} className="fab fa-python text-4xl mx-2" width={26} height={26} alt="x"></Image>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"} className="fab fa-python text-4xl mx-2" width={26} height={26} alt="x"></Image>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"} className="fab fa-python text-4xl mx-2" width={26} height={26} alt="x"></Image>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"} className="fab fa-python text-4xl mx-2" width={26} height={26} alt="x"></Image>
            <Image src={"/images/icons/unity.svg"} className="fab fa-python text-4xl mx-2" width={26} height={26}  alt="x"></Image>
            
            

            {/* Add more icons as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
