import React, { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";

const GravityBall = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const boundaryRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState();

  const clampedX = useSpring(0);
  const clampedY = useSpring(0);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const x = event.gamma;
      const y = event.beta;

      const factorX = 7;
      const factorY = 7;

      const newX = position.x + x! * factorX;
      const newY = position.y + y! * factorY;

      const maxX = window.innerWidth - 80;
      const maxY = window.innerHeight - 80;

      clampedX.set(Math.min(Math.max(newX, 0), maxX));
      clampedY.set(Math.min(Math.max(newY, 0), maxY));

      // if (clampedY.get() === 0 || clampedY.get() === maxY) {
      //   window.scrollBy({ top: y! * 2 });
      // }

      setPosition({ x: clampedX.get(), y: clampedY.get() });

      if (ballRef.current) {
        ballRef.current.style.transform = `translate(${clampedX.get()}px, ${clampedY.get()}px)`;
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [position, clampedX, clampedY]);

  return (
    <div
      className="wrapper w-screen h-[90vh] fixed z-50 pointer-events-none mix-blend-difference"
      ref={boundaryRef}
      data-lenis-prevent
    >
      <div
        ref={ballRef}
        style={{
          width: "80px",
          height: "80px",
          position: "absolute",
          borderRadius: "50%",
          transition: "transform 0.7s",
        }}
        className="bg-white "
      >
        {text}
      </div>
    </div>
  );
};

export default GravityBall;
