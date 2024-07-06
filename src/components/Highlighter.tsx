"use client";
import { motion } from "framer-motion";
import { Highlight } from "../components/ui/hero-highlight";

export default function Highlighter() {
  return (
    // <HeroHighlight>
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="font-normal  md:text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
    >
      I&apos;m Nitin Yadav , a{" "}
      <Highlight className="text-black dark:text-white">
        frontend-focused software engineer
      </Highlight>{" "}
      deeply committed to creating exceptional user experiences through code. As
      a frontend developer with more than{" "}
      <Highlight className="text-black dark:text-white">
        one year of industry experience{" "}
      </Highlight>
      creating engaging and responsive web applications, my journey in software
      development has been dedicated to designing seamless and visually stunning
      interfaces.
      <br />
      <br />I specialize in HTML, CSS, and{" "}
      <Highlight className="text-black dark:text-white">
        JavaScript
      </Highlight>{" "}
      and have experience with popular frameworks and libraries such as{" "}
      <Highlight className="text-black dark:text-white">
        React and Next.js.
      </Highlight>{" "}
      My passion lies in transforming design concepts into interactive,
      user-friendly interfaces. I&apos;m always eager to learn new technologies
      and improve my skills to deliver the best possible user experience. Coding
      is more than just a job; it&apos;s a way of life for me. I&apos;m
      relentless in my pursuit of continuous learning, innovation, and making a
      positive impact in the dynamic world of software development.
      <br />
      <br />
      <Highlight className="text-black dark:text-white">
        Let&apos;s connect, collaborate, and code together to shape a brighter
        digital future. 😊
      </Highlight>
    </motion.h1>
    // </HeroHighlight>
  );
}
