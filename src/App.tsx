import React, { lazy, Suspense, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LayoutComponent } from "@components/Layout";
import { Connect } from "@pages/connect/Connect";
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
import { GlobalStyle } from "@styled/globalStyles";
import { theme } from "@styled/theme";
import { ThemeProvider } from "styled-components";

const Tokens = lazy(() => import("./pages/tokens"));
const NFTs = lazy(() => import("./pages/nfts"));

const TokensPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <Tokens />
  </Suspense>
);

const NFTsPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <NFTs />
  </Suspense>
);

// @TODO add loglevel
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
                  <Route path="wallet" element={<TokensPage />} />
                  <Route path="arts" element={<NFTsPage />} />
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
