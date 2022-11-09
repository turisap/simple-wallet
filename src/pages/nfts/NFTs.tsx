import type { FC } from "react";
import React from "react";

import styled from "styled-components";

const NftsPageContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  justify-items: center;
`;

export const NFTs: FC = () => {
  return <NftsPageContainer>NFTs</NftsPageContainer>;
};

export default NFTs;
