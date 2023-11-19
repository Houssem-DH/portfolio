// ServicesSection.js
"use client";
import React, { useEffect } from "react";
import { FaGamepad, FaPaintBrush, FaCode } from "react-icons/fa"; // Import icons from React Icons
import ServiceCard from "@/components/ServiceCard";
import "@/styles/services.css";
import { useSpring, animated } from "react-spring";
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const style = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(400px)',
  });


  return (
    <animated.section ref={ref} style={style} className="text-white py-16 mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 services-heading relative">
          SERVICES
          <span className="glow-line"></span>
        </h2>

        <p className="text-lg mb-8">
        {" Looking for a great service? We'll definitely do that for you! "}
          
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Game Development"
            description="We've been active in game development for eight years and have had a decent chance to make various games in different genres."
            bgColor="slate"
            icon={FaGamepad}
          />
          <ServiceCard
            title="Web Development"
            description={
              "It's crucial to create the correct visual elements for our games both 2D and 3D. We're great at choosing the right art style for our characters, textures, objects, and environments to fit our needs."
            }
            bgColor="slate"
            icon={FaCode}
          />
          <ServiceCard
            title="Game Design"
            description={
              "We lead our games through the complete process of creating great mechanics, goals, rules, and all the necessary components for a fantastic foundation to start our development process."
            }
            bgColor="slate"
            icon={FaPaintBrush}
          />
        </div>
      </div>
    </animated.section>
  );
};

export default ServicesSection;
