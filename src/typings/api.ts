import type { AccountInfo, PublicKey } from "@solana/web3.js";
import type { Buffer } from "buffer";

export type AccountsInfoData = {
  pubkey: PublicKey;
  account: AccountInfo<Buffer>;
};
