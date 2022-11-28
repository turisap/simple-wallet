import type { FC } from "react";
import React from "react";

import { TokenLogo } from "@components/TokenLogo";
import type { Token, TokenAmount } from "@saberhq/token-utils";
import { AmountUSD, RowContainer, TokenUnits } from "@styled/components";
import { observer } from "mobx-react-lite";

import { MAX_DECIMALS } from "../constants";

type Props = {
  token: Token;
  amount?: TokenAmount;
  amountUsd?: string;
};

export const TokenRow: FC<Props> = observer((props) => {
  return (
    <RowContainer>
      <TokenLogo src={props.token.icon} />
      <span>{props.token.symbol}</span>
      <span>{props.token.name}</span>
      <TokenUnits>
        <span>{props.amount?.toFixed(MAX_DECIMALS)}</span>
        <span>{props.token.symbol}</span>
      </TokenUnits>
      <AmountUSD>~{props.amountUsd}$</AmountUSD>
    </RowContainer>
  );
});

export default TokenRow;
