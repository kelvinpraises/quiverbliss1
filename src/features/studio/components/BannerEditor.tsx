import Image from "next/image";
import styled from "styled-components";
import { kRadiusM, kRadiusS } from "../../../constants/borderRadius";
import { kMaxContentWidth } from "../../../constants/width";
import StudioButton from "./StudioButton";

const EditBanner = () => {
  return (
    <SBannerBox>
      <p>Banner Image</p>
      <SBanner>
        <SImage>
          <Image
            src={"/banner-image.svg"}
            style={{
              objectFit: false ? "cover" : undefined,
              zIndex: 0,
              scale: false ? 1 : ".8",
            }}
            fill
            priority
            alt={"banner image"}
          />
        </SImage>
        <StudioButton handleFunction={undefined}>Choose banner</StudioButton>
      </SBanner>
    </SBannerBox>
  );
};

export default EditBanner;

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
  background-color: #717171;
  display: grid;
  place-items: center;
  width: 100%;
  height: 12.5rem;
  border-radius: ${kRadiusS};
  margin-bottom: 1.5rem;
`;
