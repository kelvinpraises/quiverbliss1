import { useState } from "react";
import styled from "styled-components";
import { kMaxContentWidth } from "../../../common/constants/width";
import ArtBoard from "../components/ArtBoard";
import ArtBoardInfo from "../components/ArtBoardInfo";

const ArtBoardsView = () => {
  const [get, set] = useState({
    infoTop: null,
    infoHeight: null,
    pointerTop: null,
    pointerHeight: null,
  });

  return (
    <SArtBoardsView>
      <SArtBoards>
        {["figma", "figma", "figma"].map((board, index) => (
          <ArtBoard index={index} get={get} set={set} type="figma" />
        ))}
      </SArtBoards>
      <ArtBoardInfo get={get} set={set} />
    </SArtBoardsView>
  );
};

export default ArtBoardsView;

const SArtBoardsView = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 2em;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;

const SArtBoards = styled.div`
  display: flex;
  flex-direction: column;
`;
