import React from "react";
import {motion} from "framer-motion";


export function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 cursor-pointer hover:opacity-100 opacity-50 transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{y:-100, opacity:0}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 1.2}}
        viewport={{once: true}}
        src="/moex-logo.png" width={512} height={512} alt="moex logo"
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Frontend Developer</h4>
        <p className="font-bold text-2xl mt-1">Moscow Exchange</p>
        <div className="flex space-x-2 my-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fjavascript-png%2Fjs-logo-png-5.png&f=1&nofb=1&ipt=fd04602ca9840042d8a08eb37bac545567b4be8649eec5baa4b8aec48499beb0&ipo=images" alt="js logo" className="h-10 w-10 rounded"/>
          {/*stacks*/}
        </div>
        <p className="uppercase py-5 text-gray-300">Started - ended</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary point</li>
          <li>summary point</li>
          <li>summary point</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </article>
  );
}
