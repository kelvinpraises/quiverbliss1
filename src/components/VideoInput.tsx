import styled from "styled-components";

import { Button } from "@components/Button";
import { kRadiusS } from "@data/borderRadius";
import useStudioInputs from "@hooks/studio/studioInputs";

export const VideoInput = () => {
  const { useUploadVideo } = useStudioInputs();
  const { dropzone, assetData, isLoading, progressFormatted } = useUploadVideo();
  const { getRootProps, getInputProps } = dropzone;
  const { mutate: createAsset, data } = assetData;

  return (
    <SVideoInput>
      <SBanner>
        <img src="/play.svg" alt="" width={"90px"} />
      </SBanner>
      <SColumnFlex>
        <SParagraph>
          It’s recommended to use a video that is not more than 5 minute long.
        </SParagraph>

        <SRowFlex>
          {!createAsset && (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Button>Choose video</Button>
            </div>
          )}

          {createAsset && (
            <Button
              onClick={() => {
                createAsset?.();
              }}
              disabled={isLoading || !createAsset}
            >
              Upload video
            </Button>
          )}

          {progressFormatted && (
            <p style={{ marginLeft: "1rem" }}>{progressFormatted}</p>
          )}
        </SRowFlex>
      </SColumnFlex>
    </SVideoInput>
  );
};

const SVideoInput = styled.div`
  display: flex;
  margin: 0 2rem 2rem;
  align-items: center;
`;

const SBanner = styled.div`
  max-width: 9rem;
  width: 100%;
  margin-right: 1.4rem;
  background: #272727;
  border-radius: ${kRadiusS};
  height: 9rem;
  display: grid;
  place-items: center;
`;

const SParagraph = styled.p`
  font-size: 1rem;
  color: #6c6c7d;
`;

const SRowFlex = styled.div`
  display: flex;
  align-items: center;
`;

const SColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
