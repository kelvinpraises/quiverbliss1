import { Else, If, Then } from "react-if";
import styled from "styled-components";
import { kMaxContentWidth } from "../../../data/width";
import Bio from "../components/Bio";
import FollowButton from "../components/FollowButton";
import VideoPlayer from "../components/VideoPlayer";
import useCommunity from "../hooks/community";

const CommunityIntro = () => {
  const { getCommunityIntro } = useCommunity();

  const communityIntro = getCommunityIntro();

  return (
    <If condition={true}>
      <Then>
        <SCommunityIntro>
          <VideoPlayer
            showTitle={false}
            {...communityIntro!.videoProps}
            type="communityIntro"
          />
          <SSideIntro>
            <Bio type="communityIntro" {...communityIntro!.bioProps} />
            <FollowButton />
          </SSideIntro>
        </SCommunityIntro>
      </Then>
      <Else>Loading...</Else>
    </If>
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
