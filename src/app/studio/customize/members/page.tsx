"use client";

import ConstructionPage from "@components/ConstructionPage";
import { styled } from "styled-components";

export default function CustomizeMembersPage() {
  return (
    <SCustomizeMembersPage>
      <ConstructionPage />
    </SCustomizeMembersPage>
  );
}

const SCustomizeMembersPage = styled.main`
  width: 100%;
`;
