import { useRef } from "react";
import styled from "styled-components";
import { kRadiusM } from "../../../data/borderRadius";
import clampBuilder from "../../../utils/clampBuilder";

const ArtBoard: React.FC<IArtBoard> = ({ type, index, get, set, url }) => {
  const item = useRef<HTMLDivElement>(null);

  // TODO: remove this!
  const setLocation = () => {
    const artBoardTop = item.current?.offsetTop as number;
    const artBoardHeight = item.current?.clientHeight as number;

    const { infoHeight, pointerHeight } = get;

    let infoTop: number;

    if (index === 0) {
      // Top of INFO equals the top of ART BOARD.
      infoTop = artBoardTop;
    } else {
      if (infoHeight > artBoardHeight) {
        // Top of INFO equals (top of ART BOARD minus ((INFO height minus ART BOARD height) divided by 2)).
        infoTop = artBoardTop - (infoHeight - artBoardHeight) / 2;
      } else {
        // Top of INFO equals (((ART BOARD height minus INFO height) divided by 2) plus top of ART BOARD).
        infoTop = (artBoardHeight - infoHeight) / 2 + artBoardTop;
      }
    }

    const pointerTop = (artBoardHeight - pointerHeight) / 2 + artBoardTop;

    set((prevState: object) => ({ ...prevState, infoTop, pointerTop }));
  };

  let artBoard: React.ReactElement;

  const figma = (
    <SFigmaArtBoard onMouseOver={setLocation} ref={item}>
      <iframe
        style={{
          borderRadius: "inherit",
          border: "1px solid rgba(0, 0, 0, 0.1)",
        }}
        width="100%"
        height="100%"
        src={url}
        allowFullScreen
      ></iframe>
    </SFigmaArtBoard>
  );

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
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SFigmaArtBoard = styled(SArtBoard)`
  width: ${clampBuilder(320, 1200, 20, 48)};
  height: ${clampBuilder(320, 1200, 13, 28)};
`;
