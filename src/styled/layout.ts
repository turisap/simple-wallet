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
