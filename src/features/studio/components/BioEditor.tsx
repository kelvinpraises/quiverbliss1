import styled from "styled-components";
import { kRadiusM, kRadiusS } from "../../../data/borderRadius";
import { kMaxContentWidth } from "../../../data/width";


const BioEditor = () => {
  return (
    <SBannerBox>
      <p>Bio</p>
      <SBanner>
        <p>Name</p>
        <SInput />
        <p>Description</p>
        <STextArea />
      </SBanner>
    </SBannerBox>
  );
};

export default BioEditor;

const SBannerBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 6.25rem;
  margin-bottom: 2rem;
  max-width: ${kMaxContentWidth};
  width: 100%;
`;

const SBanner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  background-color: white;
  padding: 2rem;
  border-radius: ${kRadiusM};
  max-width: ${kMaxContentWidth};
`;

const SInput = styled.input`
  border: 2px solid #3d3d4e;
  border-radius: ${kRadiusS};
  font-size: 16px;
  padding: 0.8rem 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: transparent;
  resize: none;
  outline: none;
`;

const STextArea = styled.textarea`
  border: 2px solid #3d3d4e;
  border-radius: ${kRadiusS};
  font-size: 16px;
  padding: 0.8rem 1rem;
  margin-top: 1rem;
  background-color: transparent;
  height: 7rem;
  resize: none;
  outline: none;
`;
