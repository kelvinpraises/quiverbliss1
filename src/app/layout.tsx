"use client";

import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { client, theme as livePeerTheme } from "@data/livepeer";
import { darkTheme, lightTheme } from "@data/theme";
import { LivepeerConfig } from "@livepeer/react";
import { CommunityContext, useCommunityValue } from "@stores/community/context";
import {
  CommunityEditorContext,
  useCommunityEditorValue,
} from "@stores/studio/communityEditor/context";
import {
  ProjectEditorContext,
  useProjectEditorValue,
} from "@stores/studio/projectEditor/context";
import { UserContext, useUserValue } from "@stores/user/context";
import GlobalStyles from "src/style/globalStyle";
import StyledComponentsRegistry from "./registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, _] = useState("light");

  const communityValue = useCommunityValue();
  const communityEditorValue = useCommunityEditorValue();
  const projectEditorValue = useProjectEditorValue();
  const userValue = useUserValue();

  return (
    <html lang="en">
      <head />
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <CommunityEditorContext.Provider value={communityEditorValue}>
          <ProjectEditorContext.Provider value={projectEditorValue}>
            <UserContext.Provider value={userValue}>
              <CommunityContext.Provider value={communityValue}>
                <StyledComponentsRegistry>
                  <GlobalStyles />
                  <LivepeerConfig client={client} theme={livePeerTheme}>
                    <body>{children}</body>
                  </LivepeerConfig>
                </StyledComponentsRegistry>
              </CommunityContext.Provider>
            </UserContext.Provider>
          </ProjectEditorContext.Provider>
        </CommunityEditorContext.Provider>
      </ThemeProvider>
    </html>
  );
}
