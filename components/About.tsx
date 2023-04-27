import React from 'react';
import {motion} from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="about h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="sectionName">About</h3>
      <motion.img
        initial={{x: -200, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 1.2}}
        className="-mb-20 md:mb-0 flex-shrink w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[600px] xl:mt-24"
        src="/manphoto.jpg"
        alt="main photo of man"
      />

      <div className="space-y-10 px-0 md:px-10 xl:max-w-2xl">
        <h4 className="text-4xl font-semibold">Here is a <span
          className="underline decoration-[#f7ab0a]/50">little</span> background</h4>
        <p className="text-base">
          Hey there! 👋 I'm a frontend developer with a passion for Vue.js and React! I specialize in delivering
          high-quality, user-friendly, and visually stunning web applications that leave a lasting impression. 💻
          <br/>
          My technical skillset includes expertise in HTML, CSS, JavaScript, Vue.js, and of course, React. Additionally,
          I have experience in backend development with Node.js and Nest.js. 🚀
          <br/>
          As a dedicated learner, I'm constantly keeping up-to-date with the latest technologies and industry trends.
          I'm an active member of the developer community, attending local meetups, contributing to open-source
          projects, and sharing my knowledge through speaking engagements. 🤝
          <br/>
          I'm available for both remote or on-site contract or full-time opportunities. Let's chat about potential
          opportunities and how I can help bring your projects to life! Feel free to reach out to me on LinkedIn or
          check out my GitLab and GitHub profiles. 📨
        </p>
      </div>
    </motion.div>
  );
};

export default About;
