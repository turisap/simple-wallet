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
