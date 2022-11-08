import React, { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";

const ConnectPage = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  background: ${(props) => props.theme.background};
`;

export const Connect: FC = () => {
  return (
    <ConnectPage>
      <WalletMultiButton>CONNECT</WalletMultiButton>
    </ConnectPage>
  );
};
