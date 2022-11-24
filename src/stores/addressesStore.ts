import type { WalletAdapterProps } from "@solana/wallet-adapter-base";
import type { PublicKey } from "@solana/web3.js";
import type { Address } from "@typings/addresses";
import type { AddressLayout } from "@utils/addressLayout";
import { action, makeObservable, observable, runInAction } from "mobx";
import { pick } from "ramda";
import { singleton } from "tsyringe";

import { AddressService } from "../api/addressService";
import type { BaseStore } from "./baseStore";

@singleton()
export class AddressesStore implements BaseStore {
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
  ): Promise<void> {
    this.isLoading = true;

    const success = await this._addressService.submitAddress(
      address,
      publicKey,
      sendTransaction
    );

    runInAction(() => {
      this.isLoading = false;
    });

    if (success) {
      const newUiAddress = pick<AddressLayout, "title" | "hex">(
        ["title", "hex"],
        address
      ) as Address;
      this.addressesList.push(newUiAddress);
    }
  }

  public load(): void {
    if (!this.addressesList.length) {
      void this.getAddresses();
    }
  }

  private async getAddresses(): Promise<void> {
    const addresses = await this._addressService.getAddresses();

    runInAction(() => {
      this.addressesList = addresses;
      this.isLoading = false;
    });
  }
}
