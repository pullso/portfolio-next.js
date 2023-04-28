import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import React from "react";
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "@/components/dev";

export default function App({Component, pageProps}: AppProps) {
  return <>
    <Head>
      <title>Pavel Dubitskii - Frontend developer</title>
    </Head>
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
      <Component {...pageProps} />
    </DevSupport>
  </>
}
