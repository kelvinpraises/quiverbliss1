import styled from "styled-components";
import { kRadiusL } from "../../../common/constants/borderRadius";
import { kMaxContainerWidth } from "../../../common/constants/width";
import Stats from "../components/Stats";
import VideoPlayer from "../components/VideoPlayer";

const ProjectIntro = () => {
  return (
    <SProjectIntro>
      <SCardContainer>
        <VideoPlayer type="projectIntro" />
        {/* TODO: <Carousel /> */}
        <Stats type="project" />
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
  max-width: ${kMaxContainerWidth};
`;

const SCardContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  border-radius: ${kRadiusL};
  margin: 1rem;
  background-color: ${({ theme }) => theme.card};
`;
