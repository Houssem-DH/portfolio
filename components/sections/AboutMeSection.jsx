"use client";
import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import aboutMeImage from "@/public/images/aboutme_image.svg";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';


const AboutMeSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    
      const style = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(200px)',
      });

  return (
    <animated.div ref={ref} style={style}
    
      className="bg-slate-950/25 text-white py-16 mt-16 text-center relative"
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-8 services-heading relative">
          ABOUT ME
          <span className="glow-line"></span>
        </h2>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row">
        <div className="md:w-1/2 md:pr-4">
          <p className="text-lg mb-4 font-light leading-relaxed text-left">
            Hi, Im <span className="font-semibold">[Your Name]</span>, a
            passionate and detail-oriented{" "}
            <span className="italic">[Your Profession]</span>. I enjoy crafting
            beautiful and functional user experiences, and Im always eager to
            learn and take on new challenges. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>

          <div className="flex flex-wrap mb-4 text-left">
            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl font-bold mb-2 text-purple-500">Name :</h3>
              <p className="text-lg mb-4 font-semibold">Dahel Houssem Eddine</p>

              <h3 className="text-2xl font-bold mb-2 text-purple-500">Email :</h3>
              <p className="text-lg mb-4 font-semibold">
                Houssemoodahel@gmail.com
              </p>
            </div>

            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl font-bold mb-2 text-purple-500">
                Education :
              </h3>
              <p className="text-lg mb-4 font-semibold">Master 2 Degree</p>

              <h3 className="text-2xl font-bold mb-2 text-purple-500">
                Domain :
              </h3>
              <p className="text-lg font-semibold">
                Data Engineering And Web Technology
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <Image
            src={aboutMeImage} // Replace with the actual path to your image
            alt="About Me"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <br />
      <br />
    </animated.div>
  );
};

export default AboutMeSection;
