declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GRAPHQL_URL: string,
      SESSION_NAME: string,
      SESSION_SECRET: string,
      SESSION_EXPIRES_AT: number
    }
  }
}

export { };