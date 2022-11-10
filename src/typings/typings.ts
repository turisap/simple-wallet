import type { TokenInfo } from "@solana/spl-token-registry";
import type { TokenAccountLayoutParsed } from "@typings/api";
import type { ThemedStyledProps } from "styled-components";

import type { theme } from "../styled/theme";

export type ThemedProps<T = unknown> = ThemedStyledProps<T, typeof theme>;

export type WalletSPLToken = TokenInfo & TokenAccountLayoutParsed;
