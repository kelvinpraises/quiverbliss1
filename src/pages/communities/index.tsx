import Head from "next/head";
import Scaffold from "../../common/components/Scaffold";
import IntroBanner from "../../features/community/components/IntroBanner";
import Heading from "../../features/community/components/Heading";
import CommunityCards from "../../features/community/views/CommunityCards";

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
        <Heading />
        <IntroBanner />
        <CommunityCards />
      </Scaffold>
    </>
  );
}
