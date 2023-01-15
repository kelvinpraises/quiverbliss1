"use client";

import { styled } from "styled-components";

import ConstructionPage from "@components/ConstructionPage";

export default function CustomizePage() {
  return (
    <SStudioPage>
      <ConstructionPage />
    </SStudioPage>
  );
}

const SStudioPage = styled.main`
  width: 100%;
  height: 100%;
  overflow: auto;
`;
