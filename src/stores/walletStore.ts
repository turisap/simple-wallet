import {
  Token,
  TOKEN_PROGRAM_ID,
  TokenAccountLayout,
  TokenAmount,
} from "@saberhq/token-utils";
import { u64 } from "@solana/spl-token";
import type { TokenInfo, TokenListContainer } from "@solana/spl-token-registry";
import { TokenListProvider } from "@solana/spl-token-registry";
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import type { TokenAccountLayoutDecoded } from "@typings/api";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

import { MAX_DECIMALS } from "../constants";

type PrivateObservables = "solBalance";

export class WalletStore {
  private connection: Connection;
  private solBalance = 0;
  private tokenListContainer: TokenListContainer | null = null;

  public solLoading = true;
  public splLoading = true;
  public splTokens: Token[] = [];
  public amountMap: Map<string, TokenAmount> = new Map();

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
    return this.solLoading || this.splLoading;
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

        // @TODO take a look https://github.com/saber-hq/saber-common/blob/master/packages/token-utils/src/layout.ts#L85
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
    if (!this.tokenListContainer) {
      this.tokenListContainer = await new TokenListProvider().resolve();
    }

    return this.tokenListContainer.getList();
  }
}

export default new WalletStore();
