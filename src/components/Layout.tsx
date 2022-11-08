import type { FC } from "react";
import React from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";

import { useWallet } from "@solana/wallet-adapter-react";
import { Layout } from "antd";
import styled from "styled-components";

import type { ThemedProps } from "../typings";

const { Header, Footer, Sider, Content } = Layout;

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  height: 100%;
`;

const NavigationBar = styled.div`
  align-items: stretch;
  display: grid;
  grid-gap: 16px;
  grid-template-rows: repeat(auto-fill, 48px);
  justify-items: stretch;
  padding: 60px 24px;
`;

const NavigationButton = styled.span`
  align-items: center;
  border: 2px solid ${(props: ThemedProps) => props.theme.borders.button};
  border-radius: 8px;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const LayoutComponent: FC = () => {
  const { connected } = useWallet();

  if (!connected) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <Sider>Sider</Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Layout;
