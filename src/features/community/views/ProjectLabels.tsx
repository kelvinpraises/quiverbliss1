import styled from "styled-components";
import { kMaxContentWidth } from "../../../constants/width";
import Labels from "../components/Labels";
import useProject from "../hooks/project";

const ProjectLabels = () => {
  const { getProjectLabels } = useProject();
  const labels = getProjectLabels();

  return (
    <SProjectLabels>
      {labels!.map((label, index) => (
        <Labels key={index} type={label as LabelTypes} />
      ))}
    </SProjectLabels>
  );
};

export default ProjectLabels;

const SProjectLabels = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 2em;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;
