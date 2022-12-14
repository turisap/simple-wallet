import type { PublicKey } from "@solana/web3.js";
import type { NftInfoMap } from "@typings/nft";
import { action, makeObservable, observable, runInAction } from "mobx";
import { singleton } from "tsyringe";

import { NftService } from "../api/nftServie";

@singleton()
export class NftStore {
  public isLoading = true;
  public nftList: NftInfoMap = new Map();

  constructor(private _nftService: NftService) {
    makeObservable<NftStore, "getNfts">(this, {
      isLoading: observable,
      nftList: observable,
      getNfts: action,
    });
  }

  private async getNfts(publicKey: PublicKey): Promise<void> {
    const nfts = await this._nftService.getUserNfts(publicKey);

    runInAction(() => {
      this.nftList = nfts;
      this.isLoading = false;
    });
  }

  public loadNfts(publicKey: PublicKey): void {
    if (!this.nftList.size) {
      void this.getNfts(publicKey);
    }
  }
}
