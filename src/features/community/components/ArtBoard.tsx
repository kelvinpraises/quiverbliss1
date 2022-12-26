import styled from "styled-components";
import { kRadiusM } from "../../../common/constants/borderRadius";
import clampBuilder from "../../../utils/clampBuilder";

const ArtBoard: React.FC<IArtBoard> = ({ type }) => {
  let artBoard: React.ReactElement;

  const figma = <SFigmaArtBoard></SFigmaArtBoard>;

  switch (type) {
    case "figma":
      artBoard = figma;
      break;

    default:
      artBoard = <></>;
      break;
  }

  return artBoard;
};

export default ArtBoard;

const SArtBoard = styled.div`
  border-radius: ${kRadiusM};
  background-color: ${({ theme }) => theme.card};
  border: 1.2px solid ${({ theme }) => theme.cardBorder};
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SFigmaArtBoard = styled(SArtBoard)`
  min-width: ${clampBuilder(320, 703, 20, 35)};
  height: ${clampBuilder(320, 1200, 13, 11)};
`;
