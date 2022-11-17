import type { TokenList } from "@saberhq/token-utils";
import {
  Token,
  TOKEN_PROGRAM_ID,
  TokenAccountLayout,
  TokenAmount,
} from "@saberhq/token-utils";
import { u64 } from "@solana/spl-token";
import type { TokenInfo } from "@solana/spl-token-registry";
import { PublicKey } from "@solana/web3.js";
import type { TokenAccountLayoutDecoded } from "@typings/api";
import type { CoinGeckoRate } from "@typings/wallet";
import { singleton } from "tsyringe";

import { RemoteConfigService } from "./remoteConfigService";
import { Settings } from "./settings";

type AmountMap = Map<string, TokenAmount>;

@singleton()
export class WalletService {
  private _tokenListContainer: TokenList | null = null;
  public rates: Map<string, CoinGeckoRate> = new Map();

  constructor(
    private _remoteConfig: RemoteConfigService,
    private _settings: Settings
  ) {}

  public async getSplTokens(
    publicKey: PublicKey
  ): Promise<[AmountMap, Token[]]> {
    const connection = await this._settings.getConnection();
    const tokenAccounts = await connection.getTokenAccountsByOwner(publicKey, {
      programId: TOKEN_PROGRAM_ID,
    });

    const walletAccounts: TokenAccountLayoutDecoded[] = tokenAccounts.value.map(
      (tokenAccount) => TokenAccountLayout.decode(tokenAccount.account.data)
    );

    const splTokenList = await this.getTokenList();
    const tokens: Token[] = [];
    const amountMap: Map<string, TokenAmount> = new Map();

    for (const walletAccount of walletAccounts) {
      const token = splTokenList.find((splToken) => {
        return (
          splToken.address === new PublicKey(walletAccount.mint).toString()
        );
      });

      if (token) {
        const walletToken = new Token({
          ...walletAccount,
          ...token,
        });
        tokens.push(walletToken);

        amountMap.set(
          walletToken.symbol,
          new TokenAmount(walletToken, u64.fromBuffer(walletAccount.amount))
        );
      } else {
        // @TODO find out how to deal with tokens which are not in the token list
      }
    }

    await this.getRates(tokens);

    return [amountMap, tokens];
  }

  private async getTokenList(): Promise<TokenInfo[]> {
    if (!this._tokenListContainer) {
      const listEndpointValue = await this._remoteConfig.getKey(
        "TOKEN_LIST_ENDPOINT"
      );
      const resp = await fetch(listEndpointValue.asString());
      this._tokenListContainer = (await resp.json()) as TokenList;
    }

    return this._tokenListContainer.tokens;
  }

  private async getRates(tokens: Token[]): Promise<Map<string, CoinGeckoRate>> {
    if (this.rates.size) {
      return this.rates;
    }

    const ratesEndpointValue = await this._remoteConfig.getKey(
      "RATES_ENDPOINT"
    );
    const url = new URL(ratesEndpointValue.asString());
    const searchParams = new URLSearchParams();
    const symbols = tokens.reduce(
      (acc, curr) => `${acc},${curr.info.extensions?.coingeckoId}`,
      ""
    );

    searchParams.set("vs_currency", "USD");
    searchParams.set("ids", symbols);

    url.search = searchParams.toString();

    const coinGeckoResp = await fetch(url);

    const res = (await coinGeckoResp.json()) as CoinGeckoRate[];

    for (const tokenInfo of res) {
      this.rates.set(tokenInfo.symbol.toUpperCase(), tokenInfo);
    }

    return this.rates;
  }
}
