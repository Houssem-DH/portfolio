"use client";
import React, { useEffect } from "react";
import "@/styles/services.css";
import { useSpring, animated } from "react-spring";
import { useInView } from 'react-intersection-observer';

export default function ProjectsSection() {
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
        PROJECTS
        <span className="glow-line"></span>
      </h2>
    </div>
    </animated.section>
  );
}
