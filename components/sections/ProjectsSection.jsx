"use client";



import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "@/styles/services.css";
import ProjectCard from '@/components/ProjectCard';


const ProjectsSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    
      const style = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(400px)",
      });

  const projects = [
    {
        title: 'Sigma Market Shop',
        description: 'Ecommerce / Laravel / Bootstrap',
        image: "/images/projects/site2.webp", // Replace with the actual path to your image
        githubLink: 'https://github.com/Houssem-DH/Sigma-Market-Shop',
        livePreviewLink: '#',
      },
    {
        title: 'Discover Algeria',
        description: 'Laravel / Bootstrap',
        image: "/images/projects/site1.png", // Replace with the actual path to your image
        githubLink: 'https://github.com/Houssem-DH/Discover_Algeria',
        livePreviewLink: '#',
      },

    {
      title: 'CRUD APP',
      description: 'Laravel / Bootstrap',
      image: "/images/projects/site3.png", // Replace with the actual path to your image
      githubLink: 'https://github.com/Houssem-DH/CRUD-APP-LARAVEL',
      livePreviewLink: '#',
    },
    
      


    
    // Add more projects as needed
  ];

  return (
    <animated.div
    ref={ref}
    style={style}
    
  >
    <section className="bg-slate-950/25 text-white py-16 mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 services-heading relative">
          PROJECTS
          <span className="glow-line"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
    </animated.div>
  );
};

export default ProjectsSection;
