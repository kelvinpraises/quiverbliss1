import styled from "styled-components";
import { kMaxContentWidth } from "../../../constants/width";
import Cards from "../components/Cards";
import useCommunity from "../hooks/communities";

const CommunityCards = () => {
  const { getCommunities } = useCommunity();

  return (
    <SCommunityCards>
      {getCommunities.map((community, i) => (
        <Cards key={i} type="communityCards" communityCard={community} />
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
  max-width: ${kMaxContentWidth};
`;
