import type { FC } from "react";
import React from "react";

import type { WalletStore } from "@stores/walletStore";
import { observer } from "mobx-react-lite";

import { PlateWrapper } from "./SolAmount";

type Props = {
  number: number;
  store: WalletStore;
};

export const NumberSplTokens: FC<Props> = observer((props) => {
  return (
    <PlateWrapper>
      <span>You have got</span>
      {props.store.splLoading ? "..." : <span>{props.number} SPL tokens</span>}
    </PlateWrapper>
  );
});

export default NumberSplTokens;
