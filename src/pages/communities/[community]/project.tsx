import Head from "next/head";
import { useState } from "react";
import Scaffold from "../../../features/common/layout/Scaffold";
import ArtBoardsView from "../../../features/community/layout/ArtBoardsView";
import ProjectIntro from "../../../features/community/layout/ProjectIntro";
import ProjectLabels from "../../../features/community/layout/ProjectLabels";
import ProjectNavigation from "../../../features/community/layout/ProjectNavigation";

export default function Project() {
  const [navView, setNavView] = useState("home");

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
        <ProjectNavigation setState={setNavView} />
        <ArtBoardsView />
      </Scaffold>
    </>
  );
}
