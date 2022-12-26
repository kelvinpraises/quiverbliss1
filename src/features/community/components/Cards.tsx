import Link from "next/link";
import styled from "styled-components";
import { kRadiusM } from "../../../common/constants/borderRadius";
import clampBuilder from "../../../utils/clampBuilder";

const Cards: React.FC<ICardsProp> = ({ type }) => {
  let card: React.ReactElement;

  const project = (
    <SProjectCard>
      <SLink
        passHref={true}
        href={"/communities/dreampiper/project?p=quiverbliss"}
      ></SLink>
    </SProjectCard>
  );

  const community = (
    <SCommunityCard>
      <SLink passHref={true} href={"/communities/dreampiper"}></SLink>
    </SCommunityCard>
  );

  const ghost = <SGhostCard></SGhostCard>;

  switch (type) {
    case "project":
      card = project;
      break;

    case "community":
      card = community;
      break;

    case "ghost":
      card = ghost;
      break;

    default:
      card = <></>;
      break;
  }

  return card;
};

export default Cards;

const SCard = styled.div`
  border-radius: ${kRadiusM};
  background-color: ${({ theme }) => theme.card};
  border: 1.2px solid ${({ theme }) => theme.cardBorder};
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SProjectCard = styled(SCard)`
  flex: 1;
  min-width: 20rem;
  height: ${clampBuilder(320, 1200, 13, 11)};

  @media only screen and (max-width: 703px) {
    flex: none;
    min-width: ${clampBuilder(320, 703, 20, 35)};
    margin-left: auto;
    margin-right: auto;
  }
`;

const SCommunityCard = styled(SCard)`
  flex: 1;
  min-width: 20rem;
  height: ${clampBuilder(320, 1200, 13, 11)};

  @media only screen and (max-width: 703px) {
    flex: none;
    min-width: ${clampBuilder(320, 703, 20, 35)};
    margin-left: auto;
    margin-right: auto;
  }
`;

const SGhostCard = styled.div`
  flex: 1;
  min-width: 20rem;
  height: 0;
  margin: 0 1rem;
  visibility: hidden;
  /* background-color: red;
  border: 2px solid red; */

  @media only screen and (max-width: 703px) {
    display: none;
  }
`;

const SLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
