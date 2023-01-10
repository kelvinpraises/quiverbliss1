import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../data/globalStyle";
import { darkTheme, lightTheme } from "../data/theme";
import {
  CommunityContext,
  useCommunityValue,
} from "../stores/community/context";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, _] = useState("light");

  const communityValue = useCommunityValue();

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CommunityContext.Provider value={communityValue}>
        <GlobalStyle />
        <Component {...pageProps} />
      </CommunityContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
