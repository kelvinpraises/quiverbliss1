import React from "react";
import { kRadiusM, kRadiusS } from "src/data/borderRadius";
import styled from "styled-components";
import Text from "./Text";

interface IProjects {
  setView: any;
}

const ProjectDetail: React.FC<IProjects> = ({setView}) => {
  return (
    <SProject>
      <SProjectNav>
        <Text type="h5">Community project</Text>
        <SNavBox>
          <SNavItem>Projects</SNavItem>
          <SButton onClick={() => setView("NewProject")}>New project</SButton>
        </SNavBox>
      </SProjectNav>
      <SBody>
        <SDetailBar>
          <Text color={"#3D3D4E"} fontSize={"14px"} style={{ width: "27rem" }}>
            Project
          </Text>
          <Text color={"#3D3D4E"} fontSize={"14px"}>
            Visibility
          </Text>
        </SDetailBar>
        <SProjectBox>
          <SProjectInfo style={{ width: "27rem" }}>
            <SProjectImage />
            <div>
              <Text
                color={"#3D3D4E"}
                fontSize={"14px"}
                style={{ marginBottom: "8px" }}
              >
                Designs for Orbis Hackathon!
              </Text>
              <Text
                color={"#6C6C7D"}
                fontSize={"14px"}
                style={{ width: "15rem" }}
              >
                Designs for Orbis Hackathon! A design platform for teams who
                build products together
              </Text>
            </div>
          </SProjectInfo>
          <SProjectInfo>
            <Text color={"#1f1f27"} fontSize={"14px"}>
              True
            </Text>
          </SProjectInfo>
        </SProjectBox>
      </SBody>
    </SProject>
  );
};

export default ProjectDetail;

const SProject = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const SProjectNav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem 0;
  border-bottom: 1px solid #b3b3b3;
`;

const SNavBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 0 1rem;
`;

const SNavItem = styled.p`
  cursor: pointer;
  color: #3d3d4e;
  user-select: none;
  font-size: 1.1rem;
`;

const SBody = styled.div`
  flex: 1;
`;

const SDetailBar = styled.div`
  flex: 1;
  height: 3rem;
  border-bottom: 0.5px solid #b3b3b3;
  padding-left: 2rem;
  display: flex;
  align-items: center;
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

const SProjectBox = styled.div`
  flex: 1;
  padding: 1rem 0;
  border-bottom: 0.5px solid #b3b3b3;
  padding-left: 2rem;
  display: flex;
  align-items: center;
`;

const SProjectImage = styled.div`
  width: 8rem;
  height: 8rem;
  margin-right: 1rem;
  border: 1px solid #d9d9d9;
  border-radius: ${kRadiusM};
`;

const SProjectInfo = styled.div`
  display: flex;
  align-items: center;
`;
