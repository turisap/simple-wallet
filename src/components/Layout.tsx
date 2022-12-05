import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletStore } from "@stores/walletStore";
import {
  Cluster,
  ContentContainer,
  LayoutContainer,
  NavigationButton,
  NavigationMenu,
  StyledDisconnectButton,
  TopBar,
} from "@styled/layout";
import { logger } from "@utils/logger";
import { container } from "tsyringe";

export const LayoutComponent: FC = () => {
  const { connected } = useWallet();
  const [cluster, setCluster] = useState<string>("");
  const location = useLocation();
  const links = ["/wallet", "/NFTs", "/addresses", "/send", "/receive"];
  const walletStore = container.resolve(WalletStore);

  useEffect(() => {
    walletStore.getCluster().then(setCluster).catch(logger.error);
  }, []);

  if (!connected) {
    return <Navigate to={"/"} state={{ redirectTo: location.pathname }} />;
  }

  return (
    <LayoutContainer>
      <TopBar>
        <Cluster>{cluster}</Cluster>
      </TopBar>
      <NavigationMenu>
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
      </NavigationMenu>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};
