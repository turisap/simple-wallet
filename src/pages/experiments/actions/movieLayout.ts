/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import type { Layout } from "@project-serum/borsh";
import * as borsh from "@project-serum/borsh";
import { logger } from "@utils/logger";

const INITIAL_BUFFER_SIZE = 1000;

export class Movie {
  title: string;
  rating: number;
  description: string;

  constructor(title: string, rating: number, description: string) {
    this.title = title;
    this.rating = rating;
    this.description = description;
  }

  borshInstructionSchema = borsh.struct([
    borsh.u8("variant"),
    borsh.str("title"),
    borsh.u8("rating"),
    borsh.str("description"),
  ]) as Layout<Movie>;

  static borshAccountSchema = borsh.struct([
    borsh.bool("initialized"),
    borsh.u8("rating"),
    borsh.str("title"),
    borsh.str("description"),
  ]) as Layout<Movie>;

  public serialize(): Buffer {
    const buffer = Buffer.alloc(INITIAL_BUFFER_SIZE);

    this.borshInstructionSchema.encode({ ...this, variant: 0 }, buffer);

    return buffer.slice(0, this.borshInstructionSchema.getSpan(buffer));
  }

  static deserialize(buffer?: Buffer): Movie | null {
    if (!buffer) {
      return null;
    }

    try {
      const { title, rating, description } =
        Movie.borshAccountSchema.decode(buffer);

      return new Movie(title, rating, description);
    } catch (error) {
      logger.error("Deserialization error:", error);

      return null;
    }
  }
}

/* eslint-enable @typescript-eslint/explicit-member-accessibility */
