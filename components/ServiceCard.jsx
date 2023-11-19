// ServiceCard.js
import React from 'react';

const ServiceCard = ({ title, description, bgColor, icon: Icon }) => {
  return (
    <div className={`bg-${bgColor}-950/25 p-6 rounded-md shadow-lg mb-4 transform transition-transform hover:scale-105 flex flex-col items-center justify-center text-center`}>
      <div className="mb-4">{Icon && <Icon size={40} color="white" />}</div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default ServiceCard;
