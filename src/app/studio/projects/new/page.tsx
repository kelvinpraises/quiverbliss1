"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

import ArtBoard from "@components/editors/ArtBoard";
import Details from "@components/editors/Details";
import Featured from "@components/editors/Featured";
import Vote from "@components/editors/Vote";
import { kRadiusS } from "@data/borderRadius";

export default function NewProjectPage() {
  const router = useRouter();

  const [view, setView] = useState("Details");
  const [buttonText, setButtonText] = useState("Next");

  useEffect(() => {
    if (view == "ArtBoard") {
      setButtonText("Create");
    } else {
      setButtonText("Next");
    }
  }, [view]);

  let viewComp: React.ReactNode;

  switch (view) {
    case "Details":
      viewComp = <Details />;
      break;

    case "Featured":
      viewComp = <Featured />;
      break;

    case "ArtBoard":
      viewComp = <ArtBoard />;
      break;

    case "Vote":
      viewComp = <Vote />;
      break;

    default:
      viewComp = <Details />;
      break;
  }

  const handleNextClick = () => {
    if (view == "Details") {
      setView("Featured");
    } else if (view == "Featured") {
      setView("ArtBoard");
    } else if (view == "Vote") {
      setView("ArtBoard");
    }
  };

  return (
    <SNewProjectPage>
      <SProjectNav>
        <SHeading>New project</SHeading>
        <SButtonCancel onClick={() => router.push("/studio/projects")}>
          Cancel project
        </SButtonCancel>
      </SProjectNav>

      <SNavBox>
        <SNavItem onClick={() => setView("Details")}>Details</SNavItem>
        <SNavItem onClick={() => setView("Featured")}>Featured</SNavItem>
        <SNavItem onClick={() => setView("ArtBoard")}>Artboards</SNavItem>
        <SNavItem onClick={() => setView("Vote")}>Vote</SNavItem>
      </SNavBox>

      <SBody>{viewComp}</SBody>
      <SFooter>
        <SButton onClick={handleNextClick}>{buttonText}</SButton>
      </SFooter>
    </SNewProjectPage>
  );
}

const SNewProjectPage = styled.section`
  width: 100%;
  position: relative;
  overflow: auto;
  padding-bottom: 10rem;
`;

const SBox = styled.div`
  display: flex;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: center;
`;

const SProjectNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem;
  border-bottom: 1px solid #b3b3b3;
`;

const SNavBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const SNavItem = styled.p`
  cursor: pointer;
  color: #3d3d4e;
  user-select: none;
  font-size: 1.1rem;
  margin-right: 10rem;
`;

const SButton = styled.button`
  all: unset;
  cursor: pointer;
  display: grid;
  place-items: center;
  border-radius: ${kRadiusS};
  color: #3b3b40;
  height: 2rem;
  background-color: white;
  font-weight: 600;
  font-family: "inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 20px;
  font-size: 0.9rem;
  text-align: center;
  transition: all 200ms ease;
  padding: 8px 30px;
  user-select: none;

  :hover {
    background-color: white;
  }

  :active {
    background-color: white;
  }
`;

const SFooter = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem;
  background: #243237;
  width: calc(100vw - 13rem);
  height: 4.5rem;
  bottom: 0;
  right: 0;
`;

const SBody = styled.div`
  width: 100%;
`;

const SButtonCancel = styled.button`
  all: unset;
  cursor: pointer;
  display: grid;
  place-items: center;
  border-radius: ${kRadiusS};
  color: ${({ theme }) => theme.text2};
  height: 2rem;
  background-color: ${({ theme }) => theme.warn};
  font-weight: 600;
  font-family: "inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 20px;
  font-size: 0.9rem;
  text-align: center;
  transition: all 200ms ease;
  padding: 10px 22px;
  user-select: none;

  :hover {
    background-color: ${({ theme }) => theme.accent2};
  }

  :active {
    background-color: ${({ theme }) => theme.accent3};
  }
`;

const SHeading = styled.h1`
  font-size: 1.5rem;
`;
