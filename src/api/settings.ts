import { Connection } from "@solana/web3.js";
import { singleton } from "tsyringe";

@singleton()
export class Settings {
  public connection: Connection;

  constructor() {
    this.connection = new Connection(process.env.RPC_NODE);
  }
}
