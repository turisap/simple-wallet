import type { FC } from "react";
import React, { useEffect } from "react";

import { useWallet } from "@solana/wallet-adapter-react";
import { NftStore } from "@stores/nftStore";
import styled from "styled-components";
import { container } from "tsyringe";

const NftsPageContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  justify-items: center;
`;

export const NFTs: FC = () => {
  const { publicKey } = useWallet();

  useEffect(() => {
    const store = container.resolve<NftStore>(NftStore);

    if (publicKey) {
      void store.getNfts(publicKey);
    }
  });

  return <NftsPageContainer>NFTs</NftsPageContainer>;
};

export default NFTs;
