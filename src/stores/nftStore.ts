import type { PublicKey } from "@solana/web3.js";
import { makeObservable, observable } from "mobx";
import { singleton } from "tsyringe";

import { NftService } from "../api/nftServie";

@singleton()
export class NftStore {
  public isLoading = true;

  constructor(private _nftService: NftService) {
    makeObservable(this, {
      isLoading: observable,
    });
  }

  public getNfts(publicKey: PublicKey): Promise<unknown[]> {
    return this._nftService.getUserNfts(publicKey);
  }
}
