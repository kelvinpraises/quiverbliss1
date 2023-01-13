import { INewTheme } from "../types/theme";

export const lightTheme: INewTheme = {
  background: "#F2F6F9",
  card: "#ffffff",
  cardBorder: "#F0F1F8",
  inputField: "#414968",
  accent1: "#00d5e0",
  accent2: "#69E5EE",
  accent3: "#007A7F",
  text1: "#1F232C",
  text2: "#ffffff",
  text3: "#BDD3E8",
  border: "#A592F2",
  borderHover: "#",
  modal: "#262B3D",
  error: "#",
  warn: "#FF6363",
  dark: true,
};

export const darkTheme: INewTheme = {
  background: "#111528",
  card: "#24283B",
  cardBorder: "#1D2231",
  inputField: "#414968",
  accent1: "#191A21",
  accent2: "#81CC2A",
  accent3: "#000000",
  text1: "#ffffff",
  text2: "#EBF2F8",
  text3: "#BDD3E8",
  border: "#A592F2",
  borderHover: "#",
  modal: "#262B3D",
  error: "#",
  warn: "#FF6363",
  dark: true,
};

export type ThemeType = typeof darkTheme;
