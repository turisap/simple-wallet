import type { FC } from "react";
import React from "react";

// import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Button } from "@styled/layout";
import styled from "styled-components";

const ExperimentsPageContainer = styled.div`
  display: grid;
  grid-auto-rows: 48px;
  grid-template-columns: 1fr 1fr;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.text.plate};
  font-size: 20px;
  grid-column: 1 / -1;
`;

export const Experiments: FC = () => {
  // const { connection } = useConnection();
  // const { publicKey, sendTransaction } = useWallet();

  const pingProgram = () => {};

  return (
    <ExperimentsPageContainer>
      <Heading>Experiments</Heading>
      <Button onClick={pingProgram}>Ping On-chain Program</Button>
    </ExperimentsPageContainer>
  );
};

export default Experiments;
