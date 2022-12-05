import type { FC } from "react";
import React, { useEffect } from "react";

import Loader from "@components/Loader";
import NumberSplTokens from "@components/NumberSplTokens";
import SolAmount from "@components/SolAmount";
import TokenRow from "@components/TokenRow";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletStore } from "@stores/walletStore";
import { Content, TokensPageContainer } from "@styled/tokens";
import { observer } from "mobx-react-lite";
import { container } from "tsyringe";

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
