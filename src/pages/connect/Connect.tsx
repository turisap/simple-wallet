import type { FC } from "react";
import React from "react";
import { Navigate } from "react-router-dom";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";

import type { ThemedProps } from "../../typings";

const ConnectPage = styled.div`
  align-items: center;
  background: ${(props: ThemedProps) => props.theme.background};
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const Connect: FC = () => {
  const { connected } = useWallet();

  if (connected) {
    return <Navigate to="/wallet" />;
  }

  return (
    <ConnectPage>
      <WalletMultiButton>CONNECT</WalletMultiButton>
    </ConnectPage>
  );
};
