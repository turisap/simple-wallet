import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { BehaviorSubject, map } from "rxjs";

import { MAX_DECIMALS } from "../constants";

export const rawBalance$ = new BehaviorSubject<number>(0);

export const solBalance$ = rawBalance$.pipe(
  map((balance) => `${balance / LAMPORTS_PER_SOL}`),
  map((sols) => parseFloat(sols).toFixed(MAX_DECIMALS))
);
