import styled from "styled-components";

export const TokensPageContainer = styled.div`
  align-items: self-start;
  display: grid;
  font-size: 20px;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 160px 1fr;
  height: 100%;
`;

export const Content = styled.div<{ isLoading: boolean }>`
  align-self: stretch;
  display: grid;
  grid-column: 1 / -1;
  grid-gap: 8px;
  grid-template-rows: repeat(auto-fill, 82px);
  justify-content: stretch;
  justify-items: ${(props) => (props.isLoading ? "center" : "stretch")};
  overflow: scroll;
`;
