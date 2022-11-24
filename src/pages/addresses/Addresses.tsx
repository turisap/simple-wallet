import type { FC, MouseEvent } from "react";
import React, { useCallback, useEffect, useState } from "react";

import Loader from "@components/Loader";
import { useWallet } from "@solana/wallet-adapter-react";
import { AddressesStore } from "@stores/addressesStore";
import { alignCenter, Button } from "@styled/layout";
import { AddressLayout } from "@utils/addressLayout";
import { logger } from "@utils/logger";
import throttle from "lodash.throttle";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { container } from "tsyringe";

import { MAX_ADDRESS_TITLE_LENGTH, THROTTLE_SEARCH } from "../../constants";

const AddressesContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20px 48px 48px;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.text.plate};
  font-size: 20px;
  grid-column: 1 / -1;
`;

const Input = styled.input`
  background: ${({ theme }) => theme.backgrounds.input};
  border: none;
  border-radius: ${({ theme }) => theme.radius.button};
  color: ${({ theme }) => theme.text.input};
  padding: 8px;
`;

const AddressList = styled.div<{ isLoading: boolean }>`
  color: ${({ theme }) => theme.text.plate};
  display: grid;
  flex-grow: ${(props) => (props.isLoading ? 1 : 0)};
  grid-auto-rows: 24px;
  grid-column: 1 / -1;
  grid-template-columns: 1fr;
  margin-top: 50px;

  ${(props) => (props.isLoading ? alignCenter : "")}
`;

const Address = styled.div`
  align-items: center;
  border-top: 1px dashed ${({ theme }) => theme.text.plate};
  display: grid;
  font-weight: 600;
  grid-gap: 8px;
  grid-template-columns: 100px 1fr;
`;

// @FRIDAY next delete addresses (PDA)

export const Addresses: FC = observer(() => {
  const [title, setTitle] = useState<string>("");
  const [addressHex, setAddressHex] = useState<string>("");
  const [search, setSearch] = useState("");
  const { sendTransaction, connected, publicKey } = useWallet();
  const addressStore = container.resolve(AddressesStore);
  const throttledCallback = useCallback(
    throttle((s: string) => addressStore.setSearch(s), THROTTLE_SEARCH),
    [addressStore]
  );

  useEffect(() => {
    void addressStore.load();
  }, []);

  useEffect(() => {
    void throttledCallback(search);
  }, [search]);

  const submitForm = (e: MouseEvent) => {
    e.preventDefault();

    if (!connected) {
      throw new Error("Please connect your wallet");
    }

    if (!publicKey) {
      throw new Error("Please connect your wallet");
    }

    const address = new AddressLayout(title, addressHex);

    addressStore
      .handleAddressSubmit(address, publicKey, sendTransaction)
      .catch(logger.error)
      .finally(() => {
        setTitle("");
        setAddressHex("");
      });
  };

  return (
    <>
      <AddressesContainer>
        <Heading>Addresses</Heading>
        <Input
          placeholder={"title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type={"text"}
          maxLength={MAX_ADDRESS_TITLE_LENGTH}
        />
        <Input
          placeholder={"address"}
          value={addressHex}
          onChange={(e) => setAddressHex(e.target.value)}
          type={"text"}
        />
        <Input
          placeholder={"search"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type={"text"}
        />
        <Button onClick={submitForm}>Submit</Button>
      </AddressesContainer>
      <AddressList isLoading={addressStore.isLoading}>
        {!addressStore.isLoading && <span>Address list</span>}
        {addressStore.isLoading && <Loader />}
        {!addressStore.isLoading &&
          Array.from(addressStore.addressesList.entries()).map(
            ([addressTitle, hex]) => (
              <Address key={hex}>
                <span>{addressTitle}</span>
                <span>{hex}</span>
              </Address>
            )
          )}
      </AddressList>
    </>
  );
});

export default Addresses;
