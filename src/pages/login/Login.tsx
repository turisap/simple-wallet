import React, { FC } from "react";
import { WalletConnectButton } from "@solana/wallet-adapter-react-ui";

export const Login: FC = () => {
  return <WalletConnectButton disabled={false}>CONNECT</WalletConnectButton>;
};
