import React from "react";
import { Parallax } from "react-scroll-parallax";
import Bg from "../CommonComponents/Bg/Bg";
import TextDipserse from "../CommonComponents/textdiperserhome/TextDisperse";

const Landing = () => {
  return (
    <>
      {/* Section 1 Tanmay */}
      <section className="section1 w-full h-screen flex items-center flex-col -gap-5 justify-center relative">
        <Bg />
        <div className="ScrollDown absolute bottom-32 md:bottom-16 ">
          <Parallax speed={6}>
            <div className="icon"></div>
          </Parallax>
        </div>
        <Parallax speed={-5} scale={[0.2, 2]}>
          <TextDipserse setBackground={false}>
            <p className="bg-black">Tanmay</p>
          </TextDipserse>
        </Parallax>
      </section>
    </>
  );
};

export default Landing;
