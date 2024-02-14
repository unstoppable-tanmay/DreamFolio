import React from "react";
import Cardcomp from "../CommonComponents/3dcard/Cardcomp";

const Photo = () => {
  return (
    <>
      {/* Section 3 My Photo */}
      <section
        className="section3 w-full h-screen relative flex items-center justify-center mb-20"
        data-cursor-text="Move The Mouse"
        data-cursor-size={100}
      >
        <Cardcomp />
      </section>
    </>
  );
};

export default Photo;
