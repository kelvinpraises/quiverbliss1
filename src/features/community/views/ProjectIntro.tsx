import styled from "styled-components";
import { kRadiusL } from "../../../constants/borderRadius";
import { kMaxContentWidth } from "../../../constants/width";
import VideoPlayer from "../components/VideoPlayer";
import useProject from "../hooks/project";

const ProjectIntro = () => {
  const { getProjectIntro } = useProject();

  const { videoProps } = getProjectIntro();

  return (
    <SProjectIntro>
      <SCardContainer>
        <VideoPlayer
          title={videoProps?.title!}
          playbackId={videoProps?.playbackId!}
          poster={videoProps?.poster!}
          showTitle={videoProps?.showTitle!}
          type="projectIntro"
        />
        {/* TODO: <Carousel /> */}
        {/* <Stats type="projectIntro" /> */}
      </SCardContainer>
    </SProjectIntro>
  );
};

export default ProjectIntro;

const SProjectIntro = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;

const SCardContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  border-radius: ${kRadiusL};
  margin: 1rem;
  background-color: ${({ theme }) => theme.card};
`;
