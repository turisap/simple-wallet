import type { Token, TokenAmount } from "@saberhq/token-utils";
import type { WalletAdapter } from "@solana/wallet-adapter-base";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import type { RateMap } from "@typings/general";
import type { CoinGeckoRate, TokenOption } from "@typings/wallet";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { singleton } from "tsyringe";

import { RemoteConfigService } from "../api/remoteConfigService";
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
    private _walletService: WalletService,
    private _remoteConfig: RemoteConfigService
  ) {
    makeObservable<WalletStore, PrivateObservables>(this, {
      _solBalance: observable,
      amountMap: observable,
      splTokens: observable,
      splLoading: observable,
      solLoading: observable,
      getSolBalance: action,
      getSplTokens: action,
      isLoading: computed,
      rates: computed,
      tokenOptions: computed,
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

  get tokenOptions(): TokenOption[] {
    if (this.splTokens.length) {
      return this.splTokens.map((token) => ({
        label: token.name,
        value: token.mintAccount.toString(),
        logo: token.info.logoURI,
        amount: this.amountMap.get(token.symbol)?.toFixed(MAX_DECIMALS),
      }));
    }

    return [];
  }

  public async getCluster(): Promise<string> {
    const cluster = await this._remoteConfig.getKey("CLUSTER");

    return cluster.asString();
  }

  public loadWallet(publicKey: PublicKey): void {
    if (!this._solBalance) {
      void this.getSolBalance(publicKey);
    }

    if (!this.splTokens.length) {
      void this.getSplTokens(publicKey);
    }
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

  public async sendSpl(
    address: string,
    sender: PublicKey,
    sendTransaction: WalletAdapter["sendTransaction"]
  ): Promise<void> {
    const connection = await this._settings.getConnection();

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: sender,
        toPubkey: new PublicKey(address),
        lamports: 1234,
      })
    );

    const {
      context: { slot: minContextSlot },
      value: { blockhash, lastValidBlockHeight },
    } = await connection.getLatestBlockhashAndContext();

    const signature = await sendTransaction(transaction, connection, {
      minContextSlot,
    });

    await connection.confirmTransaction({
      blockhash,
      lastValidBlockHeight,
      signature,
    });
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
}
