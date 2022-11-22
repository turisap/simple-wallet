import type { FC } from "react";
import React from "react";

import styled from "styled-components";

import type { Movie } from "./actions/movieLayout";

export interface Props {
  movie: Movie;
}

const MovieContainer = styled.div`
  color: ${({ theme }) => theme.text.plate};
  display: grid;
  grid-template-columns: 1fr 20px;
  grid-template-rows: 1fr 1fr;
`;

export const MovieCard: FC<Props> = (props) => {
  return (
    <MovieContainer>
      <div>{props.movie.title}</div>
      <div>{props.movie.rating}</div>
    </MovieContainer>
  );
};

export default MovieCard;
