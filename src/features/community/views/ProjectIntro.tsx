import styled from "styled-components";
import { kRadiusL } from "../../../common/constants/borderRadius";
import { kMaxContainerWidth } from "../../../common/constants/width";
import Stats from "../components/Stats";
import VideoPlayer from "../components/VideoPlayer";

const ProjectIntro = () => {
  return (
    <SProjectIntro>
      <VideoPlayer type="projectIntro" />
      {/* TODO: <Carousel /> */}
      <Stats type="project" />
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
  background-color: ${({ theme }) => theme.card};
  border-radius: ${kRadiusL};
`;
