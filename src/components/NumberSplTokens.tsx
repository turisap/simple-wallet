import type { FC } from "react";
import React from "react";

import type { WalletStore } from "@stores/walletStore";
import { PlateWrapper } from "@styled/components";
import { observer } from "mobx-react-lite";

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
