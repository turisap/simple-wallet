import type { FC } from "react";
import React from "react";

import { TokenLogo } from "@components/TokenLogo";
import type { Token, TokenAmount } from "@saberhq/token-utils";
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

type Props = {
  token: Token;
  amount?: TokenAmount;
};

export const TokenRow: FC<Props> = (props) => {
  return (
    <RowContainer>
      <TokenLogo src={props.token.icon} />
      <span>{props.token.symbol}</span>
      <span>{props.token.name}</span>
      <TokenUnits>
        <span>{props.amount?.toFixed(MAX_DECIMALS)}</span>
        <span>{props.token.symbol}</span>
      </TokenUnits>
    </RowContainer>
  );
};

export default TokenRow;
