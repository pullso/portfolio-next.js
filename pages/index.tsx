import Header from "@/components/Header";
import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import {WorkExperience} from "@/components/WorkExperience";
import {Skills} from "@/components/Skills";
import {Projects} from "@/components/Projects";
import {ContactMe} from "@/components/ContactMe";
import Link from "next/link";
import {sanityClient} from "@/sanity";
import {IExperience, IPageInfo, IProject, ISkill, ISocial} from "@/types/interfaces";
import {GetStaticProps, GetStaticPropsResult} from "next";
import {ArrowUpCircleIcon} from '@heroicons/react/24/solid'



type Props = {
  pageInfo: IPageInfo;
  skills: ISkill[];
  projects: IProject[];
  socials: ISocial[];
  experiences: IExperience[];
}

type EmptyProps = {
  pageInfo: {};
  skills: [];
  projects: [];
  socials: [];
  experiences: [];
}

export default function Home({pageInfo, skills, projects, socials, experiences}: Props) {

  return (
    <>
      <div
        className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 myScrollbar">

        <Header socials={socials} pageInfo={pageInfo}/>
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo}/>
        </section>

        <section id="about" className="snap-center">
          <About pageInfo={pageInfo}/>
        </section>

        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences}/>
        </section>

        <section id="skills" className="snap-center">
          <Skills skills={skills}/>
        </section>

        <section id="projects" className="snap-center">
          <Projects projects={projects}/>
        </section>

        <section className="snap-start" id="contact">
          <ContactMe pageInfo={pageInfo}/>
        </section>
        <Link href={"#hero"}>
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <div className="h-10 w-10 filter grayscale hover:grayscale-0 cursor-pointer text-mainColor">
                <ArrowUpCircleIcon />
              </div>
            </div>
          </footer>
        </Link>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props | EmptyProps> = async (): Promise<
  GetStaticPropsResult<Props | EmptyProps>
> => {
  try {
    const typeFilter = `_type == $type`;

    const [pageInfo, skills, projects, socials, experiences] = await Promise.all([
      sanityClient.fetch<IPageInfo[]>(`*[${typeFilter}]`, {type: 'pageInfo'}),
      sanityClient.fetch<ISkill[]>(`*[${typeFilter}]`, {type: 'skill'}),
      sanityClient.fetch<IProject[]>(`*[${typeFilter}]{...,technologies[]->}`, {type: 'project'}),
      sanityClient.fetch<ISocial[]>(`*[${typeFilter}]`, {type: 'social'}),
      sanityClient.fetch<IExperience[]>(`*[${typeFilter}]{...,technologies[]->}`, {type: 'experience'}),
    ]);

    return {
      props: {
        pageInfo: pageInfo[0],
        skills,
        projects,
        socials,
        experiences,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        pageInfo: {},
        skills: [],
        projects: [],
        socials: [],
        experiences: []
      },
    };
  }
};
