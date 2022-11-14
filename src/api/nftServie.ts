import { TOKEN_PROGRAM_ID } from "@saberhq/token-utils";
import type { PublicKey } from "@solana/web3.js";
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

    return splAccounts;
  }
}
