import { useState } from "react";
import styled from "styled-components";
import { kMaxContentWidth } from "../../../constants/width";
import ArtBoard from "../components/ArtBoard";
import ArtBoardInfo from "../components/ArtBoardInfo";
import useProject from "../hooks/project";

const ArtBoardsView = () => {
  const { getArtBoardsUrl } = useProject();

  const artBoards = getArtBoardsUrl();

  // TODO: Remove this!
  const [get, set] = useState({
    infoTop: null,
    infoHeight: null,
    pointerTop: null,
    pointerHeight: null,
  });

  return (
    <SArtBoardsView>
      <SArtBoards>
        {artBoards!.map((url, index) => (
          <ArtBoard key={index} index={index} get={get} set={set} type="figma" url={url} />
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
