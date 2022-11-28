import { WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import styled, { css } from "styled-components";

export const hoverBackground = css`
  background: ${(props) => props.theme.primary};
`;

export const hoverGradient = css`
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

export const Button = styled.button`
  align-items: center;
  background: ${(props) => props.theme.backgrounds.button as string};
  border: none;
  border-radius: 16px;
  color: ${(props) => props.theme.text.button};
  display: flex;
  font-weight: 600;
  height: 100%;
  justify-content: center;

  &:hover {
    color: ${(props) => props.theme.text.buttonHover};
    cursor: pointer;
    ${hoverBackground}
  }
`;

export const alignCenter = css`
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.text.plate};
  font-size: 20px;
  grid-column: 1 / -1;
`;

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: calc(100vh - 160px);
  max-width: 850px;
  padding: 100px 60px 60px;
`;

export const NavigationBar = styled.div`
  align-items: stretch;
  display: grid;
  grid-gap: 16px;
  grid-template-rows: repeat(auto-fill, 48px);
  justify-items: stretch;
`;

export const NavigationButton = styled(Button)<{ isActive: boolean }>`
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

export const StyledDisconnectButton = styled(WalletDisconnectButton)`
  background: ${(props) => props.theme.backgrounds.button};
  border-radius: 16px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
`;
