import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";

export const ConnectPage = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const StyledConnectButton = styled(WalletMultiButton)`
  background: ${(props) => props.theme.primary};
  border-radius: 16px;
`;
