import type { ThemedStyledProps } from "styled-components";

import type { theme } from "../styled/theme";

export type ThemedProps<T = unknown> = ThemedStyledProps<T, typeof theme>;
