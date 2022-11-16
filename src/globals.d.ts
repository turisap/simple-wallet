declare namespace NodeJS {
  interface ProcessEnv {
    RPC_NODE: string;
  }
}

declare module "*.png" {
  const value: string;
  export default value;
}
