import type { FC, MouseEvent } from "react";
import React, { useEffect, useState } from "react";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { Button } from "@styled/layout";
import { logger } from "@utils/logger";
import * as base58 from "bs58";
import styled from "styled-components";

import { Movie } from "./actions/movieLayout";
import {
  handleTransactionSubmit,
  MOVIE_REVIEW_PROGRAM_ID,
} from "./actions/movieReview";

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

export const Addresses: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState<string>("sol");
  const [description, setDescription] = useState<string>("");
  const { connection } = useConnection();
  const { sendTransaction, connected, publicKey } = useWallet();

  useEffect(() => {
    connection
      .getProgramAccounts(new PublicKey(MOVIE_REVIEW_PROGRAM_ID), {
        dataSlice: { offset: 2, length: 18 },
        filters: [
          {
            memcmp: {
              offset: 6,
              bytes: base58.encode(Buffer.from(search)),
            },
          },
        ],
      })

      .then((paginatedKeys) => {
        console.log(paginatedKeys);

        return connection.getMultipleAccountsInfo(
          paginatedKeys.map((k) => k.pubkey)
        );
      })
      .then((accounts) => {
        const movieAccounts = accounts
          .map((acc) => {
            return Movie.deserialize(acc?.data);
          })
          .filter(function (movie: Movie | null): movie is Movie {
            return Boolean(movie);
          });

        setMovies(movieAccounts);
      })
      .catch(logger.error);
  }, [search]);

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
      <Input
        placeholder={"search"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </ExperimentsPageContainer>
  );
};

export default Addresses;
