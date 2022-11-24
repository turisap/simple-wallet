import type { WalletAdapterProps } from "@solana/wallet-adapter-base";
import {
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import type { Address, ProgramVariant } from "@typings/addresses";
import { AddressLayout } from "@utils/addressLayout";
import { logger } from "@utils/logger";
import * as bs58 from "bs58";
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
    variant: ProgramVariant
  ): Promise<boolean> {
    const buffer = address.serialize(variant);
    const connection = await this._settings.getConnection();
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
      const cluster = await this._remoteConfig.getKey("CLUSTER");

      logger.info(
        `Transaction submitted: https://explorer.solana.com/tx/${txId}?cluster=${cluster.asString()}&customUrl=http%3A%2F%2Flocalhost%3A8899`
      );

      return true;
    } catch (e) {
      logger.error(e);

      return false;
    }
  }

  public async getAddresses(): Promise<Address[]> {
    const connection = await this._settings.getConnection();
    const addressProgramId = await this._remoteConfig.getKey(
      "ADDRESS_PROGRAM_ID"
    );

    const programAccounts = await connection.getProgramAccounts(
      new PublicKey(addressProgramId.asString())
    );

    const addresses = programAccounts
      .map((acc) => {
        const deserializedAddressInfo = AddressLayout.deserialize(
          acc.account.data
        );

        if (deserializedAddressInfo) {
          return {
            title: deserializedAddressInfo.title,
            hex: deserializedAddressInfo.hex,
          };
        }

        return null;
      })
      .filter(function isAddress(val: Address | null): val is Address {
        return Boolean(val);
      });

    return addresses;
  }

  public async getFilteredAddresses(search: string): Promise<Address[]> {
    if (!search) {
      return this.getAddresses();
    }

    const connection = await this._settings.getConnection();
    const addressProgramId = await this._remoteConfig.getKey(
      "ADDRESS_PROGRAM_ID"
    );
    const programId = new PublicKey(addressProgramId.asString());

    const accounts = await connection.getProgramAccounts(programId, {
      dataSlice: { offset: 1, length: 18 },
      filters: [
        {
          memcmp: {
            offset: 5,
            bytes: bs58.encode(Buffer.from(search)),
          },
        },
      ],
    });

    const pubKeys = accounts.map((acc) => acc.pubkey);

    const filteredPDAs = await connection.getMultipleAccountsInfo(pubKeys);

    const favoriteAddresses = filteredPDAs.reduce<Address[]>((acc, curr) => {
      const favoriteAddress = AddressLayout.deserialize(curr?.data);

      if (favoriteAddress) {
        return [...acc, favoriteAddress];
      }

      return acc;
    }, []);

    return favoriteAddresses.map((a) => ({
      title: a.title,
      hex: a.hex,
    }));
  }
}
