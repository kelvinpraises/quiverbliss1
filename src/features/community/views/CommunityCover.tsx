import Image from "next/image";
import styled from "styled-components";
import { kMaxContentWidthL } from "../../../common/constants/width";
import Avatar from "../components/Avatar";
import useCommunity from "../hooks/community";

const CommunityCover = () => {
  const { getCommunityCover, getCommunityAvatar } = useCommunity();

  const avatarProp = {
    src: getCommunityAvatar.src,
    alt: getCommunityAvatar.alt,
  };

  return (
    <SCommunityCover>
      <SBanner>
        <Avatar type="communityCover" {...avatarProp} />
        <Image
          src={getCommunityCover.src}
          style={{ objectFit: "cover", zIndex: 0 }}
          fill
          priority
          alt={getCommunityCover.alt}
        />
      </SBanner>
    </SCommunityCover>
  );
};

export default CommunityCover;

const SCommunityCover = styled.section`
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
