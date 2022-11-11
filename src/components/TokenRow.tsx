import type { FC } from "react";
import React from "react";

import { TokenLogo } from "@components/TokenLogo";
import type { Token } from "@saberhq/token-utils";
import walletStore from "@stores/walletStore";
import styled from "styled-components";

import { MAX_DECIMALS } from "../constants";

const RowContainer = styled.div`
  background: ${(props) => props.theme.backgrounds.plate};
  border-radius: 16px;
  color: ${(props) => props.theme.text.plate};
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  grid-template-columns: 50px 1fr 145px;
  grid-template-rows: 1fr 1fr;
  padding: 16px;
`;

const TokenUnits = styled.div`
  justify-self: flex-end;

  span:nth-child(2) {
    margin-left: 4px;
  }
`;

export const TokenRow: FC<{ token: Token }> = (props) => {
  const amount = walletStore.amountMap.get(props.token.symbol);

  return (
    <RowContainer>
      <TokenLogo src={props.token.icon} />
      <span>{props.token.symbol}</span>
      <span>{props.token.name}</span>
      <TokenUnits>
        <span>{amount?.toFixed(MAX_DECIMALS)}</span>
        <span>{props.token.symbol}</span>
      </TokenUnits>
    </RowContainer>
  );
};

export default TokenRow;
