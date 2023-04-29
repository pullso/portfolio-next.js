import React from 'react';
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";
import Link from "next/link";
import {IPageInfo, ISocial} from "@/types/interfaces";


type Props = {
  socials: ISocial[]
  pageInfo: IPageInfo
}
const Header = ({socials, pageInfo}: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-20">
      <motion.div
        initial={{x: -500, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon key={social._id} url={social.url} fgColor="gray" bgColor="transparent"/>

        ))}
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
        className="flex flex-row items-center text-gray-300"
      >
        <SocialIcon url={"mailto:" + pageInfo.email} fgColor="gray" bgColor="transparent"/>
        <Link href={"#contact"}>
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 cursor-pointer">get in touch</p>
        </Link>
      </motion.div>
    </header>
  );
};


export default Header;
