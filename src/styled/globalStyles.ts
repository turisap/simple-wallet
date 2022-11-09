import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
body {
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
  height: 100vh;
  overflow: hidden;
}

a {
  text-decoration: none;
}

#root {
  background: ${(props) => props.theme.backgrounds.page};
  height: 100%;
}`;
