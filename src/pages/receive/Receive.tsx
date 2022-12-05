import type { FC } from "react";
import React from "react";

import { useWallet } from "@solana/wallet-adapter-react";
import { ReceiveContainer } from "@styled/receive";
import QRCode from "qrcode.react";

export const Receive: FC = () => {
  const { publicKey } = useWallet();

  if (!publicKey) {
    return <h2>No wallet connected</h2>;
  }

  return (
    <ReceiveContainer>
      <QRCode value={publicKey?.toBase58()} size={300} />
    </ReceiveContainer>
  );
};

export default Receive;
