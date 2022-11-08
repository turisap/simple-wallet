import type { FC } from "react";
import React from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";

import { useWallet } from "@solana/wallet-adapter-react";
import styled, { css } from "styled-components";

import type { ThemedProps } from "../typings";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  height: 100%;
  padding: 100px 60px;
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

const NavigationButton = styled.span<ThemedProps<{ isActive: boolean }>>`
  align-items: center;
  ${(props) =>
    props.isActive
      ? gradient
      : `background: ${props.theme.backgrounds.button}`};
  border-radius: 16px;
  color: ${(props: ThemedProps) => props.theme.text.button};
  display: flex;
  font-weight: 600;
  height: 100%;
  justify-content: center;

  &:hover {
    background: ${(props: ThemedProps) => props.theme.primary};
    color: ${(props: ThemedProps) => props.theme.text.buttonHover};
    cursor: pointer;
  }
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
      </NavigationBar>
      <Outlet />
    </LayoutContainer>
  );
};
