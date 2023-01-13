"use client";

import { useState } from "react";
import styled from "styled-components";

import ArtBoard from "@components/ArtBoard";
import ArtBoardInfo from "@components/ArtBoardInfo";
import { kMaxContentWidth } from "@data/width";
import useProject from "@hooks/project/project";

export default function ProjectPage() {
  return (
    <>
      <ArtBoards />
    </>
  );
}

function ArtBoards() {
  // TODO: Remove this!
  const [get, set] = useState({
    index: undefined,
    infoTop: undefined,
    infoHeight: undefined,
    pointerTop: undefined,
    pointerHeight: undefined,
  });


  const { getArtBoardsInfo } = useProject();
  const artBoards = getArtBoardsInfo();

  // TODO: Empty state here!
  if (typeof artBoards === "undefined") return <></>;

  return (
    <SArtBoardsView>
      <SArtBoards>
        {artBoards.map((props, index) => (
          <ArtBoard
            key={index}
            index={index}
            get={get}
            set={set}
            type={"figma"}
            url={props.url}
          />
        ))}
      </SArtBoards>
      <ArtBoardInfo get={get} set={set} artboards={artBoards} />
    </SArtBoardsView>
  );
}

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
