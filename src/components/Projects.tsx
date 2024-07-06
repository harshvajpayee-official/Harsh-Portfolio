"use client";
import Link from "next/link";
import courseData from "../data/project.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Container from "./Container";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  feature: Array<String>;
  Visualtext: string;
  github: string;
  website: string;
  tech: Array<String>;
  image: string;
}

function Projects() {
  const carouselContainer = useRef<HTMLDivElement>(null);

  const navigation = (dir: string) => {
    const container: any = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 25);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <div className="py-12 " id="projects">
        <div className="text-start">
          <h2 className="mt-2 mb-6  text-xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Projects
          </h2>
          <p className="mt-2 text-md tracking-tight text-white ">
            Turning Ideas into a Pixelated Symphony of Reality.
          </p>
        </div>
        <div className="relative ">
          <img
            src="/assests/arrow.svg"
            alt=""
            className="absolute -left-4 top-[50%] translate-y-[-50%] z-[9999] rotate-[270deg] h-16 w-16 cursor-pointer"
            onClick={() => navigation("left")}
          />
          <img
            src="/assests/arrow.svg"
            alt=""
            className="absolute -right-4 top-[50%] translate-y-[-50%] z-[9999] rotate-[90deg] h-16 w-16 cursor-pointer"
            onClick={() => navigation("right")}
          />

          <div
            className="relative flex mt-10 gap-[4%] overflow-auto scrollbar"
            ref={carouselContainer}
          >
            {courseData.project.map((project: Project) => (
              <div
                key={project.id}
                className="relative flex justify-center min-w-[100%] md:min-w-[48%] "
              >
                <BackgroundGradient className="rounded-[22px] bg-white dark:bg-[#181818]">
                  <div className="card p-4 text-center w-[300px]  lg:w-[400px] h-[500px]">
                    <div className="card-inner">
                      <div className="card-front flex flex-col">
                        <h4 className="text-lg sm:text-xl text-black mt-4 mb-2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                          {project.title}
                        </h4>
                        <img
                          src={project.image}
                          alt={project.title}
                          className=" object-cover rounded-md shadow-sm shadow-white p-2"
                        />
                        <h6 className="text-sm text-gray-200 mt-4 text-start mb-5">
                          {project.description}
                        </h6>
                        {/* techs */}
                        <div className="flex flex-row gap-5 flex-wrap">
                          {project.tech.map((tech,index)=>(
                            <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-semibold" key={project.id+index}>{tech}</p>
                          ))}
                        </div>
                      </div>
                      <div className="card-back flex flex-col p-2">
                        <div className="flex flex-col  items-center justify-center text-start">
                          <h6 className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            Key Features:
                          </h6>
                          <ul className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mt-2 list-disc">
                            {project.feature.map((d,index) => (
                              <li key={index+"feature"}>{d}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col mt-4 items-center justify-center text-start">
                          <h6 className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            User Experience:
                          </h6>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mt-2 mb-5">
                            {project.Visualtext}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* links */}
                    <div className="absolute  bottom-3 right-0 flex gap-5 items-center w-[100px]">
                      <Link href={project.github} target="_blank">
                        <img
                          src="/assests/project/git.svg"
                          alt="git"
                          height={25}
                          width={25}
                        />
                      </Link>
                      <Link href={project.website} target="_blank" className="animate-bounce hover:animate-none ">
                        <img
                          src="/assests/project/link.svg"
                          alt="website"
                          height={25}
                          width={25}
                        />
                      </Link>
                    </div>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
