import Image from "next/image";
import { Else, If, Then } from "react-if";
import styled from "styled-components";
import { kMaxContentWidthL } from "../../../data/width";
import Avatar from "../components/Avatar";
import useCommunity from "../hooks/community";

const CommunityCover = () => {
  const { getCommunityCover, getCommunityAvatar } = useCommunity();

  const communityCover = getCommunityCover();
  const communityAvatar = getCommunityAvatar();

  const avatarProp = {
    src: communityAvatar!.src,
    alt: communityAvatar!.alt,
  };

  return (
    <If condition={true}>
      <Then>
        <SCommunityCover>
          <SBanner>
            <Avatar type="communityCover" {...avatarProp} />
            <Image
              src={communityCover!.src}
              style={{ objectFit: "cover", zIndex: 0 }}
              fill
              priority
              alt={communityCover!.alt}
            />
          </SBanner>
        </SCommunityCover>
      </Then>
      <Else>loading... </Else>
    </If>
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
