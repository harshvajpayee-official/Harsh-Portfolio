import React from "react";
import Container from "./Container";
import Skillbtn from "./ui/Skillbtn";
import skillData from "../data/skill.json";

function Technologies() {
  return (
    <Container>
      <div className="text-start mb-5" id="skills">
        <h2 className="mt-2 mb-6  text-xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          SKILLS
        </h2>
        <p className="mt-2 text-md tracking-tight text-white ">
          Mastering Technology for Unrivaled Digital Excellence
        </p>
      </div>
      <div className="flex flex-col items-center justify-center shadow shadow-white p-6 rounded-xl">
        <div className="pt-1">
          <h4 className=" text-md font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            PROGRAMMING LANGUAGES
          </h4>
          <div className="flex gap-3 pt-5 flex-col sm:flex-row items-center justify-center flex-wrap">
            {skillData.Language.map((data) => (
              <div key={data.image}>

                <Skillbtn img={data.image} text={data.title} />
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10">
          <h4 className="mt-2  text-md font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            LIBRARIES & FRAMEWORKS
          </h4>
          <div className="flex flex-wrap flex-col sm:flex-row items-center justify-center gap-3 pt-5">
            {skillData.Libraries.map((data) => (
              <div key={data.image}>

                <Skillbtn img={data.image} text={data.title} />
              </div>
            ))}
          </div>
        </div>
        <div className="pt-10">
          <h4 className="mt-2  text-md font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            TOOLS & PLATFORMS
          </h4>
          <div className="flex flex-wrap flex-col sm:flex-row items-center justify-center gap-3 pt-5">
            {skillData.Tools.map((data) => (
              <div key={data.image}>

                <Skillbtn img={data.image} text={data.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Technologies;
