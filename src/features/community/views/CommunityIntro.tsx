import styled from "styled-components";
import { kMaxContentWidth } from "../../../common/constants/width";
import Bio from "../components/Bio";
import FollowButton from "../components/FollowButton";
import VideoPlayer from "../components/VideoPlayer";
import useCommunity from "../hooks/community";

const CommunityIntro = () => {
  const { getCommunityIntro } = useCommunity();

  return (
    <SCommunityIntro>
      <VideoPlayer {...getCommunityIntro.videoProps} type="communityIntro" />
      <SSideIntro>
        <Bio type="communityIntro" {...getCommunityIntro.bioProps} />
        <FollowButton />
      </SSideIntro>
    </SCommunityIntro>
  );
};

export default CommunityIntro;

const SCommunityIntro = styled.section`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;

const SSideIntro = styled.div`
  flex: 1;
`;
