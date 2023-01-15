import styled from "styled-components";

import { ImageInput } from "@components/ImageInput";
import { VideoInput } from "@components/VideoInput";

interface IText {
  backgroundColor?: string;
}

const FeaturedEditor = () => {
  return (
    <SFeaturedEditor>
      <ImageInput type={"cover"} />
      <VideoInput />
    </SFeaturedEditor>
  );
};

export default FeaturedEditor;

const SFeaturedEditor = styled.div`
  max-width: 40rem;
`;
