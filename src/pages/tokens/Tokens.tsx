import type { FC } from "react";
import React from "react";

import styled from "styled-components";

const TokensPageContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  justify-items: center;
`;

export const TokensPage: FC = () => {
  return <TokensPageContainer>Tokens</TokensPageContainer>;
};

export default TokensPage;
