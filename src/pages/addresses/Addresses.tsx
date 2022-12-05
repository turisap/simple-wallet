import type { FC, MouseEvent } from "react";
import React, { useCallback, useEffect, useState } from "react";

import Loader from "@components/Loader";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import { AddressesStore } from "@stores/addressesStore";
import { Address, AddressesContainer, AddressList } from "@styled/addresses";
import { Input } from "@styled/common";
import { Button, Heading } from "@styled/layout";
import { AddressLayout } from "@utils/addressLayout";
import { logger } from "@utils/logger";
import throttle from "lodash.throttle";
import { observer } from "mobx-react-lite";
import { container } from "tsyringe";

import { MAX_ADDRESS_TITLE_LENGTH, THROTTLE_SEARCH } from "../../constants";

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
      throw new WalletNotConnectedError();
    }

    if (!publicKey) {
      throw new WalletNotConnectedError();
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
