import { u64 } from "@saberhq/token-utils";
import { AccountLayout } from "@solana/spl-token";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import type { AccountsInfoData, TokenAccountLayout } from "@typings/api";
import { BehaviorSubject, map } from "rxjs";

import { MAX_DECIMALS } from "../constants";

// Sol balance
export const rawBalance$ = new BehaviorSubject<number>(0);
export const solBalance$ = rawBalance$.pipe(
  map((balance) => `${balance / LAMPORTS_PER_SOL}`),
  map((sols) => parseFloat(sols).toFixed(MAX_DECIMALS))
);

// Tokens balances
export const rawTokens$ = new BehaviorSubject<AccountsInfoData[]>([]);
export const tokensNumber$ = rawTokens$.pipe(map((tokens) => tokens.length));
export const tokensInfo$ = rawTokens$.pipe(
  map((tokens) =>
    tokens.map(
      (token) => AccountLayout.decode(token.account.data) as TokenAccountLayout
    )
  ),
  map((accInfo: TokenAccountLayout[]) =>
    accInfo.map((acc) => ({
      amount: u64.fromBuffer(acc.amount),
      mint: new PublicKey(acc.mint).toString(),
    }))
  )
);
