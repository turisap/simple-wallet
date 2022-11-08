import { createGlobalStyle } from "styled-components";

import type { ThemedProps } from "../typings";

export const GlobalStyle = createGlobalStyle<ThemedProps>`
  
body {
  font-family: "Roboto Mono", monospace;
  height: 100vh;
}

a {
  text-decoration: none;
}

#root {
  background: ${(props) => props.theme.backgrounds.page};
  height: 100%;
}`;
