import styled from "styled-components";
import { kRadiusM, kRadiusS } from "../../../common/constants/borderRadius";
import { kMaxContentWidth } from "../../../common/constants/width";
import StudioButton from "./StudioButton";

const ArtBoardEditor = () => {
  return (
    <SBannerBox>
      <p>Project artboards</p>
      <SBanner>
        <SImage></SImage>
        <p>Add new artboard</p>
        <SBox>
          <SArtboardTitle placeholder="Title" />
          <SArtboardFigma placeholder="Figma URL" />
          <StudioButton handleFunction={undefined}>Choose banner</StudioButton>
        </SBox>
      </SBanner>
    </SBannerBox>
  );
};

export default ArtBoardEditor;

const SBannerBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  max-width: ${kMaxContentWidth};
  width: 100%;
`;

const SBanner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 1rem;
  background-color: white;
  padding: 2rem;
  border-radius: ${kRadiusM};
  max-width: ${kMaxContentWidth};
`;

const SImage = styled.div`
  position: relative;
  background-color: #272727;
  display: grid;
  place-items: center;
  width: 33rem;
  height: 18.75rem;
  border-radius: ${kRadiusS};
  margin-bottom: 3.5rem;
`;

const SInput = styled.input`
  border: 2px solid #3d3d4e;
  border-radius: ${kRadiusS};
  font-size: 16px;
  padding: 0.8rem 1rem;
  margin-right: 2rem;
  background-color: transparent;
  resize: none;
  outline: none;
`;

const SArtboardTitle = styled(SInput)`
  width: 19.5rem;
`;

const SArtboardFigma = styled(SInput)`
  width: 28rem;
`;

const SBox = styled.div`
  margin-top: 1rem;
  display: flex;
`;
