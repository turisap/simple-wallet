import React, { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";
import { useWallet } from "@solana/wallet-adapter-react";
import { Navigate } from "react-router-dom";

const ConnectPage = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  background: ${(props) => props.theme.background};
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
