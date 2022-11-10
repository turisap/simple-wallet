import type { FC } from "react";
import React from "react";

import { TokenLogo } from "@components/TokenLogo";
import type { WalletSPLToken } from "@typings/general";
import styled from "styled-components";

const RowContainer = styled.div`
  background: ${(props) => props.theme.backgrounds.plate};
  border-radius: 16px;
  display: grid;
  grid-gap: 8px;
  padding: 16px;
`;

export const TokenRow: FC<WalletSPLToken> = (props) => {
  return (
    <RowContainer>
      <TokenLogo src={props.logoURI} />
    </RowContainer>
  );
};

export default TokenRow;
