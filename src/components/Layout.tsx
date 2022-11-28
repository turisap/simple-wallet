import type { FC } from "react";
import React from "react";
import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { Button, hoverBackground, hoverGradient } from "@styled/layout";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: calc(100vh - 160px);
  max-width: 850px;
  padding: 100px 60px 60px;
`;

const NavigationBar = styled.div`
  align-items: stretch;
  display: grid;
  grid-gap: 16px;
  grid-template-rows: repeat(auto-fill, 48px);
  justify-items: stretch;
`;

const NavigationButton = styled(Button)<{ isActive: boolean }>`
  text-transform: capitalize;
  width: 100%;
  ${(props) =>
    props.isActive
      ? hoverGradient
      : `background: ${props.theme.backgrounds.button as string}`};

  &:hover {
    ${(props) => (props.isActive ? hoverGradient : hoverBackground)};
  }
`;

const StyledDisconnectButton = styled(WalletDisconnectButton)`
  background: ${(props) => props.theme.backgrounds.button};
  border-radius: 16px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
`;

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
