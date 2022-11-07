import React, { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { Login } from "./pages/login/Login";
import { theme } from "./styled/theme";
import { ThemeProvider } from "styled-components";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

function App() {
  const network = WalletAdapterNetwork.Mainnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="wallet" element={<p>wallets</p>} />
              <Route path="tokens" element={<p>tokens</p>} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
