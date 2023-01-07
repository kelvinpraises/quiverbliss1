import { Else, If, Then } from "react-if";
import styled from "styled-components";
import { kMaxContentWidth } from "../../../data/width";
import Cards from "../components/Cards";
import useCommunity from "../hooks/community";

const ProjectCards = () => {
  const { getCommunityProjects } = useCommunity();

  const communityProjects = getCommunityProjects();

  return (
    <If condition={true}>
      <Then>
        <SProjectCards>
          {communityProjects!.map((projects, i) => (
            <Cards key={i} type="projectCards" projectCard={projects} />
          ))}
          {[0, 1].map((_, i) => (
            <Cards key={i} type="ghost" />
          ))}
        </SProjectCards>
      </Then>
      <Else>Loading...</Else>
    </If>
  );
};

export default ProjectCards;

const SProjectCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 2em;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;
