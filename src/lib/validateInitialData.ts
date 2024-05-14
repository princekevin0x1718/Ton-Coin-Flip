import { validate } from "@tma.js/init-data-node"

import config from "@/config"

function validateInitialData(initialRawData: string) {
  validate(initialRawData, config.BOT_SECRET_TOKEN)
}

export default validateInitialData
