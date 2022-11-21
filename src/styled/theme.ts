import { rgb } from "polished";
import type { DefaultTheme } from "styled-components";

/* eslint-disable turisap/no-magic-numbers */
export const theme: DefaultTheme = {
  primary: "#61e309",
  backgrounds: {
    page: rgb(18, 29, 51),
    button: "#000",
    plate: "#000",
    input: "#000",
  },
  borders: {
    button: "#eee",
    plate: "#eee",
  },
  text: {
    button: "#eee",
    buttonHover: "#000",
    plate: "#eee",
    input: "#eee",
  },
  radius: {
    plate: "16px",
    button: "16px",
  },
};
/* eslint-enable turisap/no-magic-numbers */
