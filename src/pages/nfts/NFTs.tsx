import type { FC } from "react";
import React, { useEffect } from "react";

import { useWallet } from "@solana/wallet-adapter-react";
import { NftStore } from "@stores/nftStore";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { container } from "tsyringe";

const NftsPageContainer = styled.div`
  align-items: center;
  display: grid;
  font-size: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
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

  return (
    <NftsPageContainer>
      {store.nftList.map((nft) => (
        <div key={nft.mint}>
          <img src={nft.data.uri} />
        </div>
      ))}
    </NftsPageContainer>
  );
});

export default NFTs;
