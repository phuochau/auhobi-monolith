declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_GRAPHQL_URL: string,
      EXPO_GOOGLE_API_KEY: string
    }
  }
}

export { };