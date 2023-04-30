import React from "react";
import {motion} from "framer-motion";
import {IProject} from "@/types/interfaces";
import {urlFor} from "@/sanity";


interface ProjectsProps {
  projects: IProject[]
}

export function Projects({projects}: ProjectsProps) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-fit min-h-screen  relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 snap-start">
      <h3 className="sectionName">Projects</h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden z-20 myScrollbar scrollbar-thin mt-24 xlg:mt-0">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center space-y-5 p-10 xlg:p-44 h-screen">
            <motion.img
              initial={{y: -300, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1.2}}
              viewport={{once: true}}
              src={urlFor(project?.image).url()} width={512} height={512} alt="moex logo"
              className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span
                  className="underline decoration-mainColor/50">Project {i + 1} of {projects.length}:</span> {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies?.map((technology) => (
                  <img
                    key={technology._id}
                    src={urlFor(technology?.image)?.url()}
                    alt={technology?.title}
                    className="h-10 w-10 rounded"
                  />))
                }
              </div>
              <p className="text-center text-lg md:text-left">{project.summary}</p>
              <div>
                <a href={project.link} target={"_blank"} className="bg-mainColor/50 py-3 px-8 rounded-full text-white/50 hover:text-white bg-mainColor tracking-[5px] uppercase text-lg">View</a>
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className="w-full absolute top-[30%] bg-mainColor/10 left-0 h-[500px] -skew-y-12"></div>

    </motion.div>
  );
}
