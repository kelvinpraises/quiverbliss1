"use client";

import styled from "styled-components";

import { Button } from "@components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { kRadiusM } from "src/data/borderRadius";

export default function ProjectsPage() {
  const router = useRouter();
  const projects: Project[] = [
    {
      id: "where",
      name: "haku",
      description: "annoying",
      projectVideo: { title: "", poster: "", playbackId: "" },
      labels: [],
      artBoards: [],
      createdAt: 0,
    },
    {
      id: "where",
      name: "haku",
      description: "annoying",
      projectVideo: { title: "", poster: "", playbackId: "" },
      labels: [],
      artBoards: [],
      createdAt: 0,
    },
    {
      id: "where",
      name: "haku",
      description: "annoying",
      projectVideo: { title: "", poster: "", playbackId: "" },
      labels: [],
      artBoards: [],
      createdAt: 0,
    },
  ];

  return (
    <SProject>
      <SProjectNav>
        <SNavHeadContent>
          <SHeading>Community projects</SHeading>
          <Button onClick={() => router.push("/studio/projects/new")}>
            New project
          </Button>
        </SNavHeadContent>
      </SProjectNav>
      <SBody>
        <SDetailBar>
          <SText color="3d3d4e" style={{ width: "27rem" }}>
            Projects
          </SText>
          <SText color="3d3d4e">Created</SText>
        </SDetailBar>
        {projects.map((p, i) => (
          <Link key={i} href={`/studio/projects/edit?p=${p.id}`}>
            <SProjectBox>
              <SProjectInfo>
                <div style={{ width: "27rem", display: "flex" }}>
                  <SProjectImage />
                  <div>
                    <SText
                      color={"#3D3D4E"}
                      fontSize={"14px"}
                      style={{ marginBottom: "8px" }}
                    >
                      {p.name}
                    </SText>
                    <SText
                      color={"#6C6C7D"}
                      fontSize={"14px"}
                      style={{ width: "15rem" }}
                    >
                      {p.description}
                    </SText>
                  </div>
                </div>
                <SText color={"#1f1f27"} fontSize={"14px"}>
                  {p.createdAt}
                </SText>
              </SProjectInfo>
            </SProjectBox>
          </Link>
        ))}
      </SBody>
    </SProject>
  );
}

const SProject = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 10rem;
`;

const SProjectNav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 0;
  border-bottom: 1px solid #b3b3b3;
`;

const SNavHeadContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 1rem;
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

const SHeading = styled.h1`
  font-size: 1.5rem;
`;

const SText = styled.p<{ fontSize?: string; color: string }>`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: ${({ color }) => color};
`;
