import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import type { AccountsInfoData } from "@typings/api";
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
