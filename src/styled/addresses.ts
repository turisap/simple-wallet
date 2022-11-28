import { alignCenter } from "@styled/layout";
import styled from "styled-components";

export const AddressesContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20px 48px 48px;
`;

export const AddressList = styled.div<{ isLoading: boolean }>`
  color: ${({ theme }) => theme.text.plate};
  display: grid;
  flex-grow: ${(props) => (props.isLoading ? 1 : 0)};
  grid-auto-rows: 24px;
  grid-column: 1 / -1;
  grid-template-columns: 1fr;
  margin-top: 50px;

  ${(props) => (props.isLoading ? alignCenter : "")}
`;

export const Address = styled.div`
  align-items: center;
  border-top: 1px dashed ${({ theme }) => theme.text.plate};
  display: grid;
  font-weight: 600;
  grid-gap: 8px;
  grid-template-columns: 100px 1fr;
`;
