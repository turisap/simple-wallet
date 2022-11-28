import type { FC } from "react";
import React from "react";
import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";

import { useWallet } from "@solana/wallet-adapter-react";
import {
  ContentContainer,
  LayoutContainer,
  NavigationBar,
  NavigationButton,
  StyledDisconnectButton,
} from "@styled/layout";

export const LayoutComponent: FC = () => {
  const { connected } = useWallet();
  const location = useLocation();
  const links = ["/wallet", "/NFTs", "/addresses", "/send", "/receive"];

  if (!connected) {
    return <Navigate to={"/"} state={{ redirectTo: location.pathname }} />;
  }

  return (
    <LayoutContainer>
      <NavigationBar>
        {links.map((link) => (
          <NavLink to={link} key={link}>
            {({ isActive }) => (
              <NavigationButton isActive={isActive}>
                {link.replace("/", "")}
              </NavigationButton>
            )}
          </NavLink>
        ))}
        <StyledDisconnectButton />
      </NavigationBar>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};
