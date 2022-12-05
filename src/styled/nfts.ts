import styled from "styled-components";

export const NftsPageContainer = styled.div<{ isLoading: boolean }>`
  align-items: center;
  display: ${(props) => (props.isLoading ? "flex" : "grid")};
  font-size: 20px;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 170px));
  grid-template-rows: 1fr;
  height: ${(props) => (props.isLoading ? "100%" : "unset")};
  justify-content: ${(props) => (props.isLoading ? "center" : "unset")};
  justify-items: stretch;
`;

export const NftPlate = styled.div`
  align-self: stretch;
  border: 1px solid ${(props) => props.theme.borders.plate};
  border-radius: ${(props) => props.theme.radius.plate};
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const NftPreview = styled.img`
  max-width: 100%;
`;

export const NftName = styled.div`
  color: ${(props) => props.theme.text.plate};
  overflow: hidden;
  padding: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
