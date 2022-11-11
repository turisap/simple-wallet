import type { FC } from "react";
import React from "react";

import walletStore from "@stores/walletStore";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

type Props = {
  amount: string;
};

export const PlateWrapper = styled.div`
  align-items: center;
  align-self: stretch;

  background: ${(props) => props.theme.backgrounds.plate};
  border-radius: ${(props) => props.theme.radius.plate};
  color: ${(props) => props.theme.text.plate};

  display: flex;
  flex-direction: column;
  grid-template-rows: 1fr;
  justify-content: center;
  justify-self: stretch;
  line-height: 1.4;
`;

export const SolAmount: FC<Props> = observer((props) => {
  return (
    <PlateWrapper>
      <span>You have got</span>
      {walletStore.solLoading ? "..." : <span>{props.amount} SOL</span>}
    </PlateWrapper>
  );
});

export default SolAmount;