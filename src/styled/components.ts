import styled from "styled-components";

export const PlateWrapper = styled.div`
  align-items: center;
  align-self: stretch;

  background: ${(props) => props.theme.backgrounds.plate};
  border-radius: ${(props) => props.theme.radius.plate};
  color: ${(props) => props.theme.text.plate};

  display: flex;
  flex-direction: column;
  grid-template-rows: 1fr;
  justify-content: center;
  justify-self: stretch;
  line-height: 1.4;
`;

export type TokenLogoProps = {
  src?: string;
  size?: number;
};

export const LogoStyled = styled.img<TokenLogoProps>`
  border-radius: 50%;
  grid-row: 1 / -1;
  height: ${(props) => (props.size ? `${props.size}px` : "50px")};
  width: ${(props) => (props.size ? `${props.size}px` : "50px")};

  &:not([src]) {
    content: url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
  }
`;

export const RowContainer = styled.div`
  background: ${(props) => props.theme.backgrounds.plate};
  border-radius: 16px;
  color: ${(props) => props.theme.text.plate};
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  grid-template-columns: 50px 1fr 145px;
  grid-template-rows: 1fr 1fr;
  padding: 16px;
`;

export const TokenUnits = styled.div`
  justify-self: flex-end;

  span:nth-child(2) {
    margin-left: 4px;
  }
`;

export const AmountUSD = styled.div`
  justify-self: flex-end;
`;
