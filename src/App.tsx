import React, { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { Connect } from "./pages/connect/Connect";
import { theme } from "./styled/theme";
import { ThemeProvider } from "styled-components";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import "@solana/wallet-adapter-react-ui/styles.css";
import "reset-css";
import "./index.css";

function App() {
  const network = WalletAdapterNetwork.Mainnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    [network]
  );

  // @TODO my eslint config
  // @TODO turbopack
  // @TODO lint style to ci
  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Connect />} />
                <Route path="wallet" element={<p>wallets</p>} />
                <Route path="tokens" element={<p>tokens</p>} />
              </Routes>
            </BrowserRouter>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
}

export default App;
