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
const Addresses = lazy(() => import("./pages/addresses/Addresses"));
const Send = lazy(() => import("./pages/send/Send"));
const Receive = lazy(() => import("./pages/receive/Receive"));

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

const ReceivePage = () => (
  <Suspense fallback={<PageLoading />}>
    <Receive />
  </Suspense>
);

// @TODO DO SEND
// @TODO polish code
// @TODO notifications

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
          <BrowserRouter basename={process.env.BASE_NAME}>
            <Routes>
              <Route path="/" element={<Connect />} />
              <Route element={<LayoutComponent />}>
                <Route path="wallet" element={<TokensPage />} />
                <Route path="receive" element={<ReceivePage />} />
                <Route path="NFTs" element={<NFTsPage />} />
                <Route path="send" element={<SendPage />} />
                <Route path="addresses" element={<AddressesPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </WalletModalProvider>
      </WalletProvider>
    </ThemeProvider>
  );
}

export default App;
