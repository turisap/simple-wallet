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
  align-items: center;
  background: ${(props) => props.theme.backgrounds.page};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-items: center;
}`;
