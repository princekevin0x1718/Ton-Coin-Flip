declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_APP_URL?: string
        NEXT_PUBLIC_TWA_URL?: string
        NEXT_PUBLIC_TONCONNECT_MANIFEST_URL?: string
        BOT_SECRET_TOKEN?: string
        POSTGRES_HOST?: string
        POSTGRES_PORT?: string
        POSTGRES_PASSWORD?: string
        POSTGRES_USER?: string
        POSTGRES_DB?: string
        APP_ENV?: string
        SCRIPTS_API_KEY?: string
        NEXT_PUBLIC_CONTRACT_ADDRESS?: string
        NEXT_PUBLIC_CHAIN_ID?: number
      }
    }
  }
}
