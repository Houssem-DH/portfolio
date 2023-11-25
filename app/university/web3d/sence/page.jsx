// pages/index.js
import React from "react";
import ThreeScene from "@/components/Lab2Model";

const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
      <ThreeScene width={600} height={400} /> {/* Set your desired width and height */}
    </div>
     
    </div>
  );
};

export default HomePage;
