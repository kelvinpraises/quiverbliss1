import styled from "styled-components";
import {
  kRadiusM,
  kRadiusS
} from "../../../common/constants/borderRadius";
import clampBuilder from "../../../utils/clampBuilder";

const VideoPlayer: React.FC<IVideoPlayerProp> = ({ type }) => {
  let videoPlayer: React.ReactElement;

  const artBoardInfo = <SABVideoPlayer></SABVideoPlayer>;

  const projectIntro = <SPIVideoPlayer></SPIVideoPlayer>;

  const communityIntro = <SCIVideoPlayer></SCIVideoPlayer>;

  switch (type) {
    case "artBoardInfo":
      videoPlayer = artBoardInfo;
      break;

    case "projectIntro":
      videoPlayer = projectIntro;
      break;

    case "communityIntro":
      videoPlayer = communityIntro;
      break;

    default:
      videoPlayer = <></>;
      break;
  }

  return videoPlayer;
};

export default VideoPlayer;

const SVideoPlayer = styled.section`
  background-color: #000000;
  border: 1.2px solid ${({ theme }) => theme.cardBorder};
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SABVideoPlayer = styled(SVideoPlayer)`
  border-radius: ${kRadiusM};
  width: ${clampBuilder(320, 1200, 25, 35)};
  height: ${clampBuilder(320, 1200, 14.108, 19.7516)}; // width / 1.772
`;

const SPIVideoPlayer = styled(SVideoPlayer)`
  border-radius: ${kRadiusS};
  width: ${clampBuilder(320, 1200, 25, 42.4)};
  height: ${clampBuilder(320, 1200, 14.1, 23.927)}; // width / 1.772
  margin: 24px;
  border: none;
`;

const SCIVideoPlayer = styled(SVideoPlayer)`
  border-radius: ${kRadiusM};
  width: ${clampBuilder(320, 1200, 25, 35)};
  height: ${clampBuilder(320, 1200, 14.108, 19.7516)}; // width / 1.772
`;
