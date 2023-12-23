"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/components/Lab1Model";
import Loading from "@/components/Loading";


function Lab1() {
 
  return (
   
    
    <div className="flex items-center justify-center min-h-screen">
    
      <div className="border border-indigo-500 rounded-lg overflow-hidden shadow-md bordered-div">
      
        
        <Canvas
          camera={{ position: [-10, 5, 7] }}
          style={{ width: "1024px", height: "576px" }}
          
        >
          
          
          <Model /> {/* Use the Model component here */}
          
          
        </Canvas>
        
      </div>
       
    
   
    </div>
  );
}

export default Lab1;
