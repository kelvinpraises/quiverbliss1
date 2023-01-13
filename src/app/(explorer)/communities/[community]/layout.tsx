"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import Avatar from "@components/Avatar";
import communityNavRoutes from "@data/communityNavRoutes";
import { kMaxContentWidth, kMaxContentWidthL } from "@data/width";
import useCommunity from "@hooks/communities/community";

export default function CommunitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { getCommunityCover, getCommunityAvatar } = useCommunity();

  const communityCover = getCommunityCover();
  const communityAvatar = getCommunityAvatar();

  const avatarProp = {
    src: communityAvatar.src,
    alt: communityAvatar.alt,
  };

  return (
    <SSection>
      <SCommunityCover>
        <SBanner>
          <Avatar type="communityCover" {...avatarProp} />
          <Image
            src={communityCover.src}
            style={{ objectFit: "cover", zIndex: 0 }}
            fill
            priority
            alt={communityCover.alt}
          />
        </SBanner>
      </SCommunityCover>
      {/* TODO: remove to own component */}
      <SNavigation>
        {communityNavRoutes.map((r) => (
          <SNavItems onClick={() => router.push(r.link)}>{r.name}</SNavItems>
        ))}
      </SNavigation>

      {children}
    </SSection>
  );
}

const SSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SCommunityCover = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
`;

const SBanner = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  height: 14rem;
  background: #000000;
  max-width: ${kMaxContentWidthL};
`;

const SNavigation = styled.nav`
  display: flex;
  justify-content: center;
  max-width: ${kMaxContentWidth};
  padding-bottom: 0.8rem;
  border-bottom: 2px solid #9397b7;
  margin: 1rem 0 2rem;
  width: 100%;
`;

const SNavItems = styled.div`
  user-select: none;
  font-size: 1.5rem;
  margin: 0 2.6rem;
  cursor: pointer;
`;
