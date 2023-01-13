import { useEffect, useState } from "react";
import { kRadiusS } from "src/data/borderRadius";
import styled from "styled-components";
import ArtBoard from "./NewProjectComponent/ArtBoard";
import Details from "./NewProjectComponent/Details";
import Featured from "./NewProjectComponent/Featured";
import Vote from "./NewProjectComponent/Vote";
import Text from "./Text";

interface IProjects {
  setParentView: any;
}

const NewProject: React.FC<IProjects> = ({ setParentView }) => {
  const [view, setView] = useState("Details");
  const [buttonText, setButtonText] = useState("Next");

  useEffect(() => {
    if (view == "ArtBoard") {
      setButtonText("Create");
    } else {
      setButtonText("Next");
    }
  }, [view]);

  const showView = () => {
    switch (view) {
      case "Details":
        return <Details />;
        break;
      case "Featured":
        return <Featured />;
        break;
      case "ArtBoard":
        return <ArtBoard />;
        break;
      case "Vote":
        return <Vote />;
        break;

      default:
        break;
    }
  };

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
    <SNewProject>
      <SProjectNav>
        <SBox>
          <Text type="h5">New project</Text>
          <SButtonG onClick={() => setParentView("projectDetail")}>
            Cancel
          </SButtonG>
        </SBox>
        <SNavBox>
          <SNavItem onClick={() => setView("Details")}>Details</SNavItem>
          <SNavItem onClick={() => setView("Featured")}>Featured</SNavItem>
          <SNavItem onClick={() => setView("ArtBoard")}>Artboards</SNavItem>
          <SNavItem onClick={() => setView("Vote")}>Vote</SNavItem>
        </SNavBox>
      </SProjectNav>
      <SBody>{showView()}</SBody>
      <SFooter>
        <SButton onClick={handleNextClick}>{buttonText}</SButton>
      </SFooter>
    </SNewProject>
  );
};

export default NewProject;

const SBox = styled.div`
  display: flex;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: flex-end;
`;

const SProjectNav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0 0;
`;

const SNavBox = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  margin-top: 1.5rem;
  border-top: 1px solid #b3b3b3;
`;

const SNavItem = styled.p`
  cursor: pointer;
  color: #3d3d4e;
  user-select: none;
  font-size: 1.1rem;
  padding: 1.2rem 0 0 1.5rem;
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

const SNewProject = styled.div``;

const SFooter = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 6rem;
  width: calc(100vw - 13rem);
  background: #243237;
  height: 4.5rem;
  bottom: 0;
`;

const SBody = styled.div`
  width: 100%;
`;

const SButtonG = styled.button`
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
