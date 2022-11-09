import type { FC } from "react";
import React, { useEffect } from "react";

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
`;

export const TokensPage: FC = observer(() => {
  const { publicKey } = useWallet();

  useEffect(() => {
    // void connection
    //   .getTokenAccountsByOwner(publicKey as PublicKey, {
    //     programId: TOKEN_PROGRAM_ID,
    //   })
    //   .then((info) => rawTokens$.next(info.value))
    //   .catch(console.error);
    if (publicKey) {
      void walletStore.getSolBalance(publicKey);
    }
  }, []);

  return (
    <TokensPageContainer>
      <SolAmount amount={walletStore.sol} />
      <NumberSplTokens number={0} />
    </TokensPageContainer>
  );
});

export default TokensPage;
