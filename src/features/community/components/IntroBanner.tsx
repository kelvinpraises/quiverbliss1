import styled from "styled-components";
import { kRadiusL } from "../../../common/constants/borderRadius";
import { kMaxContainerWidth } from "../../../common/constants/width";

const IntroBanner = () => {
  return (
    <SIntroBanner>
      <SBanner></SBanner>
    </SIntroBanner>
  );
};

export default IntroBanner;

const SIntroBanner = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: ${kMaxContainerWidth};
`;

const SBanner = styled.div`
  flex: 1;
  height: 15rem;
  margin: 1rem;
  border-radius: ${kRadiusL};
  background: #203238;
`;
