import styled from "styled-components";
import { kMaxContentWidth } from "../../../common/constants/width";
import Labels from "../components/Labels";

const ProjectLabels = () => {
  return (
    <SProjectLabels>
      {["voting", "on-chain", "feedback"].map((label) => (
        <Labels type={label as LabelTypes} />
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
