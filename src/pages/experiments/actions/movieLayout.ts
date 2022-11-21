import type { Layout } from "@project-serum/borsh";
import { str, struct, u8 } from "@project-serum/borsh";

const INITIAL_BUFFER_SIZE = 1000;

/* eslint-disable @typescript-eslint/explicit-member-accessibility */
export class Movie {
  title: string;
  rating: number;
  description: string;

  constructor(title: string, rating: number, description: string) {
    this.title = title;
    this.rating = rating;
    this.description = description;
  }

  borshInstructionSchema: Layout<Movie> = struct([
    u8("variant"),
    str("title"),
    u8("rating"),
    str("description"),
  ]) as Layout<Movie>;

  public serialize(): Buffer {
    const buffer = Buffer.alloc(INITIAL_BUFFER_SIZE);

    this.borshInstructionSchema.encode({ ...this, variant: 0 }, buffer);

    return buffer.slice(0, this.borshInstructionSchema.getSpan(buffer));
  }
}
/* eslint-enable @typescript-eslint/explicit-member-accessibility */
