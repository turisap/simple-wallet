import { PublicKey } from "@solana/web3.js";
import { BinaryReader, BinaryWriter } from "borsh";

const ARRAY_SIZE = 32;

/* eslint-disable @typescript-eslint/no-explicit-any */
export const extendBorsh = () => {
  (BinaryReader.prototype as any).readPubkey = function () {
    const reader = this as unknown as BinaryReader;
    const array = reader.readFixedArray(ARRAY_SIZE);

    return new PublicKey(array);
  };

  (BinaryWriter.prototype as any).writePubkey = function (value: PublicKey) {
    const writer = this as unknown as BinaryWriter;
    writer.writeFixedArray(value.toBuffer());
  };
};
/* eslint-enable @typescript-eslint/no-explicit-any */
