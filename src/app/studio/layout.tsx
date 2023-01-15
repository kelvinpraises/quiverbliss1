"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";

import studioNavRoutes from "@data/studioNavRoutes";
import useStudio from "@hooks/studio/studio";
import { Else, If, Then } from "react-if";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { getUserAuthorization } = useStudio();
  const { loggedIn, isCommunityProfile } = getUserAuthorization();



  return (
    <SStudioLayout>
      <SHeader>
        <img src="/quiverbliss.svg" alt="logo" />
        <SStudio>STUDIO</SStudio>
      </SHeader>
      <SRowFlex>
        <SNavigation>
          {studioNavRoutes.map((r, i) => (
            <Link key={i} href={r.link}>
              <SNavItem>{r.name}</SNavItem>
            </Link>
          ))}
        </SNavigation>
        <If condition={loggedIn}>
          <Then>
            <If condition={isCommunityProfile}>
              <Then>{children}</Then>
              <Else>
                <If condition={pathname === "/studio/customize/basic-info"}>
                  <Then>{children}</Then>
                  <Else>
                    <h1>Please create an account!</h1>
                  </Else>
                </If>
              </Else>
            </If>
          </Then>
          <Else>
            <h1>Please connect wallet!</h1>
          </Else>
        </If>
      </SRowFlex>
    </SStudioLayout>
  );
}

const SStudioLayout = styled.section`
  overflow: hidden;
  height: 100vh;
`;

const SStudio = styled.p`
  font-size: 1rem;
  padding-left: 1rem;
  font-weight: 600;
`;

const SHeader = styled.div`
  width: 100%;
  height: 5.5rem;
  display: flex;
  align-items: center;
  padding-left: 2.7rem;
  border-bottom: 1px solid #b3b3b3;
`;

const SNavigation = styled.div`
  max-width: 13rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8rem 0 0 2rem;
  border-right: 1px solid #b3b3b3;
  height: calc(100vh - 5.5rem);
`;

const SNavItem = styled.p`
  font-size: 1.2rem;
  user-select: none;
  color: #404040;
  margin: 2rem 0;
  cursor: pointer;
`;

const SRowFlex = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
`;
