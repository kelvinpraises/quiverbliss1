import Head from "next/head";
import Scaffold from "../../../common/views/Scaffold";
import ArtBoardsView from "../../../features/community/views/ArtBoardsView";
import ProjectIntro from "../../../features/community/views/ProjectIntro";
import ProjectLabels from "../../../features/community/views/ProjectLabels";

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
        <ProjectLabels />
        <ArtBoardsView/>
      </Scaffold>
    </>
  );
}
