import { TOKEN_PROGRAM_ID } from "@saberhq/token-utils";
import type { AccountInfo } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";
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

  public async getUserNfts(publicKey: PublicKey): Promise<Metadata[]> {
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

    const metadataAcountsAddressPromises = await Promise.allSettled(
      nftAccounts.map(this.getSolanaMetadataAddress)
    );

    const metadataAccounts = metadataAcountsAddressPromises
      .filter(filterFulfilled)
      .map((p) => (p as PromiseFulfilledResult<PublicKey>).value);

    const metadataData: (AccountInfo<Buffer> | null)[] =
      await this._settings.connection.getMultipleAccountsInfo(metadataAccounts);

    if (!metadataAccounts?.length) {
      return [];
    }

    return metadataData
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
  }
}
