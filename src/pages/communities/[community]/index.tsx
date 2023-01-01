import Head from "next/head";
import { useEffect } from "react";
import Scaffold from "../../../common/views/Scaffold";
import useCommunity from "../../../features/community/hooks/community";
import CommunityCover from "../../../features/community/views/CommunityCover";
import CommunityIntro from "../../../features/community/views/CommunityIntro";
import ProjectCards from "../../../features/community/views/ProjectCards";

export default function Community() {
  const { init } = useCommunity();
  useEffect(() => {
    init();
  }, [init]);

  console.count("what?");

  return (
    <>
      <Head>
        <title>Community</title>
        <meta name="description" content="QuiverBliss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scaffold>
        <CommunityCover />
        <CommunityIntro />
        <ProjectCards />
      </Scaffold>
    </>
  );
}
