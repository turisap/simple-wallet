import type { FC, HTMLAttributes } from "react";
import React from "react";

import type { TokenLogoProps } from "@styled/components";
import { LogoStyled } from "@styled/components";

export const TokenLogo: FC<TokenLogoProps & HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return <LogoStyled src={props.src} size={props.size} />;
};
