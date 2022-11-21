import type { FC, MouseEvent } from "react";
import React, { useState } from "react";

import { Movie } from "@pages/experiments/actions/movieLayout";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Button } from "@styled/layout";
import styled from "styled-components";

import { handleTransactionSubmit } from "./actions/movieReview";

const ExperimentsPageContainer = styled.div`
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

// @TODO don't forget this is on the DEVNET
export const Experiments: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const { connection } = useConnection();
  const { sendTransaction, connected, publicKey } = useWallet();

  const submitForm = (e: MouseEvent) => {
    e.preventDefault();

    if (!connected) {
      throw new Error("Please connect your wallet");
    }

    if (!publicKey) {
      throw new Error("Please connect your wallet");
    }

    const movie = new Movie(title, rating, description);

    void handleTransactionSubmit(movie, publicKey, sendTransaction, connection);
  };

  return (
    <ExperimentsPageContainer>
      <Heading>Experiments</Heading>
      <Input
        placeholder={"title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder={"rating"}
        value={rating}
        onChange={(e) => setRating(parseInt(e.target.value))}
      />
      <Input
        placeholder={"description"}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={submitForm}>Submit</Button>
    </ExperimentsPageContainer>
  );
};

export default Experiments;
