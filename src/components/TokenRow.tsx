import type { FC } from "react";
import React from "react";

import { TokenLogo } from "@components/TokenLogo";
import type { Token, TokenAmount } from "@saberhq/token-utils";
import type { CoinGeckoRate } from "@typings/wallet";
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

const AmountUSD = styled.div`
  justify-self: flex-end;
`;

type Props = {
  token: Token;
  amount?: TokenAmount;
  rate?: CoinGeckoRate;
};

export const TokenRow: FC<Props> = (props) => {
  const amountUSD =
    props.rate?.current_price &&
    Number(props.amount?.toFixed(MAX_DECIMALS)) * props.rate?.current_price;

  return (
    <RowContainer>
      <TokenLogo src={props.token.icon} />
      <span>{props.token.symbol}</span>
      <span>{props.token.name}</span>
      <TokenUnits>
        <span>{props.amount?.toFixed(MAX_DECIMALS)}</span>
        <span>{props.token.symbol}</span>
      </TokenUnits>
      <AmountUSD>{amountUSD?.toFixed(MAX_DECIMALS)} $</AmountUSD>
    </RowContainer>
  );
};

export default TokenRow;
