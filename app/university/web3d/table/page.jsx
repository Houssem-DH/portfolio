"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/components/Lab1Model";
import Loading from "@/components/Loading";


function Lab1() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []); // Run only on mount
  return (
   
    
    <div className="flex items-center justify-center min-h-screen">
    {loading ? (
      <Loading size={50} color="rgb(99 102 241 / 0.4)"/>
    ) : (
      <div className="border border-indigo-500 rounded-lg overflow-hidden shadow-md bordered-div">
      
        
        <Canvas
          camera={{ position: [-10, 5, 7] }}
          style={{ width: "1024px", height: "576px" }}
          
        >
          {/* Ambient light to provide some overall illumination */}
          <ambientLight intensity={0.5} />
          {/* Directional light simulating sunlight */}
          <directionalLight position={[20, 10, 10]} intensity={1} />
          <directionalLight position={[0, 0, 0]} intensity={1} />
          <directionalLight position={[-10, -10, -10]} intensity={1} />
          <directionalLight position={[-20, -20, -20]} intensity={1} />
          {/* Point light for additional lighting, if needed */}
          <pointLight position={[10, 10, 10]} />
          
          <Model /> {/* Use the Model component here */}
          
          <OrbitControls />
        </Canvas>
        
      </div>
       )}
    
   
    </div>
  );
}

export default Lab1;
