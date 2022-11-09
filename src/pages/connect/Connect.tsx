import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { Watch } from "react-loader-spinner";
import { Navigate } from "react-router-dom";

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

export const Connect: FC = () => {
  const [loading, setLoading] = useState(true);
  const { connected, connecting } = useWallet();

  useEffect(() => {
    const id = setTimeout(setLoading, 500, false);

    return () => clearTimeout(id);
  }, []);

  if (connecting || loading) {
    return (
      <ConnectPage>
        <Watch
          height="80"
          width="80"
          radius="48"
          color={"#61e309"}
          visible={true}
        />
      </ConnectPage>
    );
  }

  if (connected && !loading) {
    return <Navigate to="/wallet" />;
  }

  return (
    <ConnectPage>
      <StyledConnectButton>CONNECT</StyledConnectButton>
    </ConnectPage>
  );
};
