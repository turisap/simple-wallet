import { TOKEN_PROGRAM_ID, u64 } from "@saberhq/token-utils";
import { AccountLayout } from "@solana/spl-token";
import type { TokenInfo, TokenListContainer } from "@solana/spl-token-registry";
import { TokenListProvider } from "@solana/spl-token-registry";
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import type {
  TokenAccountLayoutDecoded,
  TokenAccountLayoutParsed,
} from "@typings/api";
import type { WalletSPLToken } from "@typings/typings";
import BN from "bn.js";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

import { MAX_DECIMALS } from "../constants";

type PrivateObservables = "solBalance";

class WalletStore {
  private connection: Connection;
  private solBalance = 0;
  private tokenListContainer: TokenListContainer | null = null;

  public solLoading = true;
  public splLoading = true;
  public splTokens: WalletSPLToken[] = [];

  constructor() {
    this.connection = new Connection(process.env.RPC_NODE);

    makeObservable<WalletStore, PrivateObservables>(this, {
      solBalance: observable,
      splTokens: observable,
      splLoading: observable,
      solLoading: observable,
      getSolBalance: action,
      getSplTokens: action,
      isLoading: computed,
    });
  }

  get sol() {
    return (this.solBalance / LAMPORTS_PER_SOL).toFixed(MAX_DECIMALS);
  }

  get isLoading() {
    return this.solLoading && this.splLoading;
  }

  public async getSolBalance(publicKey: PublicKey) {
    const balance = await this.connection.getBalance(publicKey);

    runInAction(() => {
      this.solBalance = balance;
      this.solLoading = false;
    });
  }

  public async getSplTokens(publicKey: PublicKey) {
    const tokenAccounts = await this.connection.getTokenAccountsByOwner(
      publicKey,
      {
        programId: TOKEN_PROGRAM_ID,
      }
    );

    const accountInfos: TokenAccountLayoutDecoded[] = tokenAccounts.value.map(
      (tokenAccount) => AccountLayout.decode(tokenAccount.account.data)
    );

    const accountData: TokenAccountLayoutParsed[] = accountInfos.map(
      (account) => ({
        mint: new PublicKey(account.mint),
        amount: u64.fromBuffer(account.amount),
      })
    );

    const splTokens = await this.getTokenList();
    const result: WalletSPLToken[] = [];

    for (const tokenAccount of accountData) {
      const token = splTokens.find(
        (splToken) => splToken.address === tokenAccount.mint.toString()
      );

      if (token) {
        result.push({
          ...token,
          mint: tokenAccount.mint,
          amount: new u64(
            WalletStore.lamportsToBalance(tokenAccount.amount, token.decimals)
          ),
        });
      }
    }

    runInAction(() => {
      this.splTokens = result;
      this.splLoading = false;
    });
  }

  private async getTokenList(): Promise<TokenInfo[]> {
    if (!this.tokenListContainer) {
      this.tokenListContainer = await new TokenListProvider().resolve();
    }

    return this.tokenListContainer.getList();
  }

  private static lamportsToBalance(value: BN, decimals?: number): number {
    if (!decimals) {
      return 0;
    }

    const divisor = new BN(10).pow(new BN(decimals));
    const quotient = value.div(divisor);
    const remainder = value.mod(divisor);

    return quotient.toNumber() + remainder.toNumber() / divisor.toNumber();
  }
}

export default new WalletStore();
