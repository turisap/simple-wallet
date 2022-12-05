import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import Loader from "@components/Loader";
import { useWallet } from "@solana/wallet-adapter-react";
import { ConnectPage, StyledConnectButton } from "@styled/connect";

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
    return <Navigate to={state?.redirectTo || "/wallet"} />;
  }

  return (
    <ConnectPage>
      <StyledConnectButton>CONNECT</StyledConnectButton>
    </ConnectPage>
  );
};
