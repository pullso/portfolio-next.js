
import { SanityDocument, Image } from '@sanity/types'

export interface IPageInfo extends SanityDocument {
  name: string;
  role: string;
  address: string;
  phoneNumber: string;
  email: string;
  profilePic: Image;
  heroImage: Image;
  backgroundInfo: string;
}

export interface ISkill extends SanityDocument{
  progress: number;
  title: string;
  image: Image;
}

export interface ISocial extends SanityDocument{
  url: string;
  title: string;
}

export interface IExperience extends SanityDocument{
  company: string;
  companyImg: Image;
  jobTitle: string;
  dateStarted: string;
  dateEnded?: string;
  isWorkingHere: boolean;
  technologies: ISkill[];
  points: string[];
}

export interface IProject extends SanityDocument{
  title: string;
  summary: string;
  link: string;
  image: Image;
  technologies: ISkill[];
}
