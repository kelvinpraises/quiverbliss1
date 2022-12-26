import styled from "styled-components";

const CoverImage = () => {
  return (
    <SCoverImage>
      <SBanner></SBanner>
    </SCoverImage>
  );
};

export default CoverImage;

const SCoverImage = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SBanner = styled.div`
  flex: 1;
  height: 15rem;
  background: #000000;
`;
