import styled from "styled-components";

import { Button } from "@components/Button";
import { kRadiusS } from "@data/borderRadius";
import useStudioInputs from "@hooks/studio/studioInputs";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ImageInput = ({
  type,
}: {
  type: "avatar" | "cover" | "banner";
}) => {
  const [fileDataURL, setFileDataURL] = useState<string>();
  const { useUploadImage } = useStudioInputs();
  const { dropzone, get, image: imgData } = useUploadImage();
  const { getRootProps, getInputProps, open } = dropzone;

  get?.response && console.log(`https://${get.response.cid}.ipfs.w3s.link`);
  const href = ``;
  const percent =
    get?.progress && (get.progress.loaded / get.progress.total) * 100;

  let image: React.ReactElement;

  useEffect(() => {
    const reader = new FileReader();
    reader.onload;
    imgData && reader.readAsDataURL(imgData);
    reader.onload = function (event) {
      setFileDataURL(event.target?.result as string);
    };
  }, [imgData]);

  const avatar = (
    <SImageInput>
      <SProfile>
        {fileDataURL ? (
          <Image
            src={fileDataURL || ""}
            style={{ objectFit: "cover", zIndex: 0 }}
            fill
            priority
            alt={""}
          />
        ) : (
          <img src="/profile.svg" alt="" />
        )}
      </SProfile>
      <SColumnFlex>
        <SParagraph>
          It’s recommended to use a picture that’s at least 98 x 98 pixels and
          4MB or less. Use a PNG or GIF (no animations) file.
        </SParagraph>
        <SRowFlex {...getRootProps()}>
          <input {...getInputProps()} />
          <Button onClick={open}>Choose profile</Button>
          {percent && (
            <p style={{ marginLeft: "1rem" }}>{"Uploaded" + percent + "%"}</p>
          )}
        </SRowFlex>
      </SColumnFlex>
    </SImageInput>
  );

  const cover = (
    <SImageInput>
      <SBanner>
        {fileDataURL ? (
          <Image
            src={fileDataURL || ""}
            style={{ objectFit: "cover", zIndex: 0 }}
            fill
            priority
            alt={""}
          />
        ) : (
          <img src="/banner-image.svg" alt="" width={"90px"} />
        )}
      </SBanner>
      <SColumnFlex>
        <SParagraph>
          Select or upload a picture that shows what&apos;s in your video. A
          good thumbnail stands out and draws viewers&apos; attention.
        </SParagraph>
        <SRowFlex {...getRootProps()}>
          <input {...getInputProps()} />
          <Button onClick={open}>Choose cover</Button>
          {percent && (
            <p style={{ marginLeft: "1rem" }}>{"Uploaded" + percent + "%"}</p>
          )}
        </SRowFlex>
      </SColumnFlex>
    </SImageInput>
  );

  const banner = (
    <SImageInput>
      <SBanner>
        {fileDataURL ? (
          <Image
            src={fileDataURL || ""}
            style={{ objectFit: "cover", zIndex: 0 }}
            fill
            priority
            alt={""}
          />
        ) : (
          <img src="/banner-image.svg" alt="" width={"90px"} />
        )}
      </SBanner>
      <SColumnFlex>
        <SParagraph>
          For the best results, use an image that’s at least 2048 x 1152 pixels
          and 6MB or less.
        </SParagraph>
        <SRowFlex {...getRootProps()}>
          <input {...getInputProps()} />
          <Button onClick={open}>Choose banner</Button>
          {percent && (
            <p style={{ marginLeft: "1rem" }}>{"Uploaded" + percent + "%"}</p>
          )}
        </SRowFlex>
      </SColumnFlex>
    </SImageInput>
  );

  switch (type) {
    case "avatar":
      image = avatar;
      break;

    case "cover":
      image = cover;
      break;

    case "banner":
      image = banner;
      break;

    default:
      image = <></>;
      break;
  }

  return image;
};

const SImageInput = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem 2rem;
  overflow: hidden;
`;

const SProfile = styled.div`
  max-width: 9rem;
  width: 100%;
  margin-right: 1.4rem;
  background: #717171;
  border-radius: 50%;
  height: 9rem;
  display: grid;
  place-items: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const SBanner = styled.div`
  max-width: 9rem;
  width: 100%;
  margin-right: 1.4rem;
  background: #717171;
  border-radius: ${kRadiusS};
  height: 9rem;
  display: grid;
  place-items: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const SParagraph = styled.p`
  font-size: 1rem;
  color: #6c6c7d;
`;

const SRowFlex = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

const SColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
