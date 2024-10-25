// CircleFollower.tsx
import React, { useState, useEffect } from "react";

const CircleFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY + window.scrollY,
      });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: mousePosition.x,
        top: mousePosition.y,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "lightgreen",
        zIndex: 1000,
        transition: "all 0s ease-out", // Ensure circle is on top of other elements
      }}
    />
  );
};

export default CircleFollower;

// /* styles.css */
// .circle-follower {
//   transition: all 0.1s ease-out;
// }

// /* Add this to ensure circle appears above all elements */
// .cards-section {
//   overflow: visible;
//   position: relative;
//   z-index: 0;
// }

// Explanation:

// 1. Updated z-index to 1000 to ensure circle appears above all elements.
// 2. Added overflow: visible and position: relative to .cards-section to prevent overflow clipping.
// 3. Set z-index: 0 for .cards-section to allow circle to appear above.

// By applying these changes, the green circle follower effect should now work as expected across all sections, including the cards section.

// Please replace your existing code with this updated version.

// If issues persist, provide more details about your project structure and relevant code.
