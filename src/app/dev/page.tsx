"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Terminal from "@/components/Terminal/Terminal";

const Page = () => {
  const router = useRouter();
  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      onDoubleClick={() => {
        router.back();
      }}
    >
      <Terminal/>
    </div>
  );
};

export default Page;
