import type { FC } from "react";
import React, { useEffect } from "react";

import noImage from "@assets/no-img.png";
import Loader from "@components/Loader";
import { useWallet } from "@solana/wallet-adapter-react";
import { NftStore } from "@stores/nftStore";
import type { NftInfo } from "@typings/nft";
import type { Metadata } from "@utils/nfts";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { container } from "tsyringe";

const NftsPageContainer = styled.div<{ isLoading: boolean }>`
  align-items: center;
  display: ${(props) => (props.isLoading ? "flex" : "grid")};
  font-size: 20px;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 170px));
  grid-template-rows: 1fr;
  height: ${(props) => (props.isLoading ? "100%" : "unset")};
  justify-content: ${(props) => (props.isLoading ? "center" : "unset")};
  justify-items: stretch;
`;

const NftPlate = styled.div`
  align-self: stretch;
  border: 1px solid ${(props) => props.theme.borders.plate};
  border-radius: ${(props) => props.theme.radius.plate};
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const NftPreview = styled.img`
  max-width: 100%;
`;

const NftName = styled.div`
  color: ${(props) => props.theme.text.plate};
  overflow: hidden;
  padding: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

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
