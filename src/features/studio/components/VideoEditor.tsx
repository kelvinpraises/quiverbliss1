import Image from "next/image";
import styled from "styled-components";
import { kRadiusM, kRadiusS } from "../../../constants/borderRadius";
import { kMaxContentWidth } from "../../../constants/width";
import StudioButton from "./StudioButton";

const EditVideo = () => {
  return (
    <SBannerBox>
      <p>Featured video</p>
      <SBanner>
        <SImageUpload>
          <p>Title</p>
          <SInput />
          <SImageBox>
            <SImage>
              <Image
                src={"/banner-image.svg"}
                style={{
                  objectFit: false ? "cover" : undefined,
                  zIndex: 0,
                  scale: false ? 1 : ".5",
                }}
                fill
                priority
                alt={"banner image"}
              />
            </SImage>
            <StudioButton handleFunction={undefined}>
              Choose profile
            </StudioButton>
          </SImageBox>
        </SImageUpload>
        <SVideoUpload>
          <SVideo>
            <Image
              src={"/play.svg"}
              style={{
                // objectFit: false ? "cover" : undefined,
                zIndex: 0,
                scale: ".3",
              }}
              fill
              priority
              alt={"play"}
            />
          </SVideo>
          <StudioButton handleFunction={undefined}>Choose profile</StudioButton>
        </SVideoUpload>
      </SBanner>
    </SBannerBox>
  );
};

export default EditVideo;

const SBannerBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;
  max-width: ${kMaxContentWidth};
  width: 100%;
`;

const SBanner = styled.div`
  flex: 1;
  display: flex;
  margin-top: 1rem;
  background-color: white;
  padding: 2rem;
  border-radius: ${kRadiusM};
  max-width: ${kMaxContentWidth};
`;

const SImageUpload = styled.div`
  width: 40%;
  /* padding-right: 2rem; */
`;

const SInput = styled.input`
  width: 100%;
  border: 2px solid #3d3d4e;
  border-radius: ${kRadiusS};
  font-size: 16px;
  padding: 0.8rem 1rem;
  margin-top: 10px;
  margin-bottom: 2rem;
  background-color: transparent;
  resize: none;
  outline: none;
`;

const SImage = styled.div`
  position: relative;
  background-color: #717171;
  display: grid;
  place-items: center;
  width: 60%;
  height: 9rem;
  border-radius: ${kRadiusS};
`;

const SImageBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SVideoUpload = styled.div`
  width: 60%;
  margin-left: 4rem;
`;

const SVideo = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  background: #272727;
  height: 18.75rem;
  margin-bottom: 2rem;
  border-radius: ${kRadiusS};
`;
