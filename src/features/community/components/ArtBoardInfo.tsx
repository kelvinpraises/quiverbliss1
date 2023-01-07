import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { kRadiusM } from "../../../data/borderRadius";

const ArtBoardInfo: React.FC<IArtBoardInfo> = ({ get, set }) => {
  const [infoTop, setInfoTop] = useState(0);
  const [pointerTop, setPointerTop] = useState(0);

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
  }, [get]);

  return (
    <>
      <SArtBoardInfo
        ref={info}
        top={infoTop}
        visibility={infoTop ? "visible" : "hidden"}
      ></SArtBoardInfo>
      <SArtBoardInfoPointer
        ref={pointer}
        top={pointerTop}
        visibility={infoTop ? "visible" : "hidden"}
      >
        <Image
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
  position: absolute;
  top: ${({ top }) => top + "px"};
  left: 800px;
  width: 300px;
  height: 500px;
  background: ${({ theme }) => theme.card};
  visibility: ${({ visibility }) => visibility};
  border-radius: ${kRadiusM};
  transition: all 450ms ease-in-out;
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
`;
