import React, { useState } from "react";
import styled from "styled-components";
import NewProject from "./NewProject";
import ProjectDetail from "./ProjectDetail";

const Projects = () => {
  const [view, setView] = useState("projectDetail");

  let viewComp: React.ReactNode;

  switch (view) {
    case "ProjectDetail":
      viewComp = <ProjectDetail setView={setView} />;
      break;

    case "NewProject":
      viewComp = <NewProject setParentView={setView} />;
      break;

    default:
      viewComp = <ProjectDetail setView={setView} />;
      break;
  }

  return <SBox> {viewComp} </SBox>;
};

export default Projects;

const SBox = styled.div`
  width: 100%;
  overflow-y: scroll;
  margin-bottom: 8rem;
`;
