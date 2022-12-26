import Head from "next/head";
import Scaffold from "../../../common/components/Scaffold";
import ProjectIntro from "../../../features/community/views/ProjectIntro";

export default function Project() {
  return (
    <>
      <Head>
        <title>Community</title>
        <meta name="description" content="QuiverBliss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scaffold>
        <ProjectIntro />
      </Scaffold>
    </>
  );
}
