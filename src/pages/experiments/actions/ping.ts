import type { WalletAdapterProps } from "@solana/wallet-adapter-base";
import type { Connection } from "@solana/web3.js";
import {
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { logger } from "@utils/logger";

const PROGRAM_ADDRESS = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
const PROGRAM_DATA_ADDRESS = "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";

export const pingProgram = async (
  connection: Connection,
  sendTransaction: WalletAdapterProps["sendTransaction"]
): Promise<void> => {
  const recentBlockhash = await connection.getLatestBlockhash();
  const programId = new PublicKey(PROGRAM_ADDRESS);
  const programDataAccount = new PublicKey(PROGRAM_DATA_ADDRESS);
  const transaction = new Transaction({
    recentBlockhash: recentBlockhash.blockhash,
  });

  const instruction = new TransactionInstruction({
    keys: [
      {
        pubkey: programDataAccount,
        isSigner: false,
        isWritable: true,
      },
    ],
    programId,
  });

  transaction.add(instruction);

  await sendTransaction(transaction, connection).then((sig) => {
    logger.info(
      `You can view your transaction on the Solana Explorer at:\nhttps://explorer.solana.com/tx/${sig}?cluster=devnet`
    );
  });
};
