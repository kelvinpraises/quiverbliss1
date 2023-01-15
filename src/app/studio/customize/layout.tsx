"use client";

import Link from "next/link";
import styled from "styled-components";

import { Button } from "@components/Button";
import customizeNavRoutes from "@data/customizeNavRoutes";
import { useSelectedLayoutSegment } from "next/navigation";
import SaveChange from "@components/SaveChange";
import { useCallback } from "react";
import useStudio from "@hooks/studio/studio";

export default function CustomizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();
  const { communityState, communityDispatch } = useStudio();

  const handleSaveChanges = useCallback(() => {}, []);

  const handleReset = useCallback((state: ICommunityState) => {
    communityDispatch({
      type: "SET_COMMUNITY",
      payload: { community: state },
    });
  }, []);

  return (
    <SCustomizeLayout>
      <SCustomizeNav>
        <SNavHeadContent>
          <SHeading>Customize Community</SHeading>
          <SaveChange
            state={communityState}
            saveChanges={() => handleSaveChanges()}
            resetChanges={(state) => handleReset(state)}
          />
        </SNavHeadContent>
        <SNavBox>
          {customizeNavRoutes.map((r, i) => (
            <Link key={i} href={r.link}>
              <SNavItem selected={r.slug === segment}>{r.name}</SNavItem>
            </Link>
          ))}
        </SNavBox>
      </SCustomizeNav>
      {children}
    </SCustomizeLayout>
  );
}

const SCustomizeLayout = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
`;

const SCustomizeNav = styled.div`
  display: flex;
  padding: 0 2rem 0;
  flex-direction: column;
  border-bottom: 1px solid #b3b3b3;
`;

const SNavHeadContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 1rem;
  margin-bottom: 0.5rem;
`;

const SHeading = styled.h1`
  font-size: 1.5rem;
`;

const SNavBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  margin-bottom: 0.5rem;
`;

const SNavItem = styled.p<{ selected: boolean }>`
  cursor: pointer;
  color: #6c6c7d;
  user-select: none;
  font-size: 1.1rem;
  ${({ selected }) =>
    selected &&
    `
    color: black;
    font-weight: 500;
  `};
`;

const SFlexRow = styled.div`
  display: flex;
  align-items: center;
`;
