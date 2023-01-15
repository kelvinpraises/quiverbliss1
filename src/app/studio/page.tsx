"use client";

import ConstructionPage from "@components/ConstructionPage";
import { styled } from "styled-components";

export default function StudioPage() {
  return (
    <SStudioPage>
      <ConstructionPage />
    </SStudioPage>
  );
}

const SStudioPage = styled.main`
  width: 100%;
  overflow: auto;
`;
