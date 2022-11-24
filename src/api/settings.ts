import { Connection } from "@solana/web3.js";
import { singleton } from "tsyringe";

import { RemoteConfigService } from "./remoteConfigService";

// @FIXME rename to connection
@singleton()
export class Settings {
  private _connection: Connection | undefined;

  constructor(private _remoteConfig: RemoteConfigService) {}

  public async getConnection(): Promise<Connection> {
    if (this._connection) {
      return this._connection;
    }

    const rpcNode = await this._remoteConfig.getKey("RPC_ENDPOINT");
    this._connection = new Connection(rpcNode.asString());

    return this._connection;
  }
}
