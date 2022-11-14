import { TOKEN_PROGRAM_ID } from "@saberhq/token-utils";
import { PublicKey } from "@solana/web3.js";
import { singleton } from "tsyringe";

import { Settings } from "./settings";

@singleton()
export class NftService {
  constructor(private _settings: Settings) {}

  public async getUserNfts(publicKey: PublicKey): Promise<unknown[]> {
    const { value: splAccounts } =
      await this._settings.connection.getParsedTokenAccountsByOwner(publicKey, {
        programId: TOKEN_PROGRAM_ID,
      });

    const nftAccounts = splAccounts
      .filter((t) => {
        const amount = t.account?.data?.parsed?.info?.tokenAmount?.uiAmount;
        const decimals = t.account?.data?.parsed?.info?.tokenAmount?.decimals;

        return decimals === 0 && amount >= 1;
      })
      .map((t) => {
        const address = t.account?.data?.parsed?.info?.mint;

        return new PublicKey(address);
      });

    return nftAccounts;
  }
}
