"use client";

import { styled } from "styled-components";

import MainNav from "@components/MainNav";

export default function ExplorerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SSection>
      <MainNav />
      {children}
    </SSection>
  );
}

const SSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
