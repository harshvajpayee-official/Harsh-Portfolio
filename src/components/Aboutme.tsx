"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import Highlighter from "./Highlighter";


export default function Aboutme() {
  return (
    <div className="pt-10">

      <h2 className="mt-2 mb-6  text-xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        About me
      </h2>
      <div className="w-full flex flex-col lg:flex-row gap-5 justify-between items-center lg:items-start ">
      <Highlighter/>

        <img src="/assests/profilepic.jpeg" alt="" className="w-[250px] lg:w-[unset] lg:h-[400px] rounded-xl shadow-lg shadow-teal-500" />
      </div>
    </div>
  );
}
