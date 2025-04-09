declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_REST_URL: string,
      EXPO_PUBLIC_GRAPHQL_URL: string,
      EXPO_PUBLIC_GOOGLE_API_KEY: string,
      EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID: string,
      EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID: string,
      EXPO_PUBLIC_SENTRY_DSN: string
    }
  }
}

export { };