import styled from "styled-components";
import { kMaxContainerWidth } from "../../../common/constants/width";
import Cards from "../components/Cards";

const CommunityCards = () => {
  return (
    <SCommunityCards>
      {[0, 1, 3, 3, 3, 3, 4, 7].map((_, i) => (
        <Cards key={i} type="community" />
      ))}
      {[0, 1].map((_, i) => (
        <Cards key={i} type="ghost" />
      ))}
    </SCommunityCards>
  );
};

export default CommunityCards;

const SCommunityCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 2em;
  width: 100%;
  max-width: ${kMaxContainerWidth};
`;
