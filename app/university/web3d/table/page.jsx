"use client";
import React, { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader} from "@react-three/drei";
import { Model } from "@/components/Lab1Model";
import { Leva} from "leva";


function Lab1() {
  const [cameraPosition, setCameraPosition] = useState([-10, 5, 7]);
  const [cameraTarget, setCameraTarget] = useState([8.436, 2.266, -0.009]);
  const canvasRef = useRef();

  // Set Leva GUI and Perf sizes based on canvas size
  const levaStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      {/* Canvas */}
      <div className="border border-indigo-500 rounded-lg overflow-hidden shadow-md bordered-div relative">
        {/* Leva GUI */}
        <div style={levaStyle}>
          <Leva fill space />
        </div>
        

        <Canvas
          shadows
          ref={canvasRef}
          camera={{ position: cameraPosition, target: cameraTarget }}
          style={{ width: "1024px", height: "576px" }}
        >
          <Suspense>
            <Model />
          </Suspense>
        </Canvas>
        <Loader/>
      </div>
    </div>
  );
}

export default Lab1;
