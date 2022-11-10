import type { PublicKey } from "@solana/web3.js";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { action, makeObservable, observable, runInAction } from "mobx";

import { MAX_DECIMALS } from "../constants";

class WalletStore {
  private connection: Connection;
  private solBalance = 0;

  constructor() {
    this.connection = new Connection(process.env.RPC_NODE);

    makeObservable<WalletStore, "solBalance">(this, {
      solBalance: observable,
      getSolBalance: action,
    });
  }

  get sol() {
    return (this.solBalance / LAMPORTS_PER_SOL).toFixed(MAX_DECIMALS);
  }

  public async getSolBalance(publicKey: PublicKey) {
    const balance = await this.connection.getBalance(publicKey);

    runInAction(() => {
      this.solBalance = balance;
    });
  }
}

export default new WalletStore();
