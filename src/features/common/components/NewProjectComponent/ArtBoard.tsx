import React from "react";
import { kRadiusS } from "src/data/borderRadius";
import styled from "styled-components";
import Text from "../Text";

interface IText {
  backgroundColor?: string;
}

const ArtBoard = () => {
  return (
    <div style={{ marginBottom: "7rem" }}>
      <SArtBoardBox>
        <SBox>
          <STitle>Figma URL</STitle>
          <Text fontSize={"14px"} color={"#6C6C7D;"}>
            Figma url to this project.
          </Text>
          <SInput />
          <STitle>Title</STitle>
          <Text fontSize={"14px"} color={"#6C6C7D;"}>
            Give a suitable title for this artboard to set it apart from other
            arboards in this category.
          </Text>
          <SInput />
          <STitle>Description</STitle>
          <Text fontSize={"14px"} color={"#6C6C7D;"}>
            Description of this project
          </Text>
          <STextArea />
          <SDetail>
            <SBanner backgroundColor={"#272727"}>
              <img src="/play.svg" alt="" width={"90px"} />
            </SBanner>
            <div>
              <Text fontSize={"14px"} color={"#6C6C7D;"}>
                It’s recommended to use a video that is not more than 5 minute
                long.
              </Text>
              <SButton>Choose video</SButton>
            </div>
          </SDetail>
        </SBox>
        <SFrame></SFrame>
      </SArtBoardBox>
      <SButton>Add</SButton>
    </div>
  );
};

export default ArtBoard;

const SArtBoardBox = styled.div`
  padding: 0 1.5rem;
  padding-top: 2rem;
  display: flex;
  flex: 1;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid #b3b3b3;
`;

const SBox = styled.div`
  max-width: 30rem;
  width: 100%;
  margin-right: 6rem;
`;

const SInput = styled.input`
  width: 100%;
  border: 1px solid #b3b3b3;
  border-radius: ${kRadiusS};
  font-size: 16px;
  padding: 0.8rem 1rem;
  margin-bottom: 1.5rem;
  background-color: transparent;
  resize: none;
  outline: none;
`;

const STextArea = styled.textarea`
  width: 100%;
  height: 8rem;
  border: 1px solid #b3b3b3;
  border-radius: ${kRadiusS};
  font-size: 16px;
  padding: 0.8rem 1rem;
  background-color: transparent;
  resize: none;
  outline: none;
`;

const STitle = styled(Text)`
  color: #6c6c7d;
  margin-bottom: 4px;
`;

const SDetail = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: center;
`;

const SButton = styled.button`
  all: unset;
  cursor: pointer;
  display: grid;
  place-items: center;
  border-radius: ${kRadiusS};
  color: ${({ theme }) => theme.text2};
  height: 2rem;
  background-color: ${({ theme }) => theme.accent1};
  font-weight: 600;
  font-family: "inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 20px;
  font-size: 0.9rem;
  text-align: center;
  transition: all 200ms ease;
  padding: 10px 22px;
  user-select: none;
  margin: 0 1.5rem;
  margin-top: 1rem;

  :hover {
    background-color: ${({ theme }) => theme.accent2};
  }

  :active {
    background-color: ${({ theme }) => theme.accent3};
  }
`;

const SBanner = styled.div<IText>`
  max-width: 9rem;
  width: 100%;
  margin-right: 1.4rem;
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#717171"};
  border-radius: ${kRadiusS};
  height: 9rem;
  display: grid;
  place-items: center;
`;

const SFrame = styled.div`
  flex: 1;
  height: 17rem;
  background-color: black;
  border-radius: ${kRadiusS};
  margin-right: 1.5rem;
`;
