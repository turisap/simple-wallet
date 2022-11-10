import type { FC, HTMLAttributes } from "react";
import React from "react";

import styled from "styled-components";

const LogoStyled = styled.img`
  border-radius: 50%;
  grid-row: 1 / -1;
  height: 50px;
  width: 50px;

  &:not([src]) {
    content: url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
  }
`;

type Props = {
  src?: string;
};

export const TokenLogo: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  src,
}) => {
  return <LogoStyled src={src} />;
};
