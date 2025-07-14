"use client";

import { useEffect, useState } from "react";

const CursorLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main cursor light */}
      <div
        className="cursor-light"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      {/* Larger, slower following light */}
      <div
        className="cursor-light-large"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </>
  );
};

export default CursorLight; 