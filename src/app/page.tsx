"use client";

import HomeComp from "@/components/HomeComp";
import useLocoScroll from "@/components/LocomotiveScroll";
import React from "react";
import { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Gyroscope from "@/components/Gyroscope/Gyroscope";

export default function Home() {
  const router = useRouter();
  const scrollRef = React.createRef<HTMLDivElement>();
  useLocoScroll(scrollRef);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(
      window.matchMedia("only screen and (min-width: 1000px)").matches
    );
  }, [isMobile]);

  return (
    <ParallaxProvider>
      {isMobile ? (
        <Cursor
          isGelly={true}
          cursorBackgrounColor="#fff"
          cursorSize={60}
          exclusionBackgroundColor="#000"
          cursorInnerColor="#000"
          colorAnimationDuration={0.5}
        />
      ) : (
        <Gyroscope />
      )}
      {/* onDoubleClick={()=>{router.push('/dev')}} */}
      <div ref={scrollRef}>
        <HomeComp />
      </div>
    </ParallaxProvider>
  );
}
