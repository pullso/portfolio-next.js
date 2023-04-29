import {createClient} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-04-28",
  useCdn: process.env.NODE_ENV === 'production'
}

export const sanityClient = createClient(config);

const builder = createImageUrlBuilder(config)
export const urlFor = (source: any) => builder.image(source)
export const getDoc = (source:any) => sanityClient.getDocument(source?._ref)
