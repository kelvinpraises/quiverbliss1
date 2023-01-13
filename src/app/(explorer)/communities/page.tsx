"use client";

import { Suspense } from "react";
import styled from "styled-components";

import Cards from "@components/Cards";
import IntroBanner from "@components/IntroBanner";
import { kMaxContentWidth } from "@data/width";
import useCommunities from "@hooks/communities/communities";

export default function CommunitiesPage() {
  return (
    <>
      <SCommunitiesIntro>
        <SHeading>Design Communities</SHeading>
        <IntroBanner />
      </SCommunitiesIntro>

      <Suspense fallback={<p>loading..</p>}>
        <CommunityCards />
      </Suspense>
    </>
  );
}

function CommunityCards() {
  const { communities } = useCommunities()!;

  return (
    <SCommunityCards>
      {communities.map((community, i) => (
        <Cards key={i} type="communityCard" community={community} />
      ))}
      {[0, 1].map((_, i) => (
        <Cards key={i} type="ghostCard" />
      ))}
    </SCommunityCards>
  );
}

const SHeading = styled.h1``;

const SCommunitiesIntro = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;

const SCommunityCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 2em;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;
