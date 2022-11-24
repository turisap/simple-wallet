import type { WalletAdapterProps } from "@solana/wallet-adapter-base";
import type { Connection } from "@solana/web3.js";
import {
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import type { AddressLayout } from "@utils/addressLayout";
import { logger } from "@utils/logger";
import { singleton } from "tsyringe";

import { RemoteConfigService } from "./remoteConfigService";
import { Settings } from "./settings";

@singleton()
export class AddressService {
  constructor(
    private _settings: Settings,
    private _remoteConfig: RemoteConfigService
  ) {}

  public async submitAddress(
    address: AddressLayout,
    publicKey: PublicKey,
    sendTransaction: WalletAdapterProps["sendTransaction"],
    connection: Connection
  ): Promise<boolean> {
    const buffer = address.serialize();
    const addressProgramId = await this._remoteConfig.getKey(
      "ADDRESS_PROGRAM_ID"
    );

    const transaction = new Transaction();

    const [pda] = await PublicKey.findProgramAddress(
      [publicKey.toBuffer(), Buffer.from(address.title)],
      new PublicKey(addressProgramId.asString())
    );

    const instruction = new TransactionInstruction({
      keys: [
        {
          pubkey: publicKey,
          isSigner: true,
          isWritable: false,
        },
        {
          pubkey: pda,
          isSigner: false,
          isWritable: true,
        },
        {
          pubkey: SystemProgram.programId,
          isSigner: false,
          isWritable: false,
        },
      ],
      data: buffer,
      programId: new PublicKey(addressProgramId.asString()),
    });

    transaction.add(instruction);

    try {
      const txId = await sendTransaction(transaction, connection);

      logger.info(
        `Transaction submitted: https://explorer.solana.com/tx/${txId}?cluster=custom&customUrl=http%3A%2F%2Flocalhost%3A8899`
      );

      return true;
    } catch (e) {
      logger.error(e);

      return false;
    }
  }
}
