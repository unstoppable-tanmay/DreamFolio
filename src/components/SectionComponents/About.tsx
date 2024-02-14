import { motion } from "framer-motion";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const About = ({isMobile}:{isMobile:boolean}) => {
  const aestheticColors = [
    "#F9EBE0", // Cream
    "#F3D1A5", // Peach
    "#EFD9CE", // Pale Pink
    "#A9DFBF", // Mint Green
    "#FAD02E", // Lemon Yellow
    "#FF6B6B", // Coral
    "#C5E1A5", // Pastel Green
    "#FFDAC1", // Apricot
    "#FFD700", // Gold
    "#A0CED9", // Powder Blue
    "#E5E5E5", // Light Gray
    "#D4A5A5", // Dusty Rose
  ];
  return (
    <>
      {/* Section 2 About */}
      {/* In the Realm of Pixels and Logic */}
      <section className="section2 w-full min-h-screen flex items-center justify-center relative tracking-widest overflow-x-hidden overflow-y-hidden">
        <motion.div
          whileInView={{ opacity: 1, letterSpacing: "0px" }}
          initial={{ opacity: 0, letterSpacing: "50px" }}
          viewport={{ once: true, margin: "-35%" }}
          transition={{
            duration: 1.1,
            bounce: 0.5,
          }}
          className="text-[25vh] md:text-[27vw] lg:text-[58vh] text-white text-opacity-5 font-black absolute pointer-events-none rotate-90 md:rotate-0"
        >
          <Parallax scale={[isMobile ? 1.5 : 1, isMobile ? 1 : 1.2]}>
            ABOUT
          </Parallax>
        </motion.div>
        {/* text-2xl md:text-3xl */}
        {/* text-[5vw] md:text-[1.8vw] */}
        <div className="animated-scroll text-white text-opacity-30 font-Poppins font-normal tracking-wide text-2xl md:text-3xl w-[90%] md:w-[65%] text-center">
          {`Hey, I'm Tanmay, a developer, coder, and UI/UX enthusiast.
        I'm on a mission to blend creativity and functionality to craft
        seamless digital experiences. When I'm not coding, I'm
        grooving to the rhythms of music, finding inspiration in the harmony
        of technology and melodies.`
            .split(" ")
            .map((el, i) => {
              return (
                <span
                  key={i}
                  className="hover:text-white hover:text-opacity-80 duration-200"
                  data-cursor-color={`${
                    aestheticColors[
                      Math.floor(Math.random() * aestheticColors.length)
                    ]
                  }ad`}
                  data-cursor-size={100}
                  data-cursor-text={el}
                >
                  {el + " "}
                </span>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default About;
