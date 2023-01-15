import styled from "styled-components";

import { Button } from "@components/Button";
import { TextInput } from "@components/TextInput";
import { VideoInput } from "@components/VideoInput";
import { kRadiusS } from "src/data/borderRadius";

const ArtBoardEditor = () => {
  return (
    <SArtBoardEditor>
      <SArtBoardContent>
        <SBox>
          <TextInput
            value=""
            onChange={() => {}}
            heading={"Figma URL"}
            subheading={"Figma url to this project."}
          />
          <TextInput
            value=""
            onChange={() => {}}
            heading={"Title"}
            subheading={
              "Give a suitable title for this artboard to set it apart from other arboards in this category."
            }
          />
          <TextInput
            value=""
            type="textArea"
            onChange={() => {}}
            heading={"Description"}
            subheading={"Description of this project"}
          />
          <VideoInput />
        </SBox>
        <SFrame></SFrame>
      </SArtBoardContent>
      <div style={{ margin: "2rem" }}>
        <Button>New artboard</Button>
      </div>
    </SArtBoardEditor>
  );
};

export default ArtBoardEditor;

const SArtBoardEditor = styled.div``;

const SArtBoardContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #b3b3b3;
`;

const SBox = styled.div`
  max-width: 30rem;
  width: 100%;
`;

const SFrame = styled.div`
  flex: 1;
  height: 17rem;
  background-color: black;
  border-radius: ${kRadiusS};
  margin-right: 2rem;
`;
