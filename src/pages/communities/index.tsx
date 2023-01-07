import Head from "next/head";
import Scaffold from "../../features/common/layout/Scaffold";
import CommunitiesIntro from "../../features/community/layout/CommunitiesIntro";
import CommunityCards from "../../features/community/layout/CommunityCards";

export default function Communities() {
  return (
    <>
      <Head>
        <title>Communities</title>
        <meta name="description" content="QuiverBliss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scaffold>
        <CommunitiesIntro />
        <CommunityCards />
      </Scaffold>
    </>
  );
}
