import { Connection } from "@solana/web3.js";
import { singleton } from "tsyringe";

import { RemoteConfigService } from "./remoteConfigService";

@singleton()
export class Settings {
  public connection: Connection | undefined;

  constructor(private _remoteConfig: RemoteConfigService) {}

  public async getConnection(): Promise<Connection> {
    if (this.connection) {
      return this.connection;
    }

    const rpcNode = await this._remoteConfig.getKey("RPC_ENDPOINT");
    this.connection = new Connection(rpcNode.asString());

    return this.connection;
  }
}
