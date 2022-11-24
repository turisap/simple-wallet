import type { WalletAdapterProps } from "@solana/wallet-adapter-base";
import type { PublicKey } from "@solana/web3.js";
import type { AddressLayout } from "@utils/addressLayout";
import { logger } from "@utils/logger";
import { action, makeObservable, observable, runInAction } from "mobx";
import { singleton } from "tsyringe";

import { AddressService } from "../api/addressService";

type Address = {
  title: string;
  hex: string;
};

@singleton()
export class AddressesStore {
  public isLoading = true;
  public addressesList: Address[] = [];

  constructor(private _addressService: AddressService) {
    makeObservable<AddressesStore, "getAddresses">(this, {
      isLoading: observable,
      getAddresses: action,
      addressesList: observable,
    });
  }

  public async handleAddressSubmit(
    address: AddressLayout,
    publicKey: PublicKey,
    sendTransaction: WalletAdapterProps["sendTransaction"]
  ): Promise<boolean> {
    this.isLoading = true;

    const resp = await this._addressService.submitAddress(
      address,
      publicKey,
      sendTransaction
    );

    runInAction(() => {
      this.isLoading = false;
    });

    return resp;
  }

  public loadAddresses(publicKey: PublicKey): void {
    if (!this.addressesList.length) {
      void this.getAddresses(publicKey);
    }
  }

  private getAddresses(publicKey: PublicKey): void {
    // @TODO to implement
    logger.info(publicKey);
  }
}
