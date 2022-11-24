import type { PublicKey } from "@solana/web3.js";

//@TODO add to all stores
export abstract class BaseStore {
  public abstract isLoading: boolean;

  public abstract load(pubKey: PublicKey): void;
}
