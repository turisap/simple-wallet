import type { FC } from "react";
import React from "react";

import { TokenLogo } from "@components/TokenLogo";
import type { WalletSPLToken } from "@typings/general";
import { lamportsToBalance } from "@utils/token";
import styled from "styled-components";

import { MAX_DECIMALS } from "../constants";

const RowContainer = styled.div`
  background: ${(props) => props.theme.backgrounds.plate};
  border-radius: 16px;
  color: ${(props) => props.theme.text.plate};
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  grid-template-columns: 50px 1fr 75px;
  grid-template-rows: 1fr 1fr;
  padding: 16px;
`;

export const TokenRow: FC<WalletSPLToken> = (props) => {
  const tokenAmount = lamportsToBalance(props.amount, props.decimals).toFixed(
    MAX_DECIMALS
  );

  return (
    <RowContainer>
      <TokenLogo src={props.logoURI} />
      <span>{props.symbol}</span>
      <span>{props.name}</span>
      <span>{tokenAmount}</span>
    </RowContainer>
  );
};

export default TokenRow;
