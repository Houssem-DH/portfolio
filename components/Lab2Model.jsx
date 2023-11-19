import React from "react";
import lab2gif from "@/public/web3d/lab2/Lab2.gif";
import Image from "next/image";
import "@/styles/lab2.css"

export function Model() {
  return (
    <div>
     <br /><br />
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md bordered-div">
      <Image
        src={lab2gif} 
        alt="Animated GIF"
        className="w-full h-auto"
      ></Image>
    </div>
    <br /><br /><br /><br />
    </div>
  );
}
