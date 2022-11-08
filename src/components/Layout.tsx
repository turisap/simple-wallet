import type { FC } from "react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useWallet } from "@solana/wallet-adapter-react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr;
`;

export const Layout: FC = () => {
  const { connected } = useWallet();

  return connected ? (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  ) : (
    <Navigate to="/" />
  );
};

export default Layout;