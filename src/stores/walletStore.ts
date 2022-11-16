import {
  Token,
  TOKEN_PROGRAM_ID,
  TokenAccountLayout,
  TokenAmount,
} from "@saberhq/token-utils";
import { u64 } from "@solana/spl-token";
import type { TokenInfo, TokenListContainer } from "@solana/spl-token-registry";
import { TokenListProvider } from "@solana/spl-token-registry";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import type { TokenAccountLayoutDecoded } from "@typings/api";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { singleton } from "tsyringe";

import { Settings } from "../api/settings";
import { MAX_DECIMALS } from "../constants";

type PrivateObservables = "_solBalance" | "getSolBalance" | "getSplTokens";

@singleton()
export class WalletStore {
  private _solBalance = 0;
  private _tokenListContainer: TokenListContainer | null = null;

  public solLoading = true;
  public splLoading = true;
  public splTokens: Token[] = [];
  public amountMap: Map<string, TokenAmount> = new Map();

  constructor(private _settings: Settings) {
    makeObservable<WalletStore, PrivateObservables>(this, {
      _solBalance: observable,
      splTokens: observable,
      splLoading: observable,
      solLoading: observable,
      getSolBalance: action,
      getSplTokens: action,
      isLoading: computed,
    });
  }

  get sol() {
    return (this._solBalance / LAMPORTS_PER_SOL).toFixed(MAX_DECIMALS);
  }

  get isLoading() {
    return this.solLoading || this.splLoading;
  }

  public loadWallet(publicKey: PublicKey) {
    void this.getSplTokens(publicKey);
    void this.getSolBalance(publicKey);
  }

  private async getSolBalance(publicKey: PublicKey) {
    const balance = await this._settings.connection.getBalance(publicKey);

    runInAction(() => {
      this._solBalance = balance;
      this.solLoading = false;
    });
  }

  private async getSplTokens(publicKey: PublicKey) {
    const tokenAccounts =
      await this._settings.connection.getTokenAccountsByOwner(publicKey, {
        programId: TOKEN_PROGRAM_ID,
      });

    const walletAccounts: TokenAccountLayoutDecoded[] = tokenAccounts.value.map(
      (tokenAccount) => TokenAccountLayout.decode(tokenAccount.account.data)
    );

    const splTokenList = await this.getTokenList();
    const result: Token[] = [];

    for (const walletAccount of walletAccounts) {
      const token = splTokenList.find((splToken) => {
        return (
          splToken.address === new PublicKey(walletAccount.mint).toString()
        );
      });

      if (token) {
        const walletToken = new Token({ ...walletAccount, ...token });
        result.push(walletToken);

        this.amountMap.set(
          walletToken.symbol,
          new TokenAmount(walletToken, u64.fromBuffer(walletAccount.amount))
        );
      }
    }

    runInAction(() => {
      this.splTokens = result.sort();

      this.splLoading = false;
    });
  }

  private async getTokenList(): Promise<TokenInfo[]> {
    if (!this._tokenListContainer) {
      this._tokenListContainer = await new TokenListProvider().resolve();
    }

    return this._tokenListContainer.getList();
  }
}
