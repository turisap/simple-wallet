import type { FC } from "react";
import React, { useEffect } from "react";

import NumberSplTokens from "@components/NumberSplTokens";
import SolAmount from "@components/SolAmount";
import { TOKEN_PROGRAM_ID } from "@saberhq/token-utils";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import type { PublicKey } from "@solana/web3.js";
import {
  rawBalance$,
  rawTokens$,
  solBalance$,
  tokensInfo$,
  tokensNumber$,
} from "@stores/walletStore";
import { useObservableState } from "observable-hooks";
import styled from "styled-components";

const TokensPageContainer = styled.div`
  align-items: self-start;
  display: grid;
  font-size: 20px;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 160px 1fr;
`;

export const TokensPage: FC = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const solBalance = useObservableState(solBalance$, "0");
  const splTokens = useObservableState(tokensNumber$, 0);
  const tokensInfo = useObservableState(tokensInfo$, []);

  useEffect(() => {
    void connection
      .getBalance(publicKey as PublicKey)
      .then((balance) => rawBalance$.next(balance))
      .catch(console.error);

    void connection
      .getTokenAccountsByOwner(publicKey as PublicKey, {
        programId: TOKEN_PROGRAM_ID,
      })
      .then((info) => rawTokens$.next(info.value))
      .catch(console.error);
  }, []);

  console.log(tokensInfo);

  return (
    <TokensPageContainer>
      <SolAmount amount={solBalance} />
      <NumberSplTokens number={splTokens} />
    </TokensPageContainer>
  );
};

export default TokensPage;
