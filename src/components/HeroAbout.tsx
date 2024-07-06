import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";
import CustomBtn from "./ui/CustomBtn";

function HeroAbout() {
  const words = ["Software", "Frontend"];
  return (
    <div className="h-auto md:h-[25rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-s">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Hey <span className="text-amber-400">👋</span>
        </h1>
        <h2 className="mt-2  text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          I&apos;m a Nitin Yadav
        </h2>
        <h3 className="mt-2  text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Your
          <FlipWords words={words} />
          Developer
        </h3>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-400 ">
          Welcome to my portfolio—a digital canvas of my coding journey and
          creations. Explore, Connect, Inspire. 🚀
        </p>
        <div className="mt-6 flex gap-2 flex-wrap">
         <CustomBtn title="Linkedin" link="https://www.linkedin.com/in/nitin-yadav-8615a5195/"/>
         <CustomBtn title="Github" link="https://github.com/Nickop21"/>
         <CustomBtn title="Email" link="mailto:ny8244@gmail.com"/>
         <CustomBtn title="Leetcode" link="https://leetcode.com/u/nick_21/"/>

          
        </div>
      </div>
    </div>
  );
}

export default HeroAbout;
