import type { FC, MouseEvent } from "react";
import React, { useState } from "react";

import { useWallet } from "@solana/wallet-adapter-react";
import { AddressesStore } from "@stores/addressesStore";
import { Button } from "@styled/layout";
import { AddressLayout } from "@utils/addressLayout";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { container } from "tsyringe";

import { MAX_ADDRESS_TITLE_LENGTH } from "../../constants";

const AddressesContainer = styled.div`
  display: grid;
  grid-auto-rows: 48px;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
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

export const Addresses: FC = observer(() => {
  const [title, setTitle] = useState<string>("");
  const [addressHex, setAddressHex] = useState<string>("");
  const { sendTransaction, connected, publicKey } = useWallet();
  const addressStore = container.resolve(AddressesStore);

  const submitForm = (e: MouseEvent) => {
    e.preventDefault();

    if (!connected) {
      throw new Error("Please connect your wallet");
    }

    if (!publicKey) {
      throw new Error("Please connect your wallet");
    }

    const address = new AddressLayout(title, addressHex);

    void addressStore.handleAddressSubmit(address, publicKey, sendTransaction);
  };

  return (
    <AddressesContainer>
      <Heading>Experiments</Heading>
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
      <Button onClick={submitForm}>Submit</Button>
    </AddressesContainer>
  );
});

export default Addresses;