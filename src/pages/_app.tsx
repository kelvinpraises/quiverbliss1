import type { AppProps } from "next/app";
import { useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../common/constants/theme";
import { ModalContext, useModalProvider } from "../common/data/providers";
import GlobalStyle from "../common/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, _] = useState("light");

  const modalState = useMemo(() => {
    // TODO: Add Identifier for new user.
    const newUser = false;

    let state;

    const data = {
      showWelcome: false,
    };

    if (newUser) {
      state = { ...data, showWelcome: true };
    } else {
      state = {
        ...data,
      };
    }

    return state;
  }, []);

  const modalValue = useModalProvider({ initialState: modalState });

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <ModalContext.Provider value={modalValue}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ModalContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
