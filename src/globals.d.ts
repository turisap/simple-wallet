declare const __DEVELOPMENT__: boolean;
declare const __PRODUCTION__: boolean;
declare const __LOGLEVEL__: LogLevelDesc | undefined;

declare namespace NodeJS {
  interface ProcessEnv {
    REMOTE_CONFIG_API_KEY: string;
    REMOTE_CONFIG_APP_ID: string;
    GOOGLE_TRACKING_ID: string;
  }
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "ga-gtag" {
  function install(val: string): void;
  export { install };
}
