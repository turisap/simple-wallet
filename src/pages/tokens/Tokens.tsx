import type { FC } from "react";
import React, { useEffect } from "react";

import Loader from "@components/Loader";
import NumberSplTokens from "@components/NumberSplTokens";
import SolAmount from "@components/SolAmount";
import { useWallet } from "@solana/wallet-adapter-react";
import walletStore from "@stores/walletStore";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const TokensPageContainer = styled.div`
  align-items: self-start;
  display: grid;
  font-size: 20px;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 160px 1fr;
  height: 100%;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
`;

export const TokensPage: FC = observer(() => {
  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey) {
      void walletStore.getSolBalance(publicKey);
      void walletStore.getSplTokens(publicKey);
    }
  }, []);

  return (
    <TokensPageContainer>
      <SolAmount amount={walletStore.sol} />
      <NumberSplTokens number={walletStore.splTokens.length} />
      <Content>{true && <Loader />}</Content>
    </TokensPageContainer>
  );
});

export default TokensPage;
