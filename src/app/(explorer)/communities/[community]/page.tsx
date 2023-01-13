"use client";

import { Suspense } from "react";
import styled from "styled-components";

import Bio from "@components/Bio";
import Cards from "@components/Cards";
import FollowButton from "@components/FollowButton";
import VideoPlayer from "@components/VideoPlayer";
import { kMaxContentWidth } from "@data/width";
import useCommunity from "@hooks/communities/community";

export default function CommunityPage() {
  return (
    <Suspense fallback={<p>loading..</p>}>
      <CommunityIntro />
      <ProjectCards />
    </Suspense>
  );
}

function CommunityIntro() {
  const { getCommunityIntro } = useCommunity();
  const communityIntro = getCommunityIntro();

  return (
    <SCommunityIntro>
      <VideoPlayer
        showTitle={false}
        {...communityIntro.videoProps}
        type="communityIntro"
      />
      <SSideIntro>
        <Bio type="communityIntro" {...communityIntro.bioProps} />
        <FollowButton />
      </SSideIntro>
    </SCommunityIntro>
  );
}

function ProjectCards() {
  const { getCommunityProjects } = useCommunity();
  const communityProjects = getCommunityProjects();

  return (
    <SProjectCards>
      {communityProjects.map((projects, i) => (
        <Cards key={i} type="projectCard" projects={projects} />
      ))}
      {[0, 1].map((_, i) => (
        <Cards key={i} type="ghostCard" />
      ))}
    </SProjectCards>
  );
}

const SCommunityIntro = styled.section`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;

const SSideIntro = styled.div`
  flex: 1;
`;

const SProjectCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 2em;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;
