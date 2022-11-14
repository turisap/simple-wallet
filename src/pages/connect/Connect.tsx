import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import Loader from "@components/Loader";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";

const ConnectPage = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const StyledConnectButton = styled(WalletMultiButton)`
  background: ${(props) => props.theme.primary};
  border-radius: 16px;
`;

type AuthState = {
  redirectTo: string;
};

export const Connect: FC = () => {
  const [loading, setLoading] = useState(true);
  const { connected, connecting } = useWallet();
  const location = useLocation();
  const state = location.state as AuthState;

  useEffect(() => {
    const id = setTimeout(setLoading, 500, false);

    return () => clearTimeout(id);
  }, []);

  if (connecting || loading) {
    return (
      <ConnectPage>
        <Loader />
      </ConnectPage>
    );
  }

  if (connected && !loading) {
    return <Navigate to={state.redirectTo} />;
  }

  return (
    <ConnectPage>
      <StyledConnectButton>CONNECT</StyledConnectButton>
    </ConnectPage>
  );
};
