import type { PublicKey } from "@solana/web3.js";
import { action, makeObservable, observable, runInAction } from "mobx";
import { singleton } from "tsyringe";

import { NftService } from "../api/nftServie";

@singleton()
export class NftStore {
  public isLoading = true;
  public nftList: unknown[] = [];

  constructor(private _nftService: NftService) {
    makeObservable(this, {
      isLoading: observable,
      nftList: observable,
      getNfts: action,
    });
  }

  public async getNfts(publicKey: PublicKey): Promise<void> {
    const nfts = await this._nftService.getUserNfts(publicKey);

    runInAction(() => {
      this.nftList = nfts;
    });
  }
}
