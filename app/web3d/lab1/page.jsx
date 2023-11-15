"use client";

import React from "react";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/components/Lab1Model";

function Lab1() {
  return (
    <div className="flex items-center justify-center h-screen">
      
      <div className="border-2 p-4">
        
        <Canvas
          camera={{ position: [-10, 5, 7] }}
          style={{ width: "1280px", height: "720px" }}
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
    </div>
  );
}

export default Lab1;
