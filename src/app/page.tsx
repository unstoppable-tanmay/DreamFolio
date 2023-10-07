"use client";

import HomeComp from "@/components/HomeComp";
import useLocoScroll from "@/components/LocomotiveScroll";
import React from "react";
import { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

export default function Home() {
  const scrollRef = React.createRef<HTMLDivElement>();
  useLocoScroll(scrollRef);
  return (
    <ParallaxProvider>
      <Cursor
        isGelly={true}
        cursorBackgrounColor="#fff"
        cursorSize={60}
        exclusionBackgroundColor="#000"
        cursorInnerColor="#000"
        colorAnimationDuration={.5}
        colorAnimationEase={"Power4.easeOut"}
        sizeAnimationDuration={.9}
      />
      <div ref={scrollRef}>
        <HomeComp />
      </div>
    </ParallaxProvider>
  );
}
