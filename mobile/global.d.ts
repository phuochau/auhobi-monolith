declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_GRAPHQL_URL: string
    }
  }
}

export { };