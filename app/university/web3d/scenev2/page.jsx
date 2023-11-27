"use client"
import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";

import { Model } from "@/components/Lab2ModelV2";


function Lab() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []); // Run only on mount
  
  return (
   <div>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
      <Loading size={50} color="rgb(99 102 241 / 0.4)"/>
      </div>
    ) : (
      <div className="container mx-auto p-8 min-h-screen">
    <h1 className="text-4xl font-bold mb-4 text-gray-300"></h1>
    <Model />
    </div>
    )}
  </div>
  );
}

export default Lab;