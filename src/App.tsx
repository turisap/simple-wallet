import React, { lazy, Suspense, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LayoutComponent } from "@components/Layout";
import { Connect } from "@pages/connect/Connect";
import Experiments from "@pages/experiments/Experiments";
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

const ExperimentsPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <Experiments />
  </Suspense>
);

// @TODO function return type
// @TODO save favourite addresses to PDA
function App() {
  const network = WalletAdapterNetwork.Devnet;

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
                  <Route path="nfts" element={<NFTsPage />} />
                  <Route
                    path="chain-experiments"
                    element={<ExperimentsPage />}
                  />
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
