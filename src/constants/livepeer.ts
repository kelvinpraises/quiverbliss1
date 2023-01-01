import {
  createReactClient,
  studioProvider,
  ThemeConfig
} from "@livepeer/react";

export const client = createReactClient({
  provider: studioProvider({
    // apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
    apiKey: "fe39de67-59ac-4b3f-b4b6-b40b8b8fc5b0",
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
