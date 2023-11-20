// components/ProjectCard.js
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  livePreviewLink,
}) => {
  return (
    <div className="bg-slate-950/25 text-white p-6 rounded-lg shadow-md mb-8">
      <Image src={image} alt={title} width={1920} height={1080} className="w-full h-auto mb-4 rounded-md" />
      <h3 className="text-2xl font-bold mb-2 text-purple-500">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex space-x-4">
        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-700 hover:text-gray-900 transition duration-300" />
        </Link>
        <Link href={livePreviewLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt className="text-gray-700 hover:text-gray-900 transition duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
