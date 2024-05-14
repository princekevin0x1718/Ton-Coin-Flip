import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

import config from "@/config"

import * as schema from "./schema"

let sslMode = false
if (process.env.APP_ENV === "prod") {
  sslMode = true
}

export const pool = new Pool({
  user: config.POSTGRES_USER,
  database: config.POSTGRES_DB,
  password: config.POSTGRES_PASSWORD,
  port: parseInt(config.POSTGRES_PORT, 10),
  host: config.POSTGRES_HOST,
  ssl: sslMode,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

export const db = drizzle(pool, { schema, logger: true })
