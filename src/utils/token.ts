import type { WalletSPLToken } from "@typings/general";
import BN from "bn.js";

export function lamportsToBalance(value: BN, decimals?: number): number {
  if (!decimals) {
    return 0;
  }

  const divisor = new BN(10).pow(new BN(decimals));
  const quotient = value.div(divisor);

  const remainder = value.mod(divisor);

  return quotient.toNumber() + remainder.toNumber() / divisor.toNumber();
}

export function compareTokens(a: WalletSPLToken, b: WalletSPLToken) {
  const aN = a.amount.toNumber();
  const bN = b.amount.toNumber();

  if (aN > bN) return -1;

  if (bN > aN) return 1;

  return 0;
}
