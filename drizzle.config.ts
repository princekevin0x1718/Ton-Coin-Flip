import type { Config } from "drizzle-kit"

import config from "@/config"

let sslMode = false
if (process.env.APP_ENV === "prod") {
  sslMode = true
}

const drizzleConfig: Config = {
  schema: "./src/services/drizzle/schema",
  out: "./db-migrations",
  driver: "pg",
  verbose: true,
  strict: true,
  dbCredentials: {
    host: config.POSTGRES_HOST,
    port: parseInt(config.POSTGRES_PORT, 10),
    user: config.POSTGRES_USER,
    password: config.POSTGRES_PASSWORD,
    database: config.POSTGRES_DB,
    ssl: sslMode,
  },
}

export default drizzleConfig
