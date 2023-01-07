import Head from "next/head";
import Image from "next/image";
import Scaffold from "../../features/common/layout/Scaffold";
import ArtBoardEditor from "../../features/studio/components/ArtBoardEditor";
import BannerEditor from "../../features/studio/components/BannerEditor";
import BioEditor from "../../features/studio/components/BioEditor";
import PfpEditor from "../../features/studio/components/PfpEditor";
import VideoEditor from "../../features/studio/components/VideoEditor";

export default function Project() {
  return (
    <>
      <Head>
        <title>QuiverBliss</title>
        <meta name="description" content="QuiverBliss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scaffold hide={["footer"]}>
        <BioEditor />
        <VideoEditor />
        <ArtBoardEditor />
      </Scaffold>
    </>
  );
}
