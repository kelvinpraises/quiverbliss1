import { INewTheme } from "../types/theme";


export const lightTheme: INewTheme = {
  background: "#F2F6F9",
  card: "#ffffff", //cards
  cardBorder: "#F0F1F8", //and for all lines
  inputField: "#414968",
  accent1: "#00d5e0", //almost black color
  accent2: "#81CC2A", //green color
  accent3: "#000000",
  text1: "#1F232C",
  text2: "#ffffff",
  text3: "#BDD3E8",
  border: "#A592F2",
  borderHover: "#",
  modal: "#262B3D", //all modals
  error: "#",
  warn: "#FF6363", //red color
  dark: true,
};

export const darkTheme: INewTheme = {
  background: "#111528",
  card: "#24283B", //cards
  cardBorder: "#1D2231", //and for all lines
  inputField: "#414968",
  accent1: "#191A21", //almost black color
  accent2: "#81CC2A", //green color
  accent3: "#000000",
  text1: "#ffffff",
  text2: "#EBF2F8",
  text3: "#BDD3E8",
  border: "#A592F2",
  borderHover: "#",
  modal: "#262B3D", //all modals
  error: "#",
  warn: "#FF6363", //red color
  dark: true,
};

export type ThemeType = typeof darkTheme;
