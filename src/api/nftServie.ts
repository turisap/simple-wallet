import { TOKEN_PROGRAM_ID } from "@saberhq/token-utils";
import type { AccountInfo } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";
import type { NftInfo, NftInfoMap } from "@typings/nft";
import { filterFulfilled } from "@utils/general";
import { Metadata, METADATA_SCHEMA } from "@utils/nfts";
import { deserializeUnchecked } from "borsh";
import type { Buffer } from "buffer";
import { singleton } from "tsyringe";

import { METADATA_PREFIX, METADATA_PROGRAM } from "../constants";
import { Settings } from "./settings";

@singleton()
export class NftService {
  constructor(private _settings: Settings) {}

  private getSolanaMetadataAddress = async (tokenMint: PublicKey) => {
    const metaProgamPublicKey = new PublicKey(METADATA_PROGRAM);
    const metaProgamPrefixBuffer = new TextEncoder().encode(METADATA_PREFIX);
    const metaProgamPublicKeyBuffer = metaProgamPublicKey.toBuffer();

    return (
      await PublicKey.findProgramAddress(
        [
          metaProgamPrefixBuffer,
          metaProgamPublicKeyBuffer,
          tokenMint.toBuffer(),
        ],
        metaProgamPublicKey
      )
    )[0];
  };

  public async getUserNfts(publicKey: PublicKey): Promise<NftInfoMap> {
    const { value: splAccounts } =
      await this._settings.connection.getParsedTokenAccountsByOwner(publicKey, {
        programId: TOKEN_PROGRAM_ID,
      });

    const nftAccounts = splAccounts
      .filter((t) => {
        const amount = t.account?.data?.parsed?.info?.tokenAmount
          ?.uiAmount as number;
        const decimals = t.account?.data?.parsed?.info?.tokenAmount
          ?.decimals as number;

        return decimals === 0 && amount >= 1;
      })
      .map((t) => {
        const address = t.account?.data?.parsed?.info?.mint as string;

        return new PublicKey(address);
      });

    const metadataAccountsAddressPromises = await Promise.allSettled(
      nftAccounts.map(this.getSolanaMetadataAddress)
    );

    const metadataPDAaccounts = metadataAccountsAddressPromises
      .filter(filterFulfilled)
      .map((p) => (p as PromiseFulfilledResult<PublicKey>).value);

    if (!metadataPDAaccounts?.length) {
      return new Map();
    }

    const metadataData: (AccountInfo<Buffer> | null)[] =
      await this._settings.connection.getMultipleAccountsInfo(
        metadataPDAaccounts
      );

    const nftsData = metadataData
      .map((accountInfo) => {
        if (accountInfo?.data) {
          return deserializeUnchecked(
            METADATA_SCHEMA,
            Metadata,
            accountInfo.data
          );
        }
      })
      .filter(function isMeta(meta): meta is Metadata {
        return Boolean(meta);
      });

    const nftsInfoResp = await Promise.allSettled(
      nftsData.map((nft) => fetch(nft.data.uri))
    );

    const nftInfo: PromiseSettledResult<NftInfo | null>[] =
      await Promise.allSettled(
        nftsInfoResp.map((infoResp) => {
          if (infoResp.status === "rejected") {
            return null;
          }

          return infoResp.value.json() as NftInfo;
        })
      );

    const nftInfoMap: NftInfoMap = new Map();

    nftsData.forEach((nft, idx) => {
      const info =
        nftInfo[idx].status === "fulfilled"
          ? (nftInfo[idx] as PromiseFulfilledResult<NftInfo>).value
          : null;

      nftInfoMap.set(nft, info);
    });

    return nftInfoMap;
  }
}
