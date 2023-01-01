import styled from "styled-components";
import Text from "../../../common/components/Text";
import { kMaxContentWidth } from "../../../constants/width";
import IntroBanner from "../components/IntroBanner";

const CommunitiesIntro = () => {
  return (
    <SCommunitiesIntro>
      <Text style={{ margin: "1rem" }} type="h3">
        Design Communities
      </Text>
      <IntroBanner />
    </SCommunitiesIntro>
  );
};

export default CommunitiesIntro;

const SCommunitiesIntro = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;
