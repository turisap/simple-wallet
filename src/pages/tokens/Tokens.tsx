import type { FC } from "react";
import React, { useEffect } from "react";

import Loader from "@components/Loader";
import NumberSplTokens from "@components/NumberSplTokens";
import SolAmount from "@components/SolAmount";
import TokenRow from "@components/TokenRow";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletStore } from "@stores/walletStore";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { container } from "tsyringe";

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
  align-self: stretch;
  display: grid;
  grid-column: 1 / -1;
  grid-gap: 8px;
  grid-template-rows: repeat(auto-fill, 82px);
  justify-content: stretch;
  justify-items: ${(props) => (props.isLoading ? "center" : "stretch")};
  overflow: scroll;
`;

export const TokensPage: FC = observer(() => {
  const { publicKey } = useWallet();
  const walletStore = container.resolve(WalletStore);

  useEffect(() => {
    if (publicKey) {
      walletStore.loadWallet(publicKey);
    }
  }, []);

  return (
    <TokensPageContainer>
      <SolAmount amount={walletStore.sol} store={walletStore} />
      <NumberSplTokens
        number={walletStore.splTokens.length}
        store={walletStore}
      />
      <Content isLoading={walletStore.isLoading}>
        {walletStore.isLoading && <Loader />}
        {walletStore.splTokens.map((token) => {
          const tokenAmount = walletStore.amountMap.get(token.symbol);
          const amountUsd = WalletStore.getUsdAmount(
            walletStore.rates.get(token.symbol),
            tokenAmount
          );

          return (
            <TokenRow
              token={token}
              key={token.symbol}
              amount={tokenAmount}
              amountUsd={amountUsd}
            />
          );
        })}
      </Content>
    </TokensPageContainer>
  );
});

export default TokensPage;
