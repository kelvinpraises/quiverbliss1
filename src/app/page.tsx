"use client";

import { Merienda, Merriweather_Sans } from "@next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import { kRadiusS } from "@data/borderRadius";
import { kMaxContentWidth } from "@data/width";

const merienda = Merienda({ subsets: ["latin"] });
const merriweatherSans = Merriweather_Sans({
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  return (
    <SMain>
      <SLogo>
        <Image
          src="/quiverbliss.svg"
          alt="Quiverbliss Logo"
          width={120}
          height={32}
          priority
        />
      </SLogo>
      <SHeroContent>
        <SHeaderText>Design Communities for DAO’s</SHeaderText>
        <SButton onClick={() => router.push("/communities")}>Explore</SButton>
      </SHeroContent>
      <SFeatureContent>
        <SFlexRow>
          <Image
            src="/explain1.svg"
            alt="Create Communities"
            width={500}
            height={500}
            priority
          />
          <SFlexColumn>
            <SFeatureHeading>Create Communities</SFeatureHeading>
            <SFeatureBody>
              Let your community participate in voting on new ideas and
              projects. We believe in the power of democratic decision-making.
            </SFeatureBody>
          </SFlexColumn>
        </SFlexRow>
      </SFeatureContent>
      <SFeatureContent2>
        <SFlexRow>
          <SFlexColumn>
            <SFeatureHeading>Feature Artboards</SFeatureHeading>
            <SFeatureBody>
              Import your Figma designs as an artboard with the Quiverbliss
              Figma plugin and share more context on each artboard with video or
              audio.
            </SFeatureBody>
          </SFlexColumn>
          <Image
            src="/explain2.svg"
            alt="Feature Artboards"
            width={500}
            height={500}
            priority
          />
        </SFlexRow>
      </SFeatureContent2>
      <SFeatureContent>
        <SFlexRow>
          <Image
            src="/explain3.svg"
            alt="Engage Conversations"
            width={500}
            height={500}
            priority
          />
          <SFlexColumn>
            <SFeatureHeading>Engage Conversations</SFeatureHeading>
            <SFeatureBody>
              Listen to the community. Consider new perspectives, respond
              thoughtfully and respectfully. Build relationships through
              meaningful conversations.
            </SFeatureBody>
          </SFlexColumn>
        </SFlexRow>
      </SFeatureContent>
      <SFooter>
        <Image
          src="/quiverblissW.svg"
          alt="Quiverbliss Logo"
          width={222}
          height={62}
          priority
        />
      </SFooter>
    </SMain>
  );
}

const SMain = styled.main`
  display: flex;
  flex-direction: column;
`;

const SHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  background-color: #f0f4f5;
  align-items: center;
`;

const SFeatureContent = styled.div`
  background-color: white;
  padding: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SFeatureContent2 = styled(SFeatureContent)`
  background-color: #f2f6f9;
`;

const SFeatureHeading = styled.p`
  font-family: ${merienda.style.fontFamily};
  color: #444c5a;
  font-weight: 700;
  font-size: 3rem;
  line-height: 122.52%;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

const SFeatureBody = styled.p`
  font-family: ${merriweatherSans.style.fontFamily};
  font-weight: 300;
  font-size: 28px;
  line-height: 122.52%;
  max-width: 28ch;
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

const SHeaderText = styled.p`
  width: 55rem;
  font-family: ${merienda.style.fontFamily};
  color: #444c5a;
  font-style: normal;
  font-weight: 800;
  font-size: 70px;
  line-height: 122.52%;
  text-align: center;
  letter-spacing: -0.02em;
`;

const SLogo = styled.div`
  background-color: #f0f4f5;
  padding-top: 1.75rem;
  padding-left: 3rem;
`;

const SFooter = styled.div`
  background: #243237;
  height: 20rem;
  width: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const SFlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;
