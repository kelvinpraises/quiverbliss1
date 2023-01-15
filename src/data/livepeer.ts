import {
  createReactClient,
  studioProvider,
  ThemeConfig
} from "@livepeer/react";

export const client = createReactClient({
  provider: studioProvider({
    // apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
    apiKey: "57fa86b4-f41e-4e56-a66c-9480934d88a9",
  }),
});

export const theme: ThemeConfig = {
  colors: {
    accent: "rgb(0, 145, 255)",
    containerBorderColor: "rgba(0, 145, 255, 0.9)",
  },
  fonts: {
    display: "Inter",
  },
  borderStyles: { containerBorderStyle: "hidden" },
};
