import router from "next/router";
import styled from "styled-components";
import Text from "../../common/components/Text";
import { kRadiusL } from "../../../data/borderRadius";
import { kMaxContentWidth } from "../../../data/width";

const IntroBanner = () => {
  return (
    <SIntroBanner>
      <SBanner>
        <SImage></SImage>
        <STextBox>
          <SIntroTitle>Want to create your own community?</SIntroTitle>
          <SIntroText>
            Creating a team on quiverbliss is really easy, just click on the
            button!
          </SIntroText>
        </STextBox>
        <SButton onClick={() => router.push("/studio/community")}>
          Create
        </SButton>
      </SBanner>
    </SIntroBanner>
  );
};

export default IntroBanner;

const SIntroBanner = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;

const SBanner = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  height: 12rem;
  margin: 1rem;
  border-radius: ${kRadiusL};
  background: #203238;
`;

const SImage = styled.div`
  width: 200px;
  height: 200px;
  /* background: gray; */
`;

const SIntroTitle = styled(Text)`
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 2.25rem;
  color: white;
`;

const SIntroText = styled(Text)`
  font-size: 1.25rem;
  font-weight: 400;
  margin-top: 1rem;
  line-height: 1.5rem;
  color: white;
`;

const STextBox = styled.div`
  max-width: 40rem;
`;

const SButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${kRadiusL};
  color: black;
  height: 1.5rem;
  background-color: #ffffff;
  font-weight: 600;
  font-family: "inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 20px;
  font-size: 1rem;
  text-align: center;
  transition: all 200ms ease;
  padding: 10px 24px;
  user-select: none;

  :hover {
    background-color: #e5e5e5;
  }

  :active {
    background-color: #cdcdcd;
  }
`;
