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

const Tokens = lazy(() => import("./pages/tokens/Tokens"));
const NFTs = lazy(() => import("./pages/nfts/NFTs"));
const Experiments = lazy(() => import("./pages/experiments/Experiments"));
const Addresses = lazy(() => import("./pages/addresses/Addresses"));
const Send = lazy(() => import("./pages/send/Send"));

const PageLoading = () => <div>Page is Loading..</div>;

const TokensPage = () => (
  <Suspense fallback={<PageLoading />}>
    <Tokens />
  </Suspense>
);

const NFTsPage = () => (
  <Suspense fallback={<PageLoading />}>
    <NFTs />
  </Suspense>
);

const ExperimentsPage = () => (
  <Suspense fallback={<PageLoading />}>
    <Experiments />
  </Suspense>
);

const AddressesPage = () => (
  <Suspense fallback={<PageLoading />}>
    <Addresses />
  </Suspense>
);

const SendPage = () => (
  <Suspense fallback={<PageLoading />}>
    <Send />
  </Suspense>
);

// @FRIDAY next delete addresses (PDA)
// @TODO DO SEND and receive
// @TODO DEPLOY to gh-pages
// @TODO polish code
// @TODO notifications
// @TODO move all styled to @styled

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
                <Route path="send" element={<SendPage />} />
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
