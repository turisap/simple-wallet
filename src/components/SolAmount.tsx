import type { FC } from "react";
import React from "react";

import type { WalletStore } from "@stores/walletStore";
import { PlateWrapper } from "@styled/components";
import { observer } from "mobx-react-lite";

type Props = {
  amount: string;
  store: WalletStore;
};

export const SolAmount: FC<Props> = observer((props) => {
  return (
    <PlateWrapper>
      <span>You have got</span>
      {props.store.solLoading ? "..." : <span>{props.amount} SOL</span>}
    </PlateWrapper>
  );
});

export default SolAmount;
