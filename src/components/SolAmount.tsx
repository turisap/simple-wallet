import type { FC } from "react";
import React from "react";

import styled from "styled-components";

type Props = {
  amount: string;
};

const SolAmountWrapper = styled.div`
  background: ${(props) => props.theme.backgrounds.plate};
  border-radius: ${(props) => props.theme.radius.plate};
  color: ${(props) => props.theme.text.plate};

  display: grid;
  grid-gap: 8px;
  grid-template-rows: 1fr;

  padding: 60px;
`;

export const SolAmount: FC<Props> = (props) => {
  return (
    <SolAmountWrapper>
      <span>You have got</span>
      <span>{props.amount} SOL</span>
    </SolAmountWrapper>
  );
};

export default SolAmount;
