import React, { useEffect, useRef, useState } from "react";

const GravityBall = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const x = event.gamma; // Get the rotation around the x-axis
      const y = event.beta; // Get the rotation around the y-axis

      // Adjust these factors to control the sensitivity of the movement
      const factorX = 0.5;
      const factorY = 0.5;

      // Calculate the new position of the ball
      const newX = position.x + x! * factorX;
      const newY = position.y + y! * factorY;

      // Limit the position to stay within the screen boundaries
      const maxX = window.innerWidth - 50; // Adjust the radius of the ball
      const maxY = window.innerHeight - 50; // Adjust the radius of the ball

      const clampedX = Math.min(Math.max(newX, 0), maxX);
      const clampedY = Math.min(Math.max(newY, 0), maxY);

      setPosition({ x: clampedX, y: clampedY });

      // Update the position of the ball
      if (ballRef.current) {
        ballRef.current.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [position]);

  return (
    <div className="wrapper w-screen h-screen absolute">
      <div
        ref={ballRef}
        style={{
          width: "50px",
          height: "50px",
          position: "absolute",
          borderRadius: "50%",
          transition: "transform 0.1s",
        }}
        className="bg-white"
      ></div>
    </div>
  );
};

export default GravityBall;
