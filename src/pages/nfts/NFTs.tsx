import type { FC } from "react";
import React, { useEffect } from "react";

import noImage from "@assets/no-img.png";
import Loader from "@components/Loader";
import { useWallet } from "@solana/wallet-adapter-react";
import { NftStore } from "@stores/nftStore";
import { NftName, NftPlate, NftPreview, NftsPageContainer } from "@styled/nfts";
import type { NftInfo } from "@typings/nft";
import type { Metadata } from "@utils/nfts";
import { observer } from "mobx-react-lite";
import { container } from "tsyringe";

export const NFTs: FC = observer(() => {
  const { publicKey } = useWallet();
  const store = container.resolve<NftStore>(NftStore);

  useEffect(() => {
    if (publicKey) {
      void store.loadNfts(publicKey);
    }
  }, []);

  return (
    <NftsPageContainer isLoading={store.isLoading}>
      {store.isLoading && <Loader />}
      {[...store.nftList.entries()].map(
        ([nft, info]: [Metadata, NftInfo | null]) => (
          <NftPlate key={nft.mint}>
            <NftPreview src={info?.image || noImage} />
            <NftName>{nft.data.name}</NftName>
          </NftPlate>
        )
      )}
    </NftsPageContainer>
  );
});

export default NFTs;
