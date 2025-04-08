declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEBUG: number,
      PORT: number,

      LOGGER_APP: string,

      DB_TYPE: "mysql" | "postgres" | "mariadb" | "sqlite" | "oracle" | "mssql" | "mongodb" | "aurora-mysql" | "aurora-postgres" | "better-sqlite3",
      DB_HOST: string,
      DB_PORT: number,
      DB_USERNAME: string,
      DB_PASSWORD: string,
      DB_NAME: string,

      FRONT_END_URL: string,

      ADMIN_EMAIL: string,
      ADMIN_PASSWORD: string,

      AUTH_JWT_SECRET: string,
      AUTH_JWT_EXPIRES_IN: number,
      AUTH_REFRESH_JWT_SECRET: string,
      AUTH_REFRESH_JWT_EXPIRES_IN: number,

      SMTP_HOST: string,
      SMTP_PORT: number,
      SMTP_USERNAME: string,
      SMTP_PASSWORD: string,
      SMTP_IGNORE_TLS: boolean,
      SMTP_SECURE: boolean,
      SMTP_DEFAULT_FROM_EMAIL: string,
      SMTP_DEFAULT_FROM_NAME: string,

      CLOUDINARY_CLOUD_NAME: string,
      CLOUDINARY_API_KEY: string,
      CLOUDINARY_API_SECRET: string,
      CLOUDINARY_FOLDER: string
    }
  }
}

export { };