import { Merienda } from "@next/font/google";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import { kRadiusL, kRadiusS } from "@data/borderRadius";
import { kMaxContentWidth } from "@data/width";

const merienda = Merienda({ subsets: ["latin"] });

const IntroBanner = () => {
  const router = useRouter();

  return (
    <SIntroBanner>
      <SBanner>
        <div>
          <STextBox>
            <SIntroTitle>Want to create your own community?</SIntroTitle>
            <SIntroText>
              Creating a team on Quiverbliss is really easy, just click on the
              button!
            </SIntroText>
          </STextBox>
          <SButton onClick={() => router.push("/studio/customize/basic-info")}>
            Create
          </SButton>
        </div>
        <SImage></SImage>
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
  padding: 0 2rem;
  height: fit-content;
  margin: 1rem;
  border-radius: ${kRadiusL};
  background: #203238;
`;

const SImage = styled.div`
  width: 180px;
  height: 180px;
  background: #d9d9d9;
  margin: 2rem;
  margin-right: 0;
  border-radius: ${kRadiusS};
`;

const SIntroTitle = styled.p`
  font-family: ${merienda.style.fontFamily};
  font-size: 2rem;
  font-weight: 400;
  color: white;
`;

const SIntroText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 1rem;
  line-height: 1.5rem;
  color: white;
`;

const STextBox = styled.div`
  max-width: 40rem;
  margin-bottom: 1.5rem;
`;

const SButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${kRadiusS};
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
