// Footer.js

"use client";
import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const style = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
  });
  return (
    <animated.div
      ref={ref}
      style={style}
      
    >
    <footer className="bg-slate-950/25 text-white py-8  ">
      
      <div className="container mx-auto text-center">
        <p className="text-lg">&copy; 2023 Houssem DH Portfolio. All rights reserved.</p>
      </div>
      
      
    </footer>
    </animated.div>
  );
};

export default Footer;