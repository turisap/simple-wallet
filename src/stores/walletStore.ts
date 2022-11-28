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
    return [
      {
        label: "Synthetify",
        value: "4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y",
        logo: "https://assets.coingecko.com/coins/images/14835/large/synthetify_token.png?1618611507",
        amount: "0.0000",
      },
      {
        label: "Oxygen",
        value: "z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M",
        logo: "https://assets.coingecko.com/coins/images/13509/large/8DjBZ79V_400x400.jpg?1609236331",
        amount: "0.0488",
      },
      {
        label: "Mercurial",
        value: "MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K",
        logo: "https://assets.coingecko.com/coins/images/15527/large/mer_logo.png?1621128922",
        amount: "0.1285",
      },
      {
        label: "Star Atlas DAO",
        value: "poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk",
        logo: "https://assets.coingecko.com/coins/images/17789/large/POLIS.jpg?1629256006",
        amount: "0.0000",
      },
      {
        label: "Kin",
        value: "kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6",
        logo: "https://assets.coingecko.com/coins/images/959/large/kin-logo-social.png?1665793119",
        amount: "0.0000",
      },
      {
        label: "Lido Staked SOL",
        value: "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj",
        logo: "https://assets.coingecko.com/coins/images/18369/large/logo_-_2021-09-15T100934.765.png?1631671781",
        amount: "0.0002",
      },
      {
        label: "Apricot",
        value: "APTtJyaRX5yGTsJU522N4VYWg3vCvSb65eam5GrPT5Rt",
        logo: "https://assets.coingecko.com/coins/images/20636/large/hF_3FMuH_400x400.jpg?1637399870",
        amount: "0.0668",
      },
      {
        label: "1sol.io (Wormhole)",
        value: "4ThReWAbAVZjNVgs5Ui9Pk3cZ5TYaD9u6Y89fp6EFzoF",
        logo: "https://assets.coingecko.com/coins/images/22923/large/1SOL_wh_small.png?1644222565",
        amount: "0.0001",
      },
      {
        label: "USD Coin",
        value: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        logo: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
        amount: "0.0118",
      },
      {
        label: "Allbridge",
        value: "a11bdAAuV8iB2fu7X6AxAvDTo1QZ8FXB3kk5eecdasp",
        logo: "https://assets.coingecko.com/coins/images/18690/large/abr.png?1640742053",
        amount: "0.0003",
      },
      {
        label: "Solanium",
        value: "xxxxa1sKNGwFtw2kFn8XauW9xq8hBZ5kVtcSesTT9fW",
        logo: "https://assets.coingecko.com/coins/images/15816/large/logo_cg.png?1659000206",
        amount: "0.0190",
      },
      {
        label: "renBTC",
        value: "CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5",
        logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5/logo.png",
        amount: "0.0000",
      },
      {
        label: "Orca",
        value: "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE",
        logo: "https://assets.coingecko.com/coins/images/17547/large/Orca_Logo.png?1628781615",
        amount: "0.0115",
      },
      {
        label: "Tether",
        value: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        logo: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
        amount: "0.0054",
      },
      {
        label: "Wrapped Ethereum (Sollet)",
        value: "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk",
        logo: "https://assets.coingecko.com/coins/images/24918/large/6250754.png?1649344492",
        amount: "0.0000",
      },
      {
        label: "Star Atlas",
        value: "ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx",
        logo: "https://assets.coingecko.com/coins/images/17659/large/Icon_Reverse.png?1628759092",
        amount: "1.0893",
      },
      {
        label: "Serum",
        value: "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt",
        logo: "https://assets.coingecko.com/coins/images/11970/large/serum-logo.png?1597121577",
        amount: "0.0043",
      },
      {
        label: "Marinade staked SOL",
        value: "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
        logo: "https://assets.coingecko.com/coins/images/17752/large/mSOL.png?1644541955",
        amount: "0.0000",
      },
      {
        label: "Boring Protocol",
        value: "BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3",
        logo: "https://assets.coingecko.com/coins/images/16828/large/imgonline-com-ua-resize-VT59gqn-Bya-WGG.jpg?1625210880",
        amount: "0.0001",
      },
    ];

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
