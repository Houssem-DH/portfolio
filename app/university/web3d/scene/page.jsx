"use client";
import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Model } from "@/components/Lab2Model";
import { Leva } from "leva";

function Lab1() {
  const [cameraPosition, setCameraPosition] = useState([7, 12, 17]);
  const [cameraTarget, setCameraTarget] = useState([0, 6.239, 0]);
  const canvasRef = useRef();

  // Set Leva GUI and Perf sizes based on canvas size
  const levaStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  };

  useEffect(() => {
    // Move the camera up by updating the y-coordinate
    setCameraPosition((prevPosition) => [
      prevPosition[0],
      prevPosition[1] + 1,
      prevPosition[2],
    ]);
  }, []);

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
          camera={{ position: cameraPosition, fov: 45 }}
          style={{ width: "1024px", height: "576px" }}
        >
          <Suspense>
            <Model position={[0, -5, 0]} />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </div>
  );
}

export default Lab1;
