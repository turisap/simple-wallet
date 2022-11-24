import type { WalletAdapterProps } from "@solana/wallet-adapter-base";
import type { PublicKey } from "@solana/web3.js";
import type { Address } from "@typings/addresses";
import { ProgramVariant } from "@typings/addresses";
import type { AddressLayout } from "@utils/addressLayout";
import { action, makeObservable, observable, runInAction } from "mobx";
import { pick } from "ramda";
import { singleton } from "tsyringe";

import { AddressService } from "../api/addressService";
import type { BaseStore } from "./baseStore";
import { LifeCycle } from "./lifecycle";

@singleton()
export class AddressesStore extends LifeCycle implements BaseStore {
  public isLoading = true;
  public addressesList: Map<string, string> = new Map();

  constructor(private _addressService: AddressService) {
    super();

    makeObservable<AddressesStore, "getAddresses">(this, {
      isLoading: observable,
      addressesList: observable,
      getAddresses: action,
      setSearch: action,
    });
  }

  public async handleAddressSubmit(
    address: AddressLayout,
    publicKey: PublicKey,
    sendTransaction: WalletAdapterProps["sendTransaction"]
  ): Promise<void> {
    this.isLoading = true;

    const variant = Array.from(this.addressesList.keys()).find(
      (title) => title === address.title
    )
      ? ProgramVariant.Update
      : ProgramVariant.Create;

    const success = await this._addressService.submitAddress(
      address,
      publicKey,
      sendTransaction,
      variant
    );

    runInAction(() => {
      this.isLoading = false;
    });

    if (success) {
      const newUiAddress = pick<AddressLayout, "title" | "hex">(
        ["title", "hex"],
        address
      ) as Address;

      this.addressesList.set(newUiAddress.title, newUiAddress.hex);

      return;
    }
  }

  public load(): void {
    if (!this.addressesList.size) {
      void this.getAddresses();
    }
  }

  public async setSearch(search: string): Promise<void> {
    this.throttledLoading(true);

    const filteredAddresses = await this._addressService.getFilteredAddresses(
      search
    );

    runInAction(() => {
      for (const address of filteredAddresses) {
        this.addressesList.set(address.title, address.hex);
      }
    });

    this.throttledLoading(false);
  }

  private async getAddresses(): Promise<void> {
    const addresses = await this._addressService.getAddresses();

    runInAction(() => {
      for (const address of addresses) {
        this.addressesList.set(address.title, address.hex);
      }
    });

    this.throttledLoading(false);
  }
}
