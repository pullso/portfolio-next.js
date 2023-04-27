import React from "react";
import {motion} from "framer-motion";

export function Projects() {
  const projects = [1, 2, 3, 4, 5]
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="sectionName">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center space-y-5 p-20 md:p-44 h-screen">
            <motion.img
              initial={{y: -300, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1.2}}
              viewport={{once: true}}
              src="/moex-logo.png" width={512} height={512} alt="moex logo"
              className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">Case study {i + 1} of {projects.length}:</span> ups clone
              </h4>
              <p className="text-center text-lg md:text-left">project Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus commodi ea error, harum illo nostrum odio pariatur possimus quos ratione reiciendis repellendus sequi sint soluta. Excepturi explicabo laboriosam sed.</p>
            </div>
          </div>
        ))}

      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>

    </motion.div>
  );
}
