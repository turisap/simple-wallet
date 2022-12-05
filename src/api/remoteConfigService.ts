import { initializeApp } from "firebase/app";
import type { RemoteConfig, Value } from "firebase/remote-config";
import {
  fetchAndActivate,
  getRemoteConfig,
  getValue,
} from "firebase/remote-config";
import { singleton } from "tsyringe";

const firebaseConfig = {
  apiKey: process.env.REMOTE_CONFIG_API_KEY,
  appId: process.env.REMOTE_CONFIG_APP_ID,
  authDomain: "small-wallet-523d5.firebaseapp.com",
  projectId: "small-wallet-523d5",
  storageBucket: "small-wallet-523d5.appspot.com",
  messagingSenderId: "234104916860",
  measurementId: "G-J2RW3QQW88",
};

type ConfigKeys =
  | "RPC_ENDPOINT"
  | "RATES_ENDPOINT"
  | "TOKEN_LIST_ENDPOINT"
  | "ADDRESS_PROGRAM_ID"
  | "CLUSTER";

@singleton()
export class RemoteConfigService {
  private readonly _remoteConfig: RemoteConfig;
  private _isReady = false;

  constructor() {
    initializeApp(firebaseConfig);

    this._remoteConfig = getRemoteConfig();

    if (__DEVELOPMENT__) {
      this._remoteConfig.settings.minimumFetchIntervalMillis = 1000;
    }
  }

  public async getKey(key: ConfigKeys): Promise<Value> {
    if (this._isReady) {
      return getValue(this._remoteConfig, key);
    }

    await fetchAndActivate(this._remoteConfig);
    this._isReady = true;

    return getValue(this._remoteConfig, key);
  }
}
