import React from 'react';
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";


type Props = {}
const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center">
      <motion.div
        initial={{x: -500, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon url="https://github.com/pullso/" fgColor="gray" bgColor="transparent"/>
        <SocialIcon url="https://gitlab.com/pullso/" fgColor="gray" bgColor="transparent"/>
        <SocialIcon url="https://www.linkedin.com/in/pavel-dubitskii/" fgColor="gray" bgColor="transparent"/>
        <SocialIcon url="https://www.instagram.com/pullso_live/" fgColor="gray" bgColor="transparent"/>
      </motion.div>
      <motion.div
        initial={{
          x: 500, opacity: 0, scale: 0.5,
        }}
        animate={{
          x: 0, opacity: 1, scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon url="mailto:pullso.code@gmail.com" fgColor="gray" bgColor="transparent"/>
        <SocialIcon url="https://t.me/pullso" fgColor="gray" bgColor="transparent"/>
        <SocialIcon url="https://wa.me/79920105554" fgColor="gray" bgColor="transparent"/>
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">get in touch</p>
      </motion.div>
    </header>
  );
};


export default Header;
