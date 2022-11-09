import type { FC } from "react";
import React, { useEffect } from "react";

import SolAmount from "@components/SolAmount";
import solAmount from "@components/SolAmount";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import type { PublicKey } from "@solana/web3.js";
import { rawBalance$, solBalance$ } from "@stores/walletStore";
import { useObservableState } from "observable-hooks";
import styled from "styled-components";

const TokensPageContainer = styled.div`
  align-items: self-start;
  display: flex;
  font-size: 20px;
`;

export const TokensPage: FC = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const solBalance = useObservableState(solBalance$, "0");

  useEffect(() => {
    void connection
      .getBalance(publicKey as PublicKey)
      .then((balance) => {
        rawBalance$.next(balance);
      })
      .catch(console.error);
  }, []);

  return (
    <TokensPageContainer>
      <SolAmount amount={solBalance} />
    </TokensPageContainer>
  );
};

export default TokensPage;
