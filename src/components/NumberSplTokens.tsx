import type { FC } from "react";
import React from "react";

import { PlateWrapper } from "./SolAmount";

type Props = {
  number: number;
};

export const NumberSplTokens: FC<Props> = (props) => {
  return (
    <PlateWrapper>
      <span>You have got</span>
      <span>{props.number} SPL tokens</span>
    </PlateWrapper>
  );
};

export default NumberSplTokens;
