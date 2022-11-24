import React, { lazy, Suspense, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LayoutComponent } from "@components/Layout";
import { Connect } from "@pages/connect/Connect";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { GlobalStyle } from "@styled/globalStyles";
import { theme } from "@styled/theme";
import { ThemeProvider } from "styled-components";

const Tokens = lazy(() => import("./pages/tokens"));
const NFTs = lazy(() => import("./pages/nfts"));
const Experiments = lazy(() => import("./pages/experiments/Experiments"));
const Addresses = lazy(() => import("./pages/addresses/Addresses"));

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

const AddressesPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <Addresses />
  </Suspense>
);

// @TODO save favourite addresses to PDA
// @TODO remove all index.ts
function App() {
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Connect />} />
              <Route element={<LayoutComponent />}>
                <Route path="wallet" element={<TokensPage />} />
                <Route path="NFTs" element={<NFTsPage />} />
                <Route path="addresses" element={<AddressesPage />} />
                <Route path="chain-experiments" element={<ExperimentsPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </WalletModalProvider>
      </WalletProvider>
    </ThemeProvider>
  );
}

export default App;
