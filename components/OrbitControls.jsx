"use client";

import { OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react';

const CustomOrbitControls = () => {
  const controls = useRef();

  return <OrbitControls ref={controls} />;
};

export default CustomOrbitControls;
