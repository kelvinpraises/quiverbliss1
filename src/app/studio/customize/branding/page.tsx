"use client";

import styled from "styled-components";

import { ImageInput } from "@components/ImageInput";
import { VideoInput } from "@components/VideoInput";

export default function CustomizeBrandingPage() {
  return (
    <SCustomizeBrandingPage>
      <SBox2>
        <SBox>
          <SHeading>Profile picture</SHeading>
          <SSubHeading>
            This is an image that should represent the community, it can be a
            logo or whatever pleases you
          </SSubHeading>
          <ImageInput type={"avatar"} />
        </SBox>
      </SBox2>
      <SBox2>
        <SBox>
          <SHeading>Banner image</SHeading>
          <SSubHeading>
            This image will appear across the top of your page when viewed by
            outsiders
          </SSubHeading>
          <ImageInput type={"banner"} />
        </SBox>
      </SBox2>
      <SBox2>
        <SBox>
          <SHeading>Featured video</SHeading>
          <SSubHeading>
            Highlight a video to watch, it’s best to keep it short and let it
            explain what your community is all about
          </SSubHeading>
          <ImageInput type={"cover"} />
          <VideoInput />
        </SBox>
      </SBox2>
    </SCustomizeBrandingPage>
  );
}

const SCustomizeBrandingPage = styled.div`
  margin-bottom: 5rem;
`;

const SBox = styled.div`
  margin: 2rem 0 0;
  max-width: 45rem;
`;

const SBox2 = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #b3b3b3;
`;

const SHeading = styled.p`
  margin: 0 2rem 0;
  font-size: 1.2rem;
`;

const SSubHeading = styled.p<{ fontSize?: string }>`
  margin: 0 2rem 0.5rem;
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: #6c6c7d;
`;
