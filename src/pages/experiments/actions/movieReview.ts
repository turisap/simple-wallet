import type { WalletAdapterProps } from "@solana/wallet-adapter-base";
import type { Connection } from "@solana/web3.js";
import {
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { logger } from "@utils/logger";

import type { Movie } from "./movieLayout";

// @FIXME this is the original program id from the tutorial
// export const MOVIE_REVIEW_PROGRAM_ID =
//   "CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN";

export const MOVIE_REVIEW_PROGRAM_ID =
  "4nxUFajHdEJBJtnRx8joKZST6dTJDmtPec6dNrh8igcr";

export const handleTransactionSubmit = async (
  movie: Movie,
  publicKey: PublicKey,
  sendTransaction: WalletAdapterProps["sendTransaction"],
  connection: Connection
): Promise<void> => {
  const buffer = movie.serialize();
  const transaction = new Transaction();

  const [pda] = await PublicKey.findProgramAddress(
    [publicKey.toBuffer(), Buffer.from(movie.title)],
    new PublicKey(MOVIE_REVIEW_PROGRAM_ID)
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
    programId: new PublicKey(MOVIE_REVIEW_PROGRAM_ID),
  });

  transaction.add(instruction);

  try {
    const txId = await sendTransaction(transaction, connection);

    logger.info(
      `Transaction submitted: https://explorer.solana.com/tx/${txId}?cluster=devnet`
    );
  } catch (e) {
    alert(JSON.stringify(e));
  }
};
