import type { FC } from "react";
import React, { useEffect } from "react";

import Loader from "@components/Loader";
import NumberSplTokens from "@components/NumberSplTokens";
import SolAmount from "@components/SolAmount";
import TokenRow from "@components/TokenRow";
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

const Content = styled.div<{ isLoading: boolean }>`
  align-items: ${(props) => (props.isLoading ? "center" : "stretch")};
  align-self: stretch;
  display: grid;
  grid-column: 1 / -1;
  grid-gap: 8px;
  justify-content: center;
  overflow: scroll;
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
      <Content isLoading={walletStore.isLoading}>
        {walletStore.isLoading && <Loader />}
        {walletStore.splTokens.map((token) => (
          <TokenRow token={token} key={token.symbol} />
        ))}
      </Content>
    </TokensPageContainer>
  );
});

export default TokensPage;
