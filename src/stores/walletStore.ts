import type { Token, TokenAmount } from "@saberhq/token-utils";
import type { PublicKey } from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import type { RateMap } from "@typings/general";
import type { CoinGeckoRate } from "@typings/wallet";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { singleton } from "tsyringe";

import { Settings } from "../api/settings";
import { WalletService } from "../api/walletService";
import { MAX_DECIMALS } from "../constants";

type PrivateObservables = "_solBalance" | "getSolBalance" | "getSplTokens";

@singleton()
export class WalletStore {
  private _solBalance = 0;

  public solLoading = true;
  public splLoading = true;
  public amountMap: Map<string, TokenAmount> = new Map();
  public splTokens: Token[] = [];

  constructor(
    private _settings: Settings,
    private _walletService: WalletService
  ) {
    makeObservable<WalletStore, PrivateObservables>(this, {
      _solBalance: observable,
      amountMap: observable,
      splLoading: observable,
      solLoading: observable,
      getSolBalance: action,
      getSplTokens: action,
      isLoading: computed,
      rates: computed,
    });
  }

  get sol(): string {
    return (this._solBalance / LAMPORTS_PER_SOL).toFixed(MAX_DECIMALS);
  }

  get isLoading(): boolean {
    return this.solLoading || this.splLoading;
  }

  get rates(): RateMap {
    return this._walletService.rates;
  }

  public loadWallet(publicKey: PublicKey): void {
    if (!this._solBalance) {
      void this.getSolBalance(publicKey);
    }

    if (!this.splTokens.length) {
      void this.getSplTokens(publicKey);
    }
  }

  private async getSolBalance(publicKey: PublicKey): Promise<void> {
    const connection = await this._settings.getConnection();
    const balance = await connection.getBalance(publicKey);

    runInAction(() => {
      this._solBalance = balance;
      this.solLoading = false;
    });
  }

  private async getSplTokens(publicKey: PublicKey): Promise<void> {
    const result = await this._walletService.getSplTokens(publicKey);
    const [amountMap, tokens] = result;

    runInAction(() => {
      this.amountMap = amountMap;
      this.splTokens = tokens;
      this.splLoading = false;
    });
  }

  public static getUsdAmount(
    rate?: CoinGeckoRate,
    amount?: TokenAmount
  ): string | undefined {
    const amountUsdFull =
      rate?.current_price &&
      Number(amount?.toFixed(MAX_DECIMALS)) * rate?.current_price;

    return amountUsdFull?.toFixed(2);
  }
}
