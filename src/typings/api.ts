import type { Buffer } from "buffer";

export type TokenAccountLayoutDecoded = {
  mint: Buffer;
  owner: Buffer;
  amount: Buffer;
  delegateOption: number;
  delegate: Buffer;
  state: number;
  delegatedAmount: Buffer;
  isNativeOption: number;
  isNative: Buffer;
  closeAuthorityOption: number;
  closeAuthority: Buffer;
};
