import styled from "styled-components";
import { kRadiusS } from "../../../data/borderRadius";
import clampBuilder from "../../../utils/clampBuilder";
import LivepeerPlayer from "./LivepeerPlayer";

const VideoPlayer: React.FC<IVideoPlayerProp> = ({
  type,
  title,
  playbackId,
  showTitle,
  poster,
}) => {
  let videoPlayer: React.ReactElement;

  const prop = { title, playbackId, showTitle, poster };

  const artBoardInfo = (
    <SABVideoPlayer>
      <LivepeerPlayer
        {...prop}
        muted={false}
        autoPlay={false}
        containerBorderRadius={kRadiusS}
      />
    </SABVideoPlayer>
  );

  const projectIntro = (
    <SPIVideoPlayer>
      <LivepeerPlayer
        {...prop}
        muted={false}
        autoPlay={false}
        containerBorderRadius={kRadiusS}
      />
    </SPIVideoPlayer>
  );

  const communityIntro = (
    <SCIVideoPlayer>
      <LivepeerPlayer
        {...prop}
        muted={true}
        autoPlay={true}
        containerBorderRadius={kRadiusS}
      />
    </SCIVideoPlayer>
  );

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
  border: 1.2px solid ${({ theme }) => theme.cardBorder};
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SABVideoPlayer = styled(SVideoPlayer)`
  width: ${clampBuilder(320, 1200, 25, 35)};
  height: ${clampBuilder(320, 1200, 14.108, 19.7516)}; // width / 1.772
`;

const SPIVideoPlayer = styled(SVideoPlayer)`
  width: ${clampBuilder(320, 1200, 25, 42.4)};
  height: ${clampBuilder(320, 1200, 14.1, 23.927)}; // width / 1.772
  margin: 24px;
  border: none;
`;

const SCIVideoPlayer = styled(SVideoPlayer)`
  width: ${clampBuilder(320, 1200, 25, 35)};
  height: ${clampBuilder(320, 1200, 14.108, 19.7516)}; // width / 1.772
`;
