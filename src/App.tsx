import "@solana/wallet-adapter-react-ui/styles.css";
import "reset-css";

import React, { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { ThemeProvider } from "styled-components";

import { LayoutComponent } from "./components";
import { Connect } from "./pages/connect/Connect";
import { GlobalStyle } from "./styled/globalStyles";
import { theme } from "./styled/theme";

function App() {
  const network = WalletAdapterNetwork.Mainnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    [network]
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect={true}>
          <WalletModalProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Connect />} />
                <Route element={<LayoutComponent />}>
                  <Route path="wallet">
                    <Route index element={<p>tokens</p>} />
                    <Route path="art" element={<p>NFTs</p>} />
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
}

export default App;
