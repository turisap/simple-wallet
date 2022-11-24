/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import type { Layout } from "@project-serum/borsh";
import * as borsh from "@project-serum/borsh";
import { logger } from "@utils/logger";

const INITIAL_BUFFER_SIZE = 1000;

export class AddressLayout {
  title: string;
  hex: string;

  constructor(title: string, hex: string) {
    this.title = title;
    this.hex = hex;
  }

  borshInstructionSchema = borsh.struct([
    borsh.u8("variant"),
    borsh.str("title"),
    borsh.str("hex"),
  ]) as Layout<AddressLayout>;

  static borshAccountSchema = borsh.struct([
    borsh.bool("initialized"),
    borsh.str("title"),
    borsh.str("hex"),
  ]) as Layout<AddressLayout>;

  public serialize(): Buffer {
    const buffer = Buffer.alloc(INITIAL_BUFFER_SIZE);

    this.borshInstructionSchema.encode({ ...this, variant: 1 }, buffer);

    return buffer.slice(0, this.borshInstructionSchema.getSpan(buffer));
  }

  static deserialize(buffer?: Buffer): AddressLayout | null {
    if (!buffer) {
      return null;
    }

    try {
      const { title, hex } = AddressLayout.borshAccountSchema.decode(buffer);

      return new AddressLayout(title, hex);
    } catch (error) {
      logger.error("Deserialization error:", error);

      return null;
    }
  }
}
/* eslint-enable @typescript-eslint/explicit-member-accessibility */
