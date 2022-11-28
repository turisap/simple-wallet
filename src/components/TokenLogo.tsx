import type { FC, HTMLAttributes } from "react";
import React from "react";

import styled from "styled-components";

const LogoStyled = styled.img<Props>`
  border-radius: 50%;
  grid-row: 1 / -1;
  height: ${(props) => (props.size ? `${props.size}px` : "50px")};
  width: ${(props) => (props.size ? `${props.size}px` : "50px")};

  &:not([src]) {
    content: url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
  }
`;

type Props = {
  src?: string;
  size?: number;
};

export const TokenLogo: FC<Props & HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return <LogoStyled src={props.src} size={props.size} />;
};
