import type { FC } from "react";
import React from "react";

import walletStore from "@stores/walletStore";
import { observer } from "mobx-react-lite";

import { PlateWrapper } from "./SolAmount";

type Props = {
  number: number;
};

export const NumberSplTokens: FC<Props> = observer((props) => {
  return (
    <PlateWrapper>
      <span>You have got</span>
      {walletStore.splLoading ? "..." : <span>{props.number} SPL tokens</span>}
    </PlateWrapper>
  );
});

export default NumberSplTokens;
