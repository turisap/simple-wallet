import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
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
