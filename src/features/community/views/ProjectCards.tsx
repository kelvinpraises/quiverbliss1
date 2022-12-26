import styled from "styled-components";
import { kMaxContainerWidth } from "../../../common/constants/width";
import Cards from "../components/Cards";

const ProjectCards = () => {
  return (
    <SProjectCards>
      {[0, 1, 3, 3, 3, 3, 4, 7].map((_, i) => (
        <Cards key={i} type="project" />
      ))}
      {[0, 1].map((_, i) => (
        <Cards key={i} type="ghost" />
      ))}
    </SProjectCards>
  );
};

export default ProjectCards;

const SProjectCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 2em;
  width: 100%;
  max-width: ${kMaxContainerWidth};
`;
