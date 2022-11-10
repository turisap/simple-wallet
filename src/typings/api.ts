import type { u64 } from "@saberhq/token-utils";
import type { AccountInfo, PublicKey } from "@solana/web3.js";
import type { Buffer } from "buffer";

export type AccountsInfoData = {
  pubkey: PublicKey;
  account: AccountInfo<Buffer>;
};

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

export type TokenAccountLayoutParsed = {
  mint: PublicKey;
  amount: u64;
};
