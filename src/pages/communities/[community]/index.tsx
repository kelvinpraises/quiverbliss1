import Head from "next/head";
import Scaffold from "../../../common/components/Scaffold";
import CoverImage from "../../../features/community/components/CoverImage";
import CommunityIntro from "../../../features/community/views/CommunityIntro";
import ProjectCards from "../../../features/community/views/ProjectCards";

export default function Community() {
  return (
    <>
      <Head>
        <title>Community</title>
        <meta name="description" content="QuiverBliss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scaffold hide={["header"]}>
        <CoverImage />
        <CommunityIntro />
        <ProjectCards />
      </Scaffold>
    </>
  );
}
