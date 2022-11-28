import type { StylesConfig } from "react-select";

import { Button } from "@styled/layout";
import type { TokenOption } from "@typings/wallet";
import styled from "styled-components";

export const ContentContainer = styled.div`
  align-items: stretch;
  display: grid;
  grid-gap: 28px;
  grid-template-columns: 70px 1fr;
  grid-template-rows: 20px repeat(3, 48px) 60px;
`;

export const Maxbutton = styled(Button)`
  height: 48px;
`;

export const FormText = styled.div`
  align-self: center;
  color: ${({ theme }) => theme.text.plate};
`;

export const Option = styled.div`
  display: flex;
  padding: 12px;

  &:hover {
    background: ${({ theme }) => theme?.primary};
    cursor: pointer;
  }
`;

export const Amount = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 60px;
`;

export const OptionLabel = styled.div`
  color: ${({ theme }) => theme.text.plate};
  margin-left: 12px;
`;

export const SendButton = styled(Button)`
  align-self: end;
  grid-column: 2 / 3;
  height: 48px;

  &:disabled {
    background: ${(props) => props.theme.backgrounds.disabled};
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const styles: StylesConfig<TokenOption, false> = {
  control: (css) => ({
    ...css,
    boxShadow: "0 0 0 transparent",
    borderColor: "transparent",
    border: "none",
    height: "48px",
  }),
};
