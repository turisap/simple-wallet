import type { FC } from "react";
import React from "react";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { Button } from "@styled/layout";
import { logger } from "@utils/logger";
import styled from "styled-components";

const ExperimentsPageContainer = styled.div`
  display: grid;
  grid-auto-rows: 48px;
  grid-template-columns: 1fr 1fr;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.text.plate};
  font-size: 20px;
  grid-column: 1 / -1;
`;

const PROGRAM_ADDRESS = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
const PROGRAM_DATA_ADDRESS = "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";

// @TODO don't forget this is on the DEVNET

export const Experiments: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const pingProgram = async () => {
    if (!connection || !publicKey) {
      return;
    }

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

  return (
    <ExperimentsPageContainer>
      <Heading>Experiments</Heading>
      <Button
        onClick={() => {
          void pingProgram();
        }}
      >
        Ping On-chain Program
      </Button>
    </ExperimentsPageContainer>
  );
};

export default Experiments;
