import type { AccountInfo, PublicKey } from "@solana/web3.js";
import type { TokenAccountLayoutDecoded } from "@typings/api";
import type { CoinGeckoRate } from "@typings/wallet";
import type { ThemedStyledProps } from "styled-components";

import type { theme } from "../styled/theme";

export type ThemedProps<T = unknown> = ThemedStyledProps<T, typeof theme>;

export type RateMap = Map<string, CoinGeckoRate>;

export type Account = AccountInfo<{
  parsed: TokenAccountLayoutDecoded;
  pubKey: PublicKey;
}>;
