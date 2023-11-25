// src/hooks/useWindowSize.js
"use client";
// src/hooks/useWindowSize.js
import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const isClient = typeof window === 'object'; // Check if window is available

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (!isClient) {
      return; // Exit early if running on the server
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  return windowSize;
};
