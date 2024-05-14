import { loadEnvConfig } from "@next/env"
import z from "zod"

const configSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string(),
  NEXT_PUBLIC_TWA_URL: z.string(),
  NEXT_PUBLIC_TONCONNECT_MANIFEST_URL: z.string(),
  BOT_SECRET_TOKEN: z.string(),
  POSTGRES_HOST: z.string(),
  POSTGRES_PORT: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_DB: z.string(),
  SCRIPTS_API_KEY: z.string(),
  NEXT_PUBLIC_CONTRACT_ADDRESS: z.string(),
  NEXT_PUBLIC_CHAIN_ID: z.string(),
})

const projectDir = process.cwd()

loadEnvConfig(projectDir)

// we use this config only server side
// use next public only in server side files - https://github.com/vercel/next.js/discussions/49481
// use process.env instead of this config
const config = {
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_TWA_URL: process.env.NEXT_PUBLIC_TWA_URL,
  NEXT_PUBLIC_TONCONNECT_MANIFEST_URL:
    process.env.NEXT_PUBLIC_TONCONNECT_MANIFEST_URL,
  BOT_SECRET_TOKEN: process.env.BOT_SECRET_TOKEN,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_DB: process.env.POSTGRES_DB,
  SCRIPTS_API_KEY: process.env.SCRIPTS_API_KEY,
  NEXT_PUBLIC_CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  NEXT_PUBLIC_CHAIN_ID: process.env.NEXT_PUBLIC_CHAIN_ID,
}

const parsedConfig = configSchema.parse(config)

export default parsedConfig
