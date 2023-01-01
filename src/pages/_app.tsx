import type { AppProps } from "next/app";
import { useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../common/styles/global";
import { darkTheme, lightTheme } from "../constants/theme";
import {
  CommunityContext,
  useCommunityValue,
} from "../store/community/context";

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

  const communityValue = useCommunityValue({
    initialState: {
      name: "",
      pfp: "",
      description: "",
      coverImage: "",
      featuredVideo: {
        title: "",
        poster: "",
        playbackId: "",
      },
      projects: [
        {
          id: "",
          name: "",
          description: "",
          labels: [],
          projectVideo: {
            title: "",
            poster: "",
            playbackId: "",
          },
          artBoards: [
            {
              id: "",
              type: "",
              name: "",
              description: "",
              url: "",
            },
          ],
          election: {
            id: "",
            title: "",
            description: "",
            questions: [
              {
                orbisRoom: "",
                question: "",
                description: "",
                options: [
                  {
                    title: "",
                    value: 0,
                  },
                ],
              },
            ],
          },
          createdAt: 0,
        },
      ],
      createdAt: 0,
    },
  });

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
