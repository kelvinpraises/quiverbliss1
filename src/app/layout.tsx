"use client";

import { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "src/style/globalStyle";
import { darkTheme, lightTheme } from "@data/theme";
import { CommunityContext, useCommunityValue } from "@stores/community/context";
import StyledComponentsRegistry from "./registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, _] = useState("light");

  const communityValue = useCommunityValue();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <CommunityContext.Provider value={communityValue}>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <body>{children}</body>
          </StyledComponentsRegistry>
        </CommunityContext.Provider>
      </ThemeProvider>
    </html>
  );
}
