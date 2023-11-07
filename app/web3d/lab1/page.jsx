"use client";

import React from 'react';
import Head from 'next/head';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '@/components/ModelComponent';

function Lab1() {
  return (
    <div>
      <Head>
        <title>Your 3D Model Page</title>
      </Head>
      <h1>Your 3D Model Page</h1>
      <Canvas style={{ width: '1920px', height: '1080px' }}>
        <ambientLight />
        <pointLight position={[10, 20, 10]} />
        <Model /> {/* Use the Model component here */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Lab1;
