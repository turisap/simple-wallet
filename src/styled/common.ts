import styled from "styled-components";

export const Input = styled.input`
  background: ${({ theme }) => theme.backgrounds.input};
  border: none;
  border-radius: ${({ theme }) => theme.radius.button};
  color: ${({ theme }) => theme.text.input};
  padding: 12px;

  &:focus {
    outline: none;
  }
`;

export const InputWithError = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 48px 16px;
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.text.error};
  margin-top: 6px;
`;
