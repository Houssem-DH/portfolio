

"use client"
import React from "react";
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

  const web3d_models = [
    {
        title: 'Table',
        description: 'Blender / THREEjs /R3F / GLTF ',
        image: "/images/web3d/table.png", // Replace with the actual path to your image
        
        livePreviewLink: '/university/web3d/table',
      },
   

    {
      title: 'Scene',
      description: 'Blender / THREEJS / R3F / GLTF / Animation ',
      image: "/images/web3d/scene.png", // Replace with the actual path to your image
     
      livePreviewLink: '/university/web3d/scene',
    },

    {
      title: 'Scene V2 (GIF)',
      description: 'Blender /Fluid Simulation ',
      image: "/images/web3d/sence.png", // Replace with the actual path to your image
     
      livePreviewLink: '/university/web3d/scenev2',
    },
    
      


    
    // Add more projects as needed
  ];
  const riw_models = [
    {
        title: 'Project',
        description: 'Information Retrieval / Steam Dataset / Python / API ',
        image: "/images/riw/demo.png", // Replace with the actual path to your image
        
        livePreviewLink: 'https://github.com/Houssem-DH/IR_Games_Project',
      },
   

    
      


    
    // Add more projects as needed
  ];

  return (
    <animated.div
    ref={ref}
    style={style}
    
  >
    
    <section className=" text-white py-16 mt-8 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 services-heading relative">
          WEB3D
          <span className="glow-line"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {web3d_models.map((model, index) => (
            <ModeltCard key={index} {...model} />
          ))}
        </div>
      </div>
    </section>

    <section className=" text-white py-4 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 services-heading relative">
          Information Retrieval
          <span className="glow-line"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {riw_models.map((model, index) => (
            <ModeltCard key={index} {...model} />
          ))}
        </div>
      </div>
    </section>
    </animated.div>

  );
};

export default University;
