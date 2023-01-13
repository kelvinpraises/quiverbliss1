import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { kRadiusM } from "@data/borderRadius";
import VideoPlayer from "./VideoPlayer";

const ArtBoardInfo: React.FC<IArtBoardInfo> = ({ get, set, artboards }) => {
  const [infoTop, setInfoTop] = useState(0);
  const [pointerTop, setPointerTop] = useState(0);
  const [artBoardIndex, setArtBoardIndex] = useState(0);

  const info = useRef<HTMLDivElement>(null);
  const pointer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (info.current?.clientHeight) {
      set((d: object) => ({ ...d, infoHeight: info.current?.clientHeight }));
    }
    if (pointer.current?.clientHeight) {
      set((d: object) => ({
        ...d,
        pointerHeight: pointer.current?.clientHeight,
      }));
    }
  }, [info.current?.clientHeight, pointer.current?.clientHeight]);

  useEffect(() => {
    setInfoTop(get.infoTop);
    setPointerTop(get.pointerTop);
    setArtBoardIndex(get.index);
  }, [get]);

  if (artboards[artBoardIndex]?.description === "") return <></>;

  return (
    <>
      <SArtBoardInfo
        ref={info}
        top={infoTop}
        visibility={infoTop ? "visible" : "hidden"}
      >
        {artboards[artBoardIndex]?.playbackId && (
          <VideoPlayer
            type={"artBoardInfo"}
            title={""}
            playbackId={artboards[artBoardIndex]?.playbackId || ""}
            showTitle={false}
            poster={""}
          />
        )}
        <h6 style={{ marginBottom: ".1rem", fontWeight: "500" }}>
          Description
        </h6>
        <p>{artboards[artBoardIndex]?.description}</p>
      </SArtBoardInfo>
      <SArtBoardInfoPointer
        draggable={false}
        ref={pointer}
        top={pointerTop}
        visibility={infoTop ? "visible" : "hidden"}
      >
        <Image
          draggable={false}
          src="/pointer.svg"
          alt="Vercel Logo"
          width={25}
          height={25}
          priority
        />
      </SArtBoardInfoPointer>
    </>
  );
};

export default ArtBoardInfo;

const SArtBoardInfo = styled.div<ISArtBoardInfo>`
  padding: 1rem;
  position: absolute;
  top: ${({ top }) => top + "px"};
  left: 800px;
  width: 20rem;
  height: 100%;
  max-height: 31rem;
  background: ${({ theme }) => theme.card};
  visibility: ${({ visibility }) => visibility};
  border-radius: ${kRadiusM};
  transition: all 450ms ease-in-out;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
`;

const SArtBoardInfoPointer = styled.div<ISArtBoardInfo>`
  display: grid;
  place-items: center;
  position: absolute;
  top: ${({ top }) => top + "px"};
  left: 785px;
  /* background: green; */
  visibility: ${({ visibility }) => visibility};
  transition: all 450ms ease-in-out;
  user-select: none;
`;
