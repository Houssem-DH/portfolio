import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function Loading({ size = 40, color = "#007bff" }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
    <FaSpinner className="animate-spin" size={size} color={color} />
  </div>
  )
}
