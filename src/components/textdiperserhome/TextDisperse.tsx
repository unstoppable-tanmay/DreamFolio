"use client";

import { ReactElement, useEffect, useState } from "react";
import { motion, stagger } from "framer-motion";
import { disperse } from "./anim";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "gsap";

export default function TextDipserse({
  children,
  setBackground,
}: {
  children: React.ReactElement;
  setBackground: boolean;
}) {
  const [isAnimated, setIsAnimated] = useState(setBackground);

  gsap.registerPlugin(ScrollTrigger);

  const getChars = (element: React.ReactElement) => {
    let chars: ReactElement[] = [];
    const word = element.props.children;
    word.split("").forEach((char: ReactElement, i: number) => {
      chars.push(
        <motion.span
          custom={i}
          variants={disperse}
          animate={isAnimated ? "open" : "closed"}
          key={i}
          transition={{
            duration: 1.3,
          }}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const manageMouseEnter = () => {
    setIsAnimated(true);
  };
  const manageMouseLeave = () => {
    setIsAnimated(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5,gap:"20%" }}
      animate={{ opacity: 1, scale: 1,gap:"0%" }}
      transition={{
        duration: 1.2,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        staggerChildren: 1
      }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      className="box text-arrival flex justify-between font-Poppins text-white text-[15vw] md:text-[13vw] lg:text-[9vw] font-bold p-10 tanmay-text" data-cursor-size="20px"
    >
      {getChars(children)}
    </motion.div>
  );
}
