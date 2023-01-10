import Text from "@features/common/components/Text";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import { kRadiusS } from "src/data/borderRadius";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>QuiverBliss</title>
        <meta name="description" content="QuiverBliss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SLogo>
          <Image
            src="/quiverbliss.svg"
            alt="Quiverbliss Logo"
            width={120}
            height={32}
            priority
          />
        </SLogo>
        <SHeadBox>
          <SCommunity src="/community.svg" />
          <SBg1 />
          <SBg2 />
          <STextBox>
            <SHeaderText>Design Communities for DAO’s</SHeaderText>
            <SButton onClick={() => router.push("/communities")}>
              Explore
            </SButton>
          </STextBox>
        </SHeadBox>
        <SDetailBox>
          <Image
            src="/explain1.svg"
            alt="Create Communities"
            width={800}
            height={520}
            priority
          />
          <div>
            <SExplainHead>Create Communities</SExplainHead>
            <SExplainBody>
              Let your community participate in voting on new ideas and
              projects. We believe in the power of democratic decision-making.
            </SExplainBody>
          </div>
        </SDetailBox>
        <SDetailBox2>
          <div>
            <SExplainHead>Feature Artboards</SExplainHead>
            <SExplainBody>
              Import your Figma designs as an artboard with the Quiverbliss
              Figma plugin and share more context on each artboard with video or
              audio.
            </SExplainBody>
          </div>
          <Image
            src="/explain2.svg"
            alt="Feature Artboards"
            width={450}
            height={420}
            priority
          />
        </SDetailBox2>
        <SDetailBox>
          <Image
            src="/explain3.svg"
            alt="Engage Conversations"
            width={850}
            height={500}
            priority
          />
          <div>
            <SExplainHead>Engage Conversations</SExplainHead>
            <SExplainBody>
              Listen to the community. Consider new perspectives, respond
              thoughtfully and respectfully. Build relationships through
              meaningful conversations.
            </SExplainBody>
          </div>
        </SDetailBox>
        <SFooter>
          <Image
            src="/quiverblissW.svg"
            alt="Quiverbliss Logo"
            width={225}
            height={80}
            priority
          />
        </SFooter>
      </main>
    </>
  );
}

const SHeadBox = styled.div`
  position: relative;
  background-color: #f0f4f5;
  width: 100%;
  height: 80vh;
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const STextBox = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SDetailBox = styled.div`
  position: relative;
  height: 35rem;
  width: 100%;
  background-color: white;
  padding: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SDetailBox2 = styled(SDetailBox)`
  background-color: #f2f6f9;
`;

const SExplainHead = styled(Text)`
  font-family: "Merienda", cursive;
  color: #444c5a;
  font-weight: 700;
  font-size: 3rem;
  line-height: 122.52%;
  width: 35rem;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;
const SExplainBody = styled(Text)`
  font-weight: 400;
  font-size: 28px;
  line-height: 122.52%;
  width: 28rem;
  color: #5b5b5c;
`;

const SButton = styled.button`
  all: unset;
  cursor: pointer;
  display: grid;
  place-items: center;
  border-radius: ${kRadiusS};
  color: ${({ theme }) => theme.text2};
  height: 2rem;
  background-color: ${({ theme }) => theme.accent1};
  font-weight: 600;
  font-family: "inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 20px;
  font-size: 1.2rem;
  text-align: center;
  transition: all 200ms ease;
  padding: 16px 55px;
  user-select: none;
  margin-top: 3.5rem;

  :hover {
    background-color: ${({ theme }) => theme.accent2};
  }

  :active {
    background-color: ${({ theme }) => theme.accent3};
  }
`;

const SHeaderText = styled(Text)`
  width: 55rem;
  font-family: "Merienda", cursive;
  color: #444c5a;
  font-style: normal;
  font-weight: 800;
  font-size: 70px;
  line-height: 122.52%;
  text-align: center;
  letter-spacing: -0.02em;
`;

const SCommunity = styled.img`
  /* z-index: -1; */
  position: absolute;
  top: -97.51px;
`;

const SBg1 = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  left: -240px;
  top: 190px;
  background: rgba(48, 102, 190, 0.07);
  filter: blur(40px);
`;

const SBg2 = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  right: -100px;
  top: -155px;
  background: rgba(235, 130, 88, 0.07);
  filter: blur(40px);
`;

const SLogo = styled.div`
  background-color: #f0f4f5;
  padding-top: 1.75rem;
  padding-left: 3rem;
`;

const SFooter = styled.div`
  background: #243237;
  height: 30%;
  width: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7.5rem;
`;
