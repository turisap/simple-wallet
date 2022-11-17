declare const __DEVELOPMENT__: boolean;
declare const __PRODUCTION__: boolean;

declare namespace NodeJS {
  interface ProcessEnv {
    REMOTE_CONFIG_API_KEY: string;
    REMOTE_CONFIG_APP_ID: string;
  }
}

declare module "*.png" {
  const value: string;
  export default value;
}
