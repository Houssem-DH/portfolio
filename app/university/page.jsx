"use client";



import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "@/styles/services.css";
import ModeltCard from '@/components/ModelCard';



const University = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    
      const style = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(400px)",
      });

  const models = [
    {
        title: 'Table',
        description: 'Blender / GLTF / THREEjs',
        image: "/images/web3d/table.png", // Replace with the actual path to your image
        
        livePreviewLink: '/university/web3d/table',
      },
   

    {
      title: 'Sence',
      description: 'Blender /Fluid Simulation ',
      image: "/images/web3d/sence.png", // Replace with the actual path to your image
     
      livePreviewLink: '/university/web3d/sence',
    },
    
      


    
    // Add more projects as needed
  ];

  return (
    <animated.div
    ref={ref}
    style={style}
    
  >
    <section className=" text-white py-16 mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 services-heading relative">
          WEB3D
          <span className="glow-line"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <ModeltCard key={index} {...model} />
          ))}
        </div>
      </div>
    </section>
    </animated.div>
  );
};

export default University;
