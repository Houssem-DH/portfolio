import React from "react";
import {  FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ModelCard = ({
  title,
  description,
  image,
  livePreviewLink,
}) => {
  return (
    <div className="bg-slate-950/25 text-white p-6 rounded-lg shadow-md mb-8">
        <Link href={livePreviewLink} target="_blank" rel="noopener noreferrer">
      <Image src={image} alt={title} width={1920} height={1080} className="w-full h-auto mb-4 rounded-md" />
      </Link>
      <h3 className="text-2xl font-bold mb-2 text-indigo-500">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex space-x-4">
        
        <Link href={livePreviewLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt className="text-gray-200 hover:text-indigo-500 transition duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ModelCard;