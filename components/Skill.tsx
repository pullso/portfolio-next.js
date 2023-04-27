import React from "react";
import {motion} from "framer-motion";

type Props = {
  directionLeft?: boolean;
}
export function Skill({directionLeft}:Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{x: directionLeft ? -200: 200, opacity: 0}}
        transition={{duration: 1}}
        whileInView={{x:0, opacity: 1}}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dotcom-monitor.com%2Fblog%2Fwp-content%2Fuploads%2Fsites%2F3%2F2020%2F05%2FVue-logo-1.png&f=1&nofb=1&ipt=123620596d7838aad05388827de8966a130f76763c893f2134a183fe54f0043b&ipo=images"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
