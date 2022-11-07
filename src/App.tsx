import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  align-content: baseline;
  background: ${(props) => props.theme.background};
  flex: 0;
  font-kerning: none;
`;

function App() {
  return <AppWrapper>App</AppWrapper>;
}

export default App;
