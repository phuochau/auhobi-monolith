require('dotenv').config()
import { DataSource, DataSourceOptions } from 'typeorm'

console.log(process.env)

export default new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  migrations: [
    __dirname + '/../migrations/*{.ts,.js}',
  ]
} as DataSourceOptions)