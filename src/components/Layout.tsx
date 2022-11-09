import type { FC } from "react";
import React from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import styled, { css } from "styled-components";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  height: 100%;
  padding: 100px 60px 20px;
`;

const NavigationBar = styled.div`
  align-items: stretch;
  display: grid;
  grid-gap: 16px;
  grid-template-rows: repeat(auto-fill, 48px);
  justify-items: stretch;
`;

const gradient = css`
  /* stylelint-disable */
  background: repeating-linear-gradient(
    45deg,
    #121214,
    #121214 1px,
    #61e309 1px,
    #61e309 30px
  );
  /* stylelint-enable */
`;

const hover = css`
  background: ${(props) => props.theme.primary};
`;

const NavigationButton = styled.span<{ isActive: boolean }>`
  align-items: center;
  ${(props) =>
    props.isActive
      ? gradient
      : `background: ${props.theme.backgrounds.button}`};
  border-radius: 16px;
  color: ${(props) => props.theme.text.button};
  display: flex;
  font-weight: 600;
  height: 100%;
  justify-content: center;

  &:hover {
    ${(props) => (props.isActive ? gradient : hover)};
    color: ${(props) => props.theme.text.buttonHover};
    cursor: pointer;
  }
`;

const StyledDisconnectButton = styled(WalletDisconnectButton)`
  background: ${(props) => props.theme.backgrounds.button};
  border-radius: 16px;
`;

const ContentContainer = styled.div`
  padding-left: 24px;
`;

export const LayoutComponent: FC = () => {
  const { connected } = useWallet();

  if (!connected) {
    return <Navigate to="/" />;
  }

  return (
    <LayoutContainer>
      <NavigationBar>
        <NavLink to={"/wallet"}>
          {({ isActive }) => (
            <NavigationButton isActive={isActive}>Wallet</NavigationButton>
          )}
        </NavLink>
        <NavLink to={"/arts"}>
          {({ isActive }) => (
            <NavigationButton isActive={isActive}>NFTs</NavigationButton>
          )}
        </NavLink>
        <StyledDisconnectButton />
      </NavigationBar>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};
