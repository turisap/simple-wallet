import type { FC } from "react";
import React, { useEffect } from "react";

import { useWallet } from "@solana/wallet-adapter-react";
import { NftStore } from "@stores/nftStore";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { container } from "tsyringe";

const NftsPageContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  justify-items: center;
`;

export const NFTs: FC = observer(() => {
  const { publicKey } = useWallet();
  const store = container.resolve<NftStore>(NftStore);

  useEffect(() => {
    if (publicKey) {
      void store.getNfts(publicKey);
    }
  }, []);

  // console.log(toJS(store.nftList));

  return <NftsPageContainer>NFTs</NftsPageContainer>;
});

export default NFTs;
