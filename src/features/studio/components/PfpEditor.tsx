import Image from "next/image";
import styled from "styled-components";
import { kRadiusM } from "../../../constants/borderRadius";
import { kMaxContentWidth } from "../../../constants/width";
import StudioButton from "./StudioButton";

const EditPfp = () => {
  return (
    <SBannerBox>
      <p>Profile Image</p>
      <SBanner>
        <SImage>
          <Image
            src={"/profile.svg"}
            style={{
              objectFit: false ? "cover" : undefined,
              zIndex: 0,
              scale: false ? 1 : ".5",
            }}
            fill
            priority
            alt={"profile"}
          />
        </SImage>
        <StudioButton handleFunction={undefined}>Choose profile</StudioButton>
      </SBanner>
    </SBannerBox>
  );
};

export default EditPfp;

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
  /* justify-content: center; */
  align-items: center;
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
  width: 10.5rem;
  height: 10.5rem;
  border-radius: 50%;
  margin-right: 2rem;
`;
