declare namespace NodeJS {
  interface ProcessEnv {
    RPC_NODE: string;
    RATES_ENDPOINT: string;
    TOKEN_LIST_ENDPOINT: string;
  }
}

declare module "*.png" {
  const value: string;
  export default value;
}
