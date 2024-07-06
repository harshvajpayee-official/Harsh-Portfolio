import React from "react";
import Container from "./Container";

function Experience() {
  return (
    <Container>

    <div>
      <div className="text-start">
        <h2 className="mt-2 mb-6  text-xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Experience
        </h2>
      </div>

      <div className="flex flex-row justify-between  sm:w-[600px] items-center">
        <div>
          <img src="" alt="" />
          <div className="flex flex-col text-md bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            <p className="text-2xl mb-2 font-semibold">Z1 Tech</p>
            <p>Frontend Developer</p>
          </div>
        </div>

        <div className="flex flex-col text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mr-2">
            <p className="md:text-2xl mb-2">jan 2023 - April 2024</p>
            <p>Gurugram</p>
          </div>
      </div>
    </div>
    </Container>
  );
}

export default Experience;
