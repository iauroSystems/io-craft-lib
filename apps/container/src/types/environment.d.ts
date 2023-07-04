

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NX_BASE_URL: string;
      NX_DATA_FLOW_BASE_URL: string;
      NX_CONNECTOR_BASE_URL: string;
    }
  }
}

export {};