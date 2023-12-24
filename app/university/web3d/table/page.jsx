"use client";

import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/components/Lab1Model";
import Loading from "@/components/Loading";


function Lab1() {
  const [cameraPosition, setCameraPosition] = useState([-10, 5, 7]);
  const [cameraTarget, setCameraTarget] = useState([8.436, 2.266, -0.009]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-indigo-500 rounded-lg overflow-hidden shadow-md bordered-div">
        <Canvas
          shadows
          camera={{ position: cameraPosition, target: cameraTarget }}
          style={{ width: "1024px", height: "576px" }}
        >
          <Suspense>
            <Model
              setCameraPosition={setCameraPosition}
              setCameraTarget={setCameraTarget}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default Lab1;