import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-2 h-2 bg-[#FE8730] rounded-full pointer-events-none transition-transform duration-75"
      style={{
        transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
        position: "fixed",
        zIndex: 50,
      }}
    ></div>
  );
};

export default CustomCursor;
